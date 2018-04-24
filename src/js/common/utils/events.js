/**
 * @fileOverview 和事件相关的方法.
 */

(function() {
    /**和事件相关的方法
     *@namespace
     *@name MZ.events
     */

    MZ.namespace('MZ.utils.events',
        /**@lends MZ.events */
        MZ.extend({

            /**
             *keycode常量
             *@filed
             */
            keycode: { //浏览器版本不一样 keyCode会不一样
                a: 65,
                c: 67,
                x: 88,
                v: 86,
                enter: 13,
                space: 32,
                tab: 9,
                up: 38,
                down: 40,
                left: 37,
                right: 39,
                del: 46,
                backspace: 8,
                //分号
                semicolon: ($.browser.mozilla || $.browser.opera) ? 59 : 186,
                //逗号
                comma: 188,
                esc: 27
            },
            stopEvent: function(e) {
                if (!e) {
                    e = this.getEvent();
                }
                if (e) {
                    if (e.stopPropagation) {
                        e.stopPropagation();
                        e.preventDefault();
                    } else {
                        e.cancelBubble = true;
                        e.returnValue = false;
                    }
                }
            }

        }));


    //定义缩写
    MZ.events = new MZ.utils.events();
})();