/**
 * @fileOverview 定义tips组件
 */

(function($) {
    /**定义tips组件
     *@namespace
     *@name MZ.tipmessage
     */
    MZ.namespace("MZ.ui.tipmessage",
        /**@lends MZ.tipmessage */
        MZ.extend({
            _getOptions: function(options) {
                var json = {
                    pos: options && options.pos ? options.pos : 'top', //默认在顶部显示
                    type: options && options.type ? options.type : 'success', //默认为成功的提示
                    msg: options && options.message ? options.message : '提示', //默认显示文字“提示”
                    delay: options && options.delay ? options.delay : 500,
                    id: options && options.id ? options.id : parseInt(Math.random() * 1000000)
                };
                return json;
            },
            /**
             *显示加载中的提示，默认为顶部绿色提示
             *@param {Object} options 可选参数集合
             *@param {Number} options.delay 延迟多少毫秒自动消失
             *@param {String} options.pos 位置，顶部or中间
             *@param {String} options.message 提示文本
             *@param {String} options.type 类型，成功or失败    fail or success
             *@param {String} options.id tip的标识，需要手动关闭tip时设置该参数
             *@example
                MZ.tipmessage.show({message:'加载中',delay:1000,pos:'middle',type:'fail'});
                <script>
                 function showTipmessage(pos){
                   MZ.tipmessage.show({message:'加载中',delay:1000,pos:pos,type:'fail'});
                 }
                 </script>
                 <button onclick="showTipmessage('middle')">tips组件（中间）</button>&nbsp;<button onclick="showTipmessage('top')">tips组件（顶部）</button>
             */
            show: function(options) {
                var json = this._getOptions(options),
                    pos = json.pos,
                    type = json.type,
                    msg = json.msg,
                    delay = json.delay,
                    id = json.id;
                    this.delay=delay;
                var cssClass = type == 'success' ? 'tipmessage_success' : 'tipmessage_fail';
                var exist1 = $("#tipmsg" + pos)[0];
                var body = $(document.body);
                if (!exist1) { //判断是否存在tipmsg
                    $(document.body).append('<div id="tipmsg' + pos + '" class="ui_tipmessage"></div>');
                }
                var el = $("#tipmsg" + pos);
                var exist2 = $("#tipmsg" + id)[0];
                if (!exist2) {
                    msg = '<div id="tipmsg' + id + '" class="ui_tipmessage_list">' + msg + '</div>';
                    el.append(msg);
                }
                el.show();
                var child = el.find('#tipmsg' + id);
                child.addClass(cssClass).fadeIn(200);

                var pl = child.css('paddingLeft'),
                    pr = child.css('paddingRight'),
                    pt = child.css('paddingTop'),
                    pb = child.css('paddingBottom');

                var width = child.width(); //tip的宽度，加上paddingLeft和paddingRight
                var height = child.height(); //tip的高度,加上paddingTop和paddingBottom
                var left = (body.width() - width - (parseInt(pl.replace('px', '')) * 2)) / 2;
                var scrollTop=$(window).scrollTop();
                var top = pos == 'top' ? scrollTop : (($(window).height() - height - (parseInt(pt.replace('px', '')) * 2)) / 2)+scrollTop;
                left = $.browser.msie && parseInt($.browser.version) < 8 ? 0 : left;
                el.css({ //设置tip的位置
                    left: left + 'px',
                    top: top + 'px'
                });
                child.width(width);
                if (delay) {
                    this.hide(id);
                }
            },

            /**
             *隐藏顶部加载中的提示
             *@param {String} id 设置tip的ID，用于手动隐藏tip
             *@example
                MZ.tipmessage.hide('loginTip');
             */
            
            hide: function(id) {
                //自动消失
                setTimeout(function() {
                    $('#tipmsg' + id).fadeOut(200);
                }, this.delay)
            }
        })
    );
    MZ.tipmessage = new MZ.ui.tipmessage();
})(jQuery);