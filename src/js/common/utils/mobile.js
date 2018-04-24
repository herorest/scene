/**
 * @fileOverview 定义和手机相关的方法.
 */

(function() {
    /**定义和手机相关的方法
     *@namespace
     *@name MZ.mobile
     */
    MZ.namespace('MZ.utils.mobile',
        /**@lends MZ.mobile */
        MZ.extend({
            /***
             *获得匹配中国移动手机号的正则(可能来自全局配置)
             *@returns {RegExp}
             **/
            getChinaMobileRegex: function() {
                return new RegExp("^8613[4-9][0-9]{8}$|^8615[012789][0-9]{8}$|^8618[2378][0-9]{8}$|^8614[7][0-9]{8}$");
            },
            /***
             *获得匹配移动手机号的正则(可能来自全局配置)
             *@returns {RegExp}
             **/
            getMobileRegex: function() {
                return new RegExp("^8613[0-9]{9}$|^8615[012356789][0-9]{8}$|^8618[02356789][0-9]{8}$|^8614[7][0-9]{8}$");
            },
            /***
             *检测输入文本是否为一个手机号（中国大陆的手机号），文本必须为纯数字号码
             *@param {String} text 要检测的文本
             *@returns {Boolean}
             **/
            isMobile: function(text) {
                text = this.add86(text);
                return this.getMobileRegex().test(text);
            },
            /***
             *检测输入文本是否为中国移动的手机号，文本必须为纯数字号码
             *@param {String} text 要检测的文本
             *@returns {Boolean}
             **/
            isChinaMobile: function(text) {
                text = this.add86(text);
                return this.getChinaMobileRegex().test(text);
            },

            /**
             *给手机号码添加86，如果已存在则不添加
             *@returns {String}
             */
            add86: function(mobile) {
                if (typeof mobile != "string") mobile = mobile.toString();
                return mobile.trim().replace(/^(?:86)?(?=\d{11}$)/, "86");
            },
            /**
             *移除手机号码前的86
             *@returns {String}
             */
            remove86: function(mobile) {
                if (typeof mobile != "string") mobile = mobile.toString();
                return mobile.trim().replace(/^86(?=\d{11}$)/, "");
            }
        })

    );

    //定义缩写

    MZ.mobile = new MZ.utils.mobile();
})();