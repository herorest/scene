/**
 * @fileOverview 定义和浏览器ua相关的方法.
 */

(function() {
    var ua = navigator.userAgent;
    /**定义和浏览器ua相关的方法.
     *@namespace
     *@name MZ.browser
     */

    MZ.namespace('MZ.utils.browser',
        /**@lends MZ.browser */
        MZ.extend({
            /**即：navigator.userAgent,MZ.browser.ua*/
            ua: ua,
            /**
             *@namespace
             *@name MZ.browser.is
             */
            _is:
            /**@lends MZ.browser.is*/
            {
                /**是否IE浏览器
                 * @field
                 */
                ie: function() {
                    if (!!window.ActiveXObject || "ActiveXObject" in window) {
                        return true;
                    } else {
                        return false;
                    }
                },

                /**是否IE6浏览器
                 * @field
                 */
                ie6: function() {
                    var ie6 = !-[1, ] && !window.XMLHttpRequest;
                    return ie6;
                },

                /**是否IE7浏览器
                 * @field
                 */
                ie7: function() {
                    return this.ie && /MSIE 7.0/.test(ua);
                },

                /** 是否IE8浏览器 
                 *@field
                 */
                ie8: function() {
                    return this.ie && /MSIE 8.0/.test(ua);
                },

                /**是否IE9浏览器
                 * @field
                 */
                ie9: function() {
                    return this.ie && /MSIE 9.0/.test(ua);
                },

                /**是否IE10浏览器
                 * @field
                 */
                ie10: function() {
                    return this.ie && /MSIE 10.0/.test(ua);
                },

                /**是否IE11浏览器
                 * @field
                 */
                ie11: function() {
                    return this.ie && /rv:11.0/.test(ua);
                },

                /**是否火狐浏览器
                 * @field
                 */
                firefox: /firefox/i,

                /**是否是否谷歌浏览器
                 * @field
                 */
                chrome: /chrome/i,

                /**是否欧朋浏览器
                 * @field
                 */
                opera: /opera/i,

                /**是否苹果的Safari浏览器,如果是Chrome则输出false
                 * @field
                 */
                safari: /safari/i,

                /**是否Webkit内核浏览器
                 * @field
                 */
                webkit: /webkit/i,

                /**是否Gecko内核浏览器
                 * @field
                 */
                gecko: /gecko/i,

                /**是否iOS操作系统
                 * @field
                 */
                ios: /iPad|iPhone|iPod/,

                /**是否mac操作系统
                 * @field
                 */
                mac: /mac/i,

                /**是否安卓操作系统
                 * @field
                 */
                android: /Android/,

                /**是否Windows Phone操作系统
                 * @field
                 */
                windowsphone: /Windows Phone/,

                /**是否Windows操作系统
                 * @field
                 */
                windows: /Windows/,

                /**是否为手机
                 * @field
                 */
                phone: /mobile|phone/i,

                /**是否为iPad设备
                 * @field
                 */
                ipad: /iPad/,

                /**是否为Linux操作系统
                 * @field
                 */
                linux: /Linux/
            },
            /**@namespace
             *@name MZ.browser.support
             */
            _support:
            /**@lends MZ.browser.support*/
            {

                /**
                 * 是否支持本地存储
                 */
                storage: function() {
                    try {
                        return "undefined" !== typeof(window.localStorage);
                    } catch (ex) {
                        return false;
                    }
                }
            },
            /**
            *判断ua是否包含某个关键字,即： MZ.browser.ua.indexOf(keyword) > -1，可以一次判断多个值
            *@example
            MZ.browser.uaContains(keyword1,keyword2);
            */
            uaContains: function(keyword1, keyword2) {
                var result = false;
                for (var i = 0; i < arguments.length; i++) {
                    result = result || this.ua.indexOf(arguments[i]) > -1;
                }
                return result;
            },
            /**
             
             *初始化，给MZ.browser.is赋值
             */
            init: function() {
                var is = this.is = {};
                var _is = this._is;
                for (var r in _is) {
                    if (typeof _is[r] == "object") {
                        is[r] = _is[r].test(ua);
                    }
                    if (typeof _is[r] == "function") {
                        is[r] = _is[r]();
                    }
                }
                is.safari = is.safari && !is.chrome;

                var _support = this._support;
                var support = this.support = {};
                for (var o in _support) {
                    if (typeof _support[o] == "function") {
                        support[o] = _support[o];
                    }
                }
            }
        }));
    MZ.browser = new MZ.utils.browser();
    MZ.browser.init();

})();