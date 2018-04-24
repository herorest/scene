/**
 * @fileOverview 和数组相关的方法.
 */

(function() {
    /**和数组相关的方法
     *@namespace
     *@name MZ.array
     */

    MZ.namespace('MZ.utils.array',
        /**@lends MZ.array */
        MZ.extend({
            /***
             *数组去重
             *@param {Array} arr 数组
             *@example
             *MZ.array.removeRepeat([1,2,3,4,5,1,2])
             *@returns {Array}
             */
            removeRepeat: function(arr) {
                var obj = {},
                    array = [],
                    len = arr.length;
                for (var i = 0; i < len; i++) {
                    obj[arr[i]] = null;
                }
                for (var o in obj) {
                    array.push(o);
                }
                return array;
            }

        }));


    //定义缩写
    MZ.array = new MZ.utils.array();
})();