/**
 * @fileOverview 定义验证组件，依赖core/namespace,jquery
 */
(function($) {
    /**定义验证组件
     *@namespace
     *@name MZ.validate
     */
    MZ.namespace("MZ.ui.validate",
        MZ.extend({
            /**
             *初始化入口，render
             *@param {Object}   options 可选参数集合
             *@param {Object}   options.wrap 验证区域外层容器
             *@param {Object}   options.rules 验证的规则
             *@param {Object}   options.rules.obj rules内的名值对，必须与form里面的表单元素name一致
             *@param {bool}     options.rules.obj.required 目前仅支持required为true的验证
             *@param {RegEx}    options.rules.obj.check 注意check和checkfun只能同时存在一个，check为简单正则验证，checkfun为函数验证，通过返回true or false
             *@param {function} options.rules.obj.checkfun 同上
             *@param {Object}   options.rules.obj.message 分别对应 未输入、不符合check或checkfun、默认显示，这三种情况的文本
             *@param {function} options.callback 验证通过时的回调函数
             *@example
             *
                MZ.validate.render({
                    wrap:$('#validate'),
                    rules:{
                        telphone:{
                            required:true,
                            check:/(^1[3|5|8|7][0-9]{9}$)|(^(0\d{2,3}-)?\d{7,8})$/,
                            message:{required:'请输入联系电话',check:'支持座机及手机。座机除区号外7-8位，-区隔区号',placeholder:'XXXX-XXXXXXX或XXXXXXXXXXX'}
                        },
                        price:{
                             required:true,
                             checkfun:checkPrice,
                             message:{required:'请输入CPD单价',check:'CPD单价不能低于本位置最低价格'}
                        },
                        apply:{
                            required:true,
                            message:{required:'必须同意《Flyme推广服务协议》'}
                        }
                     },
                     callback:function(){

                     }
                })

             *@example js:

                function checkPrice(obj){
                    if(obj[0].value.match(/\d+/)){
                        if(...){
                            return false;
                        }else{
                            return true;
                        }
                    }else{
                        return false;
                    }
                }

             *@example html:

                <div class="form_detail" id="validate">
                    <dl>
                        <dd class="clearfix">
                            <span class="t">电话号码：</span>
                            <span class="d clearfix"><input type="text" name="telphone"></span>
                            <span class="em"></span>
                        </dd>
                        <dd class="clearfix">
                            <span class="t h">推广应用：</span>
                            <span class="d clearfix"><input type="text" name="price"></span>
                            <span class="em"></span>
                        </dd>
                        <dd class="clearfix">
                            <label><input type="checkbox" name="apply" value="ture" checked><span>我已阅读并同意<a href="#">《Flyme推广服务协议》</a></span></label>
                            <span class="em"></span>
                        </dd>
                    </dl>
                </div>
             *
             */
            render : function(options){
                this.options = options;
                this._supportFun();
                this._init();
                this._bind();
            },
            _init : function(){
                var defaults = {
                    self			: $(this),
                    wrap	  		: $('#validate'),
                    lineWrap        : 'dd',
                    defaultClass	: 'default',
                    errorClass		: 'error',
                    submitClass		: 'submit',
                    callback		: function(){},
                    rules			: {}
                },_self = this;

                this.opt = $.extend({}, defaults, this.options);
                this.canSubmit = true;

                //初始化得到所有表单元素
                this.checkObj = (function(){
                    var o = [];
                    $.each(_self.opt.rules,function(key){
                        o.push({name : key,obj : _self.opt.wrap.find('input[name='+key+']'),value:''});
                        if(_self.opt.rules[key].message.placeholder){
                            _self.setPlaceHolder(_self.opt.wrap.find('input[name='+key+']'),_self.opt.rules[key].message.placeholder);
                            _self.opt.wrap.find('input[name='+key+']').addClass(_self.opt.defaultClass);
                        }
                    });
                    return o;
                })()
            },
            /**
             *主要验证模块
             */
            _checkAction : function(input){
                var o = input,_self = this;
                var radio = _self.isRadio(input);
                var checkbox = _self.isCheckbox(input);
                if(_self.opt.rules[o.name].required){
                    if(checkbox){
                        o.value = '';
                        $.each(o.obj,function(){
                            if($(this).attr("checked")){
                                o.value += $(this).val()+"|";
                            }
                        })
                    }else if(radio){
                        $.each(o.obj,function(){
                            if(this.checked){
                                o.value = this.value;
                            }
                        })
                    }else{
                        o.value = o.obj.val();
                    }
                    if(!o.value || o.value == '' || o.value == _self.opt.rules[o.name].message.placeholder){
                        _self.showMessage(o.obj,_self.opt.rules[o.name].message.required,true);
                    }else{
                        if(_self.opt.rules[o.name].check){
                            if(o.value.match(_self.opt.rules[o.name].check)){
                                _self.showMessage(o.obj,'');
                            }else{
                                _self.showMessage(o.obj,_self.opt.rules[o.name].message.check,true);
                            }
                        }else if(_self.opt.rules[o.name].checkfun && typeof(_self.opt.rules[o.name].checkfun) == "function"){
                            var result = _self.opt.rules[o.name].checkfun(o.obj);
                            _self.canSubmit = result && _self.canSubmit;
                            if(!result){
                                _self.showMessage(o.obj,_self.opt.rules[o.name].message.check,true);
                            }else{
                                _self.showMessage(o.obj,'');
                            }
                        }else{
                            _self.showMessage(o.obj,'');
                        }
                    }
                }
            },
            /**
             *部分表单元素绑定事件，以便立刻检测
             */
            _bind : function(){
                var _self = this;
                //绑定所有表单项目验证
                $.each(_self.checkObj,function(){
                    var input = this;
                    var checkbox = _self.isCheckbox(input);
                    var radio = _self.isRadio(input);
                    if(checkbox){
                        if(/msie/.test(navigator.userAgent.toLowerCase())){
                            input.obj.click(function(){
                                this.blur();
                                this.focus();
                            })
                        }
                        input.obj.change(function(){
                            _self._checkAction(input);
                        })
                    }else if(radio){

                    }else{
                        if(_self.opt.rules[input.name].check){
                            input.obj.keyup(function(){
                                _self._checkAction(input);
                            });
                            //失去焦点
                            input.obj.blur(function(){
                                _self.usePlaceHolder(input);
                                _self._checkAction(input);
                            });
                        }else{
                            input.obj.blur(function(){
                                _self.usePlaceHolder(input);
                                _self._checkAction(input);
                            });
                        }
                        input.obj.keydown(function(){
                            $(this).removeClass('default');
                        });
                        input.obj.focus(function(){
                            _self.usePlaceHolder(input);
                        });
                    }
                });
                //绑定提交按钮
                $('.'+_self.opt.submitClass).click(function(){
                    _self._submitForm();
                });
            },
            /**
             *提交表单
             */
            _submitForm : function(){
                var _self = this;
                this.canSubmit = true;
                $.each(_self.checkObj,function(){
                    _self._checkAction(this);
                });
                if(_self.canSubmit){
                    if(typeof(_self.opt.callback) == 'function')
                        _self.opt.callback();
                };
            },
            /**
             *支撑函数，包括字符串长度计算、input类型判断、placeholder等
             */
            _supportFun : function(){
                this.checkLength = function(input){
                    var len = 0;
                    var val = input[0].value;
                    var length = val.length;
                    for (var i = 0; i < length; i++) {
                        if (val[i].match(/[^\x00-\xff]/ig) != null)
                            len += 2;
                        else
                            len += 1;

                        if (len/2 > length)
                            break;
                    }
                    if(len < 40)
                        return true;
                    else
                        return false;
                };
                //判断是否为checkbox
                this.isCheckbox = function(o){
                    var checkbox = false;
                    if(o.obj[0].type == 'checkbox')
                        checkbox = true;
                    else
                        checkbox = false;
                    return checkbox;
                };
                //判断是否为radio
                this.isRadio = function(o){
                    var radio = false;
                    if(o.obj[0].type == 'radio'){
                        radio = true;
                    }else{
                        radio = false;
                    }
                    return radio;
                };
                //显示信息
                this.showMessage = function(obj,mess,error){
                    obj.parents('dd').find('.em').html(mess);
                    if(error){
                        obj.addClass(this.opt.errorClass);
                        this.canSubmit = false;
                    }else{
                        obj.removeClass(this.opt.errorClass);
                        this.canSubmit = (true && this.canSubmit);
                    }
                };
                //初始化提示文字
                this.setPlaceHolder = function(input,mess){
                    input.val(mess);
                };
                //写回提示文字或者清空
                this.usePlaceHolder = function(input){
                    var o = input;
                    if(o.obj.val() == ''){
                        this.setPlaceHolder(o.obj,this.opt.rules[o.name].message.placeholder);
                        o.obj.addClass(this.opt.defaultClass);
                    }else if(o.obj.val() == this.opt.rules[o.name].message.placeholder){
                        this.setPlaceHolder(o.obj,'');
                        o.obj.removeClass(this.opt.defaultClass);
                    }
                };
            }
        })
    );
    MZ.validate = new MZ.ui.validate();
})(jQuery);

