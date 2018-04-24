import React from 'react';
import EleConfig from '../../../data/eleConfig';
import assign from 'object-assign';


var img = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    render:function() {
        var style = {} , src = '';
        if(this.props.edit){
            style = {
                width:this.props.imgWidth,
                position:'absolute',
                top:this.props.imgTop,
                left:this.props.imgLeft
            };
            src = this.props.imgSrc;
        }else{
            var imgO = $('.pic_store').find('.img_choose.active img');
            src = imgO.attr('src');
            var ow = imgO[0].naturalWidth,oh = imgO[0].naturalHeight;
            var w = ow,h = oh;
            if(ow > cw || oh > ch){
                if(ow/oh > cw/ch){
                    h = oh/ow*cw;
                    w = cw;
                }else{
                    w = ow/oh*ch;
                    h = ch;
                }
            }
            style = {
                width:w,
                position:'absolute',
                top:0,
                left:0
            }
        }


        return (
            <img src={src} style={style} draggable="false" />
        )
    }
});

module.exports = img;
