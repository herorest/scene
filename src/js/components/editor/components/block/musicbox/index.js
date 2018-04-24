import React from 'react';
var dialog = require('js/common/ui/dialog/dialog');
var blockbox = require('js/common/plugins/blockbox');
var WebUploader = require('js/common/plugins/webuploader');
var modelO = require('js/common/model');
var Item = require('./item');
import * as dataAction from '../../../data/'
import Player from 'js/common/plugins/player'


var musicbox = React.createClass({
    componentWillMount:function(){
        this.addSelectMusic();
    },
    componentDidMount:function(){
        this.setUploader();
    },
    componentDidUpdate:function(prevProps){
        if(prevProps.blockbox.toJS().music.chose != this.props.blockbox.toJS().music.chose){
            dataAction.musiclist[0] = new Player($('#play'),false,true,dataAction.musiclist);
        }
		if(this.props.blockbox.toJS().music.show){
			var _self = this;
			new blockbox($(this.refs.musicbox),{
				showbg:false,
                btn:$('.music .chose'),
				closefun:function(){
                    _self.closeMusicbox();
				}
			});
		}else{
			$(this.refs.musicbox).fadeOut(200);
		}
	},
    showMusicbox:function(){
        this.props.openMusic(true);
        $('#musicbox').niceScroll({cursorborder:'0px',cursorcolor:'rgb(156, 156, 156)'});
    },
    closeMusicbox:function(){
        this.props.openMusic(false);
    },
    getMusicName:function(src){
        var s = src.split('/');
        var n = s[s.length-1].split('.')[0];
        return n;
    },
    addSelectMusic:function(){
		var size = this.props.blockbox.getIn(['music','data']).size;
		var src = data.get('music');
		if(src){
			this.props.addMusic({
                title:this.getMusicName(src),
                src:src
            });
			this.props.choseMusic(size + 1);
		}
	},
    choseSelectMusic:function(obj,num){
        this.props.choseMusic(num);
        this.closeMusicbox();
        $.each(dataAction.musiclist,function(key,value){
            if(value)
                this._playOff();
        })
        // if(obj.querySelectorAll('.play').length > 0 && obj.querySelectorAll('.play')[0].getAttribute('data-src')){
        //
        // }
    },
    setUploader:function(){
        var _self = this;
        var path = modelO.prefix + modelO.apiUrl.uploadaudio;
        var uploader = WebUploader.create({
            pick: {
                id: '#music_upload',
                label: '上传音乐+'
            },
            formData: {
                uid: 2,
                hid: hid
            },
            auto:true,
            swf: 'js/common/Uploader.swf',
            chunked: false,
            chunkSize: 512 * 1024,
            server: path,

            accept: {
            	title: 'mp3',
               	extensions: 'mp3',
               	mimeTypes: 'audio/*'
			},

            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 300,
            fileSizeLimit: 10 * 1024 * 1024,    // 10 M
            fileSingleSizeLimit: 512 * 1024    // 512k
        });

        uploader.onUploadSuccess = function(file ,response) {
            if(response.path){
        		var s = response.path.split('/');
                _self.props.actions.updateMusic({
                    'title':_self.getMusicName(file.name),
                    'src':response.path,
                    'id':file.id
                });
        	}
        };

		uploader.onUploadProgress = function( file, percentage ) {
			$('#' + file.id).find('span').width(percentage * 100 + '%');
        };
		uploader.onError = function( code ) {
            MZ.tipmessage.show({message:modelO.errorCode[code],delay:1000,pos:'middle',type:'fail'});
        };

        uploader.onFileQueued = function( file ) {
            _self.props.addMusic({
                title:_self.getMusicName(file.name),
                src:'',
                id:file.id
            });
			uploader.upload();
        };

    },
    render:function() {
        //音乐暂时不考虑存储多首
        var list = [];
        var chose = this.props.blockbox.getIn(['music','chose']);
        var json = this.props.blockbox.toJS().music.data;
        var curr = chose-1 >= 0 ? chose-1 : 0;
        for (var j in json) {
            list.push(<Item key={j} id={json[j].id} num={j} {...json[j]} choseSelectMusic={this.choseSelectMusic} />);
        }
        var playStyle = {
            'display':json[curr].src?'block':'none'
        };
        return (
            <div className="music" ref="music">
                <div className="m_chose">
                    <a href="javascript:void(0);" className="chose" onClick={this.showMusicbox}>{json[curr].title}</a>
                    <a href="javascript:void(0);" id="play" className="play" data-src={json[curr].src} style={playStyle}></a>
                </div>
                <div className="musicbox" ref="musicbox">
                    <ul className="bbox" id="musicbox">
                        {list}
                        <li className="chose_upload" id="music_upload"></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = musicbox;
