/**
 * @fileOverview 定义树状菜单组件，依赖core/namespace,utils/events.js,ui/tip-message/tipmessage.js
 */
// require('/resources/sms/modules/utils/events');
// require('/resources/sms/modules/ui/tip-message/tipmessage');
(function($) {
    /**定义树状菜单组件
     *@namespace
     *@name MZ.tree
     */
    MZ.namespace("MZ.ui.tree",
        /**@lends MZ.tree */
        MZ.extend({

            /**
             *生成树状菜单
             *@param {Object} options 可选参数集合
             *@param {String} options.container 容器的id带#号
             *@param {String} options.ajaxUrl ajax请求地址
             *@param {Function} options.ajaxCallback ajax获取列表的回调 ，用来拼装接口返回来的数据，得到标准的格式[{text:111,attr:{xxx:999,yyy:333}}]
             *@param {String} options.callback 点击最后一级目录时的回调
             *@param {Array}  options.data 树状菜单的数据
             *@param {String} options.data[0].text 树状菜单各级显示的文字
             *@param {Boolean} options.data[0].last 用于判断是否达到最后一层
             *@param {Array} options.data[0].attr ajax请求时，header头里传递的参数
             *@example
                MZ.tree.render({
                    container: '#test1',
                    ajaxUrl: '../../../test_data/tree.json',
                    ajaxCallback:function(_this,result,callback){
                        var data=result.value.data;
                        callback(data);
                    },
                    callback:function(){},
                    data: [{
                        text: 11111,
                        attr: {
                            id: 8986,
                            name: 'xxx'
                        }
                    }, {
                        text: 22222,
                        last:true,
                        attr: {
                            id: 2345,
                            name: 'yyy'
                        }
                    }, {
                        text: 33333,
                        attr: {
                            id: 5434,
                            name: 'zzz'
                        }
                    }]
                });
                <div id="test1"></div>
                <script>
                MZ.tree.render({
                    container: '#test1',
                    ajaxUrl: '../../../test_data/tree.json',
                    ajaxCallback:function(_this,result,callback){
                        var data=result.value.data;
                        callback(data);
                    },
                    callback:function(){},
                    data: [{
                        text: 11111,
                        attr: {
                            id: 8986,
                            name: 'xxx'
                        }
                    }, {
                        text: 22222,
                        last:true,
                        attr: {
                            id: 2345,
                            name: 'yyy'
                        }
                    }, {
                        text: 33333,
                        attr: {
                            id: 5434,
                            name: 'zzz'
                        }
                    }]
                });
                </script>
             */
            render: function(options) {
                this.level = 1;
                this.createTree(options);
            },
            initEvents: function(options) {
                var dom = options.container;
                var self = this;
                $(dom).on('click', '.ui_tree' + this.level + ' .ui_tree_icon', function(e) {
                    var _this = $(this);
                    MZ.events.stopEvent(e);
                    var css = _this.parent().parent().attr('class');
                    var last = _this.parent().attr('data-last');
                    if (!css || last == '1') {
                        options.callback && options.callback();
                        return;
                    };
                    css = css.replace('ui_tree', '');
                    css = parseInt(css);
                    self.level = css + 1; //上一级的level+1
                    var nextLevel = _this.find('.ui_tree' + (css + 1));
                    if (nextLevel.length) { //判断是否已经存在该级目录，如果存在，不再发起ajax请求，直接显示or隐藏
                        var visible = nextLevel.is(':visible');
                        if (visible) {
                            nextLevel.hide();
                            _this.find('.fold:first').show().find('.unfold:first').hide();
                        } else {
                            nextLevel.show();
                            _this.find('.fold:first').hide().find('.unfold:first').show();
                        }
                        return;
                    }

                    MZ.tipmessage.show({
                        message: '加载中',
                        id: 'loadingTip'
                    });
                    var key = self.sourceKey;
                    var len = key.length;
                    var data = {};
                    for (var i = 0; i < len; i++) {
                        data[key[i]] = _this.parent().attr('tree-' + key[i]); //得到标签上带tree-标识的属性，做为发起ajax请求的参数
                    }
                    //result格式：{"code":200,"value":{"data":[{"text":8888,"attr":{"id":"33","name":"fff"}}]},"message":""}
                    $.ajax({
                        url: options.ajaxUrl,
                        data: data,
                        type: 'get',
                        dataType: 'json',
                        contentType:'application/json',
                        async: false,
                        success: function(result) {
                            if (options.ajaxCallback) {
                                options.ajaxCallback(_this,result, function(data) {
                                    options.data = data;
                                    self.appendSubmenu(options, _this);
                                });
                            } else {
                                options.data = result.value.data;
                                self.appendSubmenu(options, _this);
                            }
                        }
                    });
                });
            },
            appendSubmenu: function(options, _this) {
                var html = this.template(options);
                _this.find('.fold:first').hide().find('.unfold:first').show();
                _this.append(html);
                MZ.tipmessage.hide('loadingTip'); //请求成功后隐藏tipmessage
            },
            createTree: function(options) {
                var html = this.template(options);
                var dom = options.container;
                $(dom).append(html);
                this.initEvents(options);

            },
            template: function(options) {
                var data = options.data;
                var len = data.length;
                var list = '';
                for (var i = 0; i < len; i++) {
                    var attr = data[i].attr;
                    var last = data[i].last ? 1 : 0;
                    var element = '';
                    this.sourceKey = [];
                    for (var o in attr) {
                        element += 'tree-' + o + '="' + attr[o] + '"';
                        this.sourceKey.push(o);
                    }
                    var display = last ? 'none' : 'inline-block';
                    list += '<div data-last="' + last + '" ' + element + '><span class="ui_tree_icon"><span class="tree_icon_list"><i class="fold" style="display:' + display + ';">+</i><i class="unfold" style="display:' + display + ';">-</i></span>' + data[i].text + '</span></div>';
                }
                list = '<div style="padding-left:10px" class="ui_tree' + this.level + '">' + list + '</div>';
                var html = list;
                return html;
            }
        }));
    MZ.tree = new MZ.ui.tree();
    // MZ.tree.render({
    //     container: '#test1',
    //     ajaxUrl: 'xxxxx',
    //     ajaxCallback: function(_this,result, callback) {
    //         var data = result.value.data;
    //         callback(data);
    //     },
    //     callback: function() {
    //         console.log(333);
    //     },
    //     data: [{
    //         text: '上一级的level',
    //         attr: {
    //             id: 8986,
    //             name: 'xxx'
    //         }
    //     }, {
    //         text: 22222,
    //         last: true,
    //         attr: {
    //             id: 2345,
    //             name: 'yyy'
    //         }
    //     }, {
    //         text: 33333,
    //         attr: {
    //             id: 5434,
    //             name: 'zzz'
    //         }
    //     }]
    // });

})(jQuery);