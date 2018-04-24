require('main');
require('plugins/cropper');
require('plugins/jcrop');
require('plugins/event');
var Panel = require('editor/panelConfig');
var eles = require('editor/eleConfig');
var dates = require('common/utils/date');
var tip = require('common/ui/tip-message/tipmessage');
var rightmenu = require('plugins/rightmenu');

"use strict";

var elementObj = function(historyO,editorO){
	this.editorO = editorO;
	this.historyO = historyO;
}
elementObj.prototype = {
	render:function(page){
		this.bindEle(page);
	},
	
	/**
	 * bindEle 设定当前页、绑定当前页元素的边缘拖拽
	 * @param {num} page 面板类型
	 */
	bindEle:function(page){
		var _self = this;
		var pageO = $('.e_page');
		var pageLi = pageO.find('li');
		var contain = $('#e_container');
		var currentPage = null;
		var handel = '.edit_handle';
		var offsetTop = contain.offset().top;
			offsetLeft = contain.offset().left;
		
		if(page || page === 0){
			if(typeof(page) === 'number'){
				currentPage = pageLi.eq(page-1);
			}else{
				currentPage = pageO.find(page);
			}
		}else{
			console.log('eles can not be binded');
			return ;
		}
		
		//边缘拖拽
		$(handel).live("dragstart",function( ev, dd ){
			var e = $(this).parent();
			var p = e.parents('.section_ele');
			var ele = p.find('.ele');
			var img = ele.find('img');
			if(!p.hasClass('active')){
				return;
			}
			offsetTop = _self.target.offset().top;
			offsetLeft = _self.target.offset().left;
			var w = parseFloat(ele.width()),
				h = parseFloat(ele.height()),
				l = parseFloat(p.css('left')) ? parseFloat(p.css('left')) : 0,
				t = parseFloat(p.css('top')) ? parseFloat(p.css('top')) : 0,
				iw = parseFloat(img.width());
			ele.attr('data-width',w).attr('data-height',h).attr('data-left',l).attr('data-top',t).attr('data-img-width',iw);
		});
		
		$(handel).live("dragend",function( ev, dd ){
			var e = $(this).parent();
			var p = e.parents('.section_ele');
			if(!p.hasClass('active')){
				return;
			}
		});
		
		$(handel).live("drag",function( ev, dd){
			var t = $(this);
			var e = t.parent();
			var p = e.parents('.section_ele');
			var ele = p.find('.ele');
			var img = ele.find('img');
			if(!p.hasClass('active')){
				return;
			}
			var dragType = p.attr('class').match(/skew|horz/)[0];
			var dragWay = t.attr('class').match(/edit_handle(\S+)/)[1];
			var sizzle = {
				left : parseFloat(ele.attr('data-left')),
				top: parseFloat(ele.attr('data-top')),
				width: parseFloat(ele.attr('data-width')),
				height: parseFloat(ele.attr('data-height')),
				imgw:parseFloat(ele.attr('data-img-width'))
			}
			var delta = {
				x:dd.deltaX / 0.65,
				y:dd.deltaY / 0.65
			}
			
			var pleft,ptop,elew,eleh,imgw;
			
			//横向拖拽
			if(dragType === 'horz'){
				//左向
				if(dragWay === '1'){
					pleft = sizzle.left + delta.x;
					elew = sizzle.width - delta.x;
				//右向
				}else{
					elew = sizzle.width + delta.x;
				}
			//斜向拖拽
			}else{
				//图片类型
				if(_self.type === 'img' || _self.type === 'shape'){
					var img = ele.find('img') || ele.find('.mask');
					if(dragWay === '1'){
						pleft = sizzle.left + delta.x;
						ptop = sizzle.top + delta.y;
						elew = sizzle.width - delta.x;
						eleh = sizzle.height - delta.y;
						imgw = sizzle.imgw - delta.x;
					}else if(dragWay === '2'){
						ptop = sizzle.top + delta.y;
						elew = sizzle.width + delta.x;
						eleh = sizzle.height - delta.y;
						imgw = sizzle.imgw + delta.x;
					}else if(dragWay === '3'){
						elew = sizzle.width + delta.x;
						eleh = sizzle.height + delta.y;
						imgw = sizzle.imgw + delta.x;
					}else if(dragWay === '4'){
						pleft = sizzle.left + delta.x;
						elew = sizzle.width - delta.x;
						eleh = sizzle.height + delta.y;
						imgw = sizzle.imgw - delta.x;
					}
				}
			}
			
			//写入样式
			p.css('position','absolute');
			
			var resize = {};
			if(pleft || pleft === 0){
				p.css('left',pleft);
				resize['left'] = pleft+'px';
			}
			if(ptop || ptop === 0){
				p.css('top',ptop);
				resize['top'] = ptop+'px';
			}
			if(elew || elew === 0){
				ele.css('width',elew);
				resize['width'] = parseInt(elew)+'px';
			}
			if(eleh || eleh === 0){
				ele.css('height',eleh);
				resize['height'] = parseInt(eleh)+'px';
			}
			if((imgw || imgw === 0) && img.length > 0){
				img.css('width',imgw);
				resize['img-width'] = parseInt(imgw)+'px';
			}
			
			_self.writeMultiEleAttr(resize);
			
			//针对拖动特别处理
			$('.e_attribute .sizew').val(resize['width']);
			$('.e_attribute .sizeh').val(resize['height']);

			
		});
		
		//默认选择当前页背景
		this.choseEle($('#e_container .section_bg'),'bg');
		
	},
	/**
	 * touchEle 元素点击事件，绑定全局
	 * 支持后加入的元素绑定
	 */
	touchEle:function(){
		var _self = this;
		var contain = $('#e_container');
		var currentPage = null;
		var eleO_class = '.ele';
		var eleOP_class = '.section_ele';
		var handel = '.edit_handle';
		var offsetTop = contain.offset().top;
			offsetLeft = contain.offset().left;
		var startPos = {left:0,top:0};
		var startX = 0,startY = 0;
		var rm = null;
		var contextItem = null;
		
		//右键菜单
		$(document).on("contextmenu",function(ev){
			var t = $(ev.target);
			if(t.parents('#e_container').length > 0){
				if(t.hasClass('section_ele') || t.parents('.section_ele').length > 0){
					//右键点击
					if(ev.which == 3){
						if(t.hasClass('section_ele')){
							contextItem = t;
						}else{
							contextItem = t.parents('.section_ele');
						}
						if(rm && ev.target === rm.target){
							rm.show(ev);
						}else{
							if(contextItem.hasClass('section_bg')){
								rm = new rightmenu(ev,{
								    menuList: [
								    	{ menuName: "粘贴", menuClass:'rightMenuPaste'}
								    ]
								});
							}else{
								rm = new rightmenu(ev,{
								    menuList: [
								    	{ menuName: "置顶", menuClass:'rightMenuUpest'},
								    	{ menuName: "上移一层", menuClass:'rightMenuUp'},
								    	{ menuName: "下移一层", menuClass:'rightMenuDown'},
								    	{ menuName: "置底", menuClass:'rightMenuDownest'},
								    	{ menuName: "复制", menuClass:'rightMenuCopy'},
								        { menuName: "删除", menuClass:'rightMenuDel'}
								    ]
								});
							}
						}
						ev.preventDefault();
						return false;
					}
				}
			}
		});

		//元素点击切换面板 、元素拖拽、读取属性
		$(document).on("mousedown",function(ev){
			if(ev.target){
				var t = $(ev.target);
				if(t.parents('#e_container').length > 0){
					if(t.hasClass('section_ele') || t.parents('.section_ele').length > 0){
						//左键点击
						if(ev.which === 1){
							if(t.hasClass('edit_handle') || t.parents('.edit_handle').length > 0){
								return;
							}
							var p = t.parents(eleOP_class) || t;
							if(!p.hasClass('active')){
								_self.choseEle(p,p.data('type'));
							}
							p.addClass('move');
							offsetTop = p.position().top;
							offsetLeft = p.position().left;
							startX = ev.pageX;
							startY = ev.pageY;
							startPos = {left:p.css('left'),top:p.css('top')};
							ev.preventDefault();
						}
					}
				}
				if(t.hasClass('rightMenuCopy') && contextItem){
					_self.copyEle(contextItem);
				}
				if(t.hasClass('rightMenuPaste')){
					_self.pasteEle(_self.editorO.copyJson);
				}
				if(t.hasClass('rightMenuDel') && contextItem){
					_self.delEle(contextItem,'text');
				}
				if(t.hasClass('rightMenuUpest') && contextItem){
					_self.changeIndex(contextItem,'upest');
				}
				if(t.hasClass('rightMenuDownest') && contextItem){
					_self.changeIndex(contextItem,'downest');
				}
				if(t.hasClass('rightMenuDown') && contextItem){
					_self.changeIndex(contextItem,'down');
				}
				if(t.hasClass('rightMenuUp') && contextItem){
					_self.changeIndex(contextItem,'up');
				}
				if(rm)
					rm.hide();
			}
		});
		
		$(document).on("mousemove",function(ev){
			if(_self.target[0]){
				if(_self.target.hasClass('move')){
					var p = _self.target;
					if(!p.hasClass('active')){
						return;
					}
					if(p.hasClass('section_bg')){
						return;
					}
					var offsetY = ev.pageY - startY , offsetX = ev.pageX - startX;			
					var t = parseInt((offsetY + offsetTop) / 0.65),l = parseInt((offsetX + offsetLeft) / 0.65);
					p.css({
						position:'absolute',
						top: t,
						left: l
					});
					//针对拖动特别处理
					$('.e_attribute .positionx').val(l+'px');
					$('.e_attribute .positiony').val(t+'px');
					_self.writeMultiEleAttr({
						'top':t+'px',
						'left':l+'px'
					});
				}
			}
		});
		
		$(document).on("mouseup",function(ev){
			if(_self.target[0]){
				if(_self.target.hasClass('move')){
					var p = _self.target;
					p.removeClass('move');
					//_self.historyO.insert({'name':'moveEle','old':startPos,'new':{x:p.css('left'),y:p.css('top')}});
				}
			}
		});
		//快捷删除元素
		$(document).keydown(function(e){
			if(e.keyCode === 46){
				_self.delEle(_self.target,_self.type);
			}
		});
		
	},
	/**
	 * 选择不同的panel并初始化
	 */
	choseEle:function(target,type){
		var _self = this;
		var attrPane = $('.e_attribute');
		//设置当前元素
		this.target = target;
		this.type = type;
		this.target.addClass('active').siblings().removeClass('active');
		//初始化模板
		attrPane.html(Panel.common);
		//关闭图片框
		if($('.pic_store').is(':visible'))
			$('.pic_store').find('.close').click();
			
		switch(type){
			case 'bg':
				_self.setChoseEle(type,[
					{
						'name':'背景',
						'panel':'background'
					}
				],[this.setChangePanel,this.readEleAttr,this.setBackground,this.delBackground,this.setBlock]);
				break;
			case 'text':
				_self.setChoseEle(type,[
					{
						'name':'文本',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
			case 'img':
				_self.setChoseEle(type,[
					{
						'name':'图片',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr,this.setCropper,this.setBlock]);
				break;
			case 'shape':
				_self.setChoseEle(type,[
					{
						'name':'形状',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
			case 'btn':
				_self.setChoseEle(type,[
					{
						'name':'按钮',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
			case 'link':
				_self.setChoseEle(type,[
					{
						'name':'链接',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
				
			case 'tel':
				_self.setChoseEle(type,[
					{
						'name':'电话',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
				
			case 'zan':
				_self.setChoseEle(type,[
					{
						'name':'互动',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
				
			case 'countdown':
				_self.setChoseEle(type,[
					{
						'name':'倒计时',
						'panel':type
					},{
						'name':'动作',
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr,this.setCountDown]);
				break;
				
			default:
				_self.setChoseEle(type,[
					{
						'name':type,
						'panel':type
					},{
						'name':type,
						'panel':'animate'
					},
				],[this.setChangePanel,this.readEleAttr]);
				break;
		}
		
	},
	/**
	 * addEle 插入元素
	 * @param {string} type 插入元素的类型
	 */
	addEle:function(type){
		var h = this.makeEleHtml(type,false);
		var o = $(h);
		//插入
		o.appendTo($('#e_container'));
		
		//居中
		var cw = $('.e_d_scale').width(),ch = $('.e_d_scale').height();
		var w = o.outerWidth(),h = o.outerHeight();
		o.css({
			top:(ch - h)/2,
			left:(cw - w)/2
		});
		this.choseEle(o,o.data('type'));
		o.trigger('click');
		
		//writeEleAttr
		this.newEleAttr['top'] = (ch - h)/2 + 'px';
		this.newEleAttr['left'] = (cw - w)/2 + 'px';
		this.editorO.addToPageJson(this.newEleAttr);
	},
	/**
	 * 删除元素
	 * @param {string} type 插入元素的类型
	 */
	delEle:function(target,type){
		if(!target){
			return ;
		}
		if(type === 'bg'){
			return;
		}
		//序号
		var num = ~~target.attr('data-num');
		//同类
		var eles = target.siblings('.section_ele');
		//遍历
		$.each(eles,function(){
			var numT = ~~$(this).attr('data-num');
			if(numT > num){
				$(this).attr('data-num',numT-1);
			}
			
		})
		
		target.remove();
		this.editorO.deletEleJson(target.attr('data-num'));
		this.choseEle($('#e_container .section_bg'),'bg');
	},
	/**
	 * 复制元素
	 * @param {obj} target 复制的元素
	 * @param {string} type 复制的元素的类型
	 */
	copyEle:function(target,type){
		if(!target){
			return ;
		}
		if(type === 'bg'){
			return;
		}
		var num = target.attr('data-num');
		this.editorO.copyEleJson(target.attr('data-num'));
	},
	/**
	 * 粘贴元素
	 * @param {json} eleJson 复制的元素
	 */
	pasteEle:function(eleJson){
		if(!eleJson){
			return ;
		}
		var edit = {};
		var type = eleJson.type;
		edit[type] = {};
		edit[type].dragType = eles[type].dragType;
		edit[type].edit = eleJson;
		
		var h = this.makeEleHtml(type,edit,false);
		var o = $(h);
		var num = o.attr('data-num');
		eleJson['num'] = num;
		eleJson['z-index'] = num;
		
		//插入并修正z-index
		o.css('z-index',num).appendTo($('#e_container'));
		
		this.choseEle(o,o.data('type'));
		o.trigger('click');
		this.editorO.addToPageJson(eleJson);
	},
	
	/**
	 * 修改页面元素层级
	 * @param {object} target 元素
	 * @param {string} type 修改层级的类型
	 */
	changeIndex:function(target,type){
		if(!target || !type){
			return ;
		}
		var _self = this;
		var elelist = target.parent().find('.section_ele');
		var maxindex = 0,minindex = 0;
		var indexlist = [] , itemlist = [];
		var oldindex = parseInt(target.css('z-index')),newindex = 0;
		var targetindex = 0;
		
		//z-index排序
		var sortIndex = function(a,b){
			return a>b?1:0;
		}
		//元素排序
		var sortEle = function(a,b){
			return parseInt(a.css('z-index'))>parseInt(b.css('z-index'))?1:0;
		}
		$.each(elelist,function(){
			var i = parseInt($(this).css('z-index'));
			if(i || i === 0){
				indexlist.push(i);
				itemlist.push($(this));
			}
		})
		
		//排序
		indexlist.sort(sortIndex);

		//处理
		if(type === 'upest'){
			$.each(elelist,function(){
				var i = parseInt($(this).css('z-index'));
				if(i > oldindex){
					$(this).css('z-index',i-1);
					_self.editorO.refreshPageJson($(this),'z-index',i-1);
				}
			});
			newindex = indexlist[indexlist.length-1];
		}else if(type === 'downest'){
			$.each(elelist,function(){
				var i = parseInt($(this).css('z-index'));
				if(i < oldindex){
					$(this).css('z-index',i+1);
					_self.editorO.refreshPageJson($(this),'z-index',i+1);
				}
			});
			newindex = indexlist[0];
		}else if(type === 'up'){
			itemlist.sort(sortEle);
			//获取当前key
			$.each(itemlist,function(key,value){
				if(target[0] === value[0]){
					targetindex = key;
					if(itemlist[targetindex + 1]){
						itemlist[targetindex + 1].css('z-index',indexlist[targetindex]);
						_self.editorO.refreshPageJson(itemlist[targetindex + 1],'z-index',indexlist[targetindex]);
					}
				}
					
			});
			if(itemlist[targetindex + 1]){
				newindex = indexlist[targetindex + 1];
			}else{
				newindex = indexlist[targetindex];
			}
		}else if(type === 'down'){
			itemlist.sort(sortEle);
			//获取当前key
			$.each(itemlist,function(key,value){
				if(target[0] === value[0]){
					targetindex = key;
					if(itemlist[targetindex - 1]){
						itemlist[targetindex - 1].css('z-index',indexlist[targetindex]);
						_self.editorO.refreshPageJson(itemlist[targetindex - 1],'z-index',indexlist[targetindex]);
					}
				}
					
			});
			if(itemlist[targetindex - 1]){
				newindex = indexlist[targetindex - 1];
			}else{
				newindex = indexlist[targetindex];
			}
		}
		
		this.writeEleAttr(target,'z-index',newindex);
		this.editorO.refreshPageJson(target,'z-index',newindex);
	},
	
	/**
	 * makeEleHtml 封装元素
	 * @param {string} type 插入元素的类型
	 * @param {obj} edit 是否为现有元素，若是，则为对象，若否，则不需传入
	 * @param {bool} side 是否无edit和dragtype和链接
	 */
	makeEleHtml:function(type,edit,side){
		//区分不同类型的type
		var eleC = '',_self = this;
		if(!edit){
			eleC = _self.editorO.extend(eles[type],true);
		}else{
			eleC = _self.editorO.extend(edit[type],true);
		}
		if(!eleC){
			return ;
		}
		//拼装handle
		if(type != 'bg' && !side){
			var handle = '<div class="edit">',handleTotal;
			for(var i=0,handleTotal=eleC.dragType === 'skew'?4:2;i<handleTotal;i++){
				handle += '<div class="edit_handle edit_handle'+ (i + 1) +'"></div>';
			}
			handle += '</div>';
		}
		//拼装ele css
		var elecss = '',seccss = '',imgcss = '',transcss = '',imghtml = '',source = '',modelid = '',animate = '',num,lineheight = '',linkurl = '',drag = '';
		if(!edit){ 
			source = eleC.default;
		}else{
			source = eleC.edit;
			num = parseInt(eleC.num);
		}
		if(!num && num !== 0){
			num = -1;
			$.each($('#e_container .section_ele'),function(){
				num = parseInt($(this).attr('data-num')) > num ? parseInt($(this).attr('data-num')):num;
			})
			num += 1;
		}
		if(source){
			$.each(source,function(key,value){
				if(type === 'shape' && key === 'background-color'){
					imgcss += key + ':' + value + ';';
					return true;
				}else if(type === 'bg' && key === 'opacity'){
					imgcss += key + ':' + value + ';';
					return true;
				}else if(key === 'url'){
					linkurl = value;
					return true;
				}
				if(key === 'text-shadow' || key === 'box-shadow'){
					value = 'rgb(0, 0, 0) 0px 0px ' + value;
				}
				if(key !== 'placeHolder' && key !== 'type' && key !== 'html' && key.indexOf('img-') < 0){
					if(key.indexOf('animation') >= 0 || key === 'rotate' || key === 'scale'){
						if(key === 'rotate' || key === 'scale'){
							value = key +'(' + value + ') translateZ(0)';
							key = 'transform';
							transcss += '-webkit-' + key + ':' + value + ';';
							transcss += key + ':' + value + ';';
						}else{
							seccss += '-webkit-' + key + ':' + value + ';';
							seccss += key + ':' + value + ';';
						}
					}else if(key === 'position' || key === 'z-index' || key === 'top' || key === 'left'){
						seccss += key + ':' + value + ';';
					}else if(key === 'line-height'){
						elecss += key + ':' + value + ';';
						lineheight = value;
					}else{
						elecss += key + ':' + value + ';';
					}
				}
			});
		}
		
		//拼装元素
		var content = '';
		//新建元素
		if(!edit){
			this.newEleAttr = {};
			this.newEleAttr = this.editorO.extend(source);
			this.newEleAttr['num'] = num;
			this.newEleAttr['type'] = type;
			if(type !== 'bg'){
				this.newEleAttr['z-index'] = num;
				seccss += 'z-index:'+num+';';
			}
			var cw = $('.e_d_scale').width(),ch = $('.e_d_scale').height();
			switch(type){
				case 'text':
					content = source.placeHolder;
					this.newEleAttr['html'] = source.placeHolder;
				break;
				case 'img':
					var imgO = $('.pic_store').find('.img_choose.active img');
					var src = imgO.attr('src');
					if(imgO && src && src.length > 0){
						//对宽高做限制
						var ow = imgO[0].naturalWidth,oh = imgO[0].naturalHeight;
						var w = ow,h = oh;
						if(ow > cw || oh > ch){
							if(ow/oh > cw/ch){
								h = oh/ow*cw;
								w = cw;
							}else{
								w = ow/oh*ch;
								h = ch;
							}
						}
						elecss += 'width:'+w+'px;height:'+h+'px;overflow:hidden;position:relative;';
						content = '<img src="'+src+'" style="width:'+ w +'px;position:absolute;top:0;left:0;" draggable="false">';
						this.newEleAttr['img-src'] = src;
						this.newEleAttr['img-width'] = w + 'px';
						this.newEleAttr['width'] = w + 'px';
						this.newEleAttr['height'] = h + 'px';
						this.newEleAttr['img-top'] = '0px';
						this.newEleAttr['img-left'] = '0px';
					}
				break;
				case 'shape':
					var imgO = $('#shapebox').find('li.active');
					var src = '/images/'+imgO.attr('data-num')+'.svg';
					content = '<div class="mask" style="width:100%; height:100%; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-source:url('+ src +'); overflow: hidden;' + imgcss + '"></div>';
					this.newEleAttr['img-src'] = src;
				break;
				case 'bg':
					content = '';
				break;
			}
			
		}else{
			//元素
			switch(type){
				case 'text':
					content = source.html.length > 0 ? source.html:eles[type].default.placeHolder;
				break;
				case 'img':
					elecss += 'overflow:hidden;position:relative;';
					content = '<img src="'+source['img-src']+'" style="width:'+ source['img-width'] +';position:absolute;top:'+ source['img-top'] +';left:'+ source['img-left'] +';" draggable="false">';
					
				break;
				case 'shape':
					content = '<div class="mask" style="width:100%; height:100%; -webkit-mask-box-image-slice: 0 fill; -webkit-mask-box-image-repeat: stretch; -webkit-mask-box-image-source:url('+source['img-src']+'); overflow: hidden;' + imgcss + '"></div>';
				break;
				case 'bg':
					content = '';
					if(source['img-src'] && source['img-src'].length > 0){
						var w = 'width:'+source['img-width'] + ';';
						var h = source['img-height']?'height:'+source['img-height']+';':'';
						content = '<img src="'+source['img-src']+'" style="'+ w + h +'margin-top:'+source['img-margin-top']+';margin-left:'+source['img-margin-left'] + ';' + imgcss +'">';
					}
				break;
			}
		}
		
		
		var classes = 'section_ele animated';
		if(type){
			classes += ' section_'+ type;
		}
		if(eleC.dragType && !side){
			classes += ' section_'+ eleC.dragType;
		}
		if(source['animation-name'] && !side){
			classes += ' ' + source['animation-name'];
		}
		//写入modelid
		if(source['modelId'] && side){
			modelid = 'data-modelid="'+source['modelId']+'"';
		}
		if(lineheight && ~~lineheight > 0){
			lineheight = 'data-line=' + lineheight;
		}
		if(linkurl && linkurl.length > 0){
			linkurl = 'data-url=' + linkurl;
		}
		
		var html = [
			'<div class="'+ classes +'" data-num="'+ num +'"' +' '+modelid+' data-type="'+ type +'" data-animation="'+source['animation-name']+'" style="'+ seccss +'">',
				'<div class="transform" style="'+ transcss +'">',
					handle,
					'<div class="chose">',
						'<div class="ele" '+ lineheight +' '+ linkurl +' style="'+ elecss +'">',
							content,
						'</div>',
					'</div>',
				'</div>',
			'</div>'
		].join('');
		
		return html;
		
	},
	/**
	 * readEleAttr 读取元素属性
	 */
	readEleAttr:function(){
		var _self = this;
		var cssTypeObj = $('.e_attribute').find('.pane_attr'), 
			cssTypeArr = {}, 
			cssObj = _self.target.find('.ele'), 
			transObj = _self.target.find('.transform');
		$.each(cssTypeObj,function(){
			//读取面板中存在的属性
			var cssName = $(this).attr('data-css');
			if(cssName === 'html' || cssName === 'val'){
				var value = cssObj[cssName]();
				value = value.replace(/<br>/g,"\n").replace(/&nbsp;/g," ");
				cssTypeArr[cssName] = value;
			}else if(cssName === 'top' || cssName === 'left' || cssName.indexOf('animation') >= 0){
				cssTypeArr[cssName] = _self.target.css(cssName);
			}else if(cssName === 'rotate' || cssName === 'scale'){
				if(transObj.attr('style')){
					var t = transObj.attr('style').match(/transform:\s\S+\((\S+)\)|transform:\S+\((\S+)\)/) || '0';
					cssTypeArr[cssName] = t[1] ? t[1] : t[2];
				}else{
					cssTypeArr[cssName] = '0';
				}
			}else if(_self.type === 'shape' && cssName === 'background-color'){
				cssTypeArr[cssName] = cssObj.find('.mask').css(cssName);
			}else if(cssName === 'line-height'){
				cssTypeArr[cssName] = cssObj.attr('data-line');
			}else if(cssName === 'opacity'){
				if(_self.type === 'bg'){
					cssObj = cssObj.find('img');
				}
				cssTypeArr[cssName] = cssObj.css(cssName);
			}else if(cssName === 'url'){
				cssTypeArr[cssName] = cssObj.attr('data-url');
			}else if(cssName.indexOf('border') > -1){
				//修正firefox读取边框相关数值问题
				if(cssName === 'border-radius')
					cssTypeArr[cssName] = cssObj.css(cssName) || cssObj.css('border-top-left-radius');
				else if(cssName === 'border-width')
					cssTypeArr[cssName] = cssObj.css(cssName) || cssObj.css('border-left-width');
				else if(cssName === 'border-color')
					cssTypeArr[cssName] = cssObj.css(cssName) || cssObj.css('border-left-color');
				else if(cssName === 'border-style')
					cssTypeArr[cssName] = cssObj.css(cssName) || cssObj.css('border-left-style');
			}else{
				cssTypeArr[cssName] = cssObj.css(cssName);
			}
			_self.writePaneAttr($(this),cssName,cssTypeArr[cssName]);
		})
	},
	
	/**
	 * writePaneAttr 写入面板，并绑定除颜色选择外基本方法
	 * @param {object} target 当前带pane_attr的元素
	 * @param {string} cssName 读取到的css属性
	 * @param {string} cssValue 读取到的css值
	 */
	writePaneAttr:function(target,cssName,cssValue){
		if(!target || !target instanceof Object){
			return;
		}
		var nodeType = target[0].type , _self = this;
		//处理select和input text类型的数值
		if(nodeType === 'select-one' || nodeType === 'text' || nodeType === 'textarea'){
			if(cssName === 'line-height' && cssValue === 'normal'){
				cssValue = '1';
			}
			if(nodeType === 'text' || nodeType === 'textarea'){
				target.val(cssValue).on('keyup input',function(){
					var value = target.val();
					if(nodeType === 'text' && cssName !== 'url'){
						var valuearr = value.split('px');
						value = ~~valuearr[0] + 'px';
						this.value = value;
						this.setSelectionRange(value.length-2,value.length-2);
					}
					value = value.replace(/(\n)/g,"<br/>").replace(/ /g,"&nbsp;");
					_self.writeMultiEleAttr(cssName,value);
				});
			}else{
				target.val(cssValue).on('change',function(){
					var value = target.val();
					value = value.replace(/(\n)/g,"<br/>").replace(/ /g,"&nbsp;");
					//修正border-style默认宽度1px
					if(cssName === 'border-style'){
						var width = target.next()[0].value || '0px';
						_self.writeMultiEleAttr({
							'border-style':value,
							'border-width':width
						});
					}else{
						_self.writeMultiEleAttr(cssName,value);
					}
				});
			}
			
		}else{
			//处理html及val两种基本类型的数值
			if(cssName === 'html' || cssName === 'val'){
				target[cssName](cssValue);
				target.keyup(function(){
					_self.writeMultiEleAttr(cssName,target[cssName]());
				})
			}else if(cssName.indexOf('color') >= 0){
				cssValue = cssValue === 'rgba(0, 0, 0, 0)'? 'initial':cssValue;
				if(cssName === 'background-color' && _self.type === 'bg'){
					if(cssValue === 'initial'){
						target.find('.nocolor').addClass('hot');
					}else{
						var e = true;
						$.each(target.find('.color'),function(){
							var c = $(this).css('background-color');
							if(cssValue === c){
								$(this).addClass('hot');
								e = false;
								return false;
							}
						})
						if(e){
							target.find('.allcolor').addClass('hot');
						}
					}
					//绑定颜色选择
					target.find('span').not('.allcolor').click(function(){
						if($(this).hasClass('hot')){
							return;
						}
						$(this).addClass('hot').siblings().removeClass('hot');
						var color = $(this).css('background-color');
						
						if($(this).hasClass('nocolor')){
							color = 'initial';
						}
						_self.writeMultiEleAttr(cssName,color);
					})
					var btn = target.find('.allcolor');
					var wrap = target.siblings('.cp_default');
					_self.setColorPicker(wrap,btn,function(hex){
						_self.writeMultiEleAttr(cssName,hex);
					});
				}else{
					var wrap = target.parent().siblings('.cp_default');
					target.css('background-color',cssValue);
					_self.setColorPicker(wrap,target,function(hex){
						target.css('background-color',hex);
						_self.writeMultiEleAttr(cssName,hex);
					});
				}
			}else if(cssName.indexOf('opacity') >= 0){
				var t = target.find( ".slider");
				var v = t.next('.value');
				var value = Math.round(cssValue * 100);
				this.setDragSlider(target,value,function(){
					v.html(value);
				},function(event, ui){
					v.html(ui.value);
					_self.writeMultiEleAttr(cssName,ui.value / 100);
				});
			}else if(cssName === 'text-shadow' || cssName === 'box-shadow'){
				var t = target.find( ".slider");
				var v = t.next('.value');
				cssValue = cssValue === 'none'?'0':cssValue.match(/(rgb|rgba)\([\S\s]+\) \dpx \dpx (\d+)px/)[2];
				this.setDragSlider(target,cssValue,function(){
					v.html(cssValue + 'px');
				},function(event, ui){
					var t = target.find( ".slider");
					var v = t.next('.value');
					v.html(ui.value + 'px');
					_self.writeMultiEleAttr(cssName,ui.value+'px');
				});
				
			}else if(cssName === 'border-radius'){
				var t = target.find( ".slider");
				var v = t.next('.value');
				var ele = this.target.find('.ele') ,h = ele.outerHeight(true);;
				cssValue = cssValue === 'none'?'0':parseInt(cssValue);
				this.setDragSlider(target,cssValue,function(){
					v.html(Math.round(parseInt(cssValue) / h * 100) + '%');
				},function(event, ui){
					var t = target.find( ".slider");
					var v = t.next('.value');
					v.html(Math.round(parseInt(ui.value) / h * 100) + '%');
					_self.writeMultiEleAttr(cssName,ui.value+'px');
				},h);
				
			}else if(cssName === 'rotate'){
				var t = target.find( ".slider");
				var v = t.next('.value');
				cssValue = cssValue === 'none'?'0':parseInt(cssValue);
				this.setDragSlider(target,cssValue,function(){
					v.html(cssValue + '度');
				},function(event, ui){
					var t = target.find( ".slider");
					var v = t.next('.value');
					v.html(ui.value + '度');
					_self.writeMultiEleAttr(cssName,ui.value+'deg');
				},360,5);
				
			}else if(cssName === 'text-align'){
				var t = target.find('.' + (cssValue === 'center' ? 'cent':cssValue));
				if(t.length > 0){
					t.addClass('hot');
				}
				//绑定文字对齐
				target.find('.textalign').click(function(){
					$(this).addClass('hot').siblings().removeClass('hot');
					var c = $(this).attr('class').match(/textalign\s(\S+)/)[1];
					_self.writeMultiEleAttr(cssName, c === 'cent' ? 'center':c);
				})
				
			}else if(cssName === 'font-style' || cssName === 'font-weight' || cssName === 'text-decoration'){
				//纠正firefox粗体
				if(~~cssValue === 700){
					cssValue = 'bold';
				}
				if(target.hasClass(cssValue)){
					target.addClass('hot');
				}
				//绑定文字效果
				target.click(function(){
					var value = '';
					if($(this).hasClass('hot')){
						value = cssName === 'text-decoration' ? 'none' : 'normal';
						_self.writeMultiEleAttr(cssName, value);
					}else{
						_self.writeMultiEleAttr(cssName, $(this).attr('class').match(/fontstyle\s(\S+)\spane_attr/)[1]);
					}
					$(this).toggleClass('hot');
				})
			}else if(cssName === 'animation-duration' || cssName === 'animation-delay'){
				var t = target.find( ".slider");
				var v = t.next('.value');
				this.setDragSlider(target,parseInt(parseFloat(cssValue) * 10),function(){
					v.html(cssValue);
				},function(event, ui){
					var t = target.find( ".slider");
					var v = t.next('.value');
					var value = parseInt(ui.value) / 10 + 's';
					v.html(value);
					_self.writeMultiEleAttr(cssName,value);
				});
				
			}else if(cssName === 'animation-name'){
				$.each(target.find('.action'),function(){
					if(cssValue === $(this).attr('data-type')){
						$(this).addClass('active').siblings().removeClass('active');
					}
				})
				//绑定动画效果
				target.find('.action').click(function(){
					var c = $(this).attr('data-type');
					$(this).addClass('active').siblings().removeClass('active');
					_self.writeMultiEleAttr(cssName, c);
				})
				
			}else{
				_self.writeMultiEleAttr(cssName,cssValue);
			}
		}
	},
	
	/**
	 * writeMultiEleAttr 批量处理面板中编辑的值写回元素，并写入json
	 * @param {string || object} cssName 编辑的css名
	 * @param {string} cssValue 编辑的css值
	 * @param {bool} isadd 是否为新增元素
	 */
	writeMultiEleAttr:function(cssName,cssValue,isadd){
		var _self = this;
		//处理批量的情况
		if(cssName instanceof Object){
			$.each(cssName,function(key,value){
				_self.writeEleAttr(_self.target,key,value);
			})
			if(isadd){
				this.editorO.addToPageJson(cssName);
			}else{
				this.editorO.refreshPageJson(this.target,cssName);
			}
		}else{
			this.editorO.refreshPageJson(this.target,cssName,cssValue);
			this.writeEleAttr(this.target,cssName,cssValue);
		}
	},
	
	/**
	 * writeEleAttr 面板中编辑的值写回元素
	 * @param {object} target 编辑的元素
	 * @param {string} cssName 编辑的css名
	 * @param {string} cssValue 编辑的css值
	 */
	writeEleAttr:function(target,cssName,cssValue){
		var _self = this;
		//解析成css
		if(!cssName instanceof String || !cssValue instanceof String || cssName.length === 0){
			return;
		}
		if(cssValue.length === 0){
			if(cssName === 'html'){
				cssValue = eles[target.attr('data-type')].default.placeHolder;
			}
		}
		var ele = target.find('.ele');
		if(cssName === 'left' || cssName === 'top' || cssName === 'z-index'){
			target.css(cssName,cssValue);
		}else if(cssName === 'html' || cssName === 'val'){
			ele[cssName](cssValue);
		}else if(cssName === 'url'){
			ele.attr('data-url',cssValue);
		}else if(cssName === 'background-color' && this.type === 'shape'){
			ele.find('.mask').css(cssName,cssValue);
		}else if(cssName === 'background-color' && this.type === 'bg'){
			ele.css(cssName,cssValue);
		}else if(cssName === 'line-height'){
			ele.attr('data-line',cssValue).css(cssName,cssValue);
		}else if(cssName === 'opacity'){
			if(this.type === 'bg'){
				ele = ele.find('img');
			}
			ele.css(cssName,cssValue);
		}else if(cssName === 'text-shadow' || cssName === 'box-shadow'){
			cssValue = 'rgb(0,0,0) 0 0 ' + cssValue;
			ele.css(cssName,cssValue);
		}else{
			if(cssName.indexOf('animation') >= 0 || cssName === 'rotate' || cssName === 'scale'){
				var e = target;
				if(cssName === 'rotate' || cssName === 'scale'){
					cssValue = cssName +'(' + cssValue + ') translateZ(0)';
					e = target.find('.transform');
					cssName = 'transform';
				}
				var n = '-webkit-' + cssName;
				e.css(n , cssValue).css(cssName , cssValue);
				if(cssName === 'animation-name'){
					e.addClass(cssValue).removeClass(e.attr('data-animation'));
					e.attr('data-animation',cssValue);
				}
			}else{
				ele.css(cssName,cssValue);
			}
		}
	},

	/**
	 * ChangePanel panel内容读取
	 * @param {string} type 面板类型
	 * @param {array} btnArr 面板按钮序列
	 * @param {array} fnArr 面板执行函数序列
	 */
	setChoseEle:function(type,btnArr,fnArr){
		if(!type || !type instanceof String){
			return;
		}
		if(!btnArr instanceof Array || !fnArr instanceof Array || btnArr.length === 0 || fnArr.length === 0){
			return;
		}
		var _self = this;
		var attrPane = $('.e_attribute');
		var tab = attrPane.find('.e_attr_tab ul');
		var content = attrPane.find('.e_attr_content').css('opacity',0);
		var liHtml = '' , panelHtml = '' , runlist = [];
		$.each(btnArr,function(){
			liHtml += '<li class="'+ (btnArr.length == 1 ? 'fulltab':'halftab') +'">'+
					'<a href="javascript:void(0);">'+this.name+'</a>'+
				'</li>';
			panelHtml += Panel[this.panel];
		})
		tab.html(liHtml).find('li').eq(0).addClass('active');
		content.html(panelHtml).find('.pane').eq(0).addClass('active');
		$.each(fnArr,function(key,value){
			if(value === _self.setChangePanel){
				value.call(_self,type,tab,content);
			}else{
				value.call(_self,type);
			}
			
		})
		setTimeout(function(){
			content.css('opacity',1);
		},20)
	},
	/**
	 * ChangePanel panel切换功能
	 * @param {object} tab 标签jqobj
	 * @param {object} content 内容jqobj
	 */
	setChangePanel:function(type,tab,content){
		if(tab.length == 0 || content.length == 0){
			return;
		}
		var li = tab.find('li');
		var pane = content.find('.pane');
		li.click(function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			pane.eq(index).fadeIn(200).addClass('active').siblings().hide().removeClass('active');
		})
	},
	
	setCountDown:function(type){
		var endt = new Date();
        var startt = new Date((endt.getTime() / 1000 - 30 * 24 * 3600) * 1000);
        
		//选择日期
		var startp = $("#datepickerStart"),endp = $("#datepickerEnd");
        $("input[name=datepickerStart]").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(selectedDate) {
                var end = endp.datepicker("getDate");
                var start = startp.datepicker("getDate");
                if(endp.val() == '')
                    endp.datepicker("setDate", selectedDate);
                else{
                    if(end < start){
                        endp.datepicker("setDate", selectedDate);
                        MZ.tipmessage.show({message:'结束日期不能小于开始日期',delay:1000,pos:'middle',type:'fail'});
                    }
                }
                this.blur();
            }
        }).datepicker("setDate",startt);
        
         $("input[name=datepickerEnd]").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(selectedDate) {
                var end = endp.datepicker("getDate");
                var start = startp.datepicker("getDate");
                if(startp.val() == '')
                    startp.datepicker("setDate", selectedDate);
                else{
                    if(end < start){
                        startp.datepicker("setDate", selectedDate);
                        MZ.tipmessage.show({message:'结束日期不能小于开始日期',delay:1000,pos:'middle',type:'fail'});
                    }
                }
                this.blur();
            }
        }).datepicker("setDate",endt );
	},
	
	/**
	 * 设置弹框及其触发按钮
	 */
	setBlock:function(){
		//上传背景
		$('.changebg').blockbox('.pic_store',{
			callback:function(){
				$('.insert_bg').show();
				$('.insert_pic').show();
				$('.change_pic').hide();
			},
			closebtn:$('.pic_store .close')
		});
		
		//更换图片
		$('.changeimg').blockbox('.pic_store',{
			callback:function(){
				$('.insert_bg').hide();
				$('.insert_pic').hide();
				$('.change_pic').show();
			},
			closebtn:$('.pic_store .close')
		});
	},
	
	/**
	 * 设置图片
	 */
	setCropper:function(){
		var _self = this;
		var cropb = $('.cropimg');
		cropb.click(function(){
			//隐藏按钮
			$(this).hide();
			//获取初试位置
			var cropObj = {
				'canvas':{
					'width':_self.target.find('img').width(),
					'height':_self.target.find('img').height(),
					'top':parseInt(_self.target.css('top')) + parseInt(_self.target.find('img').css('top')),
					'left':parseInt(_self.target.css('left')) + parseInt(_self.target.find('img').css('left')),
				},
				
				'crop':{
					'width':_self.target.width(),
					'height':_self.target.height(),
					'top':_self.target.css('top'),
					'left':_self.target.css('left')
				},
				'src':_self.target.find('.ele img').attr('src')
			};
			//隐藏原始元素
			_self.target.hide();
			//构建裁剪元素
			var html = '<div class="cropwrap" style="width:100%;height:100%;position: absolute; z-index: 999; top: 0; left: 0;">'+
							'<div class="cropele" style="width:100%;height:100%;overflow:hidden;">'+
								'<img src="'+cropObj.src+'" style="width:'+cropObj.canvas.width+'px;position:absolute;left:'+cropObj.canvas.left+';top:'+cropObj.canvas.top+'">'+
							'</div>'+
						'</div>';
						
			//创建按钮组
			var btn = '<div class="cropbtn">'+
				'<a href="javascript:void(0);" class="size size1" data-ratio="1">1:1</a>'+
				'<a href="javascript:void(0);" class="size size2" data-ratio="1.3333333333333333">4:3</a>'+
				'<a href="javascript:void(0);" class="size size3" data-ratio="0.6666666666666666">2:3</a>'+
				'<a href="javascript:void(0);" class="size size4 active" data-ratio="NaN">free</a>'+
				'<a href="javascript:void(0);" class="sure">确定</a>'+
				'<a href="javascript:void(0);" class="cancel">取消</a>'+
			'</div>';
			var wrapO = $(html), btnO = $(btn);
			wrapO.insertAfter(_self.target);
			btnO.insertAfter($('.e_d_scale'));
			
			//创建裁剪框
			var imgO = wrapO.find('img');
			var options = {
				orginal:cropObj,
				autoCropArea: 1,
				movable: true,
				strict: false,
				highlight: false,
				//重新拖拽出裁剪框
				dragCrop: false,
				crop: function(e) {}
			};
			imgO.cropper(options);
			
			//调整ratio
			btnO.find('.size').click(function(){
				var ratio = $(this).attr('data-ratio');
				options.aspectRatio = ratio;
				imgO.cropper('destroy').cropper(options);
				$(this).addClass('active').siblings('.size').removeClass('active');
			});
			
			
			//裁剪
			btnO.find('.sure').click(function(){
				var CropBoxData = imgO.cropper("getCropBoxData");
				var CanvasData = imgO.cropper("getCanvasData");
  				//摧毁裁剪
  				imgO.cropper('destroy');
  				//去掉构建元素
  				wrapO.remove();
  				btnO.remove();
  				//显示原始元素
  				_self.target.show();
  				_self.target.css({
  					'top':CropBoxData.top,
  					'left':CropBoxData.left
  				}).find('.ele').css({
  					'width':CropBoxData.width,
  					'height':CropBoxData.height
  				}).find('img').css({
  					'top':CanvasData.top - CropBoxData.top,
  					'left':CanvasData.left - CropBoxData.left,
  					'width':CanvasData.width
  				});
  				
  				_self.writeMultiEleAttr({
  					'img-top':CanvasData.top - CropBoxData.top + 'px',
  					'img-left':CanvasData.left - CropBoxData.left + 'px',
  					'img-width':CanvasData.width + 'px',
  					'width':CropBoxData.width + 'px',
  					'height':CropBoxData.height + 'px',
  					'top':CropBoxData.top + 'px',
  					'left':CropBoxData.left + 'px'
  				});
  				
  				//显示按钮
  				cropb.show();
			});
			btnO.find('.cancel').click(function(){
				//摧毁裁剪
  				imgO.cropper('destroy');
  				//去掉构建元素
  				wrapO.remove();
  				btnO.remove();
  				//显示原始元素
  				_self.target.show();
  				//显示按钮
  				cropb.show();
			});
		})
	},
	
	
	/**
	 * 常用颜色选择及颜色选择器
	 * ColorPicker 
	 */
	setColorPicker:function(wrap,btn,callback){
		var _self = this,
			btn = typeof(btn) === 'object' ? btn :  $(btn);

		btn.spectrum({
		    color: "#ECC",
		    flat: true,
		    className: "cp_default",
		    showInitial: true,
		    showInput: true,
		    showPalette: false,
		    showSelectionPalette: true,
		    maxPaletteSize: 10,
		    showButtons:false,
		    preferredFormat: "hex",
		    allowEmpty:true,
		    move: function (color) {
		    	if(callback && typeof(callback) === 'function'){
		    		if(color)
            			callback('#'+color.toHex());
            		else
            			callback('initial');
            	}
		    },
		    beforeShow: function () {
		    	btn.blockbox(btn.siblings('.cp_default'));
		    	$(this).show();
		    }
		});
        
	},
	/**
	 * 获取图片信息
	 */
	getPicInfo:function(src,callback){
		if(src.length <= 0){
			return ;
		}
		var $imgO = new Image(),w,h,tw,th,iLong = 'w',ratio = 'w',_self = this;
		var complete = function(){
			w = $imgO.width;
			h = $imgO.height;
			tw = $('#e_container').width();
			th = $('#e_container').height();
			if(w/h > tw/th)
				ratio = 'h';
			if(h > w)
				iLong = 'h';
			if(callback && typeof(callback) === 'function')
				callback.call(_self,{
					src:src,
					width:w,
					height:h,
					iLong:iLong,
					ratio:ratio,
					obj:$imgO
				})
		}
		$imgO.src = src;
		if($imgO.complete){
			complete();
		}else{
			$imgO.onload = function(){
				complete();
			}
		}
	},
	/**
	 * 更换图片
	 */
	changePic:function(){
		var imgO = $('.pic_store').find('.img_choose.active img');
		var src = imgO.attr('src');
		var _self = this;
		
		if(imgO && src && src.length > 0 && this.type === 'img'){
			this.target.find('img').attr('src',src);
			this.writeMultiEleAttr({'img-src':src});
			this.choseEle(this.target,'img');
		}
	},
	/**
	 * 修改背景
	 */
	setBackground:function(){
		//裁切背景
		var _self = this;
		var $backObj = $('.pane_type_bg .background'),
			$preview = $('#e_container .section_bg'),
	  		$pimg = $('#e_container .section_bg img');
	  		
	  	if($pimg.length > 0){
	  		var $imgO = new Image();
		    var newsize = oldsize = {
		    	width: $pimg.width(),
		    	height: $pimg.width(),
		    	marginLeft:$pimg.css('margin-left'),
		    	marginTop:$pimg.css('margin-top')
		    };
	  		var src = $pimg.attr('src');
	  		$backObj.attr('src',src);
			
			this.getPicInfo(src,function(info){
				//获取图片尺寸
				var wsize = info.width;
				var hsize = info.height;
				if(info.iLong === 'w'){
					$backObj.attr('width',240);
				}else{
					$backObj.attr('height',240);
				}
				//图片裁剪
				$backObj.Jcrop({
					onChange: function(c){
						if (parseInt(c.w) > 0) {
							var nw = Math.round(boundx * 640 / c.w);
							var rh = c.h / boundy * hsize;
							var nh = Math.round(hsize * 1072 / rh);
							var ml = Math.round(c.x / boundx * nw);
							var mt = Math.round(c.y / boundy * nh);
							
							ml = '-' + ml + 'px';
							mt = '-' + mt + 'px';
							
						    $pimg.css({
						        width: nw,
						        marginLeft: ml,
						        marginTop: mt
						    });
						    
						    _self.writeMultiEleAttr({
			  					'img-margin-top':mt,
			  					'img-margin-left':ml,
			  					'img-width':nw +'px'
			  				});
					    }
					},
				    onSelect: function(c){
						newsize = {
					    	width: $pimg.width(),
					    	marginLeft:$pimg.css('margin-left'),
					    	marginTop:$pimg.css('margin-top')
					    };
					    //_self.historyO.insert({'name':'backgroundChange','old':oldsize,'new':newsize});
					},
				    onRelease: function(){
						_self.jcropO.setOptions({
					      allowSelect: true
					    });
					},
				    onDrag: function (c){
						oldsize = {
					    	width: $pimg.width(),
					    	marginLeft:$pimg.css('margin-left'),
					    	marginTop:$pimg.css('margin-top')
					    };
					},
				    aspectRatio:  $('#e_container').width()/$('#e_container').height()
				},function(){
					_self.jcropO = this;
				    var bounds = this.getBounds();
				    if(info.iLong === 'w'){
				    	boundy = bounds[1];
				    	boundx = bounds[0];
				    }else{
				    	boundx = bounds[0];
				    	boundy = bounds[1];
				    }
				});
			});
	  	}else{
	  		$('.pane_type_bg .pane_type_bg_view').remove();
	  		$('.pane_type_bg .pane_type_bg_alpha').remove();
	  	}
		
	},
	/**
	 * 移除背景
	 */
	delBackground:function(){
		var _self = this;
		$('.removebg').click(function(){
			if(_self.type === 'bg'){
				_self.target.find('.ele').find('img').remove();
				$('.pane_type_bg .pane_type_bg_view').remove();
				$('.pane_type_bg .pane_type_bg_alpha').remove();
				_self.writeMultiEleAttr('img-src','');
			}
		})
	},
	/**
	 * 更换背景
	 */
	changeBackground:function(){
		var imgO = $('.pic_store').find('.img_choose.active img');
		var src = imgO.attr('src');
		var _self = this;
		if(imgO && src && src.length > 0){
			this.getPicInfo(src,function(info){
				var dw = $('.e_d_scale').width(),dh = $('.e_d_scale').height();
				var s = dw;
				if(info.ratio === 'h'){
					s = dh / info.height * info.width;
				}
				if($('#e_container .section_bg .ele').length === 0){
					_self.addEle('bg');
				}
				$('#e_container .section_bg .ele').html('<img src="'+ src +'" style="width:'+ s +'px;">');
				var newEleAttr = {};
				newEleAttr = _self.editorO.extend(eles.bg.default);
				newEleAttr['img-src'] = src;
				newEleAttr['img-width'] = s + 'px';
				newEleAttr['img-margin-top'] = '0px';
				newEleAttr['img-margin-left'] = '0px';
				this.writeMultiEleAttr(newEleAttr);
				this.choseEle($('#e_container .section_bg'),'bg');
			});
		}
	},
	/**
	 * 设置拉杆
	 */
	setDragSlider:function(target,value,initCallback,dragCallback,max,step){
		if(initCallback && typeof(initCallback) === 'function'){
    		initCallback();
    	}
		target.find( ".slider").slider({
			value:value,
			min: 0,
			max: max || 100,
			step: step || 1,
			slide: function(event,ui){
				if(initCallback && typeof(initCallback) === 'function'){
		    		dragCallback(event,ui);
		    	}
			}
		}).slider("float");
	},
}

return elementObj;