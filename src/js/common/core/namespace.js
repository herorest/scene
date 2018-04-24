/**
 * @fileOverview 核心方法，命名空间
 */
(function() {

    /**核心方法，命名空间
     *@namespace
     *@name MZ
     */
     
    var mz = function() {}
    mz.prototype = 

    /**@lends MZ */
    {
        extend: function(obj) {
            var fn = function(options) {
                if(options){
                    this.options = options ;
                }
            };
            fn.prototype = obj;
            return fn;
        },
        /***
         *命名空间
         *@param {String} namespace 命名的字符串
         *@param {Object} obj 要赋予命名空间的对象
         *@param {Object} win 默认为window对象
         *@example
         *MZ.array.removeRepeat([1,2,3,4,5,1,2])
         *@returns {Object}
         */
        namespace: function(namespace, obj, win) {

            var path = namespace.split(".");
            var target = win || window;
            while (path.length > 0) {
                var p = path.shift();
                if (!target[p]) {
                    if (path.length > 0) {
                        target[p] = {};
                    } else {
                        target[p] = obj || {};
                    }
                }
                target = target[p];
            }
            return target;
        }
    };
    window.MZ = new mz();

    if (!window.console) {

        window.console =
        /**@ignore */
        {
            assert: function() {},
            count: function() {},
            debug: function() {},
            dir: function() {},
            dirxml: function() {},
            error: function() {},
            group: function() {},
            groupCollapsed: function() {},
            groupEnd: function() {},
            info: function() {},
            log: function() {},
            markTimeline: function() {},
            profile: function() {},
            profileEnd: function() {},
            time: function() {},
            timeEnd: function() {},
            timeStamp: function() {},
            trace: function() {},
            warn: function() {}
        }
    }
})();

