var client = require('./client');

var Event = {
	touchtype : function(type){
		switch(type){
			case 'start':return client.ifmobile ? "touchstart" : "mousedown";
			break;
			case 'move':return client.ifmobile ? "touchmove" : "mousemove";
			break;
			case 'end':return client.ifmobile ? "touchend" : "mouseup";
			break;
			default:return type;
			break;
		}
	},
	addListener : function (element, type, handler) {
		try{
			if(element){
				this.guid = 1;
				type = this.touchtype(type);
				//为每一个事件处理函数分派一个唯一的ID
				if (!handler.$$guid) handler.$$guid = this.guid++;
				//为元素的事件类型创建一个哈希表
				if (!element.events) element.events = {};
				//为每一个"元素/事件"对创建一个事件处理程序的哈希表
				var handlers = element.events[type];
				if (!handlers) {
					handlers = element.events[type] = {};
					//存储存在的事件处理函数(如果有)
					if (element["on" + type]) {
						handlers[0] = element["on" + type];
					}
				}
				//将事件处理函数存入哈希表
				handlers[handler.$$guid] = handler;
				//指派一个全局的事件处理函数来做所有的工作
				element["on" + type] = function(event){
					var returnValue = true;
					event = event || fixEvent(window.event);
					//取得事件处理函数的哈希表的引用
					var handlers = this.events[event.type];
					//执行每一个处理函数
					for (var i in handlers) {
						this.$$handleEvent = handlers[i];
						if (this.$$handleEvent(event) === false) {
							returnValue = false;
						}
					}
					return returnValue;
				};

				//为IE的事件对象添加一些“缺失的”函数
				function fixEvent(event) {
					event.preventDefault = function() {
						this.returnValue = false;
					};
					event.stopPropagation = function() {
						this.cancelBubble = true;
					};
					return event;
				};
			}

		}catch(e){
			console.log(e,element);
		}
	},

	removeListener : function(element, type, handler) {
		if(element){
			type = this.touchtype(type);
			//从哈希表中删除事件处理函数
			if (element.events && element.events[type]) {
				delete element.events[type][handler.$$guid];
			}
		}
	},

	addEvent:function(elm, evType, fn, check){
		if(elm){
			var callback  = fn;
			evType = this.touchtype(evType);
			if(check){
				Event.addEvent(elm,'start',function(){
					Event.currentTarget = elm;
				});
				callback = function(e){
					if(Event.currentTarget == elm){
						fn.call(this,e);
					}
				}
			}

			if (elm.addEventListener) {
				elm.addEventListener(evType, callback, false);//DOM2.0
				return true;
			}else if (elm.attachEvent) {
				var r = elm.attachEvent('on' + evType, callback);//IE5+
				return r;
			}else {
				elm['on' + evType] = callback;//DOM 0
			}
		}
	},

	removeEvent : function(elm, evType, fn) {
		if(elm){
			evType = this.touchtype(evType);
			if (elm.removeEventListener) {
				elm.removeEventListener(evType, fn);//DOM2.0
				return true;
			}else if (elm.detachEvent) {
				var r = elm.detachEvent('on' + evType, fn);//IE5+
				return r;
			}else {
				elm['on' + evType] = null;//DOM 0
			}
		}
	},

	stopDefault : function ( e ) {
		if ( e && e.preventDefault )
			e.preventDefault();
		else
			window.event.returnValue = false;
		return false;
	},

	orientationChange : function(){
		switch(window.orientation) {
		　　case 0:
				utils.closeblock('landscape',1);
				break;
		　　case -90:
				utils.openblock('landscape',1);
				break;
		　　case 90:
				utils.openblock('landscape',1);
				break;
		　　case 180:
			　	utils.closeblock('landscape',1);
			　　	break;

		}
	},

	currentTarget: null
};
module.exports = Event;
