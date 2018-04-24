import React from 'react';
import assign from 'object-assign';

var shape = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    render:function() {
        var style = {} , src = this.props.imgSrc;
        if(!this.props.edit){
            var imgO = $('#shapebox').find('li.active');
            src = '/images/'+imgO.attr('data-num')+'.svg';
        }
        style = {
            'width':'100%',
            'height':'100%',
            'WebkitMaskBoxImageSlice': '0 fill',
            'WebkitMaskBoxImageRepeat': 'stretch',
            'WebkitMaskBoxImageSource':'url('+src+')',
            'overflow': 'hidden'
        };

        var newstyle = assign(style,this.props.imgcss);
        return (
            <div className="mask" style={newstyle}></div>
        )
    }
});

module.exports = shape;
