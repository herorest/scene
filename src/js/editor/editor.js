require('main');
var drag = require('plugins/drag');
var wrLoading = require('plugins/loading');
var Player = require('plugins/player');
var historyO = require('editor/history');
var eles = require('editor/eleConfig');
var WebUploader = require('plugins/webuploader');
var tip = require('common/ui/tip-message/tipmessage');
var str = require('common/utils/string');
var dialog = require('common/ui/dialog/dialog');
require('plugins/blockbox');
require('plugins/nicescroll');
require('plugins/jquery-ui');
require('plugins/jquery-ui-pips');
require('plugins/colorpicker');
require('plugins/spectrum');
require('plugins/json2');
var elementO = require('editor/element');


"use strict";

var editorObj = function(develop){
	this.develop = develop;
	this.modelO = require('common/model');
	this.hid = hid || '0';
	this.modelid = [];
	this.historyO = new historyO();
	this.auth();
};
editorObj.prototype = {
	beta:'1.0',
	/**
	 * 获取用户身份
	 */
	auth : function(){
		var _self = this;
		var path = this.develop === 'online'?(this.modelO.prex + this.modelO.apiUrl.checkuser):"js/checkuser.json";
		$.ajax({
        	type: "get", 
            url: path,
            dataType:'json',
            success: function (data) {
            	_self.userState = (data.status || data.status === 0)?data.status:0;
            	_self.init();
            },
            error:function(data){
            	MZ.tipmessage.show({message:_self.modelO.tipInfo.checkauthfail,delay:1000,pos:'middle',type:'fail'});
            }
    	})
	},
	/**
	 * 编辑器配置
	 */
	init : function(){
		this.fitWin();
		this.resize();
		this.setPicStore();
		this.setShape();
		this.setText();
		this.setAssist();
		this.eleO = new elementO(this.historyO,this);
		this.load();
	},
	/**
	 * 编辑器预加载
	 * preload 预加载资源，支持图片和音乐
	 */
	load:function(){
		data = pagejson;
    	this.preload = [
        	'images/tool.png',
        	'images/logo.png'
    	];
    	this.music = data.music;
    	this.pagejson = data.value;
    	this.prevjson = this.extend(this.pagejson);
    	var imgarr = this.unique(JSON.stringify(this.prevjson).match(/[A-Za-z0-9-/:.]+[a-zA-Z0-9]+\.(png|jpg|gif|bmp)/g));
    	this.preload = this.preload.concat( imgarr );
		new wrLoading('#loading',this.preload,this.start,this,true);
	},
	/**
	 * 编辑器启动
	 */
	start:function(){
		$('.wrap').removeClass('opacity');
		this.changeAuth();
		this.makeMinPage();
		this.buildPage(1);
		this.makeModel();
		this.setMinPage();
		this.eleO.touchEle();
		this.setBlock();
		this.setScroll();
	},
	
	/**
	 * 根据用户类型显示不同内容
	 */
	changeAuth:function(){
		var btns = $('.e_button');
		//管理员
		if(this.userState === 1){
			btns.find('.save').parent().hide();
			btns.find('.save_model').parent().show();
			$('.music').hide();
			$('.e_tools').addClass('e_tools_t');
			this.saveTemple();
		}else{
			btns.find('.save_model').parent().hide();
			btns.find('.save').parent().show();
			this.saveJson();
			this.setMusic();
		}
	},
	
	/**
	 * 构建左侧分页，并获得所有元素html
	 * @param {bool} scope 限定是否包裹ui及model 
	 */
	makeMinPage:function(scope){
		var _self = this;
		_self.pagehtml = {};
		if(_self.pagejson){
			var html = '',parent = $('.e_page');
			$.each(_self.pagejson,function(key,value){
				html += _self.makePageHtml(key,value,true);
			})
			if(!scope){
				html = '<ul id="e_page">' + html + '</ul>';
				if(this.userState !== 1){
					html += '<a href="javascript:void(0);" class="showModel btn_blue">+</a>';
				}
			}else{
				parent = $('.e_page ul');
			}
			//清空
			parent.html('').append(html);
			var alist = parent.find('.animated');
			$.each(alist,function(){
				var t = $(this);
				t.removeClass('animated').removeClass(t.attr('data-animation')).css({
					'-webkit-animation-name':'',
					'-moz-animation-name':'',
					'animation-name':''
				}).find('.edit').remove();
			});
		}else{
			//无数据
			MZ.tipmessage.show({message:_self.modelO.tipInfo.buildleftfail,delay:1000,pos:'middle',type:'fail'});
		}
	},
	/**
	 * 构建预览
	 */
	makePreview:function(){
		var _self = this;
		var prebox = $('#preview');
		var arrbox = $('.p_arrow');
		var slide = require('plugins/slider');
		
		function buildPreview(){
			if(_self.pagejson){
				//清空
				prebox.html('<div class="loading"><div class="l_rond"><div class="l_r_cycle"></div></div><div class="l_text"><p>loading</p></div></div><div class="arrow"></div>');
				arrbox.html('');
				_self.prevjson = {};
				_self.prevjson = _self.extend(_self.pagejson);
				
				var html = '<div class="previewWrap">';
				$.each(_self.prevjson,function(page,value){
					if(!page){
						return;
					}
					var n = page.match(/\d+/)[0];
					var li = '<div class="section section'+n+'">';
					$.each(value,function(key,val){
						//构建编辑用json
						var edit = _self.convertEditJson(key,val);
//						edit[this.type] = {};
//						if(eles[this.type] && eles[this.type].dragType){
//							edit[this.type].dragType = eles[this.type].dragType;
//						}
//						edit[this.type].edit = this;
//						edit[this.type].num = key;
						
						//生成html array
						var h = _self.eleO.makeEleHtml(this.type,edit,true);
						li += h;
					})
					li += '</div>';
					html += li;
				})
				html += '</div>';
				
				//插入
				prebox.append(html).find('.edit').remove();
				var elelist = prebox.find('.section_ele');
				$.each(elelist,function(){
					if($(this).hasClass('section_bg') || $(this).hasClass('none')){
						return;
					}
					$(this).addClass('no');
				})
				_self.prevhtml = prebox.html();
				//箭头
				arrbox.append('<a href="javascript:void(0);" class="p_prev"><span></span></a><a href="javascript:void(0);" class="p_next"><span></span></a>');
				setSlide();
	
			}else{
				//无数据
				MZ.tipmessage.show({message:_self.modelO.tipInfo.buildpreviewfail,delay:1000,pos:'middle',type:'fail'});
			}
		}
		
		function setSlide(){
			//预览slide
			setTimeout(function(){
        		prebox.find('.loading').fadeOut(300);
        		_self.slide = new slide({
			        pages: $('.section'),
			        parentNode:'#preview',
			        oninit: function () { },
			        onbeforechange: function () {},
			        onchange: function () {}
			    });
        	},1000);
			
		    
			
			$('.p_prev').click(function(){
				_self.slide.prev();
			});
			$('.p_next').click(function(){
				_self.slide.next();
			});
		}
		
		//如果未发生修改
		if(JSON.stringify(_self.prevjson) === JSON.stringify(_self.pagejson) && _self.slide){
			prebox.html(_self.prevhtml).find('.loading').fadeOut(200);
			setSlide();
			return;
		}else{
			buildPreview();
		}
		
		
	},
	
	/**
	 * 根据json，生成指定页html
	 * @param {string} page 生成的页码
	 * @param {json} value 当前页的json 
	 */
	makePageHtml:function(page,value){
		if(!page){
			return;
		}
		this.pagehtml[page] = [];
		//组建左侧分页html
		var _self = this;
		var n = page.match(/\d+/)[0];
		var list = '';
		$.each(value,function(k,val){
			//构建编辑用json
			var edit = _self.convertEditJson(k,val);
			
			//生成html array
			var h = _self.eleO.makeEleHtml(val.type,edit);
			_self.pagehtml[page].push(h);
			list += h;
		})
		
		//获取modelid
		var modelid = list.match(/data-modelid=\"\d+\"/)?(' '+list.match(/data-modelid=\"\d+\"/)[0]):'';
		var li = '<li' + modelid + ' data-page="' + n + '"><div class="page"><div class="p_temple"><div class="p_t_scale">' + list + '</div></div><a href="javascript:void(0);" class="p_del"></a><div class="p_num"><span>'+ n +'</span></div></div></li>';
		li = li.replace(/(-webkit-)?animation-name:[a-z|A-Z]+;/g,'');
		return li;
	},
	
	/**
	 * 将一个元素的样式名值对，转换成用来封装html的json
	 * @param {string} key 元素编号
	 * @param {json} value 样式名值对 
	 */
	convertEditJson:function(key,value){
		var edit = {};
		edit[value.type] = {};
		if(eles[value.type] && eles[value.type].dragType){
			edit[value.type].dragType = eles[value.type].dragType;
		}
		edit[value.type].edit = value;
		edit[value.type].num = key;
		return edit;
	},
	
	/**
	 * 增加进页面json
	 * 用在插入元素时的批量处理
	 * @param {object} obj css键值对
	 */
	addToPageJson:function(obj){
		var num = obj.num;
		var value = this.pagejson['page'+this.currpage];
		
		if(!value[num]){
			value[num] = {};
		}
		$.each(obj,function(key,result){
			value[num][key] = result;
		})
		this.refreshPageHtml(value);
	},
	
	/**
	 * 刷新页面json
	 * 使用在css发生变化时
	 * @param {string} target 修改的元素
	 * @param {string} cssName 编辑的css名
	 * @param {string} cssValue 编辑的css值
	 */
	refreshPageJson:function(target,cssName,cssValue){
		var num = parseInt(target.attr('data-num'));
		var value = this.pagejson['page'+this.currpage];
		if(!value[num]){
			value[num] = {};
		}
		//当cssName为批量时
		if(cssName instanceof Object){
			$.each(cssName,function(key,result){
				value[num][key] = result;
			})
		}else{
			value[num][cssName] = cssValue;
		}
		this.refreshPageHtml(value);
	},
	
	/**
	 * 删除元素，刷新页面json
	 * @param {int} num 删除的元素的序号
	 */
	deletEleJson:function(num){
		var value = this.pagejson['page'+this.currpage];
		if(!value[num]){
			return;
		}
		value.splice(~~num,1);
		this.refreshPageHtml(value);
	},
	
	/**
	 * 复制元素
	 * @param {int} num 复制的元素的序号
	 */
	copyEleJson:function(num){
		var value = this.pagejson['page'+this.currpage];
		if(!value[num]){
			return;
		}
		this.copyJson = this.extend(value[num]);
	},
	
	/**
	 * 刷新缩略页面html ，刷新本页
	 * @param {array} value json数组 
	 */
	refreshPageHtml:function(value){
		var _self = this;
		var li = this.makePageHtml('page'+_self.currpage,value);
		
		//重写左侧当前页html
		//16-1-26 直接读取active代替匹配
		var currPage = $('#e_page').find('.page.active').parent();
		li = li.replace(/^<li data-page=\"\d+\"><div class=\"page\s*[a-z]*\">/,'');
		li = li.replace(/<\/div><\/li>$/,'');
		currPage.find('.page').html(li);
		var alist = currPage.find('.animated');
		$.each(alist,function(){
			var t = $(this);
			t.removeClass('animated').removeClass(t.attr('data-animation')).css({
				'-webkit-animation-name':'',
				'-moz-animation-name':'',
				'animation-name':''
			}).find('.edit').remove();
		})
		
		
		//匹配方式修改li内容
//		$.each($('#e_page > li'),function(){
//			if($(this).attr('data-page') === _self.currpage + ''){
//				li = li.replace(/^<li data-page=\"\d+\"><div class=\"page\s*[a-z]*\">/,'');
//				li = li.replace(/<\/div><\/li>$/,'');
//				$(this).find('.page').html(li);
//				var alist = $(this).find('.animated');
//				$.each(alist,function(){
//					var t = $(this);
//					t.removeClass('animated').removeClass(t.attr('data-animation')).css({
//						'-webkit-animation-name':'',
//						'-moz-animation-name':'',
//						'animation-name':''
//					}).find('.edit').remove();
//				})
//			}
//		});
	},
	
	/**
	 * 切换当前页面
	 * @param {object} o 当前li的对象 
	 */
	chosePage:function (o){
		var page = parseInt($(o).attr('data-page').match(/\d+/)[0]);
		if(this.pagehtml && this.pagehtml['page'+page])
			this.currpage = page;
			this.currobj = $(o);
		if(!$(o).find('.page').hasClass('active')){
			this.buildPage(page);
		}
	},
	
	/**
	 * 编辑器左侧分页控制
	 * 支持上下拖拽
	 */
	setMinPage:function(){
		var _self = this;
		var $item = $('#e_page > li');
		var $item_h = $item.height();
		var offsetTop = $('.w_header').height(),offsetLeft = 0;
		var li = '<li id="space"></li>';
		var startY = null;
		var index = 0;
		var lastTurnY = 0;
		var dragWay = 'down';
		this.currpage = 1;
		this.dragpage = 1;

		$(document).on('click','.e_page li',function(){
			_self.chosePage(this);
		});
		
		$( document ).on("dragstart",".e_page li",function( ev, dd ){
			$item = $('#e_page > li');
			$(this).addClass('drag').after(li);
			index = $(this).index();
			startY = dd.offsetY - offsetTop;
			_self.chosePage(this);
			_self.dragpage = parseInt($(this).attr('data-page').match(/\d+/)[0]);
		});
		
		$( document ).on("drag",".e_page li",function( ev, dd ){
			var delvaY = dd.offsetY - offsetTop;
			var diffY = delvaY - startY;
			$( this ).css({
				position:'absolute',
				top: delvaY < 0 ? 0 : delvaY,
				left:0
			});
			//向下
			if(diffY > 0){
				if(diffY % $item_h > 0){
					var i = index + Math.floor(diffY / $item_h);
					if(i > $item.length - 1)
						i = $item.length - 1;
					$($item[i]).after($('#space'));
				}
			//向上
			}else if(diffY < 0){
				if(-diffY % $item_h > 0){
					var i = index - Math.floor(-diffY / $item_h);
					if(i < 0)
						i = 0;
					$($item[i]).before($('#space'));
				}
			}
		});
		
		$( document ).on("dragend",".e_page li",function( ev, dd ){
			$(this).attr('style','').removeClass('drag');
			$('#space').after($(this)).remove();
			var newpage = $(this).index() + 1;
			_self.changePage($(this),newpage,_self.dragpage);
			_self.historyO.insert({
				'page':_self.currpage,
				'action':'changePage',
				'olddata':_self.dragpage,
				'newdata':newpage
			});
		});
		
	},
	/**
	 * 交换页面位置
	 * @param {num} newI 新位置的index
	 * @param {num} oldI 老位置的index
	 */
	changePage:function(obj,newI,oldI){
		if(newI === oldI){
			return;
		}
		var _self = this;
		//拖拽元素设置新序号
		obj.find('.p_num span').html(newI);
		obj.attr('data-newpage',newI);
		var index = obj.index();
		
		//交换json
		var cache = this.extend(this.pagejson);
		cache['page' + newI] = [];
		cache['page' + newI] = this.extend(this.pagejson['page' + oldI]);
		
		//交换html
		var cachehtml = this.extend(this.pagehtml);
		cachehtml['page' + newI] = [];
		cachehtml['page' + newI] = this.extend(this.pagehtml['page' + oldI]);
		
		$item = $('.e_page').find('li');
		for(var i=1,b=newI-oldI;i<=Math.abs(b);i++){
			var np ,op; 
			if(b > 0){
				//向下拖拽
				np = newI - i;
				op = newI - i + 1;
			}else{
				//向上拖拽
				np = newI + i;
				op = newI + i - 1;
			}
			
			$.each($item,function(){
				if($(this).attr('data-page') === op + ''){
					cache['page' + np] = _self.extend(_self.pagejson['page' + op]);
					cachehtml['page' + np] = _self.extend(_self.pagehtml['page' + op]);
					$(this).find('.p_num span').html(np);
					$(this).attr('data-newpage',np);
					return false;
				}
			})
		}
		this.pagejson = cache;
		this.pagehtml = cachehtml;
		$.each($item,function(){
			$(this).attr('data-page',$(this).attr('data-newpage'));
		})
		$.each($('#e_page li'), function() {
			if(parseInt($(this).attr('data-page')) === newI){
				_self.chosePage(this);
				return false;
			}
		});
	},
	/**
	 * 生成页面
	 * @param {num} page 页码
	 * 依赖于_self.pagehtml
	 */
	buildPage:function(page){
		if(!page || page <= 0){
			return;
		}
		if(this.pagehtml && this.pagehtml['page'+page]){
			//清空
			$('#e_container').html('');
			//写入数据
			var html = this.pagehtml['page'+page];
			$.each(html,function(key,value){
				$(value).appendTo('#e_container');
			})
			//绑定元素方法
			this.eleO.render(page);
			//热区
			$.each($('#e_page > li'),function(){
				if($(this).attr('data-page') === page+''){
					$(this).find('.page').addClass('active');
				}else{
					$(this).find('.page').removeClass('active');
				}
			})
		}else{
			MZ.tipmessage.show({message:this.modelO.tipInfo.buildnodata,delay:1000,pos:'middle',type:'fail'});
		}
	},
	/**
	 * 生成模板
	 */
	makeModel:function(){
		var _self = this;
		var path = this.develop === 'online'?(this.modelO.prex + this.modelO.apiUrl.getModel):"js/model.json";
		$.ajax({
        	type: "get", 
            url: path,
            dataType:'json',
            success: function (result) { 
                if(result.status === 1){
                	//读取模板数据
					var modelO = $('.model_store');
					var contentO = modelO.find('.m_content');
					var triggerO = modelO.find('.m_trigger');
					var modelName = result.category;
					//构建trigger
					var trigger = '<ul><li data-type="all" class="active">全部模板</li>';
					$.each(modelName,function(key,value){
						trigger += '<li data-type="'+(key+1)+'">'+value+'</li>';
					});
					trigger += '</ul>';
					triggerO.html(trigger);
                	triggerO.find('li').click(function(){
                		$(this).addClass('active').siblings().removeClass('active');
                		var type = $(this).attr('data-type');
                		if(type !== 'all'){
                			contentO.find('.type'+type).fadeIn(300).siblings().hide();
                		}else{
                			contentO.find('ul').fadeIn(300);
                		}
                	});
                	
                	//构建content
                	var modelAttr = result.data;
                	var content = '';
                	$.each(modelAttr,function(key,value){
                		content += '<ul class="type'+(key+1)+'">';
                		$.each(value,function(k,v){
							var n = k + 1;
							var li = '<li data-page="'+n+'" data-id="'+v.tid+'"><div class="page"><div class="p_temple"><div class="p_t_scale">';
							v.template_data = _self.develop === 'online'?JSON.parse(v.template_data):v.template_data;
							$.each(v.template_data,function(k,val){
								//构建编辑用json
								var edit = _self.convertEditJson(k,val);
								
								//生成html array
								var h = _self.eleO.makeEleHtml(val.type,edit);
								li += h;
							})
							li += '</div></div></div></li>';
							li = li.replace(/(-webkit-)?animation-name:[a-z|A-Z]+;/g,'');
                			content += li;
                		})
                		content += '</ul>';
                	})
                	
                	contentO.html(content);
                	var alist = contentO.find('.animated'),modelJson = {},choseModelId = '';
					$.each(alist,function(){
						var t = $(this);
						t.removeClass('animated').removeClass(t.attr('data-animation')).css({
							'-webkit-animation-name':'',
							'-moz-animation-name':'',
							'animation-name':''
						}).find('.edit').remove();
					});
					contentO.find('li').click(function(){
						var id = $(this).attr('data-id');
						var type = $(this).parent('ul').attr('class').match(/\d+/)[0] - 1;
						choseModelId = id;
						modelJson = modelAttr[type][$(this).index()].template_data;
						contentO.find('li').removeClass('active');
						$(this).addClass('active');
					});
					
					//添加
					$('.add_model').click(function(){
						if(modelJson){
							modelJson[0].modelId = choseModelId;
							_self.modelid.push(choseModelId);
							_self.addModel(modelJson);
						}
					});
				}
            }, 
            error: function (XMLHttpRequest, textStatus, errorThrown) { 
                alert(errorThrown);
            }
        });
		
		//添加空白
		$('.add_space').click(function(){
			var modelJson = [];
			var jsonbg = _self.extend(eles.bg.default,true);
			jsonbg.type = 'bg';
			modelJson.push(jsonbg);
			_self.addModel(modelJson);
		});

		//复制页面
		$('.copy').click(function(){
			var totalp = $('#e_page > li').length;
			if(totalp >= 30){
				MZ.tipmessage.show({message:this.modelO.tipInfo.pageTooMore,delay:1000,pos:'middle',type:'fail'});
				return false;
			}
			_self.copyPageJson();
		});
		
		//删除页面
		$('.delete').click(function(){
			MZ.dialog.base({
                content: _self.modelO.tipInfo.deltip,
                title: '提示',
                type:'confirm',
                btnAlign:'center',
                fnSure: function(dialog,rdm) {
                	_self.delPageJson();
                    dialog.close(rdm);
                },
                fnCancel:function(dialog,rdm){
                    dialog.close(rdm);
                }
            })
		});
		 
	},
	
	/**
	 * 添加模板
	 * @ {array} arr 需要加入页面的模板的样式数组
	 */
	addModel:function(arr){
		var _self = this;
		//获得最大值
		var totalp = $('#e_page > li').length;
		if(totalp >= 30){
			MZ.tipmessage.show({message:this.modelO.tipInfo.pageTooMore,delay:1000,pos:'middle',type:'fail'});
			return false;
		}
		//修改json
		var cache = {};
		var cacheArr = [];
		//空对象标识
		var empty = true;
		
		//遍历并递增相应模板号
		$.each(this.pagejson,function(key,value){
			empty = false;
			cacheArr = [];
			var n = parseInt(key.match(/\d+/)[0]);
			if(n > _self.currpage){
				cacheArr = _self.extend(value,true);
				cache['page' + (n + 1)] = cacheArr;
			}else{
				cacheArr = _self.extend(value,true);
				cache[key] = cacheArr;
				if(n == _self.currpage){
					cache['page' + (_self.currpage + 1)] = arr;
				}
			}
		});
		//空对象处理
		if(empty){
			cache['page1'] = arr;
		}
		this.pagejson = cache;
		
		$('body').trigger('click');
		//修改页面内的num
		this.makeMinPage(true);
		//焦点
		$.each($('#e_page li'), function() {
			var c = _self.currpage + 1;
			if(parseInt($(this).attr('data-page')) === c){
				_self.chosePage(this);
				return false;
			}
		});
	},
	/**
	 * 删除页面
	 */
	delPageJson:function(){
		var _self = this;
		//获得最大值
		var $item = $('#e_page > li');
		var totalp = $item.length;
		if(totalp > 1){
			//记录历史
			this.historyO.insert(this.pagejson);
			
			//修改json
			var cachejson = this.extend(this.pagejson);
			
			//交换html
			var cachehtml = this.extend(this.pagehtml);
			var max = 1;
			
			$.each(this.pagejson,function(key,value){
				var n = parseInt(key.match(/\d+/)[0]);
				max = max > n?max : n;
				if(n > _self.currpage){
					cachejson['page' + (n - 1)] = _self.extend(value,true);
					cachehtml['page' + (n - 1)] = _self.extend(cachehtml[key],true);
					
				}else{
					return;
				}
			})
			
			delete cachejson['page'+max];
			delete cachehtml['page'+max];
			
			this.pagejson = cachejson;
			this.pagehtml = cachehtml;
			
			$.each($item,function(){
				var num = parseInt($(this).attr('data-page'));
				if(num > _self.currpage){
					$(this).attr('data-page',num-1).find('.p_num span').html(num-1);
				}else if(num === _self.currpage){
					$(this).remove();
				}
			})
			
			$('body').trigger('click');
	
			//焦点
			$.each($('#e_page > li'), function() {
				var c = _self.currpage === totalp?_self.currpage - 1:_self.currpage;
				c = totalp === 1?1:c;
				if(parseInt($(this).attr('data-page')) === c){
					_self.chosePage(this);
					return false;
				}
			});
		}else{
			MZ.tipmessage.show({message:_self.modelO.tipInfo.delNotEmpty,delay:1000,pos:'middle',type:'fail'});
		}
		
	},
	/**
	 * 复制模板
	 */
	copyPageJson:function(){
		var cacheArr = [];
		cacheArr = this.extend(this.pagejson['page' + this.currpage],true);
		this.addModel(cacheArr);
	},
	/**
	 * 背景音乐
	 * 上传音乐
	 */
	setMusic:function(){
		var box = $('.music .musicbox'), player = $('.music .m_chose') , playbtn = player.find('.play');
		var backMusicObj = null , musicObjList = [] , _self = this;
		
		//读取json音乐地址
		choseMusic(_self.music);
		if(_self.music){
			var src = _self.music.split('/');
			var name = src[src.length-1];
			var li = '<li><span>'+name+'</span><a href="javascript:void(0);" class="play" data-src="'+ _self.music +'"></a></li>' 
			$('#music_upload').before(li);
		}

		//初始化
		$.each(box.find('.play'),function(){
			musicObjList.push(new Player($(this),false,true,musicObjList));
		});
		
		//选择音乐并写回
		function choseMusic(src){
			if(src){
				var s = src.split('/');
				var n = s[s.length-1].split('.')[0];
				playbtn.attr('data-src',src).show();
				player.find('.chose').html(n);
				_self.music = src;
				musicObjList.push(new Player(playbtn,false,true,musicObjList));
			}else{
				_self.music = '';
				playbtn.attr('data-src','');
				player.find('.chose').html('无背景音乐');
				playbtn.hide();
			}
		}
		
		//停止音乐
		function stopMusic(){
			$.each(musicObjList,function(){
				this._playOff();
			})
		}
		
		//选择音乐
		$(document).on('click','.musicbox li',function(){
			if($(this).hasClass('chose_upload') || $(this).parents('.chose_upload').length > 0)
				return;
			stopMusic();
			box.fadeOut(200);
			var p = $(this).find('.play');
			choseMusic(p.attr('data-src'));
		});

		//上传
		var path = _self.develop === 'online'?(_self.modelO.prex + _self.modelO.apiUrl.uploadaudio):'server/fileupload.php';
		uploader = WebUploader.create({
            pick: {
                id: '#music_upload',
                label: '上传音乐+'
            },
            formData: {
                uid: 2,
                hid: _self.hid
            },
            swf: 'js/common/plugins/Uploader.swf',
            chunked: true,
            chunkSize: 512 * 1024,
            server: path,

			accept: {
            	title: 'mp3',
               	extensions: 'mp3',
               	mimeTypes: 'audio/*'
			},

            //禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 300,
            fileSizeLimit: 10 * 1024 * 1024,    // 10 M
            fileSingleSizeLimit: 512 * 1024    // 512k
        });
        
		uploader.onUploadSuccess = function( file ,response) {
        	//写回正式src
        	if($('#' + file.id).length > 0){
        		if(response.status === 1)
        			addPlayList(file,response.path);
        	}
        };
        
		uploader.onUploadProgress = function( file, percentage ) {
			$('#' + file.id).find('span').width(percentage * 100 + '%');
        };
		uploader.onError = function( code ) {
            MZ.tipmessage.show({message:_self.modelO.errorCode[code],delay:1000,pos:'middle',type:'fail'});
        };
        
        uploader.onFileQueued = function( file ) {
        	var name = file.name.split('.')[0];
			var li = '<li id="'+file.id+'"><span style="width:0%;height:100%;display:block;background:#32a5e7;">'+name+'</span></li>' 
			$('#music_upload').before(li);
			uploader.upload();
        };
        
        //构建单条音乐
		function addPlayList(file,src){
			var o = $('#' + file.id);
			var s = src.split('/');
			var name = s[s.length-1];
			o.html('<span>'+name+'</span><a href="javascript:void(0);" class="play" data-src="'+ src +'"></a>');
			if(src)
				musicObjList.push(new Player(o.find('.play'),false,true,musicObjList));
		}
	},
	
	/**
	 * 图片库弹框方法
	 */
	setPicStore:function(){
		var _self = this;
		var $store = $('.pic_store'),
			$sTrigger = $store.find('.p_trigger > ul > li'),
			$sContent = $store.find('.p_content > ul > li');
		
		function change(num){
			$sTrigger.eq(num).addClass('title_green').siblings().removeClass('title_green');
			$sContent.eq(num).show().siblings().hide();
		}
		
		//图片库类别切换
		$sTrigger.click(function(){
			change($(this).index());
		})
		
		//子类别切换
		$.each($sContent,function(){
			var $trigger = $(this).find('.p_c_trigger > ul > li');
			var $content = $(this).find('.p_c_list > ul');
			$trigger.click(function(){
				$(this).find('a').addClass('checked');
				$(this).siblings().find('a').removeClass('checked');
				$content.eq($(this).index()).show().siblings().hide();
			})
		})
		
		//元素选择
		$(document).on('click','.img_choose',function(){
			$store.find('.img_choose').removeClass('active');
			$(this).addClass('active');
		})
		
		//插入图片库图片
		$('.insert_pic').click(function(){
			if($('.pic_store').find('.img_choose.active').length === 0){
				MZ.tipmessage.show({message:_self.modelO.tipInfo.insertPicError,delay:1000,pos:'middle',type:'fail'});
				return false;
			}
			_self.eleO.addEle('img');
		})
		
		//设为背景
		$('.pic_store .insert_bg').click(function(){
			if($('.pic_store').find('.img_choose.active').length === 0){
				MZ.tipmessage.show({message:_self.modelO.tipInfo.insertPicError,delay:1000,pos:'middle',type:'fail'});
				return false;
			}
			_self.eleO.changeBackground();
		})
		
		//更换图片
		$('.pic_store .change_pic').click(function(){
			_self.eleO.changePic();
		})
		
		//上传
        var path = _self.develop === 'online'?(_self.modelO.prex + (_self.userState === 1?_self.modelO.apiUrl.uploadmodelpic:_self.modelO.apiUrl.uploadpic)):'server/fileupload.php';
		
		uploader = WebUploader.create({
            pick: {
                id: '#img_upload',
                label: '上传图片+'
            },
            formData: {
                uid: 1,
                hid: _self.hid
            },
            auto:true,
            swf: 'js/common/plugins/Uploader.swf',
            chunked: false,
            chunkSize: 512 * 1024,
            server: path,

			accept: {
            	title: 'images',
               	extensions: 'gif,jpg,jpeg,bmp,png',
               	mimeTypes: 'image/*'
			},

            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 300,
            fileSizeLimit: 10 * 1024 * 1024,    // 10 M
            fileSingleSizeLimit: 512 * 1024    // 512k
        });

		uploader.onUploadProgress = function( file, percentage ) {
			if($('#' + file.id).length > 0){
	    		var p = $('#' + file.id).find('.process span');
	    		p.css('width',percentage * 100 + '%');
	    		if(percentage === 1){
	    			p.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend',function(){
	    				p.parent().fadeOut(300);
	    			})
	    		}
	    	}
        };
        
        uploader.onUploadSuccess = function( file ,response) {
        	//写回正式src
        	if($('#' + file.id).length > 0 && response.path){
        		var s = response.path.split('/');
				var n = s[s.length-1].split('.')[0];
        		$('#' + file.id).find('img').attr('src',response.path);
        		$('#' + file.id).find('.info').html(n);
        	}
        };
        
		uploader.onError = function( code ) {
            MZ.tipmessage.show({message:_self.modelO.errorCode[code],delay:1000,pos:'middle',type:'fail'});
        };
        
        uploader.onFileQueued = function( file ) {
        	var $li = $(
	            '<li id="' + file.id + '" class="img_choose file-item thumbnail">' +
	            	'<div class="process">'+
					    '<span></span>'+
					'</div>'+
	                '<img>' +
	                '<p class="info choose_title">'+file.name.split('.')[0]+'</p>',
	            '</li>'
	            ),
	            
	        $img = $li.find('img');
	
		    // $list为容器jQuery实例
			$li.appendTo($sContent.eq(0).find('.p_c_list ul'));
			
		    // 创建缩略图
		    uploader.makeThumb( file, function( error, src ) {
		        if ( error ) {
		            $img.replaceWith('<span>不能预览</span>');
		            return;
		        }
		        $img.attr( 'src', src );
		    }, 60, 75 );	    
        };
	},
	/**
	 * 选择文本
	 */
	setText:function(){
		var _self = this;
		$('.e_tools .text').click(function(){
			_self.eleO.addEle('text');
		});
	},
	/*
	 * 选择形状
	 */
	setShape:function(){
		var _self = this;
		$('#shapebox li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			_self.eleO.addEle('shape');
		});
	},
	/**
	 * 辅助线
	 */
	setAssist:function(){
		var assHtml = [
			'<div class="section_assist">',
				'<div class="horz">',
					'<div class="horz_dot"></div>',
					'<div class="horz_dot"></div>',
					'<div class="horz_dot"></div>',
					'<div class="horz_dot"></div>',
				'</div>',
				'<div class="vert">',
					'<div class="vert_dot"></div>',
					'<div class="vert_dot"></div>',
					'<div class="vert_dot"></div>',
					'<div class="vert_dot"></div>',
				'</div>',
			'</div>'
		].join('');
		$('.e_d_tool .assist').click(function(){
			if($('.section_assist').length > 0 && $('.section_assist').is(':visible')){
				$('.section_assist').hide().remove();
			}else{
				$(assHtml).appendTo($('#e_container')).show();
			}
		})
	},
	/**
	 * 保存temple
	 */
	saveTemple:function(){
		var _self = this;
		var btn = $('.save_model');
		
		//保存方法
		function save(){
			MZ.dialog.base({
                content: [
                	'<div class="temple">',
                		'<textarea id="temple_json" class="temple_json"></textarea>',
                		'<p>'+_self.modelO.tipInfo.templeSaveTip+'</p>',
                    '</div>',
                ].join(''),
                title: '提示',
                type:'confirm',
                btnAlign:'center',
                callback:function(){
                	$('.mzui_dialog .dialog_ft').hide();
                	$('.mzui_dialog .temple_json').val(JSON.stringify(_self.pagejson['page'+_self.currpage]));
                },
                width:'500'
            })
			
		}
		
		//绑定按钮
		btn.click(function(){
			save();
		});
	},
	/**
	 * 保存json
	 */
	saveJson:function(){
		var _self = this;
		var autosaveTime = 60;	//s
		var btn = $('.save');
		var saving = false;
		
		//保存方法
		function save(){
			saving = true;
			var templeid = [];
			$.each($('#e_page > li'),function(){
				var id = $(this).attr('data-modelid');
				if(id){
					templeid.push(id);
				}
			})
			var pagejson = {"music":_self.music,"value":_self.pagejson,"temple_id":templeid};
			btn.removeClass('savedone').addClass('saving');
			$.ajax({
	        	type: "post", 
	            url: _self.modelO.prex + _self.modelO.apiUrl.save,
	            data:{'hid':_self.hid,'pagedata':pagejson},
	            success: function (data) { 
	                console.log(pagejson);
	            },
	            complete:function(){
	            	btn.removeClass('saving').addClass('savedone');
	            	saving = false;
	            }
	        })
		}
		
		//绑定按钮
		btn.click(function(){
			if(!saving)
				save();
		});
		
		//定时保存
		setInterval(function(){
			if(!saving)
				save();
		},autosaveTime * 1000);
	},
	/**
	 * 设置弹框及其触发按钮
	 */
	setBlock:function(){
		var _self = this;
		//音乐弹窗
		$('.music .chose').blockbox('.musicbox',{});
		//背景弹窗
		$('.element').find('.pic').blockbox('.pic_store',{
			closebtn:$('.pic_store .close'),
			callback:function(){
				$('.insert_bg').show();
				$('.insert_pic').show();
				$('.change_pic').hide();
			}
		});
		//形状弹窗
		$('.element .area').blockbox('.shapebox',{});
		//链接弹窗
		$('.element .link').blockbox('.linkbox',{});
		//模板弹窗
		$('.showModel').blockbox('.model_store',{});
		//预览弹窗
		$('.preview').blockbox('.preview_box',{
			showbg:true,
			closebtn:$('.preview_box .close'),
			callback:function(){
				_self.makePreview();
			}
		});
	},
	
    /**
     * 滚动条自定义
     */
	setScroll:function(){
		$('#e_page').niceScroll({cursorborder:'0px',cursorcolor:'rgb(156, 156, 156)'});
		$('#m_content').niceScroll({cursorborder:'0px',cursorcolor:'rgb(156, 156, 156)'});
		$("#musicbox").niceScroll({cursorborder:'0px',cursorcolor:"#ccc",bouncescroll:false});
		$("#linkbox").niceScroll({cursorborder:'0px',cursorcolor:"#ccc",bouncescroll:false});
		$("#shapebox").niceScroll({cursorborder:'0px',cursorcolor:"#ccc",bouncescroll:false});
	},
	
	/**
     * 获取e_page li
     */
	getPageLi:function(){
		this.epageLi = $('#e_page > li');
		this.econtainer = $('#e_container');
	},
	/**
     * 去重
     */
	unique:function (arr) {
		var result = [];
		if(arr && arr.length > 0){
		    var hash = {};
		    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
		        if (!hash[elem]) {
		            result.push(elem);
		            hash[elem] = true;
		        }
		    }
	    }
	    return result;
	},
	/**
	 * 深拷贝
	 */
	extend:function(obj,insert){
		var o,i,j,k;
		if(typeof(obj) != "object" || obj === null) 
			return obj;
			
		if(obj instanceof(Array)){
			o = [];
			i = 0;j = obj.length;
			for(;i<j;i++){
				if(typeof(obj[i]) == "object" && obj[i] != null){
					o[i] = arguments.callee(obj[i]);
				}else{
					o[i] = obj[i];
				}
			}
		}else{
			o = {};
			for(i in obj){
				if(typeof(obj[i]) == "object" && obj[i] != null){
					o[i] = arguments.callee(obj[i]);
				}else{
					o[i] = obj[i];
				}
			}
		}
		return o;
    },
    
    /**
     * 移除数组元素
     */
	removeArray:function(arr,value){
		for(var i=0;i<arr.length;i++){
			if(arr[i] === value){
				arr.splice(i,1);	
			}
		}
		return arr;
	},
	
	/**
	 * 获取get参数
	 */
	getQueryString:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	},
	
	/**
	 * 窗体适应
	 */
	
	fitWin:function(){
		var $wrapW = $('.wrap').width(),
			winW = $(window).width() > $wrapW ? $(window).width():$wrapW, 
			heiH = $(window).height(),
			contentH = heiH - $('.w_header').height();
			
		$('.e_desktop').height(contentH).width(winW - $('.e_page').width() - $('.e_attribute').width());
		$('.w_content').height(contentH);
		$('.model_store').height(contentH);
		$('.m_content').height(contentH - $('.m_trigger').height() - $('.m_btns').height());
	},
	/**
	 * 窗体绑定
	 */
	resize:function(){
		var _self = this;
		this.resizeObj = {
			fit:this.fitWin
		};
		
		$(window).resize(function(){
			for(key in _self.resizeObj){
				var fn = _self.resizeObj[key];
				if(typeof(fn) == 'function'){
					fn();
				}
			}
		})
	}
}
return editorObj;