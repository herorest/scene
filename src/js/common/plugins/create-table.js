/**
 * @fileOverview 定义jquery插件dataTables生成table的公共方法
 */
//文件名与 amd export 导出名称必须一致！并且要注意：大！小！写！（I'm very angry！）


(function ($, MZ) {
	/**
	 * @class CreateTable 定义 jquery插件 dataTables生成 table的公共方法
	 */
	var CreateTable = window.CreateTable = function (param, callback) {
		if (param) {
			this.render(param, callback);
		}
		//MZ.namespace("MZ.createTable", this);
	};
	
	/**
	 *@lends CreateTable.prototype
	 */
	CreateTable.prototype = {
		/**
		 *入口
		 *@param {Object} param 生成表格的参数
		 *@param {Function} callback 生成表格后的回调 
		 *@example
		var createTable = new CreateTable();
		var param = {
			id: "table", //往该DOM窗口里插入表格
			width: 100, //表格宽度，不传值默认自适应
			height: 100, //表格高度，不传值默认自适应
			sort: "no", //是否重新排序 no 不排   
			pageSize: 10,
			TrClickHighlight: true, //单击行高亮
			一页显示的数据数
			aoColumns: [{ //设置表头
				sTitle: "标题1",
				sClass: "ta_l" //自定义的样式.ta_l{text-align:left;}
			}, {
				sTitle: "标题2",
				sClass: "ta_r"
			}, {
				sTitle: "标题3",
				sClass: "ta_c"
			}, {
				sTitle: "标题4",
				sClass: "ta_l"
			}, {
				sTitle: "标题5",
				sClass: "ta_l"
			}],
			url: "http://www.meizu.com/xxxx",
			type: 1, //0: ajax一次返回所有数据 1: ajax按页返回数据	2: 非ajax
			page: true //是否分页
		};
		createTable.render(param);
		 */
		render: function (param, callback) {
			if (param.type === 0) { //0: ajax一次返回所有数据
				this.createTableByAjaxAll(param, callback);
			}
			if (param.type === 1) { //1: ajax按页返回数据
				this.createTableByAjaxPage(param, callback);
			}
			if (param.type === 2) { //2: 非ajax
				this.createTableByJson(param, callback);
			}
			
			// 行单击高亮 by lzw
			if (param.TrClickHighlight) {
				$(document).off("click", "#" + param.id + " table.dataTable tbody tr")
					.on("click", "#" + param.id + " table.dataTable tbody tr", function (e) {
					if ($(this).hasClass("highlight")) {
						$(this).removeClass("highlight");
					} else {
						$(this).addClass("highlight").siblings("tr").removeClass("highlight");
					}
					//记录被单击的行
					window.localStorage.setItem("trHighlightIndex", $(e.target).parents("tr").index());
				});
			}
		},
		/**
		 *对插件进行汉化
		 */
		getCnData: function () {
			var data = { //汉化
				sLengthMenu: "每页显示 _MENU_ 条记录",
				sZeroRecords: "没有检索到数据",
				sInfo: "第 _START_ 到第 _END_ 条， 共 _TOTAL_ 条记录",
				sInfoEmpty: "第 0 到第 0 条，共 0 条记录",
				sInfoFiltered: "(从总共 _MAX_ 条记录中检索)",
				sInfoEmtpy: "没有数据",
				sProcessing: "正在加载数据...",
				sSearch: "过滤 ",
				oPaginate: {
					sFirst: "首页",
					sPrevious: "前页",
					sNext: "后页",
					sLast: "尾页"
				}
			};
			return data;
		},
		/**
		 *ajax一次获取数据生成table TODO
		 */
		createTableByAjaxAll: function () {
			window.alert("createTableByAjaxAll");
		},
		getNewAadata: function (param) {
			var aaData = param.aaData,
				len = aaData.length,
				i, o, p, m, n, e, _len, result, popover, check,
				html, num, alink, span,
				cssclass, text, style, attr;
			
			for (i = 0; i < len; i++) {
				_len = aaData[i].length;
				for (o = 0; o < _len; o++) {
					if (!aaData[i][o] && aaData[i][o] !== 0) {
						aaData[i][o] = param.aaData[i][o] = "";
					}
					//列最大长度
					if (param.maxLen != "auto" && (aaData[i][o] + '') .toString().replace(/<(?:.|\s)*?>/g, '').length > (param.maxLen || 20)) {
					//	title="' + aaData[i][o].toString().replace(/<(?:.|\s)*?>/g, '').replace(/\"/g, "'") + '" 
					// 去掉title属性 , 解决数据过多的时候title显示不全 Sxm
						param.aaData[i][o] = '<div class="ellipsis" style="max-width:' + (param.maxLen || 20) * 8 + 'px">' + aaData[i][o] + '</div>';
					}
					if (param.tdHtml) {
						result = param.tdHtml.serverData;
						//浮层
						if (param.tdHtml.popover) {
							popover = param.tdHtml.popover;
							for (m = 0; m < popover.length; m++) {
								if (o == popover[m].index) {
									param.aaData[i][o] = '<span data-num="' + i + '" data-index="' + m + '" class="popover_hover" data-toggle="dropdown">' + aaData[i][o] + '</span>';
								}
							}
						}
						
						//复选框
						if (param.tdHtml.check) {
							check = param.tdHtml.check;
							for (e = 0; e < check.length; e++) {
								param.aaData[i][check[e].index] = '<input type = "checkbox" class="selectbox">';
							}
						}
						
						//链接
						if (param.tdHtml.alink) {
							alink = param.tdHtml.alink;
							
							html = '';
							num = null;
							for (n = 0; n < alink.length; n++) {
								if (o == alink[n].index) {
									//文本
									if(alink[n].text) {
										text = typeof(alink[n].text) == "string" ? alink[n].text : result[i][alink[n].text.key];
									} else {
										text = (aaData[i][o] + '').toString().replace(/<(?:.|\s)*?>/g, '');
									}
									cssclass = typeof(alink[n].cssclass) == "string" ? alink[n].cssclass : result[i][alink[n].cssclass.key];
									
									html += '<a href="javascript:;" class="' + cssclass + '" title="' + (text + '').toString().replace(/\"/g, "'") + '"';
									num = o;
									if (alink[n].attr) {
										attr = alink[n].attr;
										for (p = 0; p < attr.length; p++) {
											if (/^[a-z0-9%]*$/i.test(result[i][attr[p].key]) === false) { //纯字母数字或已编码字符不再编码 by lzw
												html += ' data-' + attr[p].key + '="' + encodeURIComponent(result[i][attr[p].key]) + '"';
											} else {
												html += ' data-' + attr[p].key + '="' + result[i][attr[p].key] + '"';
											}
										}
									}
									if (alink[n].style) {
										style = alink[n].style;
										for (p = 0; p < style.length; p++) {
											html += ' style="' + style[p].css + ':' + result[i][style[p].key] + ';"';
										}
									}
									html += '>' + text + '</a>';
								}
							}

							if (aaData[i][o] === "") {
								html = "";
							}
								
							if (num) {
								param.aaData[i][num] = html;
							}
						}
						
						//span标签
						if (param.tdHtml.span) {
							span = param.tdHtml.span;
							
							html = '';
							num = 0;
							
							for (n = 0; n < span.length; n++) {
								text = typeof(span[n].text) == "string" ? span[n].text : result[i][span[n].text.key];
								cssclass = typeof(span[n].cssclass) == "string" ? span[n].cssclass : result[i][span[n].cssclass.key];
								html += '<span class="' + cssclass + '" title="' + text + '"';
								if (o == span[n].index) {
									num = o;
									if (span[n].attr) {
										attr = span[n].attr;
										for (p = 0; p < attr.length; p++) {
											html += ' data-' + attr[p].key + '="' + result[i][attr[p].key] + '"';
										}
									}
									if (span[n].style) {
										style = span[n].style;
										for (p = 0; p < style.length; p++) {
											html += ' style="' + style[p].css + ':' + result[i][style[p].key] + ';"';
										}

									}
									html += '>' + text + '</span>';
								}
							}
							if (num) {
								param.aaData[i][num] = html;
							}
						}
					}

				}
			}
			return param;
		},
		/**
		 * 非 ajax 方式，使用  param.aaData 作为数据来源
		 * @param {Object} param
		 * @param {Object} callback 创建 dataTable 后立即回调
		 */
		createTableByJson: function (param, callback) {
			var sort = [], json,
				id = param.id;
			param = this.getNewAadata(param);
			if (param.url == "loadlogmostreadnwrite") {
				param.sort = "no";
			}
			if (param && param.sort != "no") { //是否重排顺序
				sort = [
					[param.sortNum || 0, param.sortType || "desc"]
				];
			}
			
			json = {
				bJQueryUI: true,
				bAutoWidth: true,
				bScrollInfinite: true,
				//"bScrollCollapse": true ,	//当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false)  
				sScrollY: param.height ? param.height : "", //溢出有垂直滚动条
				sScrollX: param.width ? param.width : "100%", //表格宽度
				iDisplayLength : param.pageSize ? param.pageSize : 10,
				/*aaData: param.aaData,
				aoColumns: param.aoColumns,
				bSort: param.bSort,	//是否排序
				bInfo: param.bInfo,
				bFilter: param.bFilter,*/
				aaSorting: sort,
				lengthMenu: [10, 15, 25, 50, 100],
				bStateSave: param.bStateSave,
				oLanguage: this.getCnData(),
				//"sScrollXInner": "190%",   //表格的内容宽度

			};
			
			if (param.page) {
				json.sPaginationType = "full_numbers";
			} else {
				json.bPaginate = false;
			}
			
			json = $.extend({}, json, param);
			$('#' + id).html('<table cellpadding="0" cellspacing="0" border="0" class="display table_jquery" id="tableJquery' + id + '"></table>');
			window.dataTables = window.dataTables || {};
			window.dataTables[id] = this.datatable = $('#tableJquery' + id).dataTable(json);
			
			/**
			 * 超长文本添加 title，也可以在 callback 中自定义超长展示方式，如启用用 popover
			 * @example
			 * $('#' + id + ' div.ellipsis')
			 *			.removeAttr('title')
			 *			.each(function(){
			 *			$(this).parents('td').popover({
			 *				content:$(this).text(),container:'body',
			 *				trigger: 'hover'
			 *			});
			 *		});
			 */
			this.datatable.off( 'draw.dt').on( 'draw.dt', function (e,a,b) {
				//超长文本，添加提示
				$(this).find(' .ellipsis')
					.each(function(){
						return $(this).attr('title', $(this).text());
						/*
						$(this)
						.removeAttr('title')
						.parents('td').popover({
							content:$(this).text(),container:'body',
							trigger: 'hover'
						});*/
					});
			}).trigger('draw.dt');
			
			if (callback) {
				callback(param.aaData);
			}
		},
		/**
		 *ajax按页获取数据生成table
		 *@param {Object} param 生成表格的参数，注意 ajaxParamRender 和 ajaxCallback 方法
		 *@param {Function} callback 生成表格后的回调
		 * @example
		 * var param = {...};
		 * MZ.CreateTable(param, callback);
		 */
		createTableByAjaxPage: function (param, callback) {
			var id = param.id,
			self = this,
			num = 0, i = 0, key = "", queryString, prevQueryString,
			ajaxParamRender = param.ajaxParamRender || this.ajaxParamRender,//对请求参数预处理方法
			ajaxCallback = param.ajaxCallback || this.ajaxCallback,	//对返回数据格式化处理方法
			json = {
				bJQueryUI: true, //使用jQueryUI 风格
				bAutoWidth: true, //自动宽度
				bDestroy: true, //用于重新绘制表格
				sScrollY: param.height ? param.height : "", //溢出有垂直滚动条
				sScrollX: param.width ? param.width : "100%", //表格宽度
				lengthMenu: [10, 15, 25, 50, 100],
				bProcessing: true, //显示进度提示
				iDisplayLength: param.pageSize ? param.pageSize : 10, //每页显示条数
				bServerSide: true, //从服务端请求数据
				bSort: true, //默认开启排序
				sAjaxSource: param.url, //请求 URL
				queryString: '', //附加查询参数
				fnServerData: function (sUrl, aoData, fnCallback, oSettings) {//自定义数据请求方法
					var _aoData = ajaxParamRender(aoData, json);
					oSettings.jqXHR = $.ajax({
						url: sUrl,
						data: _aoData,
						type: 'get',
						async: true,
						dataType: "json",
						cache: false
					}).done(function (res) {
						var result;
						if (res.code !== 200) {
							return window.alert(res.message || "未请求到数据");
						}
						result = ajaxCallback(res);
						result.draw = ++num;//作用？

						//加入自定义属性
						param.aaData = result.data;
						param.tdHtml = param.tdHtml || {};
						param.tdHtml.serverData = res.value[0];

						param = self.getNewAadata(param);

						result.data = param.aaData;
						
						fnCallback(result);
						//超长文本添加 title
						$('#' + id).find("div.ellipsis").each(function (e) {
							$(this).attr('title', $(this).text());
						});
						//成功回调
						if (callback) {
							callback(res);
						}
					});
				},
				oLanguage: this.getCnData()
				//"sScrollXInner": "190%",   //表格的内容宽度

			};
			
			$.extend(true, json, param);
			
			//与上次查询参数不同时，重置表格
			prevQueryString = window.localStorage.getItem(id + "_prevQueryString");
			queryString = json.queryString || (window.dataTables&&window.dataTables[id] &&window.dataTables[id].queryString);
			if (prevQueryString && prevQueryString !== queryString) {
				for (i = 0; i < window.localStorage.length; i++) {
					key =  window.localStorage.key(i);
					if (/^DataTables_/.test(key)) {
						window.localStorage.removeItem(key);	
					}
				}
			}
			//缓存上次请求参数
			window.localStorage.setItem(id + "_prevQueryString", param.queryString);

			if (param.page) {
				json.sPaginationType = "full_numbers";
			} else {
				json.bPaginate = false;
			}
			
			$('#' + id).html('<table cellpadding="0" cellspacing="0" border="0" class="display table_jquery" id="tableJquery' + id + '"></table>');
			
			MZ.namespace('window.dataTables.' + id, $('#tableJquery' + id).dataTable(json));
			
		},
		/**
		 * ajax 请求参数预处理方法
		 * @param aData[array] datatable 的参数
		 * @return [array] 处理后向服务器请求的参数
		 */
		ajaxParamRender: function (aData, param) {
			//从 aData 中获取值
			var _json = {}, _aData = [],
				i, len = aData.length, sortColumn, sortType,
				queryString, queryArray, _queryArray;
			
			for (i = 0;i < len; i++) {
				_json[aData[i]["name"]] = aData[i]["value"]; 
			}

			/**
			 * 附加查询字段：从 param 参数或者全局参数 dataTables[id].queryString 读取
			 * 1. 从 param 获取的不可更改查询参数，除非重新创建；
			 * 2. 从全局参数获取的可以变更查询参数，并使用 fnDraw 刷新: 
			 * 		window.dataTables[param.id].fnDraw(true)\.fnDraw(false)
			 */
			queryString = param.queryString || window.dataTables[param.id].queryString;
			console.log(queryString);
			if (queryString) {
				//为字符串格式
				if (typeof queryString === 'string') {
					queryArray = queryString.split("&");
					len = queryArray.length;
					for (i = 0; i < len; i++) {
						_queryArray = queryArray[i].split("=");
						if (_queryArray[1]) {//值存在，才加入查询
							try{
								_queryArray[0] = decodeURIComponent(_queryArray[0]);
								_queryArray[1] = decodeURIComponent(_queryArray[1]);
							}catch(e){
								//TODO handle the exception
							}
							_aData.push({
								name: _queryArray[0],
								value: _queryArray[1]
							});
						}
					}	
				} else if (typeof queryString === 'object') { // json 格式
					for(i in queryString) {
						_aData.push({
							name: i,
							value: queryString[i]
						});
					}
				}
				
			}
			//合并请求参数
			_aData.push({name: "pageSize", value: _json.iDisplayLength});//每页显示多少条
			_aData.push({name: "pageNum", value: Math.ceil(_json.iDisplayStart / _json.iDisplayLength) + 1});//页数

			//搜索过滤字段（任务管理）
			if (_json["sSearch"]) {
				_aData.push({name: param.searchFiled || "taskName", value: _json["sSearch"] });//页数
			}
			//排序字段，格式 sortColumns: "connFileName|desc"
			if (param.bSort && _json["iSortCol_0"] !== undefined) {
				sortColumn = param.aoColumns[_json["iSortCol_0"]]["sortColumn"];
				sortType = _json["sSortDir_0"];
				if (sortColumn) {
					_aData.push({name: "sortColumns", value: sortColumn + "|" + sortType });
				}
			}
			return _aData;
		},
		/**
		 * ajax 请求返回数据处理方法
		 * 这里仅作为示例，调用时应重写
		 * @param res
		 * @returns {json}
		 */
		ajaxCallback: function (res) {
			var result = {}, i, j, resultI, len;
			result.data = [];
			len = res.value[0].length;
			
			//表格数据数组构造
			for (i = 0; i < len; i++) {
				resultI = res.value[0][i];
				for (j in resultI) {q
					result.data.push((resultI[j] + '').toString());
				}
			}
			//总条数，必须
			result.recordsTotal = res.value[1]["totalRecord"];
			result.recordsFiltered = res.value[1]["totalRecord"];
			
			return result;
		}
	};
	
	//开放接口
	MZ.namespace("MZ.CreateTable", CreateTable);
})(window.jQuery, window.MZ);