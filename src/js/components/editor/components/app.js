import React from 'react';
import assign from 'object-assign';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userAction from '../actions/user';
import * as jsonAction from '../actions/json';
import * as blockAction from '../actions/block';
import * as desktopAction from '../actions/desktop';
import * as dataAction from '../data/'
import Loading from './loading';
import Ebutton from './head/ebutton';
import Container from './container';
import Modelstore from './modelstore';
import Picstore from './block/picstore';
import Previewbox from './block/previewbox';
import Immutable from 'immutable';
import DevTools from 'js/common/plugins/DevTools'

var App = React.createClass({
	componentWillMount:function() {
		data = Immutable.fromJS(data);
		this.props.actions.getUserType();
    },
	componentDidMount:function() {
		this.winResize();
	},
	dataUpdate:function(value,page){
		if(page){
			data = data.updateIn(['value',page-1],function(list){
				return value;
			})
		}else{
			data = data.updateIn(['value'],function(list){
				var length = list.size;
				var newlist = list.set(length,Immutable.List(value));
				return newlist;
			})
		}
		this.props.actions.modifyPagejson(true);
	},
	dataChange:function(page,newpage){
		data = data.updateIn(['value'],function(list){
			var cache = list.toJS();
			var reArr = cache.removeArr(page);
			cache.insertArr(newpage,reArr[0]);
			return Immutable.List(cache);
		})
		this.props.actions.modifyPagejson(true);
	},
	winResize:function(){
		var fitwin = function(){
			var $wrapW = $('.wrap').width(),
				winW = $(window).width() > $wrapW ? $(window).width():$wrapW,
				heiH = $(window).height(),
				contentH = heiH - $('.w_header').height();

			$('.e_desktop').height(contentH).width(winW - $('.e_page').width() - $('.e_attribute').width());
			$('.w_content').height(contentH);
			$('.model_store').height(contentH);
			$('.m_content').height(contentH - $('.m_trigger').height() - $('.m_btns').height());
		}
		fitwin();
		$(window).resize(function(){
			fitwin();
		})
	},
	startHandle:function(){
		$('.wrap').removeClass('opacity');
		this.chosePage(1);

		Array.prototype.removeArr = function (index) {
		    if (isNaN(index) || index>= this.length) { return false; }
			return this.splice(index, 1);
		};

		Array.prototype.insertArr = function (index, item) {
		    this.splice(index, 0, item);
		};

	},
	clickHandle:function(e){
		// this.dataUpdate([
		// 	{
		// 		"type": "text",
		// 		"html": "那年广场",
		// 		"color": "#000",
		// 		"font-size": "48px",
		// 		"font-style": "normal",
		// 		"font-weight": "normal",
		// 		"text-decoration": "none",
		// 		"background-color": "rgba(0, 0, 0, 0)",
		// 		"line-height": "1",
		// 		"border-color": "rgb(0, 165, 235)",
		// 		"border-radius": "0px",
		// 		"border-style": "none",
		// 		"border-width": "0px",
		// 		"opacity": "1",
		// 		"rotate": "0",
		// 		"text-align": "center",
		// 		"text-decoration": "none",
		// 		"text-shadow": "none",
		// 		"width": "400px",
		// 		"left": "280px",
		// 		"top": "50px",
		// 		"animation-name": "fadeIn",
		// 		"animation-duration": "0.6s",
		// 		"animation-delay": "0s",
		// 		"position": "absolute",
		// 		"z-index": 1
		// 	}]
		// );
		var _self = this;
		var now = +new Date();
		if (now - evTimeStamp < 100) {
			return;
		}
		$.each(dataAction.boxlist,function(){
			if(!this.closebtn){
				if(!dataAction.isParent(e.target,this.box[0]) && !dataAction.isParent(e.target,this.btn[0])){
					if(this.box.is(':visible')){
						evTimeStamp = now;
						this.box.fadeOut(200,function(){
							_self.openMusic(false);
						});
					}
				}
			}
		});
	},
	chosePage:function(page){
		var _self = this;

		// data = data.updateIn(['value','page1'],function(list){
		// 	return [
		// 		{
		// 			"type": "bg",
		// 			"opacity": "1",
		// 			"background-color": "rgb(43, 144, 237)",
		// 			"img-src": "/images/R8KUNNEXY99XGKY18JZ2.png",
		// 			"img-width": "800px",
		// 			"img-margin-top": "-20px",
		// 			"img-margin-left": "-55px"
		// 		}
		// 	]
		// });
		//this.props.actions.modifyPagejson(true);
		this.props.actions.changePage(page);
	},
	openPicStore:function(bool){
		this.props.actions.showPicture(bool);
	},
	openPreview:function(bool){
		this.props.actions.showPreview(bool);
	},
	openMusic:function(bool){
		this.props.actions.showMusic(bool);
	},
	getPicList:function(){
		this.props.actions.getPicture();
	},
	/**
	 * 向state中添加music
	 * @param  {[json]} data { title, src }
	 */
	addMusic:function(data){
		this.props.actions.addMusic(data);
	},
	choseMusic:function(num){
		this.props.actions.choseMusic(num);
	},
	render:function() {
		var _self = this;
		const { dispatch, pagejson, selectpage, template, userstate, blockbox, desktop, actions } = this.props;
		return (
			<div onClick={this.clickHandle}>
				<DevTools />
				<Loading
					startHandle={this.startHandle}
					immujson={data}
				/>
				<Container
					userstate={userstate}
					pagejson={pagejson}
					selectpage={selectpage}
					blockbox={blockbox}
					desktop={desktop}
					template={template}
					actions={actions}
					immujson={data}
					openPreview={this.openPreview}
					openPicStore={this.openPicStore}
					openMusic={this.openMusic}
					chosePage={this.chosePage}
					choseMusic={this.choseMusic}
					addMusic={this.addMusic}
					dataUpdate={this.dataUpdate}
					dataChange={this.dataChange}
				/>
				<Modelstore blockbox={blockbox}  />
				<Picstore
					userstate={userstate}
					blockbox={blockbox}
					openPicStore={this.openPicStore}
					getPicList={this.getPicList}
					actions={actions}
				/>
				<Previewbox
					blockbox={blockbox}
					userstate={userstate}
					actions={actions}
					openPreview={this.openPreview}
					immujson={data}
				/>
			</div>
		)
	}
});

function mapStateToProps(state) {
    return {
        userstate: state.userstate,
        pagejson: state.pagejson,
        selectpage: state.selectpage,
        template: state.template,
		blockbox: state.blockbox,
		desktop:state.desktop
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            assign({}, userAction, jsonAction, blockAction, desktopAction),
            dispatch
        ),
    };
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
