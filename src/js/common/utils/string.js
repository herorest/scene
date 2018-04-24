/**
 * @fileOverview 和字符串相关的方法.
 */

(function() {
    /**和字符串相关的方法
     *@namespace
     *@name MZ.string
     */

    MZ.namespace('MZ.utils.string',
        /**@lends MZ.string */

        MZ.extend({
            /***
            *获得描述性的文件大小文本，如：传入1124，返回1.1KB
            *@param {Number} fileSize 必选参数，文件大小
            *@param {String} options.byteChar 可选参数,可以把"B"替换为"字节"
            *@param {String} options.maxUnit 可选参数,最大单位,目前支持：B|K|M,默认为G
            *@param {String} options.comma 可选参数,是否用逗号分开每千单位
            *@returns {String}
            *@example
            //返回1G
            MZ.string.getFileSizeText(1024 * 1024 * 1024);
            //返回10字节
            MZ.string.getFileSizeText(10,{
            byteChar:"字节"
            });
            //返回102400B
            MZ.string.getFileSizeText(102400,{
            maxUnit:"B"
            });
            //返回5,000KB
            MZ.string.getFileSizeText(1024 * 5000,{
            maxUnit:"K",
            comma:true
            });
            */
            getFileSizeText: function(fileSize, options) {
                var unit = "B";
                if (!options) {
                    options = {};
                }
                if (options.byteChar) {
                    unit = options.byteChar; //用"字节"或者"Bytes"替代z最小单位"B"
                    if (options.maxUnit == "B") options.maxUnit = unit;
                }
                var maxUnit = options.maxUnit || "G";
                if (unit != maxUnit && fileSize >= 1024) {
                    unit = "K";
                    fileSize = fileSize / 1024;
                    if (unit != maxUnit && fileSize >= 1024) {
                        unit = "M";
                        fileSize = fileSize / 1024;
                        //debugger
                        if (unit != maxUnit && fileSize >= 1024) {
                            unit = "G";
                            fileSize = fileSize / 1024;
                        }
                    }
                    fileSize = Math.ceil(fileSize * 100) / 100;
                }
                if (options.comma) {
                    var reg = /(\d)(\d{3})($|\.)/;
                    fileSize = fileSize.toString();
                    while (reg.test(fileSize)) {
                        fileSize = fileSize.replace(reg, "$1,$2$3");
                    }
                }
                return fileSize + unit;
            },
            /**
             *截断字符串，并显示省略号
             * @param {String} text 必选参数，要截断的字符串。
             * @param {Number} maxLength 必选参数，文字长度。
             * @param {Boolean} showReplacer 可选参数，截断后是否显示...，默认为true。
             *@returns {String}
             */
            getTextOverFlow: function(text, maxLength, showReplacer) {
                if (text.length <= maxLength) {
                    return text;
                } else {
                    return text.substring(0, maxLength) + (showReplacer ? "..." : "");
                }
            },
            getTextOverFlow2: function(text, maxLength, showReplacer) {
                var charArr = text.split("");
                var byteLen = 0;
                var reg = new RegExp("[\x41-\x5A]|[^\x00-\xff]", "g")
                for (var i = 0; i < charArr.length; i++) {
                    var cArr = charArr[i].match(reg);
                    byteLen += (cArr == null ? 1 : 2)

                    if (byteLen > maxLength) {
                        return text.substring(0, i) + (showReplacer ? "..." : "");
                    }
                }
                return text;

            },
            /***
             *格式化字符串，提供数组和object两种方式
             *@example
             *MZ.string.format("hello,{name}",{name:"kitty"})
             *MZ.string.format("hello,{0}",["kitty"])
             *@returns {String}
             */
            format: function(str, arr) {
                var reg;
                if ($.isArray(arr)) {
                    reg = /\{([\d]+)\}/g;
                } else {
                    reg = /\{([\w]+)\}/g;
                }
                return str.replace(reg, function($0, $1) {
                    var value = arr[$1];
                    if (value !== undefined) {
                        return value;
                    } else {
                        return "";
                    }
                });
            },
            /**
             * 得到字符串长度，支持中文
             * <pre>示例：<br>
             * MZ.string.getBytes("123");
             * </pre>
             * @return {Number}
             */
            getBytes: function(str) {
                var cArr = str.match(/[^\x00-\xff]/ig);
                return str.length + (cArr == null ? 0 : cArr.length);
            },

            /** 
             * 文本编辑框文字聚焦到最后
             * <pre>示例：<br>
             * MZ.string.textFocusEnd(document.getElementById('text'));
             * </pre>
             * @param {Object} textObj 必选参数，文本框DOM对象
             */
            textFocusEnd: function(textObj) {
                if (textObj) {
                    textObj.focus();
                    var len = textObj.value.length;
                    if (document.selection) { //IE
                        var sel = textObj.createTextRange();
                        sel.moveStart('character', len);
                        sel.collapse();
                        sel.select();
                    } else if (typeof textObj.selectionStart == 'number' && typeof textObj.selectionEnd == 'number') {
                        textObj.selectionStart = textObj.selectionEnd = len; //非IE 
                    }
                }
            }


        }));


    //定义缩写
 
    MZ.string = new MZ.utils.string();
})();