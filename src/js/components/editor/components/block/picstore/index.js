import React from 'react';
var dialog = require('js/common/ui/dialog/dialog');
var blockbox = require('js/common/plugins/blockbox');
var WebUploader = require('js/common/plugins/webuploader');
var modelO = require('js/common/model');
var Item = require('./item');

var picstore = React.createClass({
    componentWillMount:function() {
        this.props.getPicList();
    },
    componentDidUpdate:function(){
		if(this.props.blockbox.toJS().picture.show){
			var _self = this;
            var box = $(this.refs.picture);
			new blockbox(box,{
				showbg:false,
				closebtn:box.find('.close'),
				callback:function(){
                    box.find('.insert_bg').show();
    				box.find('.insert_pic').show();
    				box.find('.change_pic').hide();
				}
			});
		}else{
			$(this.refs.picture).fadeOut(200);
			$('.bg').fadeOut(200);
		}
	},
    componentDidMount:function(){
        this.setUploader();
    },
    setUploader:function(){
        var _self = this;
        var path = this.props.userstate === 1?modelO.apiUrl.uploadmodelpic:modelO.apiUrl.uploadpic;
        var uploader = WebUploader.create({
            pick: {
                id: '#img_upload',
                label: '上传图片+'
            },
            formData: {
                uid: 1,
                hid: hid
            },
            auto:true,
            swf: 'js/common/Uploader.swf',
            chunked: false,
            chunkSize: 512 * 1024,
            server: path,

			accept: {
            	title: 'images',
               	extensions: 'gif,jpg,jpeg,bmp,png',
               	mimeTypes: 'image/*'
			},

            // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
            disableGlobalDnd: true,
            fileNumLimit: 300,
            fileSizeLimit: 10 * 1024 * 1024,    // 10 M
            fileSingleSizeLimit: 512 * 1024    // 512k
        });

		uploader.onUploadProgress = function( file, percentage ) {
			if($('#' + file.id).length > 0){
	    		var p = $('#' + file.id).find('.process span');
	    		p.css('width',percentage * 100 + '%');
	    		if(percentage === 1){
	    			p.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend',function(){
	    				p.parent().fadeOut(300);
	    			})
	    		}
	    	}
        };

        uploader.onUploadSuccess = function( file ,response) {
        	//写回正式src
        	if(response.path){
        		var s = response.path.split('/');
                _self.props.actions.updatePicture({
                    'title':s[s.length-1].split('.')[0],
                    'src':response.path,
                    'id':file.id
                });
        	}
        };

		uploader.onError = function( code ) {
            MZ.tipmessage.show({message:modelO.errorCode[code],delay:1000,pos:'middle',type:'fail'});
        };

        uploader.onFileQueued = function( file ) {
		    // 创建缩略图
		    uploader.makeThumb( file, function( error, src ) {
                 if(!error){
                    _self.props.actions.addPicture({
                        'title':file.name.split('.')[0],
                        'src':src,
                        'id':file.id
                    });
                }else{
                    console.log(error);
                }
		        // if ( error ) {
		        //     $img.replaceWith('<span>不能预览</span>');
		        //     return;
		        // }
		    }, 60, 75 );
        };
    },
    closePreview:function(){
        this.props.openPicStore(false);
    },
    render:function() {
        var list = [];
        var json = this.props.blockbox.toJS().picture.data;
        for (var j in json) {
            list.push(<Item key={j} id={json[j].id} num={j} title={json[j].title} src={json[j].src} />);
        }
        return (
            <div className="pic_store" ref="picture">
                <div className="message"></div>
                <a href="javascript:void(0);" className="close" onClick={this.closePreview}>关闭</a>
                <div className="p_trigger">
                    <ul>
                        <li className="title_green">我的</li>
                    </ul>
                </div>
                <div className="p_content">
                    <ul>
                        <li>
                            <div className="p_c_trigger">
                                支持格式：<span className="title_green">JPG、JPEG、PNG、GIF</span>大小:512k以内。
                            </div>
                            <div className="p_c_list">
                                <ul className="active">
                                    {list}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="p_btns clear">
                    <a href="javascript:void(0);" className="img_upload btu_green" id="img_upload"></a>
                    <a href="javascript:void(0);" className="insert_bg btu_grey">设为背景</a>
                    <a href="javascript:void(0);" className="insert_pic btu_grey">添加图片</a>
                    <a href="javascript:void(0);" className="change_pic btu_grey">更换图片</a>
                </div>
            </div>
        )
    }
});

module.exports = picstore;
