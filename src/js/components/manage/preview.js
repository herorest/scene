var React = require('react');
var Header = require('js/components/common/head');
var ProjectList = require('./projectList');
var tip = require('js/common/ui/tip-message/tipmessage');
var str = require('js/common/utils/string');
var dialog = require('js/common/ui/dialog/dialog');
var blockbox = require('js/common/plugins/blockbox');
var modelO = require('../../common/model');
require('js/common/plugins/qrcode');

var previewCom = React.createClass({
	getInitialState:function() {
		return {
		};
	},
	componentDidUpdate:function(){
		if(this.props.show){
			var _self = this;
			new blockbox($(this.refs.preview),{
				showbg:true,
				closebtn:$(this.refs.preview).find('.close'),
				callback:function(){
					$(_self.refs.preview).find('.p_code').html('<p>您可以用手机扫描二维码进行预览</p>').qrcode({width:200,height:200,correctLevel:0,text:_self.props.vsrc});
				}
			});
		}
	},
	closeHandle:function(e){
		$(this.refs.preview).fadeOut(200);
		$('.bg').fadeOut(200);
	},
	render:function() {
		return (
			<div className="preview_box true_preview_box" ref="preview">
				<a href="javascript:void(0);" className="close" onClick={this.closeHandle}></a>
				<div className="p_left">
					<div className="p_desc clearfix">
						<div className="p_thum"><img src={this.props.url ? this.props.url:'images/logo_default.jpg'} /></div>
						<div className="p_info">
							<div className="p_i_title">
								<p className="title">{this.props.title}</p>
							</div>
							<div className="p_i_content">
								<p className="content">{this.props.desc}</p>
							</div>
						</div>
					</div>
					<div className="p_code"></div>
				</div>

				<div className="p_right">
					<div className="p_pre clearfix">
						<div className="p_scale">
							<div className="p_scale_box" id="preview">
								<iframe width="100%" height="100%" scrolling="no" frameBorder="no" src={this.props.psrc}></iframe>
							</div>
						</div>
						<div className="p_arrow">
							<a href="javascript:void(0);" className="p_prev"><span></span></a>
							<a href="javascript:void(0);" className="p_next"><span></span></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
module.exports = previewCom;
