/**
 * @fileOverview 读取cookie和设置cookie.
 */

(function() {
    /**读取cookie和设置cookie
     *@namespace
     *@name MZ.cookie
     */
    MZ.namespace('MZ.utils.cookie',
        /**@lends MZ.cookie */
        MZ.extend({

            /**
             *读取cookie值
             *@returns {String}
             */
            get: function(name) {
                var arr = document.cookie.match(new RegExp("(^|\\W)" + name + "=([^;]*)(;|$)"));
                if (arr != null) return unescape(arr[2]);
                return "";
            },
            /**
             *@param {Object} options 参数配置
             *@param {String} options.name cookie的名称
             *@param {String} options.value cookie的值
             *@param {String} options.domain cookie访问权限域名，默认为当前域名
             *@param {String} options.path 默认为 /
             *@param {Date} options.expries 如果不设置，则默认为会话cookie
             *@returns {void}
             */
            set: function(options) {
                var name = options.name;
                var value = options.value;
                var path = options.path || "/";
                var domain = options.domain;
                var expries = options.expries;
                var str = name + "=" + escape(value) + "; ";
                str += "path=" + path + "; ";
                if (domain) str += "domain=" + domain + "; ";
                if (expries) str += "expires=" + expires.toGMTString() + "; ";
                document.cookie = str;
            }

        }));

    //定义缩写

    MZ.cookie = new MZ.utils.cookie();

})();