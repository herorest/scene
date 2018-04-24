/**
 * @fileOverview 定义和邮件地址相关的方法.
 */

(function() {
    /**定义和邮件地址相关的方法
     *@namespace
     *@name MZ.email
     */
    MZ.namespace('MZ.utils.email',
        /**@lends MZ.email */
        MZ.extend({

            /**
             *获得检测邮件地址的正则表达式(可能来自全局配置)
             *@returns {RegExp}
             */
            getEmailRegex: function() {
                return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i;
            },
            /**
            * 验证邮箱地址是否合法
            * @param {string} text 验证的邮箱地址字符串
            * @returns {Boolean}
            * @example
            MZ.email.isEmail("kaifei@meizu.com");//返回true
            */
            isEmail: function(text) {
                if (typeof text != "string") return false;
                text = $.trim(text);
                var reg = this.getEmailRegex();
                return reg.test(text);
            },
            /**
            * 得到邮箱地址字符中的账号部分。
            * @param {String} email 邮件地址字符串
            * @returns {String}
            * @example
            MZ.email.getAccount("kaifei@meizu.com");//返回"kaifei"
            */
            getAccount: function(email) {
                if (typeof email != "string") return "";
                email = $.trim(email);
                if (this.isEmail(email)) {
                    return email.split("@")[0].toLowerCase();
                } else if (this.isEmailAddr(email)) {
                    return email.match(/<([^@<>]+)@[^@<>]+>$/)[1].toLowerCase();
                } else {
                    return "";
                }
            }

        }));

    //定义缩写
 
    MZ.email = new MZ.utils.email();
})();