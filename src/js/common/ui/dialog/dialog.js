/**
 * @fileOverview 对话框，依赖core/namespace,utils/string.js
 */

(function() {
    //用于弹出层叠加，最多允许5层叠加
    window.MzDialogBzindex = 9996; //弹层z-index
    window.MzDialogLzindex = 9995; //遮罩层z-index
    /**对话框
     *@namespace
     *@name MZ.dialog
     */
    MZ.namespace('MZ.ui.dialog',
        /**@lends MZ.dialog */
        MZ.extend({
            /**自定义样式   MZ.dialog.cssClass='xxxxx_dialog'; 通过设置自定义样式修改dialog的CSS，默认不设置
             * @field
             */
            cssClass: '',
            /**
             *对话框的配置参数
             *@param {Object} options 所有的参数
             *@param {String} options.type 对话框类型，用于生成简单的对话框 'alert' | 'confirm'，复杂的调用base方法
             *@param {Number} options.width 对话框 body的宽度
             *@param {Number} options.height 对话框 body的高度
             *@param {String} options.hdDisplay 对话框 header的显示状态   'none' | ''
             *@param {String} options.ftDisplay 对话框 header的显示状态   'none' | ''
             *@param {String} options.btnSure 对话框 确认按钮的文字
             *@param {String} options.btnCancel 对话框 取消按钮的文字
             *@param {String} options.idSure 对话框 确认按钮的id
             *@param {String} options.idCancel 对话框 取消按钮的id
             *@param {String} options.btnAlign 对话框 按钮的位置显示   'left' | 'right' | 'center'
             *@param {String} options.title 对话框 标题
             *@param {String} options.content 对话框 内容
             *@param {String} options.waiting 点击按钮后ajax请求的等待文字
             *@param {String} options.controlClose 是否自己控制对话框的关闭
             *@param {Function} options.fnSure 点击确定按钮后触发
             *@param {Function} options.fnCancel 点击取消按钮后触发
             *@param {Function} options.callback 生成对话框后的回调，用来控制对话框生成后的一些自定义方法
             *@param {Function} options.alertCallback 点击按钮后的回调，只用于alert方法
             *@param {Function} options.confirmCallback 点击按钮后的回调，只用于confirm方法
             *@returns {Object}
             */
            getOptions: function(options) {
                var self = this;
                var rdm = Math.ceil(Math.random() * 10000000);
                rdm = '_' + rdm;
                this.rdm = rdm;
                return {
                    type: options.type || 'alert',
                    width: options.width || '',
                    height: options.height || '',
                    hdDisplay: options.hdDisplay || '',
                    ftDisplay: options.ftDisplay || '',
                    idSure: options.idSure || '',
                    idCancel: options.idCancel || '',
                    btnSure: options.btnSure || '确定',
                    btnCancel: options.btnCancel || '取消',
                    btnAlign: options.btnAlign || 'right',
                    btnObj: options.btnObj || {},
                    title: options.title || '系统提示',
                    content: options.content || '系统提示',
                    waiting: options.waiting || '',
                    controlClose: options.controlClose || true,
                    cssClass: this.cssClass||options.cssClass,
                    fnSure: options.fnSure || function() {
                        self.close(rdm);
                    },
                    fnCancel: options.fnCancel || function() {
                        self.close(rdm);
                    },
                    callback: options.callback || function() {

                    },
                    alertCallback: options.alertCallback || function() {

                    },
                    confirmCallback: options.confirmCallback || function() {

                    },
                    id: options.id || '',
                    rdm: rdm || ''
                }

            },
            /**
             *初始化dialog
             *@param {Object} options 对话框的配置参数
             *@returns {Object}
             */
            render: function(options, callback) {
                var data = this.getOptions(options);

                this.insertHtml(data);
                this.initEvents(data);
                return this;
            },
            /**
             *插入对话框的dom
             *@param {Object} data 对话框的配置参数
             */
            insertHtml: function(data) {
                var self = this;
                $('body').append(this.tplHtml(data));
                var mzUiDialog = $('#mzUiDialog' + data.rdm);
                mzUiDialog.fadeIn(300);
                var callback = data.callback && data.callback(function() {
                    //ajax生成的DOM，需要在回调里设置对话框位置
                    self.setDialogPosition(mzUiDialog);
                });
                this.setDialogPosition(mzUiDialog);
            },
            setDialogPosition:function(mzUiDialog){
                //设置对话框位置
                var height = mzUiDialog.height();
                var width = mzUiDialog.width();
                var bodyW=$(window).width();
                var bodyH=$(window).height();
                mzUiDialog.css({
                    top:$(window).scrollTop()+(bodyH-height)/2,
                    left:$(window).scrollLeft()+(bodyW-width)/2
                });
            },
            /**
             *绑定事件 确定 | 取消 | 关闭
             *@param {Object} data 对话框的配置参数
             *@param {String} data.rdm 对话框的rdm
             */
            initEvents: function(data) {
                var self = this;
                var rdm = data.rdm;
                var dialog = $('.mzui_dialog');
                dialog.on('click', '.dialog_sure', function() {
                    data.fnSure(self, rdm);
                    data.confirmCallback('ok');
                    data.alertCallback('ok');
                    if (data.controlClose) {
                        self.close(rdm);
                    }
                });
                dialog.on('click', '.dialog_cancel', function() {
                    data.fnCancel(self, rdm);
                    data.confirmCallback('cancel');
                    if (data.controlClose) {
                        self.close(rdm);
                    }
                });
                dialog.on('click', '#mzDialogClose' + rdm, function() {
                    self.close(rdm);
                });


            },
            /**
             *对话框通用方法
             *@param {Object} options 对话框的配置参数
             *@example
             MZ.dialog.base({
                content: 'fffff',
                title: 'gggggg',
                type:'confirm',
                fnSure: function(dialog,rdm) {
                    dialog.close(rdm);
                },
                fnCancel:function(dialog,rdm){
                    dialog.close(rdm);
                }
             });
             <script>
             function dialogBase(){
                MZ.dialog.base({
                    content: 'fffff',
                    title: 'gggggg',
                    type:'confirm',
                    fnSure: function(dialog,rdm) {
                        dialog.close(rdm);
                    },
                    fnCancel:function(dialog,rdm){
                        dialog.close(rdm);
                    }
                 });
             }
             </script>
             <button onclick="dialogBase()">对话框通用方法</button>
             */

            base: function(options, callback) {
                this.render(options, callback);
            },
            /**
             *对话框alert方法
             *@param {String} content 对话框内容
             *@param {String} title 对话框标题
             *@param {Function} callback 对话框点击确定后的回调
             *@example
             MZ.dialog.alert('xxxx', 'uuuuu');
             <script>
             function dialogAlert(){
               MZ.dialog.alert('xxxx', 'uuuuu');
             }
             </script>
             <button onclick="dialogAlert()">对话框alert方法</button>
             */
            alert: function(content, title, callback) {
                var options = {
                    content: content,
                    title: title,
                    width: 400,
                    alertCallback: callback
                };
                options.type = 'alert';
                this.render(options);
            },
            /**
             *对话框confirm方法
             *@param {String} content 对话框内容
             *@param {String} title 对话框标题
             *@param {Function} callback 对话框点击确定或者取消后的回调
             *@example
             MZ.dialog.confirm('xxxx', 'uuuuu',function(action){
                console.log(action)//action=='ok' or 'cancel'
             });
             <script>
             function dialogConfirm(){
               MZ.dialog.confirm('xxxx', 'uuuuu',function(action){
                console.log(action)//action=='ok' or 'cancel'
               });
             }
             </script>
             <button onclick="dialogConfirm()">对话框confirm方法</button>
             */
            confirm: function(content, title, callback) {
                var options = {
                    content: content,
                    title: title,
                    width: 600,
                    confirmCallback: callback
                };
                options.type = 'confirm';
                this.render(options);
            },
            /**
             *生成对话框的dom
             *@param {Object} data 对话框的配置参数
             *@returns {String}
             */
            tplHtml: function(data) {
                var height = $(document).height();
                var type = data.type;
                var ftHtml = '';
                if (type == 'alert') {
                    ftHtml = this.ftSureTplHtml();
                }
                if (type == 'confirm') {
                    ftHtml = this.ftSureTplHtml() + this.ftCancelTplHtml();
                }
                if($('.mzui_dialog').length > 0){
                	MzDialogBzindex = MzDialogBzindex + 1;
                	MzDialogLzindex = MzDialogLzindex + 1;
                }
                var html = ['<div id="mzUiDialog{rdm}" class="mzui_dialog {cssClass}" style="width:{width}px;height:{height}px; display:none;z-index:' + MzDialogBzindex + ';">',
                    '<div class="dialog_hd" style="display:{hdDisplay};">',
                    '<a href="javascript:;" id="mzDialogClose{rdm}" class="mz_dialog_close"></a>',
                    '<h3>{title}</h3>',
                    '</div>',
                    '<div class="dialog_bd" id="{id}">',
                    '<div class="dialog_con modal-body">{content}</div>',
                    '</div>',
                    '<div class="dialog_ft" style="text-align:{btnAlign};display:{ftDisplay};">',
                    ftHtml,
                    '</div>',
                    '</div>',
                    '<div class="mzui_dialog_layer" style="z-index:' + MzDialogLzindex + ';height:' + height + 'px;"></div>'
                ].join("");
                html = MZ.string.format(html, data);
                return html;
            },
            /**
             *生成对话框的确定按钮
             *@returns {String}
             */
            ftSureTplHtml: function() {
                var html = [
                    '<a href="javascript:;" id="{idSure}" class="dialog_sure btn_normal" title="">{btnSure}</a>'
                ].join("");
                return html;
            },
            /**
             *生成对话框的取消按钮
             *@returns {String}
             */
            ftCancelTplHtml: function() {
                var html = [
                    '<a href="javascript:;" id="{idCancel}" class="dialog_cancel btn_normal" title="">{btnCancel}</a>'
                ].join("");
                return html;
            },
            /**
             *关闭对话框
             *@param {String} rdm  对话框的rdm
             */
            close: function(rdm) {
                $('#mzUiDialog' + rdm).next().fadeOut(100);
                $('#mzUiDialog' + rdm).fadeOut(100);
                //延时一点remove，关闭之前有可能要获取DOM节点
                setTimeout(function() {
                    $('#mzUiDialog' + rdm).next().remove();
                    $('#mzUiDialog' + rdm).remove();
                }, 200)
            }

        }));

    //定义缩写
    MZ.dialog = new MZ.ui.dialog();
    //MZ.dialog.cssClass = ''; //自定义UI

})();