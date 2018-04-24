/**
 * @fileOverview 和input相关的方法.
 */

(function() {
    /**和input相关的方法
     *@namespace
     *@name MZ.input
     */

    MZ.namespace('MZ.utils.input',
        /**@lends MZ.input */
        MZ.extend({
            /***
             *聚焦去掉提示文字，失焦显示提示文字
             *@param {Object}   options               参数集合
             *@param {String}   options.id            必选，输入框的id名
             *@param {String}   options.text          必选，输入框默认显示的文字
             *@param {Array}    options.color         必选，输入框里的文字颜色，输入文字和默认提示文字
             *@param {Function} options.focusCallback 可选，focus的回调函数
             *@param {Function} options.blurCallback  可选，blur的回调函数
             *@example
             *MZ.input.placeholder({
                  id:'#test',
                  text:'密码',
                  color:['#000','#999'],
                  focusCallback:function(){},
                  blurCallback:function(){}
              })
             
             */
            placeholder: function(options) {
                var id = $(options.id);
                var color = options.color[1];
                id.val(options.text).css({ //初始化设置
                    color: color
                });
                id.focus(function() { //聚焦
                    var text = $(this).val();
                    if (text == options.text) {
                        id.val('').css({
                            color: options.color[0]
                        });
                    }
                    if (options.focusCallback) {
                        options.focusCallback();
                    }

                });
                id.blur(function() { //失焦
                    var text = $(this).val();
                    if ($.trim(text) == '') {
                        id.val(options.text).css({
                            color: color
                        });
                    }
                    if (options.blurCallback) {
                        options.blurCallback();
                    }

                });
            },
            /***
             *点击文字出现输入框，可修改文字
             *@param {Object}   options               参数集合
             *@param {String}   options.element       必选，要进行编辑的标签属性  data-toedit
             *@param {String}   options.cssClass      必选，控制输入框的样式
             *@param {String}   options.type          可选，输入框的类型   input or textarea   默认input
             *@param {Function} options.blurCallback  可选，blur的回调函数
             *@example
             *MZ.input.textToEdit({
                  element:'data-toedit',
                  cssClass:'xxxxxx',
                  type:'textarea',
                  blurCallback: function(e) {
                    var target = $(e.target);
                    target.hide();
                    target.prev().show().text(target.val());

                    something();
                    .......
                  }
              })
             */
            textToEdit: function(options) {
                var self = this;
                var cssClass = options.cssClass ? options.cssClass : '';
                var type = options.type ? options.type : 'input';
                var el = $('[' + options.element + ']');
                var len = el.length;
                for (var i = 0; i < len; i++) {
                    (function(i) {
                        var eli = el.eq(i);
                        eli.click(function() {
                            var text = $(this).text();
                            var parent = $(this).parent();
                            var input = parent.find('.input_edit_area');
                            var html = self._editTextTemplate(type, text);
                            $(this).hide();
                            var existInput = input.length;
                            if (!existInput) {
                                parent.addClass(cssClass).append(html);
                                input = parent.find('.input_edit_area');
                            } else {
                                input.show().val(text);
                            }
                            input.bind('blur', blur);
                            self.setCursorPos({
                                dom: input
                            });

                            function blur(e) {
                                input.unbind('blur', blur);
                                if (options.blurCallback) {
                                    options.blurCallback(e);
                                    return;
                                };
                                var target = $(e.target);
                                target.hide();
                                target.prev().show().text(target.val());
                            }
                        });
                    })(i)
                }

            },
            /**
             *与input.focus()的区别是，这里捕获异常，并且获得焦点后光标默认在文本最后
             *@param {Object} options 参数集合
             *@param {Object} options.dom 获得焦点的输入框
             *@param {Number} options.pos 光标的位置 0:最前,1:选中所有文本,2:最后,默认为2
             */
            setCursorPos: function(options) {
                var dom = options.dom;
                var len = dom.val().length;
                options = options || {};
                var pos = options.pos === undefined ? 2 : options.pos;
                try {
                    if (pos == 2) {
                        if (document.all) {
                            var r = dom[0].createTextRange();
                            r.moveStart("character", len);
                            r.collapse(true);
                            r.select();
                        } else {
                            dom[0].setSelectionRange(len, len);
                            dom.focus();
                        }
                    } else if (pos == 1) {
                        dom.select();
                    } else {
                        dom.focus();
                    }
                } catch (e) {
                    console.log(e);
                }
            },
            _editTextTemplate: function(type, text) {
                if (type == 'input') {
                    var html = '<input class="input_edit_area" type="text" value="' + text + '" />';
                } else {
                    var html = '<textarea class="input_edit_area">' + text + '</textarea>';
                }
                return html;
            }
        }));


    //定义缩写
    MZ.input = new MZ.utils.input();
})();