var React = require('react');

var indexCom = React.createClass({
	getInitialState:function() {
		return {
		  account:'',
		  password:'',
		  valicode:'',
		  valisrc:'images/valicode.jpg'
		};
	},
	changeHandle:function(e){
		if(e.target.name === 'account'){
			this.setState({
				account:e.target.value
			});
		}else if(e.target.name === 'password'){
			this.setState({
				password:e.target.value
			});
		}else if(e.target.name === 'valicode'){
			this.setState({
				valicode:e.target.value
			});
		}
	},
	render:function() {
		return (
			<div>
				<div className="l_form" id="validate">
					<dl>
						<dd className="clearfix">
							<span className="d clearfix"><input type="text" name="account" value={this.state.account} onChange={this.changeHandle} placeholder="账号" /></span>
							<span className="em"></span>
						</dd>
						<dd className="clearfix">
							<span className="d clearfix"><input type="password" name="password" value={this.state.password} onChange={this.changeHandle} placeholder="密码" /></span>
							<span className="em"></span>
						</dd>
						<dd className="clearfix">
							<span className="m clearfix"><input type="text" name="valicode" value={this.state.valicode} onChange={this.changeHandle} placeholder="验证码" /></span>
							<span className="m clearfix"><img src={this.state.valisrc} /></span>
							<span className="a"><a href="javascript:void(0);" className="l_change">换一张</a></span>
							<span className="em mem"></span>
						</dd>
					</dl>
					<div className="error">&nbsp;</div>
					<a href="javascript:void(0);" className="l_submit">登录</a>
				</div>

				<div className="l_help">
					<a href="javascript:void(0);" className="l_regsiter">我要注册</a>
					<a href="javascript:void(0);" className="l_forget">忘记密码？</a>
				</div>
			</div>
		)
	}
});
module.exports = indexCom;
