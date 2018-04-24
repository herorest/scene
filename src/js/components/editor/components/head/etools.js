import React from 'react';

var etools = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    showPicture:function(){
        this.props.openPicStore(true);
    },
    showShape:function(){

    },
    render:function() {
        return <div className="element">
            <ul className="clearfix">
                <li><a href="javascript:void(0);" className="text">文本</a></li>
                <li><a href="javascript:void(0);" className="pic" onClick={this.showPicture}>图片</a></li>
                <li>
                    <a href="javascript:void(0);" className="area" onClick={this.showShape}>形状</a>
                    <div className="shapebox">
                        <ul className="bbox" id="shapebox">
                            <li data-num="1" className="shape1"></li>
                            <li data-num="2" className="shape2"></li>
                            <li data-num="3" className="shape3"></li>
                            <li data-num="4" className="shape4"></li>
                            <li data-num="5" className="shape5"></li>
                            <li data-num="6" className="shape6"></li>
                            <li data-num="7" className="shape7"></li>
                            <li data-num="8" className="shape8"></li>
                            <li data-num="9" className="shape9"></li>
                            <li data-num="10" className="shape10"></li>
                            <li data-num="11" className="shape11"></li>
                            <li data-num="12" className="shape12"></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    }
});

module.exports = etools;
