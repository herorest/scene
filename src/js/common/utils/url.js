/**
 * @fileOverview 定义对url进行处理的方法
 */

(function() {

    /**定义对url进行处理的方法
     *@namespace
     *@name MZ.url
     */
    MZ.namespace('MZ.utils.url',
        /**@lends MZ.url */
        MZ.extend({
            /**获取Url中的Get参数
            *@param {String} key url中的查询参数
            *@param {String} url 可选参数，默认是取当前窗口的location.href
            *@returns {String}
            *@example
            var sid = MZ.url.queryString("sid");
            */
            queryString: function(key, url) {
                url = url || location.search;
                url = url.split(/&|\?/);
                var result = null;
                key = String(key).toLowerCase();
                for (var i = 0; i < url.length; i++) {
                    var keyValue = url[i];
                    var part = keyValue.split("=");
                    if (part[0].toLowerCase() == key) {
                        result = part[1];
                        break;
                    }
                }
                return result;
            },
            /**
            @param {String} url 可选参数,要解析的url，默认是取当前窗口的location.href
            @returns {Object} 返回{key:value}对应的所有get参数集合的对象
            @example
            var obj = MZ.url.getQueryObj("http://meizu.com/?a=1&b=2");
            //返回
            {
            a:"1",
            b:"2"
            }
            */
            getQueryObj: function(url) {
                var result = {};
                url = url || location.href;
                if (typeof url != "string") {
                    throw "参数url必须是字符串类型";
                }
                if (url.indexOf("?") != -1) {
                    var search = url.split("?")[1];
                    var list = search.split("&");

                    for (var i = 0; i < list.length; i++) {
                        var pair = list[i].split("=");
                        var key = pair[0];
                        var value = pair[1];
                        result[key] = value;
                    }
                }
                return result;
            },
            /**拼接Url字符串
            *@param {String} url 基础地址，可以带？也可以不带？
            *@param {Object} queryObj Get查询参数
            *@returns {String}
            *@example
            var url = MZ.url.makeUrl("http://meizu.com",{
                sid:"xxxxxxx",
                key:"yyyyyyy"
            });
            得到 http://meizu.com/?sid=xxxxxxx&key=yyyyyyy
            或者
            var url = MZ.url.makeUrl("http://meizu.com","a=1&b=2");
            得到 http://meizu.com/?a=1&b=2
            自动判断是否应该加上"?"
            */
            makeUrl: function(url, queryObj) {
                if (url.indexOf("?") == -1) {
                    url += "?";
                }
                if (!/\?$/.test(url)) {
                    url += "&";
                }
                if (typeof queryObj == "string") {
                    url += queryObj;
                } else {
                    url += this.urlEncodeObj(queryObj);
                }
                return url;
            },

            urlEncodeObj: function(queryObj) {
                var arr = [];
                for (var p in queryObj) {
                    if (queryObj.hasOwnProperty(p)) {
                        arr.push(p + "=" + encodeURIComponent(queryObj[p]));
                    }
                }
                return arr.join("&");
            },
            /**
            *根据完整的本地路径或者网络路径，获得文件名
            *@returns {String}
            */
            getFileName: function(fullpath) {
                if (typeof fullpath == "string") {
                    var url = fullpath.split("?")[0];
                    var reg = /[^\/\\]+$/;
                    var m = url.match(reg);
                    if (m) {
                        return m[0];
                    }
                }
                return "";
            },
            /**
            *获得小写的文件扩展名，不带.号
            *@returns {String}
            */
            getFileExtName: function(fileName) {
                if (fileName && fileName.indexOf(".") > -1) {
                    return fileName.split(".").pop().toLowerCase();
                }
                return "";
            },
            /**
             *获得文件名，不包括扩展名
             *@returns {String}
             */
            getFileNameNoExt: function(filePath) {
                var name = this.getFileName(filePath);
                return name.replace(/([^.]+)\.[^.]+$/, "$1");
            },

            /**
             *根据给出的长度截断文件名，显示...，但是保留扩展名
             *@param {String} fileName 文件名
             *@param {Number} maxLength 要截断的最大长度
             *@returns {String} 返回缩略的文件名
             */
            getOverflowFileName: function(fileName, maxLength) {
                maxLength = maxLength || 25;
                fileName = this.getFileName(fileName);
                if (fileName.length <= maxLength) {
                    return fileName;
                }
                var point = fileName.lastIndexOf(".");
                if (point == -1 || fileName.length - point > 5) {
                    return fileName.substring(0, maxLength - 2) + "…";
                }
                var pattern = "^(.{" + (maxLength - 4) + "}).*(\\.[^.]+)$";
                return fileName.replace(new RegExp(pattern), "$1…$2");
            },

            /**
             *判断字符串是否为一个url链接
             *@param {String} url 要判断的文本
             *@returns {Boolean}
             */
            isUrl: function(url) {
                var reg = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
                return reg.test(url);
            },

            /**
             *根据一个url返回host
             *@example
             MZ.url.getHost("http://www.meizu.com/g2");//返回 www.meizu.com
             */
            getHost: function(url) {
                url = this.removeHttp(url);
                var match = url.match(/([^\/]+)/);
                if (match) {
                    return match[1];
                } else {
                    return "";
                }
            },

            /**
             *移除一个url的协议部分
             *@example
             MZ.url.removeHttp("http://www.meizu.com/g2");//返回 www.meizu.com/g2
             */
            removeHttp: function(url) {
                try {
                    return url.replace(/^(http|ftp|https|file):\/\//, "");
                } catch (e) {
                    return "";
                }
            },

            /**
             *根据一个url移除host部分
             *@example
             MZ.url.removeHost("http://www.meizu.com/g2");//返回 /g2
             */
            removeHost: function(url) {
                url = this.removeHttp(url);
                return url.replace(/^[^\/]+/, "");
            }

        }));

    MZ.url = new MZ.utils.url();
})();