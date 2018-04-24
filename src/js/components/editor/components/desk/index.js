import React from 'react';
import Page from '../page/page';

var edesk = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    render:function() {
        var list = this.props.desktop.get('data') ? this.props.desktop.get('data').toJS() : [];
        return (
            <div className="e_desktop nodrag noselect">
                <Page type="desktop" list={list} />
                <div className="e_d_tool">
                    <a href="javascript:void(0);" className="assist clearfix"><i></i><span>网格</span></a>
                    <a href="javascript:void(0);" className="copy clearfix"><i></i><span>复制页面</span></a>
                    <a href="javascript:void(0);" className="delete clearfix"><i></i><span>删除页面</span></a>
                </div>
            </div>
        )
    }
});

module.exports = edesk;
