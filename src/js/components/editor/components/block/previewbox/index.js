var React = require('react');
var Header = require('js/components/common/head');
var tip = require('js/common/ui/tip-message/tipmessage');
var str = require('js/common/utils/string');
var dialog = require('js/common/ui/dialog/dialog');
var blockbox = require('js/common/plugins/blockbox');
var modelO = require('js/common/model');
var slide = require('js/common/plugins/slider');
import Page from '../../page/page';

var previewCom = React.createClass({
	getInitialState:function() {
		return {
		};
	},
	shouldComponentUpdate:function(nextProps){
		if(this.props.blockbox.toJS().preview != nextProps.blockbox.toJS().preview){
			return true;
		}
		return false;
	},
	componentDidUpdate:function(){
		if(this.props.blockbox.toJS().preview){
			var _self = this;
			new blockbox($(this.refs.preview),{
				showbg:true,
				callback:function(){
                    _self.makePreview();
				}
			});
		}else{
			$(this.refs.preview).fadeOut(200);
			$('.bg').fadeOut(200);
		}
	},
    makePreview:function(){
		var slideO = {} ,_self = this;
		setSlide();

		function setSlide(){
			//预览slide
			setTimeout(function(){
        		$(_self.refs.preview).find('.loading').fadeOut(300);
        		slideO = new slide({
			        pages: $('.section'),
			        parentNode:'#preview',
			        oninit: function () { },
			        onbeforechange: function () {},
			        onchange: function () {}
			    });
        	},1000);

			$('.p_prev').click(function(){
				slideO.prev();
			});
			$('.p_next').click(function(){
				slideO.next();
			});
		}
    },
	closePreview:function(){
        this.props.openPreview(false);
    },
	render:function() {
        var json = this.props.immujson.get('value').toJS();
        var list = [];
        for (var j in json) {
            list.push(<Page key={j} type="preview" page={j.match(/\d+/)[0]} list={json[j]} />);
        }
		return (
			<div className="preview_box" ref="preview">
				<a href="javascript:void(0);" className="close" onClick={this.closePreview}></a>
				<div className="p_left">
					<div className="p_desc clearfix">
						<div className="p_thum"><img src={info.url ? info.url:'images/logo_default.jpg'} /></div>
						<div className="p_info">
							<div className="p_i_title">
								<p className="title">{info.title}</p>
							</div>
							<div className="p_i_content">
								<p className="content">{info.desc}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="p_right">
					<div className="p_pre clearfix">
						<div className="p_scale">
							<div className="p_scale_box" id="preview">
								{list}
							</div>
						</div>
						<div className="p_arrow">
							<a href="javascript:void(0);" className="p_prev"><span></span></a><a href="javascript:void(0);" className="p_next"><span></span></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
module.exports = previewCom;
