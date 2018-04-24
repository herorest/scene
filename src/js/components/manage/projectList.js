var React = require('react');
var Project = require('./project');

var projectListCom = React.createClass({
	getInitialState:function() {
		return {
			chosedId:-1
		};
	},
	choseHandle:function(hid){
		this.setState({
			chosedId: hid,
			lastId: this.state.chosedId
		})
    },
	render:function() {
		var child = [];
        for(var i=0;i<this.props.listdata.length;i++){
			var prop = this.props.listdata[i];
			var render = (this.state.chosedId === prop.hid || this.state.lastId === prop.hid)?true:false;
            child.push(<Project key={i} {...prop} previewHandle={this.props.previewHandle} choseHandle={this.choseHandle} render={render}  />);
        }
		return (
			<ul id="project" className="clearfix">
				{child}
			</ul>
		)
	}
});
module.exports = projectListCom;
