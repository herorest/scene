import React from 'react';
var modelO = require('js/common/model');
import * as dataAction from '../../../data/'
import Player from 'js/common/plugins/player'

var item = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){
        this.initPlayer();
	},
    componentDidUpdate:function(prevProps){
        if(prevProps.src != this.props.src){
            this.initPlayer();
        }
    },
    initPlayer:function(){
        var num = parseInt(this.props.num) + 1;
        if(this.props.src){
            dataAction.musiclist[num] = new Player($(this.refs.item).find('.play'),false,true,dataAction.musiclist);
        }
    },
    choseMusic:function(){
        var num = parseInt(this.props.num) + 1;
        this.props.choseSelectMusic(this.refs.item,num);
    },
    render:function() {
        var classn = "";
        if(this.props.src === ""){
            if(this.props.id){
                var style = {
                    'width':'0%',
                    'height':'100%',
                    'display':'block',
                    'backgroundColor':'#32a5e7'
                }
                return (
                    <li id={this.props.id}>
                        <span style={style}>{this.props.title}</span>
                    </li>
                )
            }else{
                classn += 'chose_no';
                return (
                    <li className={classn} onClick={this.choseMusic} ref="item">
                        <span data-src={this.props.src}>{this.props.title}</span>
                    </li>
                )
            }
        }
        return (
            <li id={this.props.id} className={classn} onClick={this.choseMusic} ref="item">
                <span>{this.props.title}</span>
                <a href="javascript:void(0);" className="play" data-src={this.props.src}></a>
            </li>
        )
    }
});

module.exports = item;
