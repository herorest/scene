/**
 * @fileOverview 和iframe相关的方法，依赖core/namespace,utils/dom.js
 */
//require('dom.js');
(function() {
    /**和iframe相关的方法
     *@namespace
     *@name MZ.iframe
     */

    MZ.namespace('MZ.utils.iframe',
        /**@lends MZ.iframe */
        MZ.extend({
            /***
             *iframe自适应高度，注意：暂时只支持同域名iframe的自适应
             *@param {String} id   可选，dom的id名，当iframe里的页面样式设置了overflow:hidden;width:100%;height:100%;
                或者其他拿不到body正确高度的特殊情况下，拿iframe里某个dom节点做为高度设置
             *@example
             MZ.iframe.autoHeight()
             <iframe class="iframe_auto_height" width="100%" scrolling="no" src="../../../out/jsdoc/symbols/src/E__GitHome_git_node_jsdoc_doc_template_namespace.js.html" style="border:0;overflow:hidden;"></iframe>
             <script>MZ.iframe.autoHeight()</script>
             */
            autoHeight: function(id) {
                var self = this;
                this.arr = [];
                this.time = 0;
                this.id = id;
                MZ.iframe._addEvent(window, 'load', MZ.iframe._getIframe);
                //如果二秒钟之内还没有响应，有可能window load事件已失去响应，浏览器的BUG暂时无法解决，重新再执行一次
                //超过3次仍然不执行，抛出异常
                setTimeout(function() {
                    if (self.time == 3) {
                        throw new Error("请刷新页面重试，window load事件没有响应");
                        return;
                    }
                    if (self.arr.length == 1) { //说明只是执行了第一次的window load，没有回调成功，后面iframe的load事件没有执行,手动再执行一次
                        MZ.iframe._getIframe();
                    }
                    self.time++;
                }, 2000);

            },
            _getIframe: function() {
                o = document.getElementsByTagName('iframe');
                for (i = 0; i < o.length; i++) {
                    if (/\biframe_auto_height\b/.test(o[i].className)) {
                        MZ.iframe._setHeight(o[i]);
                        MZ.iframe._addEvent(o[i], 'load', MZ.iframe._getIframe);
                    }
                }
            },
            //每隔一秒重新获取iframe内body的高度
            _resizeIframe:function(e){
                var self=this;
                setInterval(function(){
                    var height=self.getHeight(e);
                    e.height = height;
                },1000);
            },
            getHeight:function(e){
                if (e.contentDocument) {
                    var height = e.contentDocument.body.offsetHeight + 16;
                    if (this.id) {
                        height = e.contentDocument.getElementById(this.id).offsetHeight + 16;
                    }
                } else {
                    var height = e.contentWindow.document.body.scrollHeight;
                    if (this.id) {
                        height = e.contentWindow.document.getElementById(this.id).scrollHeight;
                    }
                }
                return height;
            },
            //设置iframe的高度
            _setHeight: function(e) {
                
                var height=this.getHeight(e);
                this._resizeIframe(e);
                e.height = height;
            },
            _addEvent: function(obj, evType, fn) {
                this.arr.push(1); //每执行一次push一次，用来判断window load事件无响应
                if (obj.addEventListener) {
                    obj.addEventListener(evType, fn, false);
                    return true;
                } else if (obj.attachEvent) {
                    var r = obj.attachEvent("on" + evType, fn);
                    return r;
                } else {
                    return false;
                }
            }

        }));


    //定义缩写
    MZ.iframe = new MZ.utils.iframe();
    

})();


