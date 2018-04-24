var React = require('react');
var Header = require('js/components/common/head');
var ProjectList = require('./projectList');
var Preview = require('./preview');
var tip = require('js/common/ui/tip-message/tipmessage');
var str = require('js/common/utils/string');
var dialog = require('js/common/ui/dialog/dialog');
var modelO = require('js/common/model');
var blockbox = require('js/common/plugins/blockbox');

var indexCom = React.createClass({
	getInitialState:function() {
		return {
    		flag: true,
    		page: 1,
    		totalpage: 1,
    		end: false,
			userstate:1,
			list:[],
			chosed:{}
		};
	},
	componentDidMount:function(){
		this.getAuth();
	},
	getAuth : function(){
		if(this.state.userstate !== 0 && this.isMounted()){
			var _self = this;
			$.ajax({
	        	type: "get",
	            url: modelO.prefix + modelO.apiUrl.checkuser,
	            dataType:'json',
	            success: function (data) {
					var status = (data.status || data.status === 0)?data.status:0;
					_self.setState({userstate:status});
					_self.getMore(function(){
						_self.scroll();
					});
	            },
	            error:function(data){
	            	MZ.tipmessage.show({message:modelO.tipInfo.checkauthfail,delay:1000,pos:'middle',type:'fail'});
	            }
	    	})
		}
	},
	showModelTip:function(){
		var img = (modelO.develop === 'online'?'/Public/Home/':'') + 'images/panda.jpg';
		$('.c_project').addClass('c_model').html('<div class="c_model_tip"><img src="'+ img +'"><p>模板编辑功能暂未开放，敬请期待!</p></div>');
		$('.c_new').removeClass('.c_newP').html('新建模板');
	},
	getTotalHeight:function(){
		var head_h = $('.w_header').outerHeight();
		var content_h = $('.w_content').outerHeight(true);
		return head_h + content_h;
	},
	scroll:function(){
		var _self = this;
        $(window).scroll(function(){
            if($(document).height() - $(window).scrollTop() - $(window).height() < 100){
            	 _self.getMore(function(){});
            }
        });
	},
	showInfo:function(){
		var _self = this;
		if(t){
			clearTimeout(t);
			t = null;
		}else{
			var t = null;
		}
		$('.c_project_tip').html(modelO.tipInfo.endtip);
		t = setTimeout(function(){
			$('.c_project_tip').html('');
		},3000)
	},
	getMore:function(callback){
		//获取pagejson
		var _self = this;
		if(this.state.flag && !this.state.end){
			$.ajax({
	        	type: "get",
	            url: modelO.prefix + modelO.apiUrl.list,
	            data: {p:_self.state.page},
	            dataType:'json',
	            beforeSend:function(){
					_self.state.flag = false;
				},
	            success: function (result) {
	                if(parseInt(result.status) === 1){
	                	_self.state.totalpage = parseInt(result.totalpage);
	                	if(result.data.length > 0 && _self.state.page <= _self.state.totalpage){
	                		_self.setState({
								list:_self.state.list.concat(result.data)
							});
	                		if(_self.state.page === parseInt(_self.state.totalpage)){
	                			_self.state.end = true;
	                			_self.showInfo();
	                		}
	                		_self.state.page ++ ;
	                		if(callback && typeof(callback) === 'function'){
	                			callback.call(_self);
	                		}
	                	}
					}
	            },
	            complete:function(){
	            	_self.state.flag = true;
	            }
	        });
		}else{
			_self.showInfo();
		}
	},

	previewHandle:function(params){
		var _self = this;
		this.setState({
			chosed:{
				...params
			}
		});
	},
	render:function() {
		return (
			<div>
				<div className="manage">
					<div className="w_header">
						<Header/>
					</div>
					<div className="w_content w1000">
						<div className="clearfix">
							<a href="javascript:void(0);" className="c_new c_newP">新建项目</a>
						</div>
						<div className="c_project">
							<ProjectList listdata={this.state.list} previewHandle={this.previewHandle}  />
							<div className="c_project_tip"></div>
						</div>
					</div>
				</div>
				<Preview {...this.state.chosed} />
			</div>
		)
	}
});
module.exports = indexCom;
