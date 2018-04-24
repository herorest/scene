import React from 'react';
import EleConfig from '../../../data/eleConfig';


var text = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    render:function() {
        var html = this.props.html || this.props.placeHolder || EleConfig['text'].default.placeHolder;
        return (
            <div>{this.props.html}</div>
        )
    }
});

module.exports = text;
