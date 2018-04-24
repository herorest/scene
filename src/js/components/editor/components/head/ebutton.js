import React from 'react';


var ebutton = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    openPreview:function(){
        this.props.openPreview(true);
    },
    render:function() {
        return <div className="e_button">
            <ul className="clearfix">
                <li><a href="javascript:void(0);" className="backward"><i></i>撤销</a></li>
                <li><a href="javascript:void(0);" onClick={this.openPreview} className="preview"><i></i>预览</a></li>
                <li className={this.props.userstate == 1 ? 'hide':''}><a href="javascript:void(0);" className="save"><i></i>保存</a></li>
                <li className={this.props.userstate == 1 ? '':'hide'}><a href="javascript:void(0);" className="save_model"><i></i>保存模板</a></li>
            </ul>
        </div>
    }
});

module.exports = ebutton;
