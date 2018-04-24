var React = require('react');
require('../../common/plugins/hoverdir');
var WebUploader = require('../../common/plugins/webuploader');
var modelO = require('../../common/model');
require('../../common/plugins/jcrop');
require('../../common/plugins/lazyloading');
var projectCom = React.createClass({
	getInitialState:function() {
		return {
			url:this.props.cover_url,
			hid:this.props.hid,
			status:parseInt(this.props.status),
			preview:this.props.preview,
			view:this.props.view,
			count:this.props.count,
			title:this.props.title,
			desc:this.props.description,
			src:this.props.src,
			titleCache:this.props.title,
			descCache:this.props.description,
			active:false
		};
	},
	componentDidMount:function(){
		$(this.refs.li).hoverdir();
		$(this.refs.li).find('img.lazyloading').lazyloading({loadfirst: true});
	},

	shouldComponentUpdate:function(nextProps){
		return nextProps.render;
	},

	componentWillUpdate:function(){
		console.log(this.state.hid);
	},

	avata:function(){
		var _self = this;
		var item = $(this.refs.li);
		MZ.dialog.cssClass = 'upload_thrumb';
		MZ.dialog.base({
			content: [
				'<div class="thtip">支持格式：JPG、JPEG、PNG、GIF &nbsp;&nbsp;大小:2M以内。</div>',
				'<div class="thrumb">',
					'<img src="'+_self.state.url+'">',
					'<a href="javascript:void(0);" class="btu_green t_upload" id="thrumb_upload"></a>',
				'</div>',

				'<div class="thedit clearfix">',
					'<div class="thedit_thrumb">',
						'<img src="'+_self.state.url+'">',
					'</div>',
					'<div class="thedit_preview">',
						'<img src="">',
					'</div>',
				'</div>',

				'<a href="javascript:void(0);" class="btu_green t_sure">确定并上传</a>',

			].join(''),
			title: '项目缩略图设置',
			type:'confirm',
			btnAlign:'center',
			callback:function(){
				$('.mzui_dialog .dialog_ft').hide();
				var dialog = MZ.dialog;
				var rdm = dialog.rdm;
				var w = 240,h = 240,x = 0,y = 0;
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
					fileSizeLimit: 20 * 1024 * 1024,    // 10M
					fileSingleSizeLimit: 2 * 1024 * 1024    // 2M
				});

				uploader.onUploadSuccess = function( file ,response) {
					dialog.close(rdm);
					if(response){
						if(response.status === 1){
							var path = response.path;
						}else{
							MZ.tipmessage.show({message:response.info,delay:1000,pos:'middle',type:'fail'});
						}
						if(path){
							_self.setState({
								url:path
							});
							_self.props.choseHandle(_self.state.hid);
						}
					}else{
						MZ.tipmessage.show({message:modelO.tipInfo.noresponse,delay:1000,pos:'middle',type:'fail'});
					}
				};

				uploader.onError = function( code ) {
					MZ.tipmessage.show({message:modelO.errorCode[code],delay:1000,pos:'middle',type:'fail'});
				};

				uploader.onUploadBeforeSend = function(object,data,headers){
					data.x = x, data.y = y, data.width = w,data.height = w,data.hid = _self.state.hid;
				};

				uploader.onFileQueued = function( file ) {
					// 创建缩略图
					uploader.makeThumb( file, function( error, src ) {
						if ( error ) {
							$img.replaceWith('<span>不能预览</span>');
							return;
						}
						$('.mzui_dialog').addClass('mzui_dialog_max');
						$img.attr('src', src),$pimg.attr('src', src);

						_self.getPicInfo(src,function(info){
							if(info.iLong === 'w'){
								$img.css('width',$('.thedit_thrumb').width()).css('height','auto');
							}else{
								$img.css('height',$('.thedit_thrumb').height()).css('width','auto');
							}

							$thrumb.hide();
							$edit.show();
							$('.t_sure').css('display','block');

							setTimeout(function(){
								//裁剪
								$img.Jcrop({
									onChange: updatePreview,
									onSelect: updatePreview,
									aspectRatio: 1
								},function(){
									var bounds = this.getBounds();
									boundx = bounds[0];
									boundy = bounds[1];
									jcrop_api = this;
								});

								function updatePreview(c){
									if (parseInt(c.w) > 0) {
										var nw = Math.round(boundx * 224 / c.w);
										var rh = c.h / boundy * info.height;
										var nh = Math.round(info.height * 224 / rh);
										var ml = Math.round(c.x / boundx * nw);
										var mt = Math.round(c.y / boundy * nh);
										var ratio = info.width / nw;
										x = ratio * ml,y = ratio * mt,w = ratio * 224;

										ml = '-' + ml + 'px';
										mt = '-' + mt + 'px';

										$pimg.css({
											width: nw,
											marginLeft: ml,
											marginTop: mt
										});
									}
								};

							},100)
						});
					}, 1, 1);

					$('.mzui_dialog .t_sure').click(function(){
						uploader.upload();
					});
				};
			},
			fnSure: function(dialog,rdm) {
				dialog.close(rdm);
			},
			fnCancel:function(dialog,rdm){
				dialog.close(rdm);
			}
		});
	},
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
	enter:function(e){
		var o = e.target;
		var name = o.name;
		if(name == 'title'){
			this.setState({
				title:o.value
			});
		}else if(name == 'desc'){
			this.setState({
				desc:o.value
			});
		}
		this.props.choseHandle(this.state.hid);
	},
	blur:function(e){
		var _self = this;
		var o = e.target;
		var name = o.name;
		var val = this.state[name+'Cache'];

		if(val != o.value){
			$.ajax({
				type: "post",
				url: modelO.prefix + modelO.apiUrl.setInfo,
				data: {'hid':_self.state.hid,'title':_self.state.title,'description':_self.state.desc},
				success: function () {
					MZ.tipmessage.show({message:modelO.tipInfo.modsuccess,delay:1000,pos:'middle',type:'success'});
					_self.setState({
						titleCache:_self.state.title,
						descCache:_self.state.desc
					});
				},
				error:function(){
					MZ.tipmessage.show({message:modelO.tipInfo.modfailure,delay:1000,pos:'middle',type:'fail'});
					_self.setState({
						title:_self.state.titleCache,
						desc:_self.state.descCache
					});
				},
				complete:function(){
					_self.props.choseHandle(_self.state.hid);
				}
			});
		}
	},
	edit:function(){
		var _self = this;
		var src = _self.state.src;
		if(src)
			window.location.href = src;
	},
	del:function(){
		var _self = this;
		MZ.dialog.base({
			content: modelO.tipInfo.del,
			title: '提示',
			type:'confirm',
			btnAlign:'center',
			fnSure: function(dialog,rdm) {
				$.ajax({
					type: "post",
					url: modelO.prefix + modelO.apiUrl.del,
					data: {'hid':_self.state.hid},
					success: function () {
						MZ.tipmessage.show({message:modelO.tipInfo.delsuccess,delay:1000,pos:'middle',type:'success'});
						window.location.reload();
					},
					error:function(){
						MZ.tipmessage.show({message:modelO.tipInfo.delfailure,delay:1000,pos:'middle',type:'fail'});
					}
				});
				dialog.close(rdm);
			},
			fnCancel:function(dialog,rdm){
				dialog.close(rdm);
			}
		})
	},
	offline:function(e){
		var _self = this;
		var content = this.state.status ? modelO.tipInfo.offline : modelO.tipInfo.online;
		var nextstatus = this.state.status ? 0 : 1;
		MZ.dialog.base({
			content: content,
			title: '提示',
			type:'confirm',
			btnAlign:'center',
			fnSure: function(dialog,rdm) {
				$.ajax({
					type: "post",
					url: modelO.prefix + modelO.apiUrl.setStatus,
					data: {'hid':_self.state.hid,'status':nextstatus},
					success: function () {
						MZ.tipmessage.show({message:modelO.tipInfo.modsuccess,delay:1000,pos:'middle',type:'success'});
						_self.setState({
							status: nextstatus
						});
						_self.props.choseHandle(_self.state.hid);
					},
					error:function(){
						MZ.tipmessage.show({message:modelO.tipInfo.modfailure,delay:1000,pos:'middle',type:'fail'});
					}
				});
				dialog.close(rdm);
			},
			fnCancel:function(dialog,rdm){
				dialog.close(rdm);
			}
		})
	},
	preview:function(e){
		this.setState({active:true});
		this.props.previewHandle({
			title:this.state.title,
			desc:this.state.desc,
			url:this.state.url,
			id:this.state.hid,
			psrc:this.state.preview,
			vsrc:this.state.view,
			show:true
		});
	},
	count:function(){
		window.location.href = this.state.count + '?hid=' + this.state.hid;
	},
	render:function() {
		var classStatus = 'status' + (this.state.status?'':' c');
		var classli = 'c_p' +  (this.state.active?'active':'');
		return (
			<li className={this.classli} ref="li" classNameName="c_p clearfix">
			   <div className="c_p_logo">
				   <img src={this.state.url} className="lazyloading" data-original={this.state.url} />
			   </div>
			   <div className="c_p_content">
				   <div className="title">{this.state.title}</div>
				   <div className="content">
					   <span>{this.state.desc}</span>
					   <div className={classStatus}>
						   {this.state.status?'已上线':'已下线'}
					   </div>
				   </div>
				</div>
			   <div className="c_p_mask">
				   <div className="c_p_info">
					   <div className="title">
						   <input name="title" type="text" className="pro_input pro_title" value={this.state.title} onChange={this.enter} onBlur={this.blur} />
					   </div>
					   <div className="intro">
						   <textarea name="desc" className="pro_input pro_intro" value={this.state.desc} onChange={this.enter} onBlur={this.blur}></textarea>
					   </div>
				   </div>
				   <div className="btns">
					   <ul className="clearfix">
						   <li className="icon">
							   <a href="javascript:void(0);" className="avata" onClick={this.avata}>
								   <i></i>
							   </a>
						   </li>
						   <li className="icon">
							   <a href="javascript:void(0);" className="count" onClick={this.count}>
								   <i></i>
							   </a>
						   </li>
					   </ul>
					   <ul className="clearfix">
						   <li className="icon">
							   <a href="javascript:void(0);" className="preview" onClick={this.preview}>
								   <i></i>
							   </a>
						   </li>
						   <li className="icon">
							   <a href="javascript:void(0);" className="editor" onClick={this.edit}>
								   <i></i>
							   </a>
						   </li>
						   <li className="icon">
							   <a href="javascript:void(0);" className={this.state.status?'offline':'online'}  onClick={this.offline}>
								   <i></i>
							   </a>
						   </li>
						   <li className="icon">
							   <a href="javascript:void(0);" className="delete" onClick={this.del}>
								   <i></i>
							   </a>
						   </li>
					   </ul>
				   </div>
			   </div>
		   </li>
		)
	}
});
module.exports = projectCom;
