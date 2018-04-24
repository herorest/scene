import React from 'react';
import EleConfig from '../../../data/eleConfig';
import assign from 'object-assign';


var bg = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    render:function() {
        var content = '' ,
            style = {};

        if(this.props.edit){
            if(this.props.imgSrc && this.props.imgSrc.length > 0){
                style = {
                    width:this.props.imgWidth,
                    height:this.props.imgHeight || '',
                    marginTop:this.props.imgMargintop,
                    marginLeft:this.props.imgMarginleft,
                }
                var newstyle = assign(style,this.props.imgcss);

                content = <img src={this.props.imgSrc} style={newstyle} />;
            }
        }
        return (
            <span>{content}</span>
        )
    }
});

module.exports = bg;
