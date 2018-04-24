import React from 'react';

var ebutton = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    render:function() {
        return (
            <div className="model_store">
                <div className="m_trigger">

                </div>
                <div className="m_content clearfix" id="m_content">

                </div>
                <div className="m_btns">
                    <a href="javascript:void(0);" className="add_model btn_blue">确定添加</a>
                    <a href="javascript:void(0);" className="add_space btn_grey">新建空白</a>
                </div>
            </div>
        )
    }
});

module.exports = ebutton;
