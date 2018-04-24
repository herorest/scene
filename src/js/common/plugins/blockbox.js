import * as dataAction from '../../components/editor/data/';

var blockbox = function(box,opts){
	this.$box = box;
	this.opts = opts;
	if(this.opts){
		this.callback = this.opts.callback ? this.opts.callback : {};
	}
	this.bind();
};
blockbox.prototype = {
	bind:function(){
		var _self = this;
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
		}
		var newbox = {
			'box':this.$box,
			'btn':this.opts?this.opts.btn:'',
			'closebtn':this.opts?this.opts.closebtn:''
		};
		var exist = '-1';
		if(dataAction.boxlist.length > 0){
			$.each(dataAction.boxlist,function(index){
				if(this.box[0] == _self.$box[0]){
					exist = index;
					return false;
				}
			});
			if(exist != '-1'){
				dataAction.boxlist[exist] = newbox;
			}else{
				dataAction.boxlist.push(newbox);
			}
		}else{
			dataAction.boxlist.push(newbox);
		}

	}
};

module.exports = blockbox;
