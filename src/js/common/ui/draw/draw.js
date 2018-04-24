/**
 * @fileOverview 定义选项卡的组件，依赖core/namespace,utils/string.js,ui/raphael.js,ui/eve.js
 */
// require('jqueryplug/jquery');
// require('utils/mz.namespace');
// require('/resources/sms/modules/utils/string');
// require('resources/sms/modules/ui/raphael');
(function($) {
    /**定义树状结构图的组件
     *@namespace
     *@name MZ.draw
     */
    MZ.namespace("MZ.ui.draw",
        /**@lends MZ.draw */
        MZ.extend({


            defaults: {
                line: [], //线条集合
                highlightLine: {}, //点击后高亮的路径
                level: 1, //结构的层级
                shapes: [] //矩形集合
            },
            /***
             *画线，得到初始位置和结束位置，中间加一个弧度美化
             *@param {Object}   startObj               初始位置的DOM
             *@param {Object}   endObj                 结束位置的DOM
             *@param {String}   line                   线颜色
             *@param {String}   bg                     边框颜色
             *@param {Object}   options                结构图参数集合
             */
            getPath: function(startObj, endObj, options) {
                var type = options.type ? options.type : 1;
                var p = this.getCoordinate(startObj, endObj, type),
                    d = {},
                    line = options.lineColor,
                    bg = options.lineBgColor,
                    dis = [];
                for (var i = 0; i < 4; i++) {
                    for (var j = 4; j < 8; j++) {
                        var dx = Math.abs(p[i].x - p[j].x),
                            dy = Math.abs(p[i].y - p[j].y);
                        if ((i == j - 4) || (((i != 3 && j != 6) || p[i].x < p[j].x) && ((i != 2 && j != 7) || p[i].x > p[j].x) && ((i != 0 && j != 5) || p[i].y > p[j].y) && ((i != 1 && j != 4) || p[i].y < p[j].y))) {
                            dis.push(dx + dy);
                            d[dis[dis.length - 1]] = [i, j];
                        }
                    }
                }
                if (dis.length == 0) {
                    var res = [0, 4];
                } else {
                    res = d[Math.min.apply(Math, dis)];
                }
                var x1 = p[res[0]].x,
                    y1 = p[res[0]].y,
                    x4 = p[res[1]].x,
                    y4 = p[res[1]].y;
                dx = Math.max(Math.abs(x1 - x4) / 2, 10);
                dy = Math.max(Math.abs(y1 - y4) / 2, 10);

                var x2 = [x1, x1, x1 - dx, x1 + dx][res[0]].toFixed(3),
                    y2 = [y1 - dy, y1 + dy, y1, y1][res[0]].toFixed(3),
                    x3 = [0, 0, 0, 0, x4, x4, x4 - dx, x4 + dx][res[1]].toFixed(3),
                    y3 = [0, 0, 0, 0, y1 + dy, y1 - dy, y4, y4][res[1]].toFixed(3);
                var path = ["M", x1.toFixed(3), y1.toFixed(3), "C", x2, y2, x3, y3, x4.toFixed(3), y4.toFixed(3)].join(",");
                //M651,156.795C623.5,156.795,623.5,220.8795,541,226V230C623.5,221.5205,623.5,163.205,651,163.205
                if (options.linear) {
                    path = ["M", x1.toFixed(3), y1.toFixed(3), x4.toFixed(3), y4.toFixed(3)].join(",");
                }

                var raphael = this.defaults.raphael;
                var level = this.defaults.level;
                return {
                    bg: raphael.path(path).attr({
                        stroke: bg,
                        fill: "none",
                        level: level,
                        "stroke-width": 3
                    }),
                    line: raphael.path(path).attr({
                        stroke: line,
                        fill: "none",
                        level: level,
                        'arrow-end': 'classic-wide-long',
                        "stroke-width": 2
                    }),
                    from: startObj,
                    to: endObj
                };

            },
            /***
             *根据options.type的值判断是横向还是纵向，得到第一个节点的位置
             *@param {Object}   options             结构图参数集合
             */
            firstPos: function(options) {
                var x = ($(this.defaults.raphael.canvas).width() - options.width) / 2;
                var y = options.marginTop / 2;
                if (options.type == 2) {
                    x = options.marginLeft / 2;
                    y = ($(this.defaults.raphael.canvas).height() - options.height) / 2;
                }
                return {
                    x: Math.ceil(x),
                    y: Math.ceil(y)
                };
            },
            /***
             *得到shapes的DOM数组，用于点击DOM和移除DOM操作
             *@param {Object}   options             结构图参数集合
             *@param {Object}   init                判断是否第一次初始化，需要加上一个根节点
             */
            pushShapes: function(options, init) {

                var raphael = this.defaults.raphael,
                    width = options.width,
                    height = options.height,
                    marginLeft = options.marginLeft,
                    marginTop = options.marginTop,
                    data = options.data,
                    type = options.type,
                    subLen = data.length;

                raphael.customAttributes.level = /**@ignore */ function(num){
                    return num;
                }
                var html = '';
                var arr = [];
                var firstPos = this.firstPos(options);
                var pos = this.pos;
                if (init) {
                    pos = firstPos;
                    //var text = options.json.data.text;
                    //text = MZ.string.getTextOverFlow2(text, options.textNum, '...');
                    // var json = {
                    //     text: options.initData.text,
                    //     percent: options.initData.percent,
                    //     dataid:options.initData.dataid,
                    //     current: 'current'
                    // };
                    var json = options.initData;
                    json.current = 'current';
                    var datasource = this.createEle(firstPos, json, options);
                    var initArr = [];
                    initArr.push(datasource.dom);
                    html += datasource.html;
                }
                this.defaults.shapes.concat(arr);
                this.subLen = subLen;
                for (var n = 0; n < subLen; n++) {
                    //text = sub[n].text;
                    //text = MZ.string.getTextOverFlow2(text, options.textNum, '...');

                    var mgx = Math.floor((marginLeft + width) * n) - (subLen * (width + marginLeft)) / 2;
                    var mgy = Math.floor((marginTop + height) * n) - (subLen * (height + marginTop)) / 2;
                    var mx = type == 1 ? firstPos.x + mgx : pos.x + marginLeft;
                    var my = type == 1 ? pos.y + marginTop : firstPos.y + mgy;
                    var position = {
                        x: mx,
                        y: my
                    };
                    var datasource = this.createEle(position, data[n], options);
                    arr.push(datasource.dom);
                    html += datasource.html;

                }
                $('#' + options.dom).append(html); //拿到最终的HTML一次性插入页面中
                if (init) {
                    this.defaults.shapes.push($(initArr[0]));
                }
                for (var m = 0; m < arr.length; m++) {
                    this.defaults.shapes.push($(arr[m]));
                }

            },
            /***
             *生成结构图的每一层，并返回层里的每一个
             *@param {Object}   pos             单个节点的x坐标，y坐标
             *@param {Object}   json            单个节点内要显示的内容
             *@param {Object}   options         结构图参数集合
             */

            createEle: function(pos, json, options) {
                var data = {
                        position: 'absolute',
                        top: pos.y + 'px',
                        left: pos.x + 'px',
                        width: options.width + 'px',
                        height: options.height + 'px'
                    },
                    current = json.current,
                    text = json.text,
                    percent = json.percent,
                    style = '';
                for (var i in data) {
                    style += i + ':' + data[i] + ';';
                }
                style = 'style="' + style + '" ';
                var id = 'id' + pos.x + pos.y;
                var current = current ? current : '';
                var level = current ? '0' : this.defaults.level;
                var attrs = 'level=' + level + ' id="' + id + '" ' + style;
                var ribute = '';
                for (var o in json) {
                    ribute += 'data-' + o + '=' + json[o] + ' '; //接口返回的数据，放到标签的属性里，供ajax请求时获取参数
                }
                var tpl = options.callback(json);
                var html = '<div ' + attrs + ribute + ' class="raphael_box ' + current + '">' + tpl + '</div>'
                return {
                    html: html,
                    dom: '#' + id
                };
            },
            /***
             *初始化
             *@param {Object}   options         结构图参数集合
             *@param {String}   init            判断是否第一次初始化
             *@example
             var options = {
                dom: 'holder',
                domHeight: 1480,
                width: 200, //单个节点宽度
                height: 66, //单个节点高度
                index: 0, //当前选中的是第几个
                lineColor: '#ccc', //路径的颜色
                lineBgColor: '#fff', //路径的背景色
                type: 2, //2：横着排    1：竖着排
                maxLevel:4,//最大层级，超过该值点击不会再生成新的层级
                url: '../../../test_data/draw.json', //ajax请求的url
                //linear:true,//直线
                marginLeft: 260, //节点的左右间距
                marginTop: 20, //节点的上下间距
                callback: function(data) { //回调函数，拿到接口返回的数据生成html模板
                    var text = data.text;
                    text = MZ.string.getTextOverFlow2(text, 52, '...');
                    data.text = text;
                    var html = [
                        '<div class="tit">{percent}</div>',
                        '<div class="con">{text}</div>'
                    ].join('');
                    html = MZ.string.format(html, data);
                    return html;
                },
                postData: { //ajax请求需要的参数
                    dataid: 444,
                    type: 55
                },
                initData: { //生成dom结构要用到的数据
                    text: 'http://www.meizu.com/products/meilan/fun.html',
                    percent: '33%'
                }
            };
            <script>
                var optionsTest = {
                dom: 'holder',
                domHeight: 588,
                width: 200, //单个节点宽度
                height: 66, //单个节点高度
                index: 0, //当前选中的是第几个
                lineColor: '#ccc', //路径的颜色
                lineBgColor: '#fff', //路径的背景色
                type: 1, //2：横着排    1：竖着排
                maxLevel:3,//最大层级，超过该值点击不会再生成新的层级
                url: '../../../test_data/draw.json', //ajax请求的url
                //接口返回的数据{"code":"200","value":{"data":[{"text": "http://www.sogou.com/sie?hdq=AQxRG-3354&query=12306%CC%FA%C2%B7%BF%CD%BB%A7%B7%FE%CE%F1%D6%D0%D0%C4&p=99350103&sourceid=sugg&w=01015004&oq=123&ri=0","percent": "50%","dataid":"123","type":"fsf"},{"text": "http://www.meizu.com/products/meilan/fun.html","percent": "20%","dataid":"423","type":"gfgfg"},{"text": "https://member.meizu.com/sso?appuri=http%3A%2F%2Fwww.meizu.com%2Faccounts%2Flogin&useruri=http%3A%2F%2Fwww.meizu.com%2Fproducts%2Fmeilan%2Ffun.html&sid=&service=www&autodirct=true","percent": "10%","dataid":"243","type":"gdsd"},{"text": "http://bbs.meizu.cn/thread-5600058-1-1.html","percent": "5%","dataid":"453","type":"few"},{"text": "http://bbs.flyme.cn/thread-244926-1-1.html","percent": "3%","dataid":"564","type":"hew"},{"text": "http://retail.meizu.com/join.html","percent": "2%","dataid":"985","type":"gad"}]},"message":""}
                //linear:true,//直线
                marginLeft: 40, //节点的左右间距
                marginTop: 120, //节点的上下间距
                callback: function(data) { //回调函数，拿到接口返回的数据生成html模板
                    var text = data.text;
                    text = MZ.string.getTextOverFlow2(text, 52, '...');
                    data.text = text;
                    var html = [
                        '<div class="tit">{percent}</div>',
                        '<div class="con">{text}</div>'
                    ].join('');
                    html = MZ.string.format(html, data);
                    return html;
                },
                postData: { //ajax请求需要的参数
                    dataid: 444,
                    type: 55
                },
                initData: { //生成dom结构要用到的数据
                    text: 'http://www.meizu.com/products/meilan/fun.html',
                    percent: '33%'
                }
            };
            function draw(type){
                var href=window.location.href;
                MZ.dialog.base({
                    content: '<div id="dialogCon"><div id="holder" style="height:588px; position:relative; "></div></div>',
                    title: '路径分析图',
                    height:620,
                    width:1700,
                    type:'confirm',
                    fnSure: function(dialog,rdm) {
                        dialog.close(rdm);
                    },
                    fnCancel:function(dialog,rdm){
                        dialog.close(rdm);
                    },
                    cssClass:'draw_dialog'
                 });
                 if(type==1){
                    optionsTest.marginLeft=40;
                    optionsTest.marginTop=120;
                 }else{
                    optionsTest.marginLeft=260;
                    optionsTest.marginTop=20;
                 }
                 optionsTest.type=type;
                 optionsTest.index=0;
                 MZ.draw.render(optionsTest, 'init');
                
                
            }
            </script>
            <button onclick="draw(2)">路径分析图（横向）</button>&nbsp;<button onclick="draw(1)">路径分析图（纵向）</button>
             */

            render: function(options, init) {
                this.defaults.options = options;
                if (init) {
                    this.defaults.raphael = Raphael(options.dom, '100%', options.domHeight);
                    this.defaults.level = 1;
                    this.defaults.line = [];
                    this.defaults.highlightLine = {};
                    this.defaults.shapes = [];
                } //初始化svg
                var self = this,
                    marginTop = options.marginTop,
                    marginLeft = options.marginLeft,
                    num = this.defaults.line,
                    numLen = num.length;
                    $.ajax({
                        url: options.url,
                        data: options.postData,
                        type: 'get',
                        dataType: 'json',
                        contentType:'application/json',
                        async: false,
                        success: function(result) {
                            //result数据格式
                            // {
                            //     "code": "200",
                            //     "value": {
                            //         "data": [{
                            //             "text": "http://www.sogou.com/sie?hdq=AQxRG-3354&query=12306%CC%FA%C2%B7%BF%CD%BB%A7%B7%FE%CE%F1%D6%D0%D0%C4&p=99350103&sourceid=sugg&w=01015004&oq=123&ri=0",
                            //             "percent": "50%",
                            //             "type": 'xxxx'
                            //         }, {
                            //             "text": "http://www.meizu.com/products/meilan/fun.html",
                            //             "percent": "20%",
                            //             "type": 'fsdfs'
                            //         }, {
                            //             "text": "https://member.meizu.com/sso?appuri=http%3A%2F%2Fwww.meizu.com%2Faccounts%2Flogin&useruri=http%3A%2F%2Fwww.meizu.com%2Fproducts%2Fmeilan%2Ffun.html&sid=&service=www&autodirct=true",
                            //             "percent": "10%",
                            //             "type": '234f'
                            //         }, {
                            //             "text": "http://bbs.meizu.cn/thread-5600058-1-1.html",
                            //             "percent": "5%",
                            //             "type": 'fs32'
                            //         }, {
                            //             "text": "http://bbs.flyme.cn/thread-244926-1-1.html",
                            //             "percent": "3%",
                            //             "type": 'ggd3'
                            //         }, {
                            //             "text": "http://retail.meizu.com/join.html",
                            //             "percent": "2%",
                            //             "type": 'gg33'
                            //         }]

                            //     },
                            //     "message": ""
                            // }
                            if (typeof result === 'string') {
                                result = JSON.parse(result);
                            }
                            options.data = result.value.data;
                            self.pushShapes(options, init);

                            var shapes = self.defaults.shapes;

                            for (var i = numLen + 1, ii = shapes.length; i < ii; i++) {
                                (function(i) {
                                    shapes[i].click(function() {
                                        commonClick(this, i);
                                    });
                                })(i);
                                if (i > 0) {
                                    var path = self.getPath(shapes[options.index], shapes[i], options);
                                    self.defaults.line.push(path);
                                }

                            };

                            function commonClick(dom, i) {
                                var datalevel = $(dom).attr('level');
                                if (datalevel > options.maxLevel) {
                                    return
                                };
                                $('.raphael_box[level=' + datalevel + ']').removeClass('current');
                                $(dom).addClass('current');
                                self.defaults.level = parseInt(datalevel) + 1;
                                self.clickEvent(dom, i, options);
                            }
                        }
                    });


            },
            /***
             *点击事件，重新执行render绘制结构图
             *@param {Object}   dom         当前点击的DOM
             *@param {Number}   i           当前点击的DOM节点是第几个
             *@param {Object}   options     结构图参数集合
             */

            clickEvent: function(dom, i, options) {
                var self = this,
                    shapes = self.defaults.shapes,
                    line = self.defaults.line,
                    thisLevel = $(dom).attr('level');

                for (var o = 0; o < shapes.length; o++) {
                    var level = shapes[o].attr('level');
                    if (level > thisLevel) {
                        $(shapes[o]).remove();
                    }
                }

                for (var o = 0; o < line.length; o++) {
                    var level = line[o].bg.attr('level');

                    if (level > thisLevel) {

                        line[o].bg.remove();
                        line[o].line.remove();
                    }
                    line[o].line.attr({
                        stroke: options.lineColor
                    });
                }



                this.defaults.highlightLine[thisLevel] = i - 1; //按层级区分，一个层级只会有一个高亮的线条
                var json = this.defaults.highlightLine;
                for (var n in json) {
                    line[json[n]].line.attr({
                        stroke: '#f60'
                    });
                }

                self.pos = {};
                self.pos.x = $(shapes[i]).offset().left - $(shapes[i]).parent().offset().left; //当前点击的容器X轴坐标
                self.pos.y = $(shapes[i]).offset().top - $(shapes[i]).parent().offset().top; //当前点击的容器Y轴坐标
                options.index = i;
                var postData = options.postData;
                var data = {};
                for (var n in postData) {
                    data[n] = $(dom).attr('data-' + n); //只取postData里的参数
                    if (!data[n]) {
                        data[n] = postData[n];
                    }
                }
                options.postData = data;

                self.render(options);
            },
            /***
             *得到要绘制的路径坐标
             *@param {Object}   startObj         路径开始的节点
             *@param {Number}   endObj           路径结束的节点
             *@param {Object}   type             结构图的类型，横向展示(type===2)or纵向展示(type===1)
             */
            getCoordinate: function(startObj, endObj, type) {
                var sw = startObj.width(),
                    sh = startObj.height(),
                    sx = startObj.offset().left - startObj.parent().offset().left,
                    ex = endObj.offset().left - endObj.parent().offset().left,
                    sy = startObj.offset().top - startObj.parent().offset().top,
                    ey = endObj.offset().top - endObj.parent().offset().top,
                    vertical = [{ //纵向 
                        x: sx + sw / 2,
                        y: sy - 1
                    }, {
                        x: sx + sw / 2,
                        y: sy + sh + 1
                    }, {
                        x: sx + sw / 2,
                        y: sy + sh / 2
                    }, {
                        x: sx + sw / 2,
                        y: sy + sh / 2
                    }, {
                        x: ex + sw / 2,
                        y: ey - 1
                    }, {
                        x: ex + sw / 2,
                        y: ey + sh + 1
                    }, {
                        x: ex + sw / 2,
                        y: ey + sh / 2
                    }, {
                        x: ex + sw / 2,
                        y: ey + sh / 2
                    }],
                    level = [{ //横向
                        x: sx + sw / 2,
                        y: sy - 1
                    }, {
                        x: sx + sw / 2,
                        y: sy + sh + 1
                    }, {
                        x: sx - 1,
                        y: sy + sh / 2
                    }, {
                        x: sx + sw + 1,
                        y: sy + sh / 2
                    }, {
                        x: ex + sw / 2,
                        y: ey - 1
                    }, {
                        x: ex + sw / 2,
                        y: ey + sh + 1
                    }, {
                        x: ex - 1,
                        y: ey + sh / 2
                    }, {
                        x: ex + sw + 1,
                        y: ey + sh / 2
                    }];

                if (type == 1) {
                    return vertical;
                };
                if (type == 2) {
                    return level;
                }
            }


        }));
    MZ.draw = new MZ.ui.draw();

})(jQuery);