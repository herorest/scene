import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../data';
import Page from './page';
import nicescroll from 'js/common/plugins/nicescroll';
import Immutable from 'immutable';
import Event from 'js/common/plugins/event';
import utils from 'js/common/plugins/utils';

var epage = React.createClass({
    shouldComponentUpdate:function(nextProps){
        if(Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps))){
            return false;
        }
        return true;
    },
    componentDidMount:function(){
        $('#e_page').niceScroll({cursorborder:'0px',cursorcolor:'rgb(156, 156, 156)'});
        this.dragInit();
    },
    handleSort(sortedArray) {

    },
    dragInit:function(){
		var _self = this;
        var itemH = 176;
		var startX = 0,startY = 0,pX = 0,pY = 0;
		var lineHeight = 0;
        var parentElement = document.getElementById('e_page');
        var allElement = null
		var targetElement = null;
        var targetCopy = null;
		var touchDown = false;
		var movePrevent = false;
        var index = -1;
        var newindex = -1;
        var space = document.createElement('li');
        space.id = 'space';

		var getPosition = function(target){
            var pos = utils.getOffset(target);
			pX = pos.left;
			pY = pos.top - parseInt(utils.getComputedStyles(document.querySelectorAll('.w_content')[0])['margin-top']);
		}

		var onStart = function(e) {
            if(!targetElement)
                return false;
			if(movePrevent == true){
				e.preventDefault();
				return false;
			}
            touchDown = true;

            //赋予位置
            getPosition(targetElement);
            utils.insertAfter(space, targetElement);
            targetElement.style.left = pX + 'px';
            targetElement.style.top = pY + 'px';

            //赋予样式
			utils.addClass(targetElement,'drag');

			startX = e.pageX;
			startY = e.pageY;
		}

		var onMove = function(e) {
            if(!targetElement)
                return false;
			if(movePrevent == true || touchDown != true){
				e.preventDefault();
				return false;
			}
            var delvaX = pX + e.pageX - startX;
            var delvaY = pY + e.pageY - startY;
            targetElement.style.left = delvaX + 'px';
            targetElement.style.top = delvaY < 0 ? 0 : delvaY + 'px';
            var diffY = e.pageY - startY;

            //向下
			if(diffY > 0){
				if(diffY % itemH > 0){
					var i = index + Math.floor(diffY / itemH);
					if(i > allElement.length - 1)
						i = allElement.length - 1;
                    utils.insertAfter(space, allElement[i]);
                    newindex = i;
				}
			//向上
			}else if(diffY < 0){
				if(-diffY % itemH > 0){
					var i = index - Math.floor(-diffY / itemH);
					if(i < 0)
						i = 0;
                    utils.insertBefore(space, allElement[i]);
                    newindex = i;
				}
			}
		}

		var onEnd = function(e) {
            if(!targetElement)
                return false;
			if(movePrevent == true){
				e.preventDefault();
				return false;
			}
            utils.removeClass(targetElement,'drag');
            utils.remove(space);

			touchDown = false;
            endX = e.pageX;
            endY = e.pageY;
            _self.props.dataChange(index,newindex);
            targetElement = null;
		}

		Event.addListener(ReactDOM.findDOMNode(this.refs.epage),'start',function(e){
            allElement = parentElement.querySelectorAll('li');
            targetElement = utils.closest(e.target,'.side');
            for(var i=0;i<allElement.length;i++){
                if(targetElement == allElement[i]){
                    index = i;
                    newindex = -1;
                }
            }
            onStart(e);
		});
		Event.addListener(ReactDOM.findDOMNode(this.refs.epage),'move',function(e){
			 onMove(e);
		});
		Event.addListener(ReactDOM.findDOMNode(this.refs.epage),'end',function(e){
			 onEnd(e);
		});
	},

    render:function() {
        var modelclass = (this.props.userstate == 1 ? 'hide' : '') + 'showModel btn_blue';
        var json = this.props.immujson.get('value').toJS();
        var list = [];
        var currpage = this.props.desktop.getIn(['page','curr']);
        var prevpage = this.props.desktop.getIn(['page','prev']);
        console.log(json);
        for(var i=0;i<json.length;i++){
            list.push(<Page type="side" className="side vertical" key={i} page={i + 1} prevpage={prevpage} currpage={currpage} list={json[i]} chosePage={this.props.chosePage} />);
        }
        return (
            <div className="e_page nodrag noselect">
                <ul id="e_page" ref="epage">
                    {list}
                    <a href="javascript:void(0);" className={modelclass}>+</a>
                </ul>
            </div>
        )
    }
});

module.exports = epage;
