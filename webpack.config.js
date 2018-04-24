'use strict';

var path = require('path');
var fs = require('fs');
var util = require('util');

var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var srcDir = path.resolve(process.cwd(), 'src');
var nodeModPath = path.resolve(__dirname, 'node_modules');
var assets = 'assets/';
var publicPath = '/'; // 发布路径，这里不用绝对路径的话css引用的图片最终路径会不对，生成的是url(css/imm/xx.png);
var pathMap = {
    'react': path.join(nodeModPath, '/react/dist/react.js'),
    'react-with-addons': path.join(nodeModPath, '/react/dist/react-with-addons.js'),
    'react-dom': path.join(nodeModPath, '/react-dom/dist/react-dom.js'),
};

var entries = (() => {
    var jsDir = path.resolve(srcDir, 'js/app')
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {}

    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map;
}());
var chunks = Object.keys(entries);

var extractCSS = new ExtractTextPlugin('css/[name].css?[chunkhash]');
var cssLoader = extractCSS.extract(['css']);
var jsxLoader = ['babel-loader'];

var plugins = [
    new CommonsChunkPlugin({
        names: ['common', 'vender'],
        minChunks: 2
    }),
    extractCSS,
    new webpack.optimize.DedupePlugin()
];

var entryHtml = glob.sync(srcDir + '/*.html');

entryHtml.forEach(function(filePath) {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    var conf = {
        template: filePath,
        filename: filename + '.html'
    };
    if(filename in entries) {
        conf.inject = 'body';
        conf.chunks = ['vender', 'common', filename];
    }
    plugins.push(new HtmlWebpackPlugin(conf));
});

var config = {
    entry: Object.assign(entries, {
        'vender': ['react', 'react-dom']
    }),

    output: {
        path: path.resolve(__dirname, assets),
        filename: 'js/[name].js?[hash]',
        chunkFilename: 'js/chunk-[chunkhash:8].js',
        publicPath: publicPath
    },

    resolve: {
        modulesDirectories: ['node_modules', srcDir],
        extensions: ['', '.js', '.css', '.scss', '.less', '.png', '.jpg','.gif'],
        alias: pathMap
    },

    module: {
        loaders: [
            {
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                loader: 'file?limit=10000&name=fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.css$/,
                loader: cssLoader
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: jsxLoader
            }
        ]
    },

    plugins: plugins
};
module.exports = config;
