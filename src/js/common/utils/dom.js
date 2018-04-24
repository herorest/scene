/**
 * @fileOverview 和dom相关的方法.
 */

(function() {
    /**和dom相关的方法
     *@namespace
     *@name MZ.dom
     */

    MZ.namespace('MZ.utils.dom',
        /**@lends MZ.dom */
        MZ.extend({
            /***
             *全局隐藏浮层方法，点击body区域隐藏浮层，如果点击区域正好是在浮层上，可根据传进来的options.status判断是否隐藏
             *@param {Object} options 参数集合
             *@param {Object} options.dom 必选，浮层的dom，带上父层的ID，唯一标识
             *@param {Object} options.status 可选，点击区域在浮层上时，判断是否隐藏     true 隐藏   false 不隐藏
             *@param {Object} options.callback 可选，隐藏之后的回调
             *@example
             *MZ.dom.globalHide({dom:'#testDropmenuList',status:true})
             
             */
            globalHide: function(options) {
                var dom = options.dom;

                function hide(e) {
                    var target = $(e.target);
                    //1.(target.parents(dom).length === 0 && $(dom).is(':visible'))，点击除了浮层的其他区域，且浮层本身是可见的
                    //2.optins.status==true，只要是点在body上都隐藏
                    if ((target.parents(dom).length === 0 && $(dom).is(':visible')) || options.status) {

                        $(dom).hide();
                        $('body').unbind('click', hide);
                        if (options.callback) {
                            options.callback()
                        };

                    }
                }
                setTimeout(function() {
                    $("body").bind('click', hide);
                }, 0);

            }

        }));


    //定义缩写
    MZ.dom = new MZ.utils.dom();
})();