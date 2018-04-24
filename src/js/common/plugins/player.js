	function Player(el,auto,repeat,list){
		this.el = el;
		this.isPlay = auto;
		this.repeat = repeat;
		this.list = list;
		this.init();
	}
	Player.prototype = {
		init: function(){
			var _this = this,attr = {loop: false, preload: "auto", src: this.el.attr("data-src")};
			this._audio = new Audio;
            for (var i in attr){
                attr.hasOwnProperty(i) && i in this._audio && (this._audio[i] = attr[i]);
            }
			if(this.repeat){
				this._audio.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
				}, false);
			}
            this._audio.load();
			this._audio.volume = 0.8;
			this.el.unbind('click').on('click', function(){
				_this._play();
				return false;
			});
		},

		_play: function(){
			var _this = this;
			if(!this.isPlay){
				$.each(_this.list,function(key,value){
					if(value)
						this._playOff();
				})
				this._audio.play();
				this.el.addClass('on');
				this.isPlay = true;
			}else{
				$.each(_this.list,function(key,value){
					if(value)
						this._playOff();
				})
				this._audio.pause();
				this.el.removeClass('on');
				this.isPlay = false;
			}

		},

		_getState: function(){
			return this.isPlay;
		},

		_playOn: function(){
		    this._audio.play();
			this.el.addClass('on');
			this.isPlay = true;
		},

		_playOff: function(){
			this._audio.pause();
			this.el.removeClass('on');
			this.isPlay = false;
		}
	}

	module.exports = Player;
