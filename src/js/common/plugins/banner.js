/* Created by songjing on 2015/7/7 */
var slideObj = function(){};

slideObj.prototype.setObj = function(options){
	this.options = options;
	this._init();
};
slideObj.prototype._init = function(){
	var defaults = {
		slideWrap	  : $('#banner'),
		slideTarget   : $('#banner').find('li'),
		slideContain  : $('#banner').find('ul'),
		prev		  : '.prev',
		next		  : '.next',
		arrow		  : '.arrow',
		auto		  : true,
		current       : 0,
		direction 	  : 'right',
		duration	  : 800,
		alternation	  : 4200
	},_self = this;
	this.opt	= $.extend({}, defaults, this.options);
	this.maxTarget  = this.opt.slideTarget.length;
	this._resize();
	this._bind();
    this._changeComplete();
	window.onresize = function(){
		_self._resize();
	}
};
slideObj.prototype._change = function(){
	var _self = this;
	if(this.opt.direction == 'right'){
		this.opt.current++;
	}else{
		this.opt.current--;
	}
	if(this.opt.current >= this.maxTarget || this.opt.current < 0){
		this.opt.current = 0;
	}

	this.opt.slideContain.stop().animate({
		'left':-this.opt.current * this.width
	}, {
		duration: this.opt.duration,
		complete: function(){
            _self._changeComplete();
		}
	});
	this.opt.slideTarget.eq(this.opt.current).addClass('current');
};
slideObj.prototype._changeComplete = function(){
    var para = this.opt.slideTarget.eq(this.opt.current).find('.parallax');
    var othpara = this.opt.slideTarget.eq(this.opt.current).siblings().find('.parallax');
    if(para.length > 0){
        para.css("margin-left", "360px").animate({
            'margin-left': "320px",
            'opacity': 'show'
        }, 1000);
    }
    if(othpara.length > 0)
        othpara.hide();
    if(!window.slideTime){
        if(this.opt.auto){
            this._autorun();
        }
    }
};
slideObj.prototype._bind = function(){
	var _self = this;
	$(this.opt.arrow).click(function(){
		if(!_self.opt.slideContain.is(':animated')){
			if(window.slideTime){
				clearTimeout(window.slideTime);
				window.slideTime = null;	
			}
			if($(this).hasClass(_self.opt.prev)){
				direction = 'left';
			}else{
				direction = 'right';
			}
			_self._change();
		}
	})	
};
slideObj.prototype._autorun = function(){
	var _self = this;
    if(_self.maxTarget > 1)
        window.slideTime = setInterval(function(){
            _self._change();
        },this.opt.alternation)
};
slideObj.prototype._resize = function(){
	this.width	= $(window).width();
	this.opt.slideContain.css({
		'width':this.width * this.maxTarget,
		'position':'absolute',
		'top':0,
		'left':-this.opt.current * this.width > 0?0:-this.opt.current * this.width
	});
	this.opt.slideWrap.css({
		'position':'relative'	
	});
	this.opt.slideTarget.css({
		'width':this.width
	});
};

module.exports = new slideObj();