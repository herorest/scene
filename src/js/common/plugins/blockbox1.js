$(function(){
	var boxlist = [],_self = this;
	//支持jq形式调用
	$.fn.blockbox = function(box,opts){
		var $box = typeof box == "string" ? $(box) : box;
		if($box.length === 0 || $(this).length === 0){
			return;
		}
		return new blockbox($box,$(this),opts);
	}
	//创建blockbox，控制按钮点击事件，创建关闭
	var blockbox = function(box,btn,opts){
		this.$box = box;
		this.$btn = btn;
		this.opts = opts;
		if(this.opts){
			this.callback = this.opts.callback ? this.opts.callback : {};
		}
		this.bind();
	};
	blockbox.prototype = {
		bind:function(){
			var _self = this;
			//解除绑定
			this.$btn.unbind();
			//绑定打开
			this.$btn.click(function(){
				if(!_self.$box.is(':visible')){
					_self.$box.fadeIn(200);
					
					if(_self.opts){
						if(_self.opts.showbg){
							if($('.bg').length <= 0){
								$('<div class="bg"></div>').appendTo($('body'));
							}
		                    var b = $('.bg');
							if(!b.is(':visible')){
								b.show();
							}
						}
						if(typeof(_self.callback) === 'function')
							_self.callback();
					}
					
				}else{
					_self.$box.fadeOut(200);
				}
			})
			boxlist.push({
				'box':this.$box,
				'btn':this.$btn,
				'closebtn':this.opts?this.opts.closebtn:''
			});
			this.close();
		},
		close:function(){
			var _self = this;
			if(this.opts && this.opts.closebtn && this.opts.closebtn.length > 0){
				this.opts.closebtn.click(function(){
					_self.$box.fadeOut(200);
					var b = $('.bg');
					if(b.length > 0 && b.is(':visible') && _self.opts.showbg){
						b.fadeOut(200);
					}
				});
			}
		}
	};
	
	
	//判断是否父元素或其本身
	var isParent = function(obj,parentObj){
		while (obj != undefined && obj != null && obj.tagName.toUpperCase() != "BODY"){
			if (obj == parentObj){
				return true;
			}
			obj = obj.parentNode;
		}
		return false;
	};
	
	var evTimeStamp = 0;
	//监听document点击事件
	$(document).click(function(e){
		var now = +new Date();
	    if (now - evTimeStamp < 100) {
	        return;
	    }
		$.each(boxlist,function(){
			if(!this.closebtn){
				if(!isParent(e.target,this.box[0]) && !isParent(e.target,this.btn[0])){
		            if(this.box.is(':visible')){
		            	evTimeStamp = now;
		                this.box.fadeOut(200);
		            }
				}
			}
		})
		//去掉jcrop
//		if(jcropO && !isParent(e.target,$('.pane_type_bg_view')[0])){
//			jcropO.release();
//		}
	})
	
})
