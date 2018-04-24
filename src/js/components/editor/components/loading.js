import React from 'react';
import wrLoading from 'js/common/plugins/loading';
import Data from '../data';
import DevTools from 'js/common/plugins/DevTools'

var loading = React.createClass({
    shouldComponentUpdate:function(){
        return false;
    },
    componentDidMount:function(){
    	var preload = [
        	'images/tool.png',
        	'images/logo.png'
    	];
        var json = this.props.immujson.toJS();
    	var music = json.music;
    	var json = json.value;
    	var imgarr = this.unique(JSON.stringify(json).match(/[A-Za-z0-9-/:.]+[a-zA-Z0-9]+\.(png|jpg|gif|bmp)/g));
    	preload = preload.concat( imgarr );
		new wrLoading('#loading',preload,this.props.startHandle,true);
    },
	unique:function (arr) {
		var result = [];
		if(arr && arr.length > 0){
		    var hash = {};
		    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
		        if (!hash[elem]) {
		            result.push(elem);
		            hash[elem] = true;
		        }
		    }
	    }
	    return result;
	},
    render:function() {
        return false
    }
});

module.exports = loading;
