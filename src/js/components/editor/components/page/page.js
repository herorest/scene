import React from 'react';
import Data from '../../data';
import Ele from './ele';
import Immutable from 'immutable';

var list = React.createClass({
    chosePage:function(){
        if(!this.refs.page.querySelectorAll('.page')[0].classList.contains('active')){
            this.props.chosePage(parseInt(this.props.page));
        }
    },
    shouldComponentUpdate:function(nextProps){
        if(Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps))){
            return false;
        }
        if(this.props.type == 'side' && (this.props.page != nextProps.currpage && this.props.page != nextProps.prevpage)){
            return false;
        }
        return true;
    },
    render:function() {

        var arr = [];
        var json = this.props.list;
        var type = this.props.type;

        var addEdit = addAnimate = stopAnimate = false;
        var cp = this.props.chosePage;

        var n = this.n ? true : false;

        //预览及列表
        if(type == 'preview'){
            addEdit = false;
            addAnimate = true;
            stopAnimate = true;
            cp = null;
        }else if(type == 'desktop'){
            addEdit = true;
            addAnimate = true;
            stopAnimate = true;
            cp = null;
        }else{
            addEdit = false;
            addAnimate = false;
            stopAnimate = false;
        }

        for (var i=0;i<json.length;i++) {
            arr.push(<Ele key={i} pos={type} addEdit={addEdit} addAnimate={addAnimate} stopAnimate={stopAnimate} {...json[i]} chosePage={cp} />);
        }

        if(type == 'preview'){
            var classn = "section section" + this.props.page;
            return (
                <div className={classn}>
                    {arr}
                </div>
            )
        }

        if(type == 'desktop'){
            return (
                <div className="e_d_scale" id="e_container">
                    {arr}
                </div>
            )
        }
        var classn = 'page' + (this.props.page == this.props.currpage?' active':'');

        return (
            <li className={this.props.className} data-page={this.props.page} onClick={this.chosePage} ref="page" >
                <div className={classn}>
                    <div className="p_temple">
                        <div className="p_t_scale">
                            {arr}
                        </div>
                    </div>
                    <a href="javascript:void(0);" className="p_del"></a>
                    <div className="p_num"><span>{this.props.page}</span></div>
                </div>
            </li>
        )
    }
});

module.exports = list;
