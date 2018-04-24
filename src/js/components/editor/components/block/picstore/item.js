import React from 'react';
var modelO = require('js/common/model');

var item = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidUpdate:function(){

	},
    render:function() {
        var classn = "img_choose" , num = this.props.num ? this.props.num : 1;
        if(num === 1){
            classn += ' active';
        }
        if(this.props.id){
            classn += ' file-item thumbnail';
        }
        return (
            <li className={classn} id={this.props.id}>
                <div class="process">
                    <span></span>
                </div>
                <img src={this.props.src} />
                <p className="choose_title">{this.props.title}</p>
            </li>
        )
    }
});

module.exports = item;
