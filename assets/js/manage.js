webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _namespace = __webpack_require__(5);

	var _namespace2 = _interopRequireDefault(_namespace);

	var _manage = __webpack_require__(506);

	var _manage2 = _interopRequireDefault(_manage);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(27);

	__webpack_require__(41);

	__webpack_require__(43);

	__webpack_require__(490);

	__webpack_require__(494);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.onload = function () {
	    _reactDom2.default.render(_react2.default.createElement(_manage2.default, null), document.getElementById('wrap'));
	};

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Header = __webpack_require__(7);
	var ProjectList = __webpack_require__(507);
	var Preview = __webpack_require__(512);
	var tip = __webpack_require__(11);
	var str = __webpack_require__(12);
	var dialog = __webpack_require__(13);
	var modelO = __webpack_require__(14);
	var blockbox = __webpack_require__(15);

	var indexCom = React.createClass({
		displayName: 'indexCom',

		getInitialState: function getInitialState() {
			return {
				flag: true,
				page: 1,
				totalpage: 1,
				end: false,
				userstate: 1,
				list: [],
				chosed: {}
			};
		},
		componentDidMount: function componentDidMount() {
			this.getAuth();
		},
		getAuth: function getAuth() {
			if (this.state.userstate !== 0 && this.isMounted()) {
				var _self = this;
				$.ajax({
					type: "get",
					url: modelO.prefix + modelO.apiUrl.checkuser,
					dataType: 'json',
					success: function success(data) {
						var status = data.status || data.status === 0 ? data.status : 0;
						_self.setState({ userstate: status });
						_self.getMore(function () {
							_self.scroll();
						});
					},
					error: function error(data) {
						MZ.tipmessage.show({ message: modelO.tipInfo.checkauthfail, delay: 1000, pos: 'middle', type: 'fail' });
					}
				});
			}
		},
		showModelTip: function showModelTip() {
			var img = (modelO.develop === 'online' ? '/Public/Home/' : '') + 'images/panda.jpg';
			$('.c_project').addClass('c_model').html('<div class="c_model_tip"><img src="' + img + '"><p>模板编辑功能暂未开放，敬请期待!</p></div>');
			$('.c_new').removeClass('.c_newP').html('新建模板');
		},
		getTotalHeight: function getTotalHeight() {
			var head_h = $('.w_header').outerHeight();
			var content_h = $('.w_content').outerHeight(true);
			return head_h + content_h;
		},
		scroll: function scroll() {
			var _self = this;
			$(window).scroll(function () {
				if ($(document).height() - $(window).scrollTop() - $(window).height() < 100) {
					_self.getMore(function () {});
				}
			});
		},
		showInfo: function showInfo() {
			var _self = this;
			if (t) {
				clearTimeout(t);
				t = null;
			} else {
				var t = null;
			}
			$('.c_project_tip').html(modelO.tipInfo.endtip);
			t = setTimeout(function () {
				$('.c_project_tip').html('');
			}, 3000);
		},
		getMore: function getMore(callback) {
			//获取pagejson
			var _self = this;
			if (this.state.flag && !this.state.end) {
				$.ajax({
					type: "get",
					url: modelO.prefix + modelO.apiUrl.list,
					data: { p: _self.state.page },
					dataType: 'json',
					beforeSend: function beforeSend() {
						_self.state.flag = false;
					},
					success: function success(result) {
						if (parseInt(result.status) === 1) {
							_self.state.totalpage = parseInt(result.totalpage);
							if (result.data.length > 0 && _self.state.page <= _self.state.totalpage) {
								_self.setState({
									list: _self.state.list.concat(result.data)
								});
								if (_self.state.page === parseInt(_self.state.totalpage)) {
									_self.state.end = true;
									_self.showInfo();
								}
								_self.state.page++;
								if (callback && typeof callback === 'function') {
									callback.call(_self);
								}
							}
						}
					},
					complete: function complete() {
						_self.state.flag = true;
					}
				});
			} else {
				_self.showInfo();
			}
		},

		previewHandle: function previewHandle(params) {
			var _self = this;
			this.setState({
				chosed: _extends({}, params)
			});
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'manage' },
					React.createElement(
						'div',
						{ className: 'w_header' },
						React.createElement(Header, null)
					),
					React.createElement(
						'div',
						{ className: 'w_content w1000' },
						React.createElement(
							'div',
							{ className: 'clearfix' },
							React.createElement(
								'a',
								{ href: 'javascript:void(0);', className: 'c_new c_newP' },
								'新建项目'
							)
						),
						React.createElement(
							'div',
							{ className: 'c_project' },
							React.createElement(ProjectList, { listdata: this.state.list, previewHandle: this.previewHandle }),
							React.createElement('div', { className: 'c_project_tip' })
						)
					)
				),
				React.createElement(Preview, this.state.chosed)
			);
		}
	});
	module.exports = indexCom;

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var Project = __webpack_require__(508);

	var projectListCom = React.createClass({
		displayName: 'projectListCom',

		getInitialState: function getInitialState() {
			return {
				chosedId: -1
			};
		},
		choseHandle: function choseHandle(hid) {
			this.setState({
				chosedId: hid,
				lastId: this.state.chosedId
			});
		},
		render: function render() {
			var child = [];
			for (var i = 0; i < this.props.listdata.length; i++) {
				var prop = this.props.listdata[i];
				var render = this.state.chosedId === prop.hid || this.state.lastId === prop.hid ? true : false;
				child.push(React.createElement(Project, _extends({ key: i }, prop, { previewHandle: this.props.previewHandle, choseHandle: this.choseHandle, render: render })));
			}
			return React.createElement(
				'ul',
				{ id: 'project', className: 'clearfix' },
				child
			);
		}
	});
	module.exports = projectListCom;

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	__webpack_require__(509);
	var WebUploader = __webpack_require__(466);
	var modelO = __webpack_require__(14);
	__webpack_require__(510);
	__webpack_require__(511);
	var projectCom = React.createClass({
		displayName: 'projectCom',

		getInitialState: function getInitialState() {
			return {
				url: this.props.cover_url,
				hid: this.props.hid,
				status: parseInt(this.props.status),
				preview: this.props.preview,
				view: this.props.view,
				count: this.props.count,
				title: this.props.title,
				desc: this.props.description,
				src: this.props.src,
				titleCache: this.props.title,
				descCache: this.props.description,
				active: false
			};
		},
		componentDidMount: function componentDidMount() {
			$(this.refs.li).hoverdir();
			$(this.refs.li).find('img.lazyloading').lazyloading({ loadfirst: true });
		},

		shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
			return nextProps.render;
		},

		componentWillUpdate: function componentWillUpdate() {
			console.log(this.state.hid);
		},

		avata: function avata() {
			var _self = this;
			var item = $(this.refs.li);
			MZ.dialog.cssClass = 'upload_thrumb';
			MZ.dialog.base({
				content: ['<div class="thtip">支持格式：JPG、JPEG、PNG、GIF &nbsp;&nbsp;大小:2M以内。</div>', '<div class="thrumb">', '<img src="' + _self.state.url + '">', '<a href="javascript:void(0);" class="btu_green t_upload" id="thrumb_upload"></a>', '</div>', '<div class="thedit clearfix">', '<div class="thedit_thrumb">', '<img src="' + _self.state.url + '">', '</div>', '<div class="thedit_preview">', '<img src="">', '</div>', '</div>', '<a href="javascript:void(0);" class="btu_green t_sure">确定并上传</a>'].join(''),
				title: '项目缩略图设置',
				type: 'confirm',
				btnAlign: 'center',
				callback: function callback() {
					$('.mzui_dialog .dialog_ft').hide();
					var dialog = MZ.dialog;
					var rdm = dialog.rdm;
					var w = 240,
					    h = 240,
					    x = 0,
					    y = 0;
					var $thrumb = $('.thrumb');
					var $edit = $('.thedit');
					var $pth = $('.thedit .thedit_thrumb');
					var $img = $pth.find('img');
					var $preview = $('.thedit .thedit_preview');
					var $pimg = $preview.find('img');

					//上传
					var uploader = WebUploader.create({
						pick: {
							id: '#thrumb_upload',
							label: '上传缩略图+'
						},
						formData: {
							uid: 3
						},
						swf: 'js/common/Uploader.swf',
						chunked: false,
						chunkSize: 512 * 1024,
						server: modelO.prefix + modelO.apiUrl.uploadcover,
						accept: {
							title: 'images',
							extensions: 'gif,jpg,jpeg,bmp,png',
							mimeTypes: 'image/*'
						},
						disableGlobalDnd: true,
						fileNumLimit: 1,
						fileSizeLimit: 20 * 1024 * 1024, // 10M
						fileSingleSizeLimit: 2 * 1024 * 1024 // 2M
					});

					uploader.onUploadSuccess = function (file, response) {
						dialog.close(rdm);
						if (response) {
							if (response.status === 1) {
								var path = response.path;
							} else {
								MZ.tipmessage.show({ message: response.info, delay: 1000, pos: 'middle', type: 'fail' });
							}
							if (path) {
								_self.setState({
									url: path
								});
								_self.props.choseHandle(_self.state.hid);
							}
						} else {
							MZ.tipmessage.show({ message: modelO.tipInfo.noresponse, delay: 1000, pos: 'middle', type: 'fail' });
						}
					};

					uploader.onError = function (code) {
						MZ.tipmessage.show({ message: modelO.errorCode[code], delay: 1000, pos: 'middle', type: 'fail' });
					};

					uploader.onUploadBeforeSend = function (object, data, headers) {
						data.x = x, data.y = y, data.width = w, data.height = w, data.hid = _self.state.hid;
					};

					uploader.onFileQueued = function (file) {
						// 创建缩略图
						uploader.makeThumb(file, function (error, src) {
							if (error) {
								$img.replaceWith('<span>不能预览</span>');
								return;
							}
							$('.mzui_dialog').addClass('mzui_dialog_max');
							$img.attr('src', src), $pimg.attr('src', src);

							_self.getPicInfo(src, function (info) {
								if (info.iLong === 'w') {
									$img.css('width', $('.thedit_thrumb').width()).css('height', 'auto');
								} else {
									$img.css('height', $('.thedit_thrumb').height()).css('width', 'auto');
								}

								$thrumb.hide();
								$edit.show();
								$('.t_sure').css('display', 'block');

								setTimeout(function () {
									//裁剪
									$img.Jcrop({
										onChange: updatePreview,
										onSelect: updatePreview,
										aspectRatio: 1
									}, function () {
										var bounds = this.getBounds();
										boundx = bounds[0];
										boundy = bounds[1];
										jcrop_api = this;
									});

									function updatePreview(c) {
										if (parseInt(c.w) > 0) {
											var nw = Math.round(boundx * 224 / c.w);
											var rh = c.h / boundy * info.height;
											var nh = Math.round(info.height * 224 / rh);
											var ml = Math.round(c.x / boundx * nw);
											var mt = Math.round(c.y / boundy * nh);
											var ratio = info.width / nw;
											x = ratio * ml, y = ratio * mt, w = ratio * 224;

											ml = '-' + ml + 'px';
											mt = '-' + mt + 'px';

											$pimg.css({
												width: nw,
												marginLeft: ml,
												marginTop: mt
											});
										}
									};
								}, 100);
							});
						}, 1, 1);

						$('.mzui_dialog .t_sure').click(function () {
							uploader.upload();
						});
					};
				},
				fnSure: function fnSure(dialog, rdm) {
					dialog.close(rdm);
				},
				fnCancel: function fnCancel(dialog, rdm) {
					dialog.close(rdm);
				}
			});
		},
		getPicInfo: function getPicInfo(src, callback) {
			if (src.length <= 0) {
				return;
			}
			var $imgO = new Image(),
			    w,
			    h,
			    tw,
			    th,
			    iLong = 'w',
			    ratio = 'w',
			    _self = this;
			var complete = function complete() {
				w = $imgO.width;
				h = $imgO.height;
				tw = $('#e_container').width();
				th = $('#e_container').height();
				if (w / h > tw / th) ratio = 'h';
				if (h > w) iLong = 'h';
				if (callback && typeof callback === 'function') callback.call(_self, {
					src: src,
					width: w,
					height: h,
					iLong: iLong,
					ratio: ratio,
					obj: $imgO
				});
			};
			$imgO.src = src;
			if ($imgO.complete) {
				complete();
			} else {
				$imgO.onload = function () {
					complete();
				};
			}
		},
		enter: function enter(e) {
			var o = e.target;
			var name = o.name;
			if (name == 'title') {
				this.setState({
					title: o.value
				});
			} else if (name == 'desc') {
				this.setState({
					desc: o.value
				});
			}
			this.props.choseHandle(this.state.hid);
		},
		blur: function blur(e) {
			var _self = this;
			var o = e.target;
			var name = o.name;
			var val = this.state[name + 'Cache'];

			if (val != o.value) {
				$.ajax({
					type: "post",
					url: modelO.prefix + modelO.apiUrl.setInfo,
					data: { 'hid': _self.state.hid, 'title': _self.state.title, 'description': _self.state.desc },
					success: function success() {
						MZ.tipmessage.show({ message: modelO.tipInfo.modsuccess, delay: 1000, pos: 'middle', type: 'success' });
						_self.setState({
							titleCache: _self.state.title,
							descCache: _self.state.desc
						});
					},
					error: function error() {
						MZ.tipmessage.show({ message: modelO.tipInfo.modfailure, delay: 1000, pos: 'middle', type: 'fail' });
						_self.setState({
							title: _self.state.titleCache,
							desc: _self.state.descCache
						});
					},
					complete: function complete() {
						_self.props.choseHandle(_self.state.hid);
					}
				});
			}
		},
		edit: function edit() {
			var _self = this;
			var src = _self.state.src;
			if (src) window.location.href = src;
		},
		del: function del() {
			var _self = this;
			MZ.dialog.base({
				content: modelO.tipInfo.del,
				title: '提示',
				type: 'confirm',
				btnAlign: 'center',
				fnSure: function fnSure(dialog, rdm) {
					$.ajax({
						type: "post",
						url: modelO.prefix + modelO.apiUrl.del,
						data: { 'hid': _self.state.hid },
						success: function success() {
							MZ.tipmessage.show({ message: modelO.tipInfo.delsuccess, delay: 1000, pos: 'middle', type: 'success' });
							window.location.reload();
						},
						error: function error() {
							MZ.tipmessage.show({ message: modelO.tipInfo.delfailure, delay: 1000, pos: 'middle', type: 'fail' });
						}
					});
					dialog.close(rdm);
				},
				fnCancel: function fnCancel(dialog, rdm) {
					dialog.close(rdm);
				}
			});
		},
		offline: function offline(e) {
			var _self = this;
			var content = this.state.status ? modelO.tipInfo.offline : modelO.tipInfo.online;
			var nextstatus = this.state.status ? 0 : 1;
			MZ.dialog.base({
				content: content,
				title: '提示',
				type: 'confirm',
				btnAlign: 'center',
				fnSure: function fnSure(dialog, rdm) {
					$.ajax({
						type: "post",
						url: modelO.prefix + modelO.apiUrl.setStatus,
						data: { 'hid': _self.state.hid, 'status': nextstatus },
						success: function success() {
							MZ.tipmessage.show({ message: modelO.tipInfo.modsuccess, delay: 1000, pos: 'middle', type: 'success' });
							_self.setState({
								status: nextstatus
							});
							_self.props.choseHandle(_self.state.hid);
						},
						error: function error() {
							MZ.tipmessage.show({ message: modelO.tipInfo.modfailure, delay: 1000, pos: 'middle', type: 'fail' });
						}
					});
					dialog.close(rdm);
				},
				fnCancel: function fnCancel(dialog, rdm) {
					dialog.close(rdm);
				}
			});
		},
		preview: function preview(e) {
			this.setState({ active: true });
			this.props.previewHandle({
				title: this.state.title,
				desc: this.state.desc,
				url: this.state.url,
				id: this.state.hid,
				psrc: this.state.preview,
				vsrc: this.state.view,
				show: true
			});
		},
		count: function count() {
			window.location.href = this.state.count + '?hid=' + this.state.hid;
		},
		render: function render() {
			var classStatus = 'status' + (this.state.status ? '' : ' c');
			var classli = 'c_p' + (this.state.active ? 'active' : '');
			return React.createElement(
				'li',
				{ className: this.classli, ref: 'li', classNameName: 'c_p clearfix' },
				React.createElement(
					'div',
					{ className: 'c_p_logo' },
					React.createElement('img', { src: this.state.url, className: 'lazyloading', 'data-original': this.state.url })
				),
				React.createElement(
					'div',
					{ className: 'c_p_content' },
					React.createElement(
						'div',
						{ className: 'title' },
						this.state.title
					),
					React.createElement(
						'div',
						{ className: 'content' },
						React.createElement(
							'span',
							null,
							this.state.desc
						),
						React.createElement(
							'div',
							{ className: classStatus },
							this.state.status ? '已上线' : '已下线'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'c_p_mask' },
					React.createElement(
						'div',
						{ className: 'c_p_info' },
						React.createElement(
							'div',
							{ className: 'title' },
							React.createElement('input', { name: 'title', type: 'text', className: 'pro_input pro_title', value: this.state.title, onChange: this.enter, onBlur: this.blur })
						),
						React.createElement(
							'div',
							{ className: 'intro' },
							React.createElement('textarea', { name: 'desc', className: 'pro_input pro_intro', value: this.state.desc, onChange: this.enter, onBlur: this.blur })
						)
					),
					React.createElement(
						'div',
						{ className: 'btns' },
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'avata', onClick: this.avata },
									React.createElement('i', null)
								)
							),
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'count', onClick: this.count },
									React.createElement('i', null)
								)
							)
						),
						React.createElement(
							'ul',
							{ className: 'clearfix' },
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'preview', onClick: this.preview },
									React.createElement('i', null)
								)
							),
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'editor', onClick: this.edit },
									React.createElement('i', null)
								)
							),
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: this.state.status ? 'offline' : 'online', onClick: this.offline },
									React.createElement('i', null)
								)
							),
							React.createElement(
								'li',
								{ className: 'icon' },
								React.createElement(
									'a',
									{ href: 'javascript:void(0);', className: 'delete', onClick: this.del },
									React.createElement('i', null)
								)
							)
						)
					)
				)
			);
		}
	});
	module.exports = projectCom;

/***/ },

/***/ 509:
/***/ function(module, exports) {

	/**
	 * jquery.hoverdir.js v1.1.0
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Copyright 2012, Codrops
	 * http://www.codrops.com
	 */
	;(function ($, window, undefined) {

		'use strict';

		$.HoverDir = function (options, element) {

			this.$el = $(element);
			this._init(options);
		};

		// the options
		$.HoverDir.defaults = {
			speed: 300,
			easing: 'ease',
			hoverDelay: 0,
			inverse: false
		};

		$.HoverDir.prototype = {

			_init: function _init(options) {

				// options
				this.options = $.extend(true, {}, $.HoverDir.defaults, options);
				// transition properties
				this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
				// support for CSS transitions
				//this.support = Modernizr.csstransitions;
				this.support = true;
				// load the events
				this._loadEvents();
			},
			_loadEvents: function _loadEvents() {

				var self = this;

				this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function (event) {

					var $el = $(this),
					    $hoverElem = $el.find('.c_p_mask'),
					    direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
					    styleCSS = self._getStyle(direction);

					if (event.type === 'mouseenter') {

						$hoverElem.hide().css(styleCSS.from);
						clearTimeout(self.tmhover);

						self.tmhover = setTimeout(function () {

							$hoverElem.show(0, function () {

								var $el = $(this);
								if (self.support) {
									$el.css('transition', self.transitionProp);
								}
								self._applyAnimation($el, styleCSS.to, self.options.speed);
							});
						}, self.options.hoverDelay);
					} else {

						if (self.support) {
							$hoverElem.css('transition', self.transitionProp);
						}
						clearTimeout(self.tmhover);
						self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);
					}
				});
			},
			// credits : http://stackoverflow.com/a/3647634
			_getDir: function _getDir($el, coordinates) {

				// the width and height of the current div
				var w = $el.width(),
				    h = $el.height(),


				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = (coordinates.x - $el.offset().left - w / 2) * (w > h ? h / w : 1),
				    y = (coordinates.y - $el.offset().top - h / 2) * (h > w ? w / h : 1),


				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

				return direction;
			},
			_getStyle: function _getStyle(direction) {

				var fromStyle,
				    toStyle,
				    slideFromTop = { left: '0px', top: '-100%' },
				    slideFromBottom = { left: '0px', top: '100%' },
				    slideFromLeft = { left: '-100%', top: '0px' },
				    slideFromRight = { left: '100%', top: '0px' },
				    slideTop = { top: '0px' },
				    slideLeft = { left: '0px' };

				switch (direction) {
					case 0:
						// from top
						fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
						toStyle = slideTop;
						break;
					case 1:
						// from right
						fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
						toStyle = slideLeft;
						break;
					case 2:
						// from bottom
						fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
						toStyle = slideTop;
						break;
					case 3:
						// from left
						fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
						toStyle = slideLeft;
						break;
				};

				return { from: fromStyle, to: toStyle };
			},
			// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
			_applyAnimation: function _applyAnimation(el, styleCSS, speed) {

				$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
				el.stop().applyStyle(styleCSS, $.extend(true, [], { duration: speed + 'ms' }));
			}

		};

		var logError = function logError(message) {

			if (window.console) {

				window.console.error(message);
			}
		};

		$.fn.hoverdir = function (options) {

			var instance = $.data(this, 'hoverdir');

			if (typeof options === 'string') {

				var args = Array.prototype.slice.call(arguments, 1);

				this.each(function () {

					if (!instance) {

						logError("cannot call methods on hoverdir prior to initialization; " + "attempted to call method '" + options + "'");
						return;
					}

					if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {

						logError("no such method '" + options + "' for hoverdir instance");
						return;
					}

					instance[options].apply(instance, args);
				});
			} else {

				this.each(function () {

					if (instance) {

						instance._init();
					} else {

						instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));
					}
				});
			}

			return instance;
		};
	})(jQuery, window);

/***/ },

/***/ 510:
/***/ function(module, exports) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * jquery.Jcrop.js v0.9.12
	 * jQuery Image Cropping Plugin - released under MIT License 
	 * Author: Kelly Hallman <khallman@gmail.com>
	 * http://github.com/tapmodo/Jcrop
	 * Copyright (c) 2008-2013 Tapmodo Interactive LLC {{{
	 *
	 * Permission is hereby granted, free of charge, to any person
	 * obtaining a copy of this software and associated documentation
	 * files (the "Software"), to deal in the Software without
	 * restriction, including without limitation the rights to use,
	 * copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the
	 * Software is furnished to do so, subject to the following
	 * conditions:
	 *
	 * The above copyright notice and this permission notice shall be
	 * included in all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	 * OTHER DEALINGS IN THE SOFTWARE.
	 *
	 * }}}
	 */

	(function ($) {

	  $.Jcrop = function (obj, opt) {
	    var options = $.extend({}, $.Jcrop.defaults),
	        docOffset,
	        _ua = navigator.userAgent.toLowerCase(),
	        is_msie = /msie/.test(_ua),
	        ie6mode = /msie [1-6]\./.test(_ua);

	    // Internal Methods {{{
	    function px(n) {
	      return Math.round(n) + 'px';
	    }
	    function cssClass(cl) {
	      return options.baseClass + '-' + cl;
	    }
	    function supportsColorFade() {
	      return $.fx.step.hasOwnProperty('backgroundColor');
	    }
	    function getPos(obj) //{{{
	    {
	      var pos = $(obj).offset();
	      return [pos.left, pos.top];
	    }
	    //}}}
	    function mouseAbs(e) //{{{
	    {
	      return [e.pageX - docOffset[0], e.pageY - docOffset[1]];
	    }
	    //}}}
	    function setOptions(opt) //{{{
	    {
	      if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object') opt = {};
	      options = $.extend(options, opt);

	      $.each(['onChange', 'onSelect', 'onRelease', 'onDblClick', 'onDrag'], function (i, e) {
	        if (typeof options[e] !== 'function') options[e] = function () {};
	      });
	    }
	    //}}}
	    function startDragMode(mode, pos, touch) //{{{
	    {
	      docOffset = getPos($img);
	      Tracker.setCursor(mode === 'move' ? mode : mode + '-resize');

	      if (mode === 'move') {
	        return Tracker.activateHandlers(createMover(pos), doneSelect, touch);
	      }

	      var fc = Coords.getFixed();
	      var opp = oppLockCorner(mode);
	      var opc = Coords.getCorner(oppLockCorner(opp));

	      Coords.setPressed(Coords.getCorner(opp));
	      Coords.setCurrent(opc);

	      Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect, touch);
	    }
	    //}}}
	    function dragmodeHandler(mode, f) //{{{
	    {
	      return function (pos) {
	        if (!options.aspectRatio) {
	          switch (mode) {
	            case 'e':
	              pos[1] = f.y2;
	              break;
	            case 'w':
	              pos[1] = f.y2;
	              break;
	            case 'n':
	              pos[0] = f.x2;
	              break;
	            case 's':
	              pos[0] = f.x2;
	              break;
	          }
	        } else {
	          switch (mode) {
	            case 'e':
	              pos[1] = f.y + 1;
	              break;
	            case 'w':
	              pos[1] = f.y + 1;
	              break;
	            case 'n':
	              pos[0] = f.x + 1;
	              break;
	            case 's':
	              pos[0] = f.x + 1;
	              break;
	          }
	        }
	        Coords.setCurrent(pos);
	        Selection.update();
	      };
	    }
	    //}}}
	    function createMover(pos) //{{{
	    {
	      var lloc = pos;
	      KeyManager.watchKeys();

	      return function (pos) {
	        Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
	        lloc = pos;

	        Selection.update();
	      };
	    }
	    //}}}
	    function oppLockCorner(ord) //{{{
	    {
	      switch (ord) {
	        case 'n':
	          return 'sw';
	        case 's':
	          return 'nw';
	        case 'e':
	          return 'nw';
	        case 'w':
	          return 'ne';
	        case 'ne':
	          return 'sw';
	        case 'nw':
	          return 'se';
	        case 'se':
	          return 'nw';
	        case 'sw':
	          return 'ne';
	      }
	    }
	    //}}}
	    function createDragger(ord) //{{{
	    {
	      return function (e) {
	        if (options.disabled) {
	          return false;
	        }
	        if (ord === 'move' && !options.allowMove) {
	          return false;
	        }

	        // Fix position of crop area when dragged the very first time.
	        // Necessary when crop image is in a hidden element when page is loaded.
	        docOffset = getPos($img);

	        btndown = true;
	        startDragMode(ord, mouseAbs(e));
	        e.stopPropagation();
	        e.preventDefault();
	        return false;
	      };
	    }
	    //}}}
	    function presize($obj, w, h) //{{{
	    {
	      var nw = $obj.width(),
	          nh = $obj.height();
	      if (nw > w && w > 0) {
	        nw = w;
	        nh = w / $obj.width() * $obj.height();
	      }
	      if (nh > h && h > 0) {
	        nh = h;
	        nw = h / $obj.height() * $obj.width();
	      }
	      xscale = $obj.width() / nw;
	      yscale = $obj.height() / nh;
	      $obj.width(nw).height(nh);
	    }
	    //}}}
	    function unscale(c) //{{{
	    {
	      return {
	        x: c.x * xscale,
	        y: c.y * yscale,
	        x2: c.x2 * xscale,
	        y2: c.y2 * yscale,
	        w: c.w * xscale,
	        h: c.h * yscale
	      };
	    }
	    //}}}
	    function doneSelect(pos) //{{{
	    {
	      var c = Coords.getFixed();
	      if (c.w > options.minSelect[0] && c.h > options.minSelect[1]) {
	        Selection.enableHandles();
	        Selection.done();
	      } else {
	        Selection.release();
	      }
	      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
	    }
	    //}}}
	    function _newSelection(e) //{{{
	    {
	      if (options.disabled) {
	        return false;
	      }
	      if (!options.allowSelect) {
	        return false;
	      }
	      btndown = true;
	      docOffset = getPos($img);
	      Selection.disableHandles();
	      Tracker.setCursor('crosshair');
	      var pos = mouseAbs(e);
	      Coords.setPressed(pos);
	      Selection.update();
	      Tracker.activateHandlers(selectDrag, doneSelect, e.type.substring(0, 5) === 'touch');
	      KeyManager.watchKeys();

	      e.stopPropagation();
	      e.preventDefault();
	      return false;
	    }
	    //}}}
	    function selectDrag(pos) //{{{
	    {
	      Coords.setCurrent(pos);
	      Selection.update();
	    }
	    //}}}
	    function newTracker() //{{{
	    {
	      var trk = $('<div></div>').addClass(cssClass('tracker'));
	      if (is_msie) {
	        trk.css({
	          opacity: 0,
	          backgroundColor: 'white'
	        });
	      }
	      return trk;
	    }
	    //}}}

	    // }}}
	    // Initialization {{{
	    // Sanitize some options {{{
	    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	      obj = $(obj)[0];
	    }
	    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) !== 'object') {
	      opt = {};
	    }
	    // }}}
	    setOptions(opt);
	    // Initialize some jQuery objects {{{
	    // The values are SET on the image(s) for the interface
	    // If the original image has any of these set, they will be reset
	    // However, if you destroy() the Jcrop instance the original image's
	    // character in the DOM will be as you left it.
	    var img_css = {
	      border: 'none',
	      visibility: 'visible',
	      margin: 0,
	      padding: 0,
	      position: 'absolute',
	      top: 0,
	      left: 0
	    };

	    var $origimg = $(obj),
	        img_mode = true;

	    if (obj.tagName == 'IMG') {
	      // Fix size of crop image.
	      // Necessary when crop image is within a hidden element when page is loaded.
	      if ($origimg[0].width != 0 && $origimg[0].height != 0) {
	        // Obtain dimensions from contained img element.
	        $origimg.width($origimg[0].width);
	        $origimg.height($origimg[0].height);
	      } else {
	        // Obtain dimensions from temporary image in case the original is not loaded yet (e.g. IE 7.0).
	        var tempImage = new Image();
	        tempImage.src = $origimg[0].src;
	        $origimg.width(tempImage.width);
	        $origimg.height(tempImage.height);
	      }

	      var $img = $origimg.clone().removeAttr('id').css(img_css).show();

	      $img.width($origimg.width());
	      $img.height($origimg.height());
	      $origimg.after($img).hide();
	    } else {
	      $img = $origimg.css(img_css).show();
	      img_mode = false;
	      if (options.shade === null) {
	        options.shade = true;
	      }
	    }

	    presize($img, options.boxWidth, options.boxHeight);

	    var boundx = $img.width(),
	        boundy = $img.height(),
	        $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
	      position: 'relative',
	      backgroundColor: options.bgColor
	    }).insertAfter($origimg).append($img);

	    if (options.addClass) {
	      $div.addClass(options.addClass);
	    }

	    var $img2 = $('<div />'),
	        $img_holder = $('<div />').width('100%').height('100%').css({
	      zIndex: 310,
	      position: 'absolute',
	      overflow: 'hidden'
	    }),
	        $hdl_holder = $('<div />').width('100%').height('100%').css('zIndex', 320),
	        $sel = $('<div />').css({
	      position: 'absolute',
	      zIndex: 600
	    }).dblclick(function () {
	      var c = Coords.getFixed();
	      options.onDblClick.call(api, c);
	    }).insertBefore($img).append($img_holder, $hdl_holder);

	    if (img_mode) {

	      $img2 = $('<img />').attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy), $img_holder.append($img2);
	    }

	    if (ie6mode) {
	      $sel.css({
	        overflowY: 'hidden'
	      });
	    }

	    var bound = options.boundary;
	    var $trk = newTracker().width(boundx + bound * 2).height(boundy + bound * 2).css({
	      position: 'absolute',
	      top: px(-bound),
	      left: px(-bound),
	      zIndex: 290
	    }).mousedown(_newSelection);

	    /* }}} */
	    // Set more variables {{{
	    var bgcolor = options.bgColor,
	        bgopacity = options.bgOpacity,
	        xlimit,
	        ylimit,
	        xmin,
	        ymin,
	        xscale,
	        yscale,
	        enabled = true,
	        btndown,
	        animating,
	        shift_down;

	    docOffset = getPos($img);
	    // }}}
	    // }}}
	    // Internal Modules {{{
	    // Touch Module {{{
	    var Touch = function () {
	      // Touch support detection function adapted (under MIT License)
	      // from code by Jeffrey Sambells - http://github.com/iamamused/
	      function hasTouchSupport() {
	        var support = {},
	            events = ['touchstart', 'touchmove', 'touchend'],
	            el = document.createElement('div'),
	            i;

	        try {
	          for (i = 0; i < events.length; i++) {
	            var eventName = events[i];
	            eventName = 'on' + eventName;
	            var isSupported = eventName in el;
	            if (!isSupported) {
	              el.setAttribute(eventName, 'return;');
	              isSupported = typeof el[eventName] == 'function';
	            }
	            support[events[i]] = isSupported;
	          }
	          return support.touchstart && support.touchend && support.touchmove;
	        } catch (err) {
	          return false;
	        }
	      }

	      function detectSupport() {
	        if (options.touchSupport === true || options.touchSupport === false) return options.touchSupport;else return hasTouchSupport();
	      }
	      return {
	        createDragger: function createDragger(ord) {
	          return function (e) {
	            if (options.disabled) {
	              return false;
	            }
	            if (ord === 'move' && !options.allowMove) {
	              return false;
	            }
	            docOffset = getPos($img);
	            btndown = true;
	            startDragMode(ord, mouseAbs(Touch.cfilter(e)), true);
	            e.stopPropagation();
	            e.preventDefault();
	            return false;
	          };
	        },
	        newSelection: function newSelection(e) {
	          return _newSelection(Touch.cfilter(e));
	        },
	        cfilter: function cfilter(e) {
	          e.pageX = e.originalEvent.changedTouches[0].pageX;
	          e.pageY = e.originalEvent.changedTouches[0].pageY;
	          return e;
	        },
	        isSupported: hasTouchSupport,
	        support: detectSupport()
	      };
	    }();
	    // }}}
	    // Coords Module {{{
	    var Coords = function () {
	      var x1 = 0,
	          y1 = 0,
	          x2 = 0,
	          y2 = 0,
	          ox,
	          oy;

	      function setPressed(pos) //{{{
	      {
	        pos = rebound(pos);
	        x2 = x1 = pos[0];
	        y2 = y1 = pos[1];
	      }
	      //}}}
	      function setCurrent(pos) //{{{
	      {
	        pos = rebound(pos);
	        ox = pos[0] - x2;
	        oy = pos[1] - y2;
	        x2 = pos[0];
	        y2 = pos[1];
	      }
	      //}}}
	      function getOffset() //{{{
	      {
	        return [ox, oy];
	      }
	      //}}}
	      function moveOffset(offset) //{{{
	      {
	        var ox = offset[0],
	            oy = offset[1];

	        if (0 > x1 + ox) {
	          ox -= ox + x1;
	        }
	        if (0 > y1 + oy) {
	          oy -= oy + y1;
	        }

	        if (boundy < y2 + oy) {
	          oy += boundy - (y2 + oy);
	        }
	        if (boundx < x2 + ox) {
	          ox += boundx - (x2 + ox);
	        }

	        x1 += ox;
	        x2 += ox;
	        y1 += oy;
	        y2 += oy;
	      }
	      //}}}
	      function getCorner(ord) //{{{
	      {
	        var c = getFixed();
	        switch (ord) {
	          case 'ne':
	            return [c.x2, c.y];
	          case 'nw':
	            return [c.x, c.y];
	          case 'se':
	            return [c.x2, c.y2];
	          case 'sw':
	            return [c.x, c.y2];
	        }
	      }
	      //}}}
	      function getFixed() //{{{
	      {
	        if (!options.aspectRatio) {
	          return getRect();
	        }
	        // This function could use some optimization I think...
	        var aspect = options.aspectRatio,
	            min_x = options.minSize[0] / xscale,


	        //min_y = options.minSize[1]/yscale,
	        max_x = options.maxSize[0] / xscale,
	            max_y = options.maxSize[1] / yscale,
	            rw = x2 - x1,
	            rh = y2 - y1,
	            rwa = Math.abs(rw),
	            rha = Math.abs(rh),
	            real_ratio = rwa / rha,
	            xx,
	            yy,
	            w,
	            h;

	        if (max_x === 0) {
	          max_x = boundx * 10;
	        }
	        if (max_y === 0) {
	          max_y = boundy * 10;
	        }
	        if (real_ratio < aspect) {
	          yy = y2;
	          w = rha * aspect;
	          xx = rw < 0 ? x1 - w : w + x1;

	          if (xx < 0) {
	            xx = 0;
	            h = Math.abs((xx - x1) / aspect);
	            yy = rh < 0 ? y1 - h : h + y1;
	          } else if (xx > boundx) {
	            xx = boundx;
	            h = Math.abs((xx - x1) / aspect);
	            yy = rh < 0 ? y1 - h : h + y1;
	          }
	        } else {
	          xx = x2;
	          h = rwa / aspect;
	          yy = rh < 0 ? y1 - h : y1 + h;
	          if (yy < 0) {
	            yy = 0;
	            w = Math.abs((yy - y1) * aspect);
	            xx = rw < 0 ? x1 - w : w + x1;
	          } else if (yy > boundy) {
	            yy = boundy;
	            w = Math.abs(yy - y1) * aspect;
	            xx = rw < 0 ? x1 - w : w + x1;
	          }
	        }

	        // Magic %-)
	        if (xx > x1) {
	          // right side
	          if (xx - x1 < min_x) {
	            xx = x1 + min_x;
	          } else if (xx - x1 > max_x) {
	            xx = x1 + max_x;
	          }
	          if (yy > y1) {
	            yy = y1 + (xx - x1) / aspect;
	          } else {
	            yy = y1 - (xx - x1) / aspect;
	          }
	        } else if (xx < x1) {
	          // left side
	          if (x1 - xx < min_x) {
	            xx = x1 - min_x;
	          } else if (x1 - xx > max_x) {
	            xx = x1 - max_x;
	          }
	          if (yy > y1) {
	            yy = y1 + (x1 - xx) / aspect;
	          } else {
	            yy = y1 - (x1 - xx) / aspect;
	          }
	        }

	        if (xx < 0) {
	          x1 -= xx;
	          xx = 0;
	        } else if (xx > boundx) {
	          x1 -= xx - boundx;
	          xx = boundx;
	        }

	        if (yy < 0) {
	          y1 -= yy;
	          yy = 0;
	        } else if (yy > boundy) {
	          y1 -= yy - boundy;
	          yy = boundy;
	        }

	        return makeObj(flipCoords(x1, y1, xx, yy));
	      }
	      //}}}
	      function rebound(p) //{{{
	      {
	        if (p[0] < 0) p[0] = 0;
	        if (p[1] < 0) p[1] = 0;

	        if (p[0] > boundx) p[0] = boundx;
	        if (p[1] > boundy) p[1] = boundy;

	        return [Math.round(p[0]), Math.round(p[1])];
	      }
	      //}}}
	      function flipCoords(x1, y1, x2, y2) //{{{
	      {
	        var xa = x1,
	            xb = x2,
	            ya = y1,
	            yb = y2;
	        if (x2 < x1) {
	          xa = x2;
	          xb = x1;
	        }
	        if (y2 < y1) {
	          ya = y2;
	          yb = y1;
	        }
	        return [xa, ya, xb, yb];
	      }
	      //}}}
	      function getRect() //{{{
	      {
	        var xsize = x2 - x1,
	            ysize = y2 - y1,
	            delta;

	        if (xlimit && Math.abs(xsize) > xlimit) {
	          x2 = xsize > 0 ? x1 + xlimit : x1 - xlimit;
	        }
	        if (ylimit && Math.abs(ysize) > ylimit) {
	          y2 = ysize > 0 ? y1 + ylimit : y1 - ylimit;
	        }

	        if (ymin / yscale && Math.abs(ysize) < ymin / yscale) {
	          y2 = ysize > 0 ? y1 + ymin / yscale : y1 - ymin / yscale;
	        }
	        if (xmin / xscale && Math.abs(xsize) < xmin / xscale) {
	          x2 = xsize > 0 ? x1 + xmin / xscale : x1 - xmin / xscale;
	        }

	        if (x1 < 0) {
	          x2 -= x1;
	          x1 -= x1;
	        }
	        if (y1 < 0) {
	          y2 -= y1;
	          y1 -= y1;
	        }
	        if (x2 < 0) {
	          x1 -= x2;
	          x2 -= x2;
	        }
	        if (y2 < 0) {
	          y1 -= y2;
	          y2 -= y2;
	        }
	        if (x2 > boundx) {
	          delta = x2 - boundx;
	          x1 -= delta;
	          x2 -= delta;
	        }
	        if (y2 > boundy) {
	          delta = y2 - boundy;
	          y1 -= delta;
	          y2 -= delta;
	        }
	        if (x1 > boundx) {
	          delta = x1 - boundy;
	          y2 -= delta;
	          y1 -= delta;
	        }
	        if (y1 > boundy) {
	          delta = y1 - boundy;
	          y2 -= delta;
	          y1 -= delta;
	        }

	        return makeObj(flipCoords(x1, y1, x2, y2));
	      }
	      //}}}
	      function makeObj(a) //{{{
	      {
	        return {
	          x: a[0],
	          y: a[1],
	          x2: a[2],
	          y2: a[3],
	          w: a[2] - a[0],
	          h: a[3] - a[1]
	        };
	      }
	      //}}}

	      return {
	        flipCoords: flipCoords,
	        setPressed: setPressed,
	        setCurrent: setCurrent,
	        getOffset: getOffset,
	        moveOffset: moveOffset,
	        getCorner: getCorner,
	        getFixed: getFixed
	      };
	    }();

	    //}}}
	    // Shade Module {{{
	    var Shade = function () {
	      var enabled = false,
	          holder = $('<div />').css({
	        position: 'absolute',
	        zIndex: 240,
	        opacity: 0
	      }),
	          shades = {
	        top: createShade(),
	        left: createShade().height(boundy),
	        right: createShade().height(boundy),
	        bottom: createShade()
	      };

	      function resizeShades(w, h) {
	        shades.left.css({ height: px(h) });
	        shades.right.css({ height: px(h) });
	      }
	      function updateAuto() {
	        return updateShade(Coords.getFixed());
	      }
	      function updateShade(c) {
	        shades.top.css({
	          left: px(c.x),
	          width: px(c.w),
	          height: px(c.y)
	        });
	        shades.bottom.css({
	          top: px(c.y2),
	          left: px(c.x),
	          width: px(c.w),
	          height: px(boundy - c.y2)
	        });
	        shades.right.css({
	          left: px(c.x2),
	          width: px(boundx - c.x2)
	        });
	        shades.left.css({
	          width: px(c.x)
	        });
	      }
	      function createShade() {
	        return $('<div />').css({
	          position: 'absolute',
	          backgroundColor: options.shadeColor || options.bgColor
	        }).appendTo(holder);
	      }
	      function enableShade() {
	        if (!enabled) {
	          enabled = true;
	          holder.insertBefore($img);
	          updateAuto();
	          Selection.setBgOpacity(1, 0, 1);
	          $img2.hide();

	          setBgColor(options.shadeColor || options.bgColor, 1);
	          if (Selection.isAwake()) {
	            setOpacity(options.bgOpacity, 1);
	          } else setOpacity(1, 1);
	        }
	      }
	      function setBgColor(color, now) {
	        colorChangeMacro(getShades(), color, now);
	      }
	      function disableShade() {
	        if (enabled) {
	          holder.remove();
	          $img2.show();
	          enabled = false;
	          if (Selection.isAwake()) {
	            Selection.setBgOpacity(options.bgOpacity, 1, 1);
	          } else {
	            Selection.setBgOpacity(1, 1, 1);
	            Selection.disableHandles();
	          }
	          colorChangeMacro($div, 0, 1);
	        }
	      }
	      function setOpacity(opacity, now) {
	        if (enabled) {
	          if (options.bgFade && !now) {
	            holder.animate({
	              opacity: 1 - opacity
	            }, {
	              queue: false,
	              duration: options.fadeTime
	            });
	          } else holder.css({ opacity: 1 - opacity });
	        }
	      }
	      function refreshAll() {
	        options.shade ? enableShade() : disableShade();
	        if (Selection.isAwake()) setOpacity(options.bgOpacity);
	      }
	      function getShades() {
	        return holder.children();
	      }

	      return {
	        update: updateAuto,
	        updateRaw: updateShade,
	        getShades: getShades,
	        setBgColor: setBgColor,
	        enable: enableShade,
	        disable: disableShade,
	        resize: resizeShades,
	        refresh: refreshAll,
	        opacity: setOpacity
	      };
	    }();
	    // }}}
	    // Selection Module {{{
	    var Selection = function () {
	      var awake,
	          hdep = 370,
	          borders = {},
	          handle = {},
	          dragbar = {},
	          seehandles = false;

	      // Private Methods
	      function insertBorder(type) //{{{
	      {
	        var jq = $('<div />').css({
	          position: 'absolute',
	          opacity: options.borderOpacity
	        }).addClass(cssClass(type));
	        $img_holder.append(jq);
	        return jq;
	      }
	      //}}}
	      function dragDiv(ord, zi) //{{{
	      {
	        var jq = $('<div />').mousedown(createDragger(ord)).css({
	          cursor: ord + '-resize',
	          position: 'absolute',
	          zIndex: zi
	        }).addClass('ord-' + ord);

	        if (Touch.support) {
	          jq.bind('touchstart.jcrop', Touch.createDragger(ord));
	        }

	        $hdl_holder.append(jq);
	        return jq;
	      }
	      //}}}
	      function insertHandle(ord) //{{{
	      {
	        var hs = options.handleSize,
	            div = dragDiv(ord, hdep++).css({
	          opacity: options.handleOpacity
	        }).addClass(cssClass('handle'));

	        if (hs) {
	          div.width(hs).height(hs);
	        }

	        return div;
	      }
	      //}}}
	      function insertDragbar(ord) //{{{
	      {
	        return dragDiv(ord, hdep++).addClass('jcrop-dragbar');
	      }
	      //}}}
	      function createDragbars(li) //{{{
	      {
	        var i;
	        for (i = 0; i < li.length; i++) {
	          dragbar[li[i]] = insertDragbar(li[i]);
	        }
	      }
	      //}}}
	      function createBorders(li) //{{{
	      {
	        var cl, i;
	        for (i = 0; i < li.length; i++) {
	          switch (li[i]) {
	            case 'n':
	              cl = 'hline';break;
	            case 's':
	              cl = 'hline bottom';break;
	            case 'e':
	              cl = 'vline right';break;
	            case 'w':
	              cl = 'vline';break;
	          }
	          borders[li[i]] = insertBorder(cl);
	        }
	      }
	      //}}}
	      function createHandles(li) //{{{
	      {
	        var i;
	        for (i = 0; i < li.length; i++) {
	          handle[li[i]] = insertHandle(li[i]);
	        }
	      }
	      //}}}
	      function moveto(x, y) //{{{
	      {
	        if (!options.shade) {
	          $img2.css({
	            top: px(-y),
	            left: px(-x)
	          });
	        }
	        $sel.css({
	          top: px(y),
	          left: px(x)
	        });
	      }
	      //}}}
	      function resize(w, h) //{{{
	      {
	        $sel.width(Math.round(w)).height(Math.round(h));
	      }
	      //}}}
	      function refresh() //{{{
	      {
	        var c = Coords.getFixed();

	        Coords.setPressed([c.x, c.y]);
	        Coords.setCurrent([c.x2, c.y2]);

	        updateVisible();
	      }
	      //}}}

	      // Internal Methods
	      function updateVisible(select) //{{{
	      {
	        if (awake) {
	          return update(select);
	        }
	      }
	      //}}}
	      function update(select) //{{{
	      {
	        var c = Coords.getFixed();

	        resize(c.w, c.h);
	        moveto(c.x, c.y);
	        if (options.shade) Shade.updateRaw(c);

	        awake || show();

	        if (select) {
	          options.onSelect.call(api, unscale(c));
	        } else {
	          options.onChange.call(api, unscale(c));
	        }
	      }
	      //}}}
	      function setBgOpacity(opacity, force, now) //{{{
	      {
	        if (!awake && !force) return;
	        if (options.bgFade && !now) {
	          $img.animate({
	            opacity: opacity
	          }, {
	            queue: false,
	            duration: options.fadeTime
	          });
	        } else {
	          $img.css('opacity', opacity);
	        }
	      }
	      //}}}
	      function show() //{{{
	      {
	        $sel.show();
	        if (options.shade) Shade.opacity(bgopacity);else setBgOpacity(bgopacity, true);

	        awake = true;
	        options.onDrag.call(api); //2015.9.18
	      }
	      //}}}
	      function release() //{{{
	      {
	        disableHandles();
	        $sel.hide();

	        if (options.shade) Shade.opacity(1);else setBgOpacity(1);

	        awake = false;
	        options.onRelease.call(api);
	      }
	      //}}}
	      function showHandles() //{{{
	      {
	        if (seehandles) {
	          $hdl_holder.show();
	        }
	      }
	      //}}}
	      function enableHandles() //{{{
	      {
	        seehandles = true;
	        if (options.allowResize) {
	          $hdl_holder.show();
	          return true;
	        }
	      }
	      //}}}
	      function disableHandles() //{{{
	      {
	        seehandles = false;
	        $hdl_holder.hide();
	      }
	      //}}}
	      function animMode(v) //{{{
	      {
	        if (v) {
	          animating = true;
	          disableHandles();
	        } else {
	          animating = false;
	          enableHandles();
	        }
	      }
	      //}}}
	      function done() //{{{
	      {
	        animMode(false);
	        refresh();
	      }
	      //}}}
	      // Insert draggable elements {{{
	      // Insert border divs for outline

	      if (options.dragEdges && $.isArray(options.createDragbars)) createDragbars(options.createDragbars);

	      if ($.isArray(options.createHandles)) createHandles(options.createHandles);

	      if (options.drawBorders && $.isArray(options.createBorders)) createBorders(options.createBorders);

	      //}}}

	      // This is a hack for iOS5 to support drag/move touch functionality
	      $(document).bind('touchstart.jcrop-ios', function (e) {
	        if ($(e.currentTarget).hasClass('jcrop-tracker')) e.stopPropagation();
	      });

	      var $track = newTracker().mousedown(createDragger('move')).css({
	        cursor: 'move',
	        position: 'absolute',
	        zIndex: 360
	      });

	      if (Touch.support) {
	        $track.bind('touchstart.jcrop', Touch.createDragger('move'));
	      }

	      $img_holder.append($track);
	      disableHandles();

	      return {
	        updateVisible: updateVisible,
	        update: update,
	        release: release,
	        refresh: refresh,
	        isAwake: function isAwake() {
	          return awake;
	        },
	        setCursor: function setCursor(cursor) {
	          $track.css('cursor', cursor);
	        },
	        enableHandles: enableHandles,
	        enableOnly: function enableOnly() {
	          seehandles = true;
	        },
	        showHandles: showHandles,
	        disableHandles: disableHandles,
	        animMode: animMode,
	        setBgOpacity: setBgOpacity,
	        done: done
	      };
	    }();

	    //}}}
	    // Tracker Module {{{
	    var Tracker = function () {
	      var onMove = function onMove() {},
	          onDone = function onDone() {},
	          trackDoc = options.trackDocument;

	      function toFront(touch) //{{{
	      {
	        $trk.css({
	          zIndex: 450
	        });

	        if (touch) $(document).bind('touchmove.jcrop', trackTouchMove).bind('touchend.jcrop', trackTouchEnd);else if (trackDoc) $(document).bind('mousemove.jcrop', trackMove).bind('mouseup.jcrop', trackUp);
	      }
	      //}}}
	      function toBack() //{{{
	      {
	        $trk.css({
	          zIndex: 290
	        });
	        $(document).unbind('.jcrop');
	      }
	      //}}}
	      function trackMove(e) //{{{
	      {
	        onMove(mouseAbs(e));
	        return false;
	      }
	      //}}}
	      function trackUp(e) //{{{
	      {
	        e.preventDefault();
	        e.stopPropagation();

	        if (btndown) {
	          btndown = false;

	          onDone(mouseAbs(e));

	          if (Selection.isAwake()) {
	            options.onSelect.call(api, unscale(Coords.getFixed()));
	          }

	          toBack();
	          onMove = function onMove() {};
	          onDone = function onDone() {};
	        }

	        return false;
	      }
	      //}}}
	      function activateHandlers(move, done, touch) //{{{
	      {
	        btndown = true;
	        onMove = move;
	        onDone = done;
	        toFront(touch);
	        return false;
	      }
	      //}}}
	      function trackTouchMove(e) //{{{
	      {
	        onMove(mouseAbs(Touch.cfilter(e)));
	        return false;
	      }
	      //}}}
	      function trackTouchEnd(e) //{{{
	      {
	        return trackUp(Touch.cfilter(e));
	      }
	      //}}}
	      function setCursor(t) //{{{
	      {
	        $trk.css('cursor', t);
	      }
	      //}}}

	      if (!trackDoc) {
	        $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
	      }

	      $img.before($trk);
	      return {
	        activateHandlers: activateHandlers,
	        setCursor: setCursor
	      };
	    }();
	    //}}}
	    // KeyManager Module {{{
	    var KeyManager = function () {
	      var $keymgr = $('<input type="radio" />').css({
	        position: 'fixed',
	        left: '-120px',
	        width: '12px'
	      }).addClass('jcrop-keymgr'),
	          $keywrap = $('<div />').css({
	        position: 'absolute',
	        overflow: 'hidden'
	      }).append($keymgr);

	      function watchKeys() //{{{
	      {
	        if (options.keySupport) {
	          $keymgr.show();
	          $keymgr.focus();
	        }
	      }
	      //}}}
	      function onBlur(e) //{{{
	      {
	        $keymgr.hide();
	      }
	      //}}}
	      function doNudge(e, x, y) //{{{
	      {
	        if (options.allowMove) {
	          Coords.moveOffset([x, y]);
	          Selection.updateVisible(true);
	        }
	        e.preventDefault();
	        e.stopPropagation();
	      }
	      //}}}
	      function parseKey(e) //{{{
	      {
	        if (e.ctrlKey || e.metaKey) {
	          return true;
	        }
	        shift_down = e.shiftKey ? true : false;
	        var nudge = shift_down ? 10 : 1;

	        switch (e.keyCode) {
	          case 37:
	            doNudge(e, -nudge, 0);
	            break;
	          case 39:
	            doNudge(e, nudge, 0);
	            break;
	          case 38:
	            doNudge(e, 0, -nudge);
	            break;
	          case 40:
	            doNudge(e, 0, nudge);
	            break;
	          case 27:
	            if (options.allowSelect) Selection.release();
	            break;
	          case 9:
	            return true;
	        }

	        return false;
	      }
	      //}}}

	      if (options.keySupport) {
	        $keymgr.keydown(parseKey).blur(onBlur);
	        if (ie6mode || !options.fixedSupport) {
	          $keymgr.css({
	            position: 'absolute',
	            left: '-20px'
	          });
	          $keywrap.append($keymgr).insertBefore($img);
	        } else {
	          $keymgr.insertBefore($img);
	        }
	      }

	      return {
	        watchKeys: watchKeys
	      };
	    }();
	    //}}}
	    // }}}
	    // API methods {{{
	    function setClass(cname) //{{{
	    {
	      $div.removeClass().addClass(cssClass('holder')).addClass(cname);
	    }
	    //}}}
	    function animateTo(a, callback) //{{{
	    {
	      var x1 = a[0] / xscale,
	          y1 = a[1] / yscale,
	          x2 = a[2] / xscale,
	          y2 = a[3] / yscale;

	      if (animating) {
	        return;
	      }

	      var animto = Coords.flipCoords(x1, y1, x2, y2),
	          c = Coords.getFixed(),
	          initcr = [c.x, c.y, c.x2, c.y2],
	          animat = initcr,
	          interv = options.animationDelay,
	          ix1 = animto[0] - initcr[0],
	          iy1 = animto[1] - initcr[1],
	          ix2 = animto[2] - initcr[2],
	          iy2 = animto[3] - initcr[3],
	          pcent = 0,
	          velocity = options.swingSpeed;

	      x1 = animat[0];
	      y1 = animat[1];
	      x2 = animat[2];
	      y2 = animat[3];

	      Selection.animMode(true);
	      var anim_timer;

	      function queueAnimator() {
	        window.setTimeout(animator, interv);
	      }
	      var animator = function () {
	        return function () {
	          pcent += (100 - pcent) / velocity;

	          animat[0] = Math.round(x1 + pcent / 100 * ix1);
	          animat[1] = Math.round(y1 + pcent / 100 * iy1);
	          animat[2] = Math.round(x2 + pcent / 100 * ix2);
	          animat[3] = Math.round(y2 + pcent / 100 * iy2);

	          if (pcent >= 99.8) {
	            pcent = 100;
	          }
	          if (pcent < 100) {
	            setSelectRaw(animat);
	            queueAnimator();
	          } else {
	            Selection.done();
	            Selection.animMode(false);
	            if (typeof callback === 'function') {
	              callback.call(api);
	            }
	          }
	        };
	      }();
	      queueAnimator();
	    }
	    //}}}
	    function setSelect(rect) //{{{
	    {
	      setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
	      options.onSelect.call(api, unscale(Coords.getFixed()));
	      Selection.enableHandles();
	    }
	    //}}}
	    function setSelectRaw(l) //{{{
	    {
	      Coords.setPressed([l[0], l[1]]);
	      Coords.setCurrent([l[2], l[3]]);
	      Selection.update();
	    }
	    //}}}
	    function tellSelect() //{{{
	    {
	      return unscale(Coords.getFixed());
	    }
	    //}}}
	    function tellScaled() //{{{
	    {
	      return Coords.getFixed();
	    }
	    //}}}
	    function setOptionsNew(opt) //{{{
	    {
	      setOptions(opt);
	      interfaceUpdate();
	    }
	    //}}}
	    function disableCrop() //{{{
	    {
	      options.disabled = true;
	      Selection.disableHandles();
	      Selection.setCursor('default');
	      Tracker.setCursor('default');
	    }
	    //}}}
	    function enableCrop() //{{{
	    {
	      options.disabled = false;
	      interfaceUpdate();
	    }
	    //}}}
	    function cancelCrop() //{{{
	    {
	      Selection.done();
	      Tracker.activateHandlers(null, null);
	    }
	    //}}}
	    function destroy() //{{{
	    {
	      $div.remove();
	      $origimg.show();
	      $origimg.css('visibility', 'visible');
	      $(obj).removeData('Jcrop');
	    }
	    //}}}
	    function setImage(src, callback) //{{{
	    {
	      Selection.release();
	      disableCrop();
	      var img = new Image();
	      img.onload = function () {
	        var iw = img.width;
	        var ih = img.height;
	        var bw = options.boxWidth;
	        var bh = options.boxHeight;
	        $img.width(iw).height(ih);
	        $img.attr('src', src);
	        $img2.attr('src', src);
	        presize($img, bw, bh);
	        boundx = $img.width();
	        boundy = $img.height();
	        $img2.width(boundx).height(boundy);
	        $trk.width(boundx + bound * 2).height(boundy + bound * 2);
	        $div.width(boundx).height(boundy);
	        Shade.resize(boundx, boundy);
	        enableCrop();

	        if (typeof callback === 'function') {
	          callback.call(api);
	        }
	      };
	      img.src = src;
	    }
	    //}}}
	    function colorChangeMacro($obj, color, now) {
	      var mycolor = color || options.bgColor;
	      if (options.bgFade && supportsColorFade() && options.fadeTime && !now) {
	        $obj.animate({
	          backgroundColor: mycolor
	        }, {
	          queue: false,
	          duration: options.fadeTime
	        });
	      } else {
	        $obj.css('backgroundColor', mycolor);
	      }
	    }
	    function interfaceUpdate(alt) //{{{
	    // This method tweaks the interface based on options object.
	    // Called when options are changed and at end of initialization.
	    {
	      if (options.allowResize) {
	        if (alt) {
	          Selection.enableOnly();
	        } else {
	          Selection.enableHandles();
	        }
	      } else {
	        Selection.disableHandles();
	      }

	      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
	      Selection.setCursor(options.allowMove ? 'move' : 'default');

	      if (options.hasOwnProperty('trueSize')) {
	        xscale = options.trueSize[0] / boundx;
	        yscale = options.trueSize[1] / boundy;
	      }

	      if (options.hasOwnProperty('setSelect')) {
	        setSelect(options.setSelect);
	        Selection.done();
	        delete options.setSelect;
	      }

	      Shade.refresh();

	      if (options.bgColor != bgcolor) {
	        colorChangeMacro(options.shade ? Shade.getShades() : $div, options.shade ? options.shadeColor || options.bgColor : options.bgColor);
	        bgcolor = options.bgColor;
	      }

	      if (bgopacity != options.bgOpacity) {
	        bgopacity = options.bgOpacity;
	        if (options.shade) Shade.refresh();else Selection.setBgOpacity(bgopacity);
	      }

	      xlimit = options.maxSize[0] || 0;
	      ylimit = options.maxSize[1] || 0;
	      xmin = options.minSize[0] || 0;
	      ymin = options.minSize[1] || 0;

	      if (options.hasOwnProperty('outerImage')) {
	        $img.attr('src', options.outerImage);
	        delete options.outerImage;
	      }

	      Selection.refresh();
	    }
	    //}}}
	    //}}}

	    if (Touch.support) $trk.bind('touchstart.jcrop', Touch.newSelection);

	    $hdl_holder.hide();
	    interfaceUpdate(true);

	    var api = {
	      setImage: setImage,
	      animateTo: animateTo,
	      setSelect: setSelect,
	      setOptions: setOptionsNew,
	      tellSelect: tellSelect,
	      tellScaled: tellScaled,
	      setClass: setClass,

	      disable: disableCrop,
	      enable: enableCrop,
	      cancel: cancelCrop,
	      release: Selection.release,
	      destroy: destroy,

	      focus: KeyManager.watchKeys,

	      getBounds: function getBounds() {
	        return [boundx * xscale, boundy * yscale];
	      },
	      getWidgetSize: function getWidgetSize() {
	        return [boundx, boundy];
	      },
	      getScaleFactor: function getScaleFactor() {
	        return [xscale, yscale];
	      },
	      getOptions: function getOptions() {
	        // careful: internal values are returned
	        return options;
	      },

	      ui: {
	        holder: $div,
	        selection: $sel
	      }
	    };

	    if (is_msie) $div.bind('selectstart', function () {
	      return false;
	    });

	    $origimg.data('Jcrop', api);
	    return api;
	  };
	  $.fn.Jcrop = function (options, callback) //{{{
	  {
	    var api;
	    // Iterate over each object, attach Jcrop
	    this.each(function () {
	      // If we've already attached to this object
	      if ($(this).data('Jcrop')) {
	        // The API can be requested this way (undocumented)
	        if (options === 'api') return $(this).data('Jcrop');
	        // Otherwise, we just reset the options...
	        else $(this).data('Jcrop').setOptions(options);
	      }
	      // If we haven't been attached, preload and attach
	      else {
	          if (this.tagName == 'IMG') $.Jcrop.Loader(this, function () {
	            $(this).css({ display: 'block', visibility: 'hidden' });
	            api = $.Jcrop(this, options);
	            if ($.isFunction(callback)) callback.call(api);
	          });else {
	            $(this).css({ display: 'block', visibility: 'hidden' });
	            api = $.Jcrop(this, options);
	            if ($.isFunction(callback)) callback.call(api);
	          }
	        }
	    });

	    // Return "this" so the object is chainable (jQuery-style)
	    return this;
	  };
	  //}}}
	  // $.Jcrop.Loader - basic image loader {{{

	  $.Jcrop.Loader = function (imgobj, success, error) {
	    var $img = $(imgobj),
	        img = $img[0];

	    function completeCheck() {
	      if (img.complete) {
	        $img.unbind('.jcloader');
	        if ($.isFunction(success)) success.call(img);
	      } else window.setTimeout(completeCheck, 50);
	    }

	    $img.bind('load.jcloader', completeCheck).bind('error.jcloader', function (e) {
	      $img.unbind('.jcloader');
	      if ($.isFunction(error)) error.call(img);
	    });

	    if (img.complete && $.isFunction(success)) {
	      $img.unbind('.jcloader');
	      success.call(img);
	    }
	  };

	  //}}}
	  // Global Defaults {{{
	  $.Jcrop.defaults = {

	    // Basic Settings
	    allowSelect: true,
	    allowMove: true,
	    allowResize: true,

	    trackDocument: true,

	    // Styling Options
	    baseClass: 'jcrop',
	    addClass: null,
	    bgColor: 'black',
	    bgOpacity: 0.6,
	    bgFade: false,
	    borderOpacity: 0.4,
	    handleOpacity: 0.5,
	    handleSize: null,

	    aspectRatio: 0,
	    keySupport: true,
	    createHandles: ['n', 's', 'e', 'w', 'nw', 'ne', 'se', 'sw'],
	    createDragbars: ['n', 's', 'e', 'w'],
	    createBorders: ['n', 's', 'e', 'w'],
	    drawBorders: true,
	    dragEdges: true,
	    fixedSupport: true,
	    touchSupport: null,

	    shade: null,

	    boxWidth: 0,
	    boxHeight: 0,
	    boundary: 2,
	    fadeTime: 400,
	    animationDelay: 20,
	    swingSpeed: 3,

	    minSelect: [0, 0],
	    maxSize: [0, 0],
	    minSize: [0, 0],

	    // Callbacks / Event Handlers
	    // 2015.9.18 add onDrag
	    onDrag: function onDrag() {},
	    onChange: function onChange() {},
	    onSelect: function onSelect() {},
	    onDblClick: function onDblClick() {},
	    onRelease: function onRelease() {}
	  };

	  // }}}
	})(jQuery);

/***/ },

/***/ 511:
/***/ function(module, exports) {

	/**
	* jquery.lazyoading.js
	* 自定义的页面图片延迟加载插件，比网上的jquery.lazyload简单，也更适合自己的网站
	* 使用方法：
	* 把img 的class加上 lazyloading,data-original 放图片的真实路径
	* 然后先引用jquery，再引用jquery.lazyoading.js，再调用：$("img.lazyloading").lazyloading({loadfirst:true});
	*/
	(function ($) {
	  $.fn.lazyloading = function (options) {
	    var defaults = {
	      preyimg: "images/grey.gif",
	      picpath: "data-original",
	      container: $(window),
	      loadfirst: false, //进入页面后是否加载当前页面的图片
	      defaultHeightID: "lazyloadingHeight" //页面上默认高度的input标签id
	      //imgPaddingID: "lazyloadingPadding"//img的padding值
	    };
	    var params = $.extend({}, defaults, options || {});
	    params.cache = [];
	    $(this).each(function () {
	      var node = this.nodeName.toLowerCase(),
	          url = $(this).attr(params["picpath"]),
	          preyimg = params["preyimg"];
	      var defaultheight = $("#" + params["defaultHeightID"]).val(); //, padding = $("#" + params["imgPaddingID"]).val(); //
	      //重组
	      var data = {
	        obj: $(this),
	        tag: node,
	        url: url,
	        preyimg: preyimg,
	        defaultheight: defaultheight
	      };
	      params.cache.push(data);
	    });

	    var init = function init() {
	      $.each(params.cache, function (i, data) {
	        var thisImg = data.obj,
	            tag = data.tag,
	            url = data.url,
	            preyimg = data.preyimg;
	        if (typeof url != "undefined") // 判断是否需要延迟加载
	          {
	            var parent1 = thisImg.parent(); //a
	            var Inner = null; //
	            if (parent1.is("a") == true) {
	              //img wrap by a
	              Inner = parent1;
	            } else {
	              Inner = thisImg;
	            }
	            var width = thisImg.attr("width") || thisImg.css("width");
	            var height = data.defaultheight || thisImg.css("height");
	            //if (i == 0) alert(data.defaultheight);
	            var attrheight = thisImg.attr("height");
	            if (attrheight != null) height = attrheight;
	            if (width != null && width.indexOf("px") > -1) width.replace("px", "");
	            if (height != null && height.indexOf("px") > -1) height.replace("px", "");
	            var divstr = "<div class='.loading' style='text-align: left;position:relative;float:left;width:" + width + "px;";
	            var HasHeight = true; //图片是否指定了高度
	            divstr = divstr + "height:" + height + "px;";
	            if (attrheight == null || attrheight == "") {
	              HasHeight = false;
	            }

	            thisImg.css("position", "relative");

	            divstr = divstr + "' ></div>";
	            //修正外层div：text-align的影响
	            Inner.wrap(divstr);
	            //修正img外面不是a标签时parent()已经改变的问题
	            parent1 = thisImg.parent();
	            if (HasHeight == true) {
	              parent1.attr("lazyloading_hasheight", "1");
	            } //是否指定了高度
	            else {
	                {
	                  parent1.attr("lazyloading_hasheight", "0");
	                }
	              }
	            parent1.append("<img class='loadhiddenimg' width='0' height='0' style='display:none;' src='' />");
	            thisImg.attr("src", preyimg);
	            thisImg.removeAttr("width").removeAttr("height");
	            thisImg.attr("width1", width).attr("height1", attrheight);

	            ////thisImg.attr("width", "50px").attr("height", "50px"); //loading图大小
	            //thisImg.css("margin", "0 auto");
	            thisImg.css("margin", height / 2 - 25 + "px auto auto " + (width / 2 - 25) + "px");
	            $(".lazyloading").css("display", "table"); //.css("position", "relative");
	          }
	      });
	    };
	    //动态显示数据
	    var loading1 = function loading1() {};
	    var loading = function loading() {
	      //窗口的高度+看不见的顶部的高度=屏幕低部距离最顶部的高度
	      var thisButtomTop = parseInt($(window).height()) + parseInt($(window).scrollTop());
	      var thisTop = parseInt($(window).scrollTop()); //屏幕顶部距离最顶部的高度

	      $.each(params.cache, function (i, data) {
	        var thisImg = data.obj,
	            tag = data.tag,
	            url = data.url,
	            post,
	            posb;

	        if (thisImg) {
	          //对象不为空
	          if (typeof url != "undefined") {
	            // 判断是否需要延迟加载
	            var PictureTop = parseInt(thisImg.offset().top);
	            //如果处理可见范围内，并且原图地址data-original不等于src,则加载图片
	            if (PictureTop >= thisTop && PictureTop <= thisButtomTop && thisImg.attr("data-original") != thisImg.attr("src")) {
	              var hiddenImg = thisImg.siblings("img.loadhiddenimg");

	              hiddenImg.load(function () {
	                //隐藏图片加载完之后的回调函数
	                var width = thisImg.attr("width1");
	                var height = thisImg.attr("height1");
	                thisImg.attr("width", width).attr("height", height).removeAttr("width1").removeAttr("height1");
	                thisImg.css("margin", "0 auto");
	                if (thisImg.parent().attr("lazyloading_hasheight") == "0") {
	                  //没有指定高度时，加载图片后去掉div高度自适应
	                  if (thisImg.parent().is("a") == true) {
	                    thisImg.parent().parent().css("height", "");
	                  } else {
	                    thisImg.parent().css("height", "");
	                  }
	                }
	                thisImg.load(function () {
	                  if (thisImg.parent().is("a") == true) {
	                    thisImg.parent().parent().css("height", thisImg.height());
	                  } else {
	                    thisImg.parent().css("height", thisImg.height());
	                  }
	                });
	                thisImg.css('opacity', '0.2');
	                thisImg.attr("src", hiddenImg.attr("src"));
	                thisImg.animate({ opacity: 1.0 });
	                if (thisImg.attr("alt") != "") {
	                  thisImg.attr("title", thisImg.attr("alt"));
	                  thisImg.attr("alt", "");
	                }
	              }).error(function () {
	                thisImg.error(function () {
	                  thisImg.css("margin", "0 auto auto 0");
	                  if (thisImg.parent().attr("lazyloading_hasheight") == "0") {
	                    //没有指定高度时，加载图片后去掉div高度自适应
	                    if (thisImg.parent().is("a") == true) {
	                      thisImg.parent().parent().css("height", "");
	                    } else {
	                      thisImg.parent().css("height", "");
	                    }
	                  }
	                });
	                thisImg.attr("src", hiddenImg.attr("src")); //alert("error");
	                if (thisImg.attr("alt") != "") {
	                  thisImg.attr("title", thisImg.attr("alt"));
	                  thisImg.attr("alt", "");
	                }
	              });
	              hiddenImg.attr("src", url);
	            }
	          }
	        }
	      });
	    };
	    //初始化
	    init();
	    //事件触发
	    //加载完毕即执行
	    if (params["loadfirst"] == true) loading();
	    //滚动执行
	    params.container.bind("scroll", loading).bind("resize", loading);
	  };
	})(jQuery);

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Header = __webpack_require__(7);
	var ProjectList = __webpack_require__(507);
	var tip = __webpack_require__(11);
	var str = __webpack_require__(12);
	var dialog = __webpack_require__(13);
	var blockbox = __webpack_require__(15);
	var modelO = __webpack_require__(14);
	__webpack_require__(513);

	var previewCom = React.createClass({
		displayName: 'previewCom',

		getInitialState: function getInitialState() {
			return {};
		},
		componentDidUpdate: function componentDidUpdate() {
			if (this.props.show) {
				var _self = this;
				new blockbox($(this.refs.preview), {
					showbg: true,
					closebtn: $(this.refs.preview).find('.close'),
					callback: function callback() {
						$(_self.refs.preview).find('.p_code').html('<p>您可以用手机扫描二维码进行预览</p>').qrcode({ width: 200, height: 200, correctLevel: 0, text: _self.props.vsrc });
					}
				});
			}
		},
		closeHandle: function closeHandle(e) {
			$(this.refs.preview).fadeOut(200);
			$('.bg').fadeOut(200);
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'preview_box true_preview_box', ref: 'preview' },
				React.createElement('a', { href: 'javascript:void(0);', className: 'close', onClick: this.closeHandle }),
				React.createElement(
					'div',
					{ className: 'p_left' },
					React.createElement(
						'div',
						{ className: 'p_desc clearfix' },
						React.createElement(
							'div',
							{ className: 'p_thum' },
							React.createElement('img', { src: this.props.url ? this.props.url : 'images/logo_default.jpg' })
						),
						React.createElement(
							'div',
							{ className: 'p_info' },
							React.createElement(
								'div',
								{ className: 'p_i_title' },
								React.createElement(
									'p',
									{ className: 'title' },
									this.props.title
								)
							),
							React.createElement(
								'div',
								{ className: 'p_i_content' },
								React.createElement(
									'p',
									{ className: 'content' },
									this.props.desc
								)
							)
						)
					),
					React.createElement('div', { className: 'p_code' })
				),
				React.createElement(
					'div',
					{ className: 'p_right' },
					React.createElement(
						'div',
						{ className: 'p_pre clearfix' },
						React.createElement(
							'div',
							{ className: 'p_scale' },
							React.createElement(
								'div',
								{ className: 'p_scale_box', id: 'preview' },
								React.createElement('iframe', { width: '100%', height: '100%', scrolling: 'no', frameBorder: 'no', src: this.props.psrc })
							)
						),
						React.createElement(
							'div',
							{ className: 'p_arrow' },
							React.createElement(
								'a',
								{ href: 'javascript:void(0);', className: 'p_prev' },
								React.createElement('span', null)
							),
							React.createElement(
								'a',
								{ href: 'javascript:void(0);', className: 'p_next' },
								React.createElement('span', null)
							)
						)
					)
				)
			);
		}
	});
	module.exports = previewCom;

/***/ },

/***/ 513:
/***/ function(module, exports) {

	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------

	//---------------------------------------------------------------------
	// QR8bitByte
	//---------------------------------------------------------------------

	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
	}

	QR8bitByte.prototype = {

		getLength: function getLength(buffer) {
			return this.data.length;
		},

		write: function write(buffer) {
			for (var i = 0; i < this.data.length; i++) {
				// not JIS ...
				buffer.put(this.data.charCodeAt(i), 8);
			}
		}
	};

	//---------------------------------------------------------------------
	// QRCode
	//---------------------------------------------------------------------

	function QRCode(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = new Array();
	}

	QRCode.prototype = {

		addData: function addData(data) {
			var newData = new QR8bitByte(data);
			this.dataList.push(newData);
			this.dataCache = null;
		},

		isDark: function isDark(row, col) {
			if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
				throw new Error(row + "," + col);
			}
			return this.modules[row][col];
		},

		getModuleCount: function getModuleCount() {
			return this.moduleCount;
		},

		make: function make() {
			// Calculate automatically typeNumber if provided is < 1
			if (this.typeNumber < 1) {
				var typeNumber = 1;
				for (typeNumber = 1; typeNumber < 40; typeNumber++) {
					var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

					var buffer = new QRBitBuffer();
					var totalDataCount = 0;
					for (var i = 0; i < rsBlocks.length; i++) {
						totalDataCount += rsBlocks[i].dataCount;
					}

					for (var i = 0; i < this.dataList.length; i++) {
						var data = this.dataList[i];
						buffer.put(data.mode, 4);
						buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
						data.write(buffer);
					}
					if (buffer.getLengthInBits() <= totalDataCount * 8) break;
				}
				this.typeNumber = typeNumber;
			}
			this.makeImpl(false, this.getBestMaskPattern());
		},

		makeImpl: function makeImpl(test, maskPattern) {

			this.moduleCount = this.typeNumber * 4 + 17;
			this.modules = new Array(this.moduleCount);

			for (var row = 0; row < this.moduleCount; row++) {

				this.modules[row] = new Array(this.moduleCount);

				for (var col = 0; col < this.moduleCount; col++) {
					this.modules[row][col] = null; //(col + row) % 3;
				}
			}

			this.setupPositionProbePattern(0, 0);
			this.setupPositionProbePattern(this.moduleCount - 7, 0);
			this.setupPositionProbePattern(0, this.moduleCount - 7);
			this.setupPositionAdjustPattern();
			this.setupTimingPattern();
			this.setupTypeInfo(test, maskPattern);

			if (this.typeNumber >= 7) {
				this.setupTypeNumber(test);
			}

			if (this.dataCache == null) {
				this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
			}

			this.mapData(this.dataCache, maskPattern);
		},

		setupPositionProbePattern: function setupPositionProbePattern(row, col) {

			for (var r = -1; r <= 7; r++) {

				if (row + r <= -1 || this.moduleCount <= row + r) continue;

				for (var c = -1; c <= 7; c++) {

					if (col + c <= -1 || this.moduleCount <= col + c) continue;

					if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		},

		getBestMaskPattern: function getBestMaskPattern() {

			var minLostPoint = 0;
			var pattern = 0;

			for (var i = 0; i < 8; i++) {

				this.makeImpl(true, i);

				var lostPoint = QRUtil.getLostPoint(this);

				if (i == 0 || minLostPoint > lostPoint) {
					minLostPoint = lostPoint;
					pattern = i;
				}
			}

			return pattern;
		},

		createMovieClip: function createMovieClip(target_mc, instance_name, depth) {

			var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
			var cs = 1;

			this.make();

			for (var row = 0; row < this.modules.length; row++) {

				var y = row * cs;

				for (var col = 0; col < this.modules[row].length; col++) {

					var x = col * cs;
					var dark = this.modules[row][col];

					if (dark) {
						qr_mc.beginFill(0, 100);
						qr_mc.moveTo(x, y);
						qr_mc.lineTo(x + cs, y);
						qr_mc.lineTo(x + cs, y + cs);
						qr_mc.lineTo(x, y + cs);
						qr_mc.endFill();
					}
				}
			}

			return qr_mc;
		},

		setupTimingPattern: function setupTimingPattern() {

			for (var r = 8; r < this.moduleCount - 8; r++) {
				if (this.modules[r][6] != null) {
					continue;
				}
				this.modules[r][6] = r % 2 == 0;
			}

			for (var c = 8; c < this.moduleCount - 8; c++) {
				if (this.modules[6][c] != null) {
					continue;
				}
				this.modules[6][c] = c % 2 == 0;
			}
		},

		setupPositionAdjustPattern: function setupPositionAdjustPattern() {

			var pos = QRUtil.getPatternPosition(this.typeNumber);

			for (var i = 0; i < pos.length; i++) {

				for (var j = 0; j < pos.length; j++) {

					var row = pos[i];
					var col = pos[j];

					if (this.modules[row][col] != null) {
						continue;
					}

					for (var r = -2; r <= 2; r++) {

						for (var c = -2; c <= 2; c++) {

							if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
								this.modules[row + r][col + c] = true;
							} else {
								this.modules[row + r][col + c] = false;
							}
						}
					}
				}
			}
		},

		setupTypeNumber: function setupTypeNumber(test) {

			var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

			for (var i = 0; i < 18; i++) {
				var mod = !test && (bits >> i & 1) == 1;
				this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
			}

			for (var i = 0; i < 18; i++) {
				var mod = !test && (bits >> i & 1) == 1;
				this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
			}
		},

		setupTypeInfo: function setupTypeInfo(test, maskPattern) {

			var data = this.errorCorrectLevel << 3 | maskPattern;
			var bits = QRUtil.getBCHTypeInfo(data);

			// vertical		
			for (var i = 0; i < 15; i++) {

				var mod = !test && (bits >> i & 1) == 1;

				if (i < 6) {
					this.modules[i][8] = mod;
				} else if (i < 8) {
					this.modules[i + 1][8] = mod;
				} else {
					this.modules[this.moduleCount - 15 + i][8] = mod;
				}
			}

			// horizontal
			for (var i = 0; i < 15; i++) {

				var mod = !test && (bits >> i & 1) == 1;

				if (i < 8) {
					this.modules[8][this.moduleCount - i - 1] = mod;
				} else if (i < 9) {
					this.modules[8][15 - i - 1 + 1] = mod;
				} else {
					this.modules[8][15 - i - 1] = mod;
				}
			}

			// fixed module
			this.modules[this.moduleCount - 8][8] = !test;
		},

		mapData: function mapData(data, maskPattern) {

			var inc = -1;
			var row = this.moduleCount - 1;
			var bitIndex = 7;
			var byteIndex = 0;

			for (var col = this.moduleCount - 1; col > 0; col -= 2) {

				if (col == 6) col--;

				while (true) {

					for (var c = 0; c < 2; c++) {

						if (this.modules[row][col - c] == null) {

							var dark = false;

							if (byteIndex < data.length) {
								dark = (data[byteIndex] >>> bitIndex & 1) == 1;
							}

							var mask = QRUtil.getMask(maskPattern, row, col - c);

							if (mask) {
								dark = !dark;
							}

							this.modules[row][col - c] = dark;
							bitIndex--;

							if (bitIndex == -1) {
								byteIndex++;
								bitIndex = 7;
							}
						}
					}

					row += inc;

					if (row < 0 || this.moduleCount <= row) {
						row -= inc;
						inc = -inc;
						break;
					}
				}
			}
		}

	};

	QRCode.PAD0 = 0xEC;
	QRCode.PAD1 = 0x11;

	QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {

		var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

		var buffer = new QRBitBuffer();

		for (var i = 0; i < dataList.length; i++) {
			var data = dataList[i];
			buffer.put(data.mode, 4);
			buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
			data.write(buffer);
		}

		// calc num max data.
		var totalDataCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalDataCount += rsBlocks[i].dataCount;
		}

		if (buffer.getLengthInBits() > totalDataCount * 8) {
			throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
		}

		// end code
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
			buffer.put(0, 4);
		}

		// padding
		while (buffer.getLengthInBits() % 8 != 0) {
			buffer.putBit(false);
		}

		// padding
		while (true) {

			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD0, 8);

			if (buffer.getLengthInBits() >= totalDataCount * 8) {
				break;
			}
			buffer.put(QRCode.PAD1, 8);
		}

		return QRCode.createBytes(buffer, rsBlocks);
	};

	QRCode.createBytes = function (buffer, rsBlocks) {

		var offset = 0;

		var maxDcCount = 0;
		var maxEcCount = 0;

		var dcdata = new Array(rsBlocks.length);
		var ecdata = new Array(rsBlocks.length);

		for (var r = 0; r < rsBlocks.length; r++) {

			var dcCount = rsBlocks[r].dataCount;
			var ecCount = rsBlocks[r].totalCount - dcCount;

			maxDcCount = Math.max(maxDcCount, dcCount);
			maxEcCount = Math.max(maxEcCount, ecCount);

			dcdata[r] = new Array(dcCount);

			for (var i = 0; i < dcdata[r].length; i++) {
				dcdata[r][i] = 0xff & buffer.buffer[i + offset];
			}
			offset += dcCount;

			var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
			var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);

			var modPoly = rawPoly.mod(rsPoly);
			ecdata[r] = new Array(rsPoly.getLength() - 1);
			for (var i = 0; i < ecdata[r].length; i++) {
				var modIndex = i + modPoly.getLength() - ecdata[r].length;
				ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
			}
		}

		var totalCodeCount = 0;
		for (var i = 0; i < rsBlocks.length; i++) {
			totalCodeCount += rsBlocks[i].totalCount;
		}

		var data = new Array(totalCodeCount);
		var index = 0;

		for (var i = 0; i < maxDcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < dcdata[r].length) {
					data[index++] = dcdata[r][i];
				}
			}
		}

		for (var i = 0; i < maxEcCount; i++) {
			for (var r = 0; r < rsBlocks.length; r++) {
				if (i < ecdata[r].length) {
					data[index++] = ecdata[r][i];
				}
			}
		}

		return data;
	};

	//---------------------------------------------------------------------
	// QRMode
	//---------------------------------------------------------------------

	var QRMode = {
		MODE_NUMBER: 1 << 0,
		MODE_ALPHA_NUM: 1 << 1,
		MODE_8BIT_BYTE: 1 << 2,
		MODE_KANJI: 1 << 3
	};

	//---------------------------------------------------------------------
	// QRErrorCorrectLevel
	//---------------------------------------------------------------------

	var QRErrorCorrectLevel = {
		L: 1,
		M: 0,
		Q: 3,
		H: 2
	};

	//---------------------------------------------------------------------
	// QRMaskPattern
	//---------------------------------------------------------------------

	var QRMaskPattern = {
		PATTERN000: 0,
		PATTERN001: 1,
		PATTERN010: 2,
		PATTERN011: 3,
		PATTERN100: 4,
		PATTERN101: 5,
		PATTERN110: 6,
		PATTERN111: 7
	};

	//---------------------------------------------------------------------
	// QRUtil
	//---------------------------------------------------------------------

	var QRUtil = {

		PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],

		G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
		G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
		G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,

		getBCHTypeInfo: function getBCHTypeInfo(data) {
			var d = data << 10;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
				d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
			}
			return (data << 10 | d) ^ QRUtil.G15_MASK;
		},

		getBCHTypeNumber: function getBCHTypeNumber(data) {
			var d = data << 12;
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
				d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
			}
			return data << 12 | d;
		},

		getBCHDigit: function getBCHDigit(data) {

			var digit = 0;

			while (data != 0) {
				digit++;
				data >>>= 1;
			}

			return digit;
		},

		getPatternPosition: function getPatternPosition(typeNumber) {
			return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
		},

		getMask: function getMask(maskPattern, i, j) {

			switch (maskPattern) {

				case QRMaskPattern.PATTERN000:
					return (i + j) % 2 == 0;
				case QRMaskPattern.PATTERN001:
					return i % 2 == 0;
				case QRMaskPattern.PATTERN010:
					return j % 3 == 0;
				case QRMaskPattern.PATTERN011:
					return (i + j) % 3 == 0;
				case QRMaskPattern.PATTERN100:
					return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
				case QRMaskPattern.PATTERN101:
					return i * j % 2 + i * j % 3 == 0;
				case QRMaskPattern.PATTERN110:
					return (i * j % 2 + i * j % 3) % 2 == 0;
				case QRMaskPattern.PATTERN111:
					return (i * j % 3 + (i + j) % 2) % 2 == 0;

				default:
					throw new Error("bad maskPattern:" + maskPattern);
			}
		},

		getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {

			var a = new QRPolynomial([1], 0);

			for (var i = 0; i < errorCorrectLength; i++) {
				a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
			}

			return a;
		},

		getLengthInBits: function getLengthInBits(mode, type) {

			if (1 <= type && type < 10) {

				// 1 - 9

				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 10;
					case QRMode.MODE_ALPHA_NUM:
						return 9;
					case QRMode.MODE_8BIT_BYTE:
						return 8;
					case QRMode.MODE_KANJI:
						return 8;
					default:
						throw new Error("mode:" + mode);
				}
			} else if (type < 27) {

				// 10 - 26

				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 12;
					case QRMode.MODE_ALPHA_NUM:
						return 11;
					case QRMode.MODE_8BIT_BYTE:
						return 16;
					case QRMode.MODE_KANJI:
						return 10;
					default:
						throw new Error("mode:" + mode);
				}
			} else if (type < 41) {

				// 27 - 40

				switch (mode) {
					case QRMode.MODE_NUMBER:
						return 14;
					case QRMode.MODE_ALPHA_NUM:
						return 13;
					case QRMode.MODE_8BIT_BYTE:
						return 16;
					case QRMode.MODE_KANJI:
						return 12;
					default:
						throw new Error("mode:" + mode);
				}
			} else {
				throw new Error("type:" + type);
			}
		},

		getLostPoint: function getLostPoint(qrCode) {

			var moduleCount = qrCode.getModuleCount();

			var lostPoint = 0;

			// LEVEL1

			for (var row = 0; row < moduleCount; row++) {

				for (var col = 0; col < moduleCount; col++) {

					var sameCount = 0;
					var dark = qrCode.isDark(row, col);

					for (var r = -1; r <= 1; r++) {

						if (row + r < 0 || moduleCount <= row + r) {
							continue;
						}

						for (var c = -1; c <= 1; c++) {

							if (col + c < 0 || moduleCount <= col + c) {
								continue;
							}

							if (r == 0 && c == 0) {
								continue;
							}

							if (dark == qrCode.isDark(row + r, col + c)) {
								sameCount++;
							}
						}
					}

					if (sameCount > 5) {
						lostPoint += 3 + sameCount - 5;
					}
				}
			}

			// LEVEL2

			for (var row = 0; row < moduleCount - 1; row++) {
				for (var col = 0; col < moduleCount - 1; col++) {
					var count = 0;
					if (qrCode.isDark(row, col)) count++;
					if (qrCode.isDark(row + 1, col)) count++;
					if (qrCode.isDark(row, col + 1)) count++;
					if (qrCode.isDark(row + 1, col + 1)) count++;
					if (count == 0 || count == 4) {
						lostPoint += 3;
					}
				}
			}

			// LEVEL3

			for (var row = 0; row < moduleCount; row++) {
				for (var col = 0; col < moduleCount - 6; col++) {
					if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
						lostPoint += 40;
					}
				}
			}

			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount - 6; row++) {
					if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
						lostPoint += 40;
					}
				}
			}

			// LEVEL4

			var darkCount = 0;

			for (var col = 0; col < moduleCount; col++) {
				for (var row = 0; row < moduleCount; row++) {
					if (qrCode.isDark(row, col)) {
						darkCount++;
					}
				}
			}

			var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
			lostPoint += ratio * 10;

			return lostPoint;
		}

	};

	//---------------------------------------------------------------------
	// QRMath
	//---------------------------------------------------------------------

	var QRMath = {

		glog: function glog(n) {

			if (n < 1) {
				throw new Error("glog(" + n + ")");
			}

			return QRMath.LOG_TABLE[n];
		},

		gexp: function gexp(n) {

			while (n < 0) {
				n += 255;
			}

			while (n >= 256) {
				n -= 255;
			}

			return QRMath.EXP_TABLE[n];
		},

		EXP_TABLE: new Array(256),

		LOG_TABLE: new Array(256)

	};

	for (var i = 0; i < 8; i++) {
		QRMath.EXP_TABLE[i] = 1 << i;
	}
	for (var i = 8; i < 256; i++) {
		QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
	}
	for (var i = 0; i < 255; i++) {
		QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
	}

	//---------------------------------------------------------------------
	// QRPolynomial
	//---------------------------------------------------------------------

	function QRPolynomial(num, shift) {

		if (num.length == undefined) {
			throw new Error(num.length + "/" + shift);
		}

		var offset = 0;

		while (offset < num.length && num[offset] == 0) {
			offset++;
		}

		this.num = new Array(num.length - offset + shift);
		for (var i = 0; i < num.length - offset; i++) {
			this.num[i] = num[i + offset];
		}
	}

	QRPolynomial.prototype = {

		get: function get(index) {
			return this.num[index];
		},

		getLength: function getLength() {
			return this.num.length;
		},

		multiply: function multiply(e) {

			var num = new Array(this.getLength() + e.getLength() - 1);

			for (var i = 0; i < this.getLength(); i++) {
				for (var j = 0; j < e.getLength(); j++) {
					num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
				}
			}

			return new QRPolynomial(num, 0);
		},

		mod: function mod(e) {

			if (this.getLength() - e.getLength() < 0) {
				return this;
			}

			var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));

			var num = new Array(this.getLength());

			for (var i = 0; i < this.getLength(); i++) {
				num[i] = this.get(i);
			}

			for (var i = 0; i < e.getLength(); i++) {
				num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
			}

			// recursive call
			return new QRPolynomial(num, 0).mod(e);
		}
	};

	//---------------------------------------------------------------------
	// QRRSBlock
	//---------------------------------------------------------------------

	function QRRSBlock(totalCount, dataCount) {
		this.totalCount = totalCount;
		this.dataCount = dataCount;
	}

	QRRSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],

	// 2
	[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],

	// 3
	[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],

	// 4		
	[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],

	// 5
	[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],

	// 6
	[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],

	// 7		
	[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],

	// 8
	[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],

	// 9
	[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],

	// 10		
	[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

	QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {

		var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

		if (rsBlock == undefined) {
			throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
		}

		var length = rsBlock.length / 3;

		var list = new Array();

		for (var i = 0; i < length; i++) {

			var count = rsBlock[i * 3 + 0];
			var totalCount = rsBlock[i * 3 + 1];
			var dataCount = rsBlock[i * 3 + 2];

			for (var j = 0; j < count; j++) {
				list.push(new QRRSBlock(totalCount, dataCount));
			}
		}

		return list;
	};

	QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {

		switch (errorCorrectLevel) {
			case QRErrorCorrectLevel.L:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
			case QRErrorCorrectLevel.M:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
			case QRErrorCorrectLevel.Q:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
			case QRErrorCorrectLevel.H:
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
			default:
				return undefined;
		}
	};

	//---------------------------------------------------------------------
	// QRBitBuffer
	//---------------------------------------------------------------------

	function QRBitBuffer() {
		this.buffer = new Array();
		this.length = 0;
	}

	QRBitBuffer.prototype = {

		get: function get(index) {
			var bufIndex = Math.floor(index / 8);
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
		},

		put: function put(num, length) {
			for (var i = 0; i < length; i++) {
				this.putBit((num >>> length - i - 1 & 1) == 1);
			}
		},

		getLengthInBits: function getLengthInBits() {
			return this.length;
		},

		putBit: function putBit(bit) {

			var bufIndex = Math.floor(this.length / 8);
			if (this.buffer.length <= bufIndex) {
				this.buffer.push(0);
			}

			if (bit) {
				this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
			}

			this.length++;
		}
	};

	(function ($) {
		$.fn.qrcode = function (options) {
			// if options is string,
			if (typeof options === 'string') {
				options = { text: options };
			}

			// set default values
			// typeNumber < 1 for automatic calculation
			options = $.extend({}, {
				render: "canvas",
				width: 256,
				height: 256,
				typeNumber: -1,
				correctLevel: QRErrorCorrectLevel.H,
				background: "#ffffff",
				foreground: "#000000"
			}, options);

			var createCanvas = function createCanvas() {
				// create the qrcode itself
				var qrcode = new QRCode(options.typeNumber, options.correctLevel);
				qrcode.addData(options.text);
				qrcode.make();

				// create canvas element
				var canvas = document.createElement('canvas');
				canvas.width = options.width;
				canvas.height = options.height;
				var ctx = canvas.getContext('2d');

				// compute tileW/tileH based on options.width/options.height
				var tileW = options.width / qrcode.getModuleCount();
				var tileH = options.height / qrcode.getModuleCount();

				// draw in the canvas
				for (var row = 0; row < qrcode.getModuleCount(); row++) {
					for (var col = 0; col < qrcode.getModuleCount(); col++) {
						ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
						var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
						var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
						ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
					}
				}
				// return just built canvas
				return canvas;
			};

			// from Jon-Carlos Rivera (https://github.com/imbcmdth)
			var createTable = function createTable() {
				// create the qrcode itself
				var qrcode = new QRCode(options.typeNumber, options.correctLevel);
				qrcode.addData(options.text);
				qrcode.make();

				// create table element
				var $table = $('<table></table>').css("width", options.width + "px").css("height", options.height + "px").css("border", "0px").css("border-collapse", "collapse").css('background-color', options.background);

				// compute tileS percentage
				var tileW = options.width / qrcode.getModuleCount();
				var tileH = options.height / qrcode.getModuleCount();

				// draw in the table
				for (var row = 0; row < qrcode.getModuleCount(); row++) {
					var $row = $('<tr></tr>').css('height', tileH + "px").appendTo($table);

					for (var col = 0; col < qrcode.getModuleCount(); col++) {
						$('<td></td>').css('width', tileW + "px").css('background-color', qrcode.isDark(row, col) ? options.foreground : options.background).appendTo($row);
					}
				}
				// return just built canvas
				return $table;
			};

			return this.each(function () {
				var element = options.render == "canvas" ? createCanvas() : createTable();
				$(element).appendTo(this);
			});
		};
	})(jQuery);

/***/ }

});