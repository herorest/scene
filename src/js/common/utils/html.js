/**
 * @fileOverview 对html片断进行转义的方法.
 */

(function() {
    /**对html片断进行转义的方法
     *@namespace
     *@name MZ.html
     */
    MZ.namespace('MZ.utils.html',
        /**@lends MZ.html */
        MZ.extend({

            html_decodes: {
                '&amp;': '&',
                '&quot;': '"',
                '&lt;': '<',
                '&gt;': '>',
                "&nbsp;": " ",
                "&#39;": "'"
            },
            /**
             *转义html为安全文本
             *@returns {String}
             */
            encode: function(str) {
                if (typeof str != "string") return "";
                str = str.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/\"/g, "&quot;")
                    .replace(/\'/g, "&#39;")
                    .replace(/ /g, "&nbsp;")
                //.replace(/&amp;#([^\;]+);/ig, "&#$1;"); //将&#20117;转成相应的汉字“井”
                return str;
            },
            /**
             *encode的逆函数
             *@returns {String}
             */
            decode: function(text) {
                if (typeof text != "string") return "";
                var map = this.html_decodes;
                //多个replace会有bug
                return text.replace(/(&quot;|&lt;|&gt;|&amp;|&nbsp;|&#39;)/g, function(str, item) {
                    return map[item];
                });
                return text;
            }

        }));

    //定义缩写
 
    MZ.html = new MZ.utils.html();
})();