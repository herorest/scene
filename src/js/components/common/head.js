var React = require('react');
import '../../../css/header.css';


var headCom = React.createClass({
	getInitialState:function() {
		return {
		  logosrc: 'manage.html',
		  login: false,
		  name: 'xiaoming',
		};
	},
	render:function() {
		return (
			<div className="w1000 clearfix">
				<a href={this.state.logosrc} className="h_logo"></a>
				<div className="h_name">
					<a href="javascript:void(0);">{this.state.name}</a>
					<a href="javascript:void(0);" className="h_menu">退出</a>
				</div>
				<div className="h_nav">
					<ul className="clearfix">
						<li><a href="javascript:void(0);">项目</a></li>
						<li><a href="javascript:void(0);">帮助</a></li>
					</ul>
				</div>
			</div>
		)
	}
});
module.exports = headCom;
