/**
*@fileOverview 定义下拉框组件，依赖core/namespace,utils/string.js,utils/dom.js，配合自定义UI使用，配合tip-message使用
 */


require('common/utils/string');
require('common/utils/dom');

(function($) {
    /**定义下拉框组件
     * @namespace
     * @name MZ.dropmenu
     * @modify 2015.7.26 增加initCallback和clickCallback
     * @modify 2015.7.24 增加dropmenu_list的默认移除
     * @modify 2015.7.18 新增支持alltext属性，用来做文本截取
     * @modify 2015.7.17 新增resize方法，分离setMenuPosition，支持下拉框打开状态下，页面尺寸变化时的位置变化
     */
    MZ.namespace("MZ.ui.dropmenu",

        /**@lends MZ.dropmenu */
        MZ.extend({

            /**
             *初始化入口，插入下拉框的html，绑定事件
             *@param {Object} options 可选参数集合
             *@param {Number} options.container 下拉框的外层容器，事先写好在html页面中<div id="test"></div>
             *@param {String} options.defaultText 默认显示的文字
             *@param {String} options.cssClass 自定义样式
             *@param {String} options.data 下拉框的数组
             *@example
                dropmenu.render({
                    defaultText: '选择一',
                    container: '#test',
                    defaultText: '请选择',
                    cssClass: 'xxxxx',
                    data: [{
                        text: '选项一',
                        attrs: {
                            id: 3,
                            name: 99
                        }
                    }, {
                        text: '选项二',
                        attrs: {
                            id: 123,
                            name: 199
                        }
                    }]
                });
                <div id="test"></div>
                <script>
                    var dropmenu=new MZ.ui.dropmenu();
                    dropmenu.render({
                        defaultText: '选择一',
                        container: '#test',
                        defaultText: '请选择',
                        cssClass: 'xxxxx',
                        data: [{
                            text: '选项一',
                            attrs: {
                                id: 3,
                                name: 99
                            }
                        }, {
                            text: '选项二',
                            attrs: {
                                id: 123,
                                name: 199
                            }
                        }]
                    });
                </script>
                */
            render: function(options) {
                this.options=options;
                var tpl = this._template(options.data);
                var container = options.container;
                var cssClass = options.cssClass ? options.cssClass : '';
                options.id = container.replace('#', '');
                var html = MZ.string.format(tpl.textDown, options);
                this.el = $(container);
                var defaultAttrs=options.defaultAttrs;
                for(var i in defaultAttrs){
                    this.el.attr('data-'+i,defaultAttrs[i]);
                }
                this.el.addClass('ui_dropmeun_dom').addClass(cssClass).html(html);
                this.initEvents(options);
            },
            /**
             *绑定事件，显示下拉框
             */
            initEvents: function(options) {
                this.showList(options);
            },
            /**
             *选择下拉框里的项，显示在默认框里
             */
            menuSelect: function(options) {
                var self = this;
                var listId = options.container + 'DropmenuList';
                $(listId).find('li').bind('click', {
                    self: self
                }, this.selectEvent);
            },

            /**
             *选择下拉框里的内容后，填充所选中的项
             */
            selectEvent: function(ev) {
                var self = ev.data.self;
                var target = ev.target;
                var text = $(target).text();
                var title = $(target).attr('data-alltext');
                var attrs = self.attrs;
                for (var i in attrs) {
                    self.el.attr('data-' + i, $(target).attr('data-' + i));
                }
                self.el.find('.dropmenu_text').html(text).attr('title',title);
		        if(self.options.clickCallback && typeof(self.options.clickCallback) == 'function'){
                    self.options.clickCallback();
                }
            },
            /**
             *设置下拉框的位置，最小宽度
             */
            setMenuPosition: function(listId, dropmenu) {
                var left = this.el.offset().left;
                var top = this.el.offset().top;
                var height = this.el.height();
                var width = dropmenu.width();
                $(listId).css({
                    left: left,
                    top: top + height - 1,
                    minWidth: width
                });
            },
            /**
             *生成下拉框，绑定相关事件
             */
            showList: function(options) {
                var self = this;
                var listId = options.container + 'DropmenuList';
                var dropmenu = self.el.find('.ui_dropmenu');
                this.el.find('.ui_dropmenu').die().live('click',function() {
                    if(options.disabled){
                        return false;
                    }
                    var status = $(listId).is(':visible');
                    if (status) return; //点击时如果下拉框本身已经是可见状态，会触发全局的globalHide直接隐藏掉，不再处理后面的代码

                    var tpl = self._template(options.data);
                    var html = MZ.string.format(tpl.menuList, options);
                    var exist = $(listId)[0];
                    if (!exist) {
                        $('body').append(html);
                    }
                    var radius = dropmenu.css('borderRadius');
                    if (radius && radius != '0px') {
                        dropmenu.css({
                            borderRadius: radius + ' ' + radius + ' 0 0'
                        });
                    }
                    self.setMenuPosition(listId, dropmenu);
                    $(listId).show();
                    //绑定全局body点击事件，隐藏下拉框
                    self._bindGolbalHide(listId, dropmenu, radius);
                    //绑定事件，选择下拉框里的项
                    self.menuSelect(options);
                });
                if(self.options.initCallback && typeof(self.options.initCallback) == 'function'){
                    self.options.initCallback();
                }
                //绑定resize事件
                window.onresize = function(){
                    self.setMenuPosition(listId, dropmenu);
                }
            },
            /**
             *全局的点击隐藏方法
             */
            _bindGolbalHide: function(listId, dropmenu, radius) {
                var self = this;
                MZ.dom.globalHide({
                    dom: listId,
                    status: true,
                    callback: function() {
                        if (radius && radius != '0px') {
                            dropmenu.css({
                                borderRadius: radius
                            });
                        }
                        $(listId).find('li').unbind('click', self.selectEvent);
                    }
                });
            },
            /**
             *下拉框的模板
             */
            _template: function(data) {
                var self = this;
                var len = data.length;
                var li = '';
                for (var i = 0; i < len; i++) {
                    var attrs = data[i].attrs;
                    this.attrs = attrs;
                    var attrsData = '',alltext = '';
                    for (var o in attrs) {
                        if(o == 'imgurl' && attrs[o] == '')
                            attrs[o] = '/resources/ad-cpd-consume/images/pos.jpg';
                        attrsData += ' data-' + o + '=' + attrs[o];

                    }
                    if(attrs.alltext && attrs.alltext.length > 0){
                        alltext =  ' title=' + attrs.alltext;
                    }
                    li += '<li' + attrsData + ' '+alltext+'>' + data[i].text + '</li>';
                }

                var alltext = '';
                if(self.options.defaultAttrs && self.options.defaultAttrs.alltext && self.options.defaultAttrs.alltext.length > 0){
                    alltext = self.options.defaultAttrs.alltext;
                }

                if($('.dropmenu_list').length > 0){
                    $('.dropmenu_list').remove();
                }

                var textDown = ['<div class="ui_dropmenu">',
                    '<div class="dropmenu_text" title="'+alltext+'">{defaultText}</div>',
                    '<div class="dropmenu_down"><span></span></div>',
                    '</div>'
                ].join('');
                var menuList = [
                    '<div id="{id}DropmenuList" class="dropmenu_list">',
                    '<ul>' + li + '</ul>',
                    '</div>'
                ].join('');
                var json = {
                    textDown: textDown,
                    menuList: menuList
                };

                return json;
            }
        }));

})(jQuery);