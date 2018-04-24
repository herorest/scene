//载入器
function wrLoading(objname,filearray,callback,type){
    this.callback = callback;
    this.objname = objname;
    this.filearray = filearray;
    this.type = type;
    this.parent = parent;
    this.init();
    (filearray && filearray.length > 0) ? this.loadNext() : this.onlyshow();
}
wrLoading.prototype = {
	loadList : {},
    loaded: 0,
    retried: 0,
    init: function(){
        this.obj = $(this.objname);
    },
    show: function(){
        this.obj.fadeIn(100);
    },
    hide: function(fn){
        var This = this;
        if(this.type){
            this.obj.fadeOut(100,function(){
				fn();
            });
        }else{
           fn();
        }
    },
    onlyshow: function(){
        var This = this;
        this.show();
        setTimeout(function(){This.hide(This.callback);},100);
    },
	loadNext :function(){
		var This = this;
		if(This.filearray[This.loaded]){
			var ext = This.checkext(This.filearray[This.loaded]);
			if(ext == 'img')
				This.getImgNext();
			else if(ext == 'audio')
				This.getAudioNext();
		}
	},
	MovePoint: function(That){
		That.loaded++;
		if(That.checkProcess())
			return false;
		if(!That.type && That.obj.find('.percent').length > 0){
			var p = Math.ceil(That.loaded / That.filearray.length * 100);
			That.obj.find('.percent').css('width', p + "%");
		}
		That.retried = 0;
		setTimeout(function(){
			That.loadNext();
		},1);
	},
    getImgNext: function (src) {
		var This = this;
        var oImg = new Image();
        if(src)
        	oImg.src = src + This.filearray[This.loaded];
        else
        	oImg.src = This.filearray[This.loaded];
        if(oImg.complete){
            This.makeloadArr(oImg);
            This.MovePoint(This);
        }else{
            oImg.onload = function() {
    			This.makeloadArr(this);
                This.MovePoint(This);
            };
            oImg.onerror = function() {
                This.retried++;
                if (This.retried < 3) {
                    This.getImgNext();
                } else {
                    This.MovePoint(This);
                }
            };
        }
    },
	getAudioNext: function(src){
		var This = this;
		var audio = new Audio();
		audio.src = src + This.filearray[This.loaded];
		audio.load();
		audio.addEventListener('canplaythrough',function(){
			This.makeloadArr(this);
            This.MovePoint(This);
        });
		audio.addEventListener('error',function(){
			This.retried++;
            if (This.retried < 3) {
                This.getAudioNext();
            } else {
                This.MovePoint(This);
            }
        });
	},
	makeloadArr:function(obj){
		var This = this;
		This.loadList[This.filearray[This.loaded].id] = obj;
	},
	checkProcess: function(){
		var This = this;
		if (This.loaded >= This.filearray.length) {
            if(!This.type && This.obj.find('.percent').length > 0 )
                This.obj.find('.percent').css('width',"100%");
            setTimeout(function(){
                This.hide(This.callback);
            },100);
            This.loaded = 0;
            This.retried = 0;
            return true;
        }
		return false;
	},
	getLoadArr: function(){
		return this.loadList;
	},
	checkext: function(name){
		var arrext = name.split('.');
		var tmpext = arrext[arrext.length-1].toLowerCase();
		if('mp3|wav|wma|ogg'.indexOf(tmpext) > -1)
			return 'audio';
		if('jpg|gif|bmp|png'.indexOf(tmpext) > -1)
			return 'img';
	}
};

module.exports = wrLoading;
