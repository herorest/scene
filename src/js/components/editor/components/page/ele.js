import React from 'react';
import EditHandle from './editHandle';
import Data from '../../data';
import EleConfig from '../../data/eleConfig';
import assign from 'object-assign';

import Bg from './elements/bg';
import Text from './elements/text';
import Img from './elements/img';
import Shape from './elements/shape';
import Immutable from 'immutable';


var item = React.createClass({
    componentWillUpdate:function(){
        if(this.props.type != 'bg')
            this.refs.ele.classList.add('no');
    },
    shouldComponentUpdate:function(nextProps){
        if(this.props.pos == 'side'){
            if(Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps))){
                return false;
            }
        }

        return true;
    },
    render:function() {
        if(!this.props){
            return (
                <div>
                    暂无数据
                </div>
            )
        }
        const {type,num,addEdit,addAnimate,stopAnimate} = this.props;
        var handle = '';
        if(type !='bg' && addEdit){
            handle = <EditHandle type={type} />;
        }
        var edit = this.props.edit || true;
        var elecss = {},seccss = {},imgcss = {},transcss = {};
        var imghtml = '',source = '',modelid = '',animate = '',lineheight = '',linkurl = '',drag = '';
        $.each(this.props,function(key,value){
            if(key === 'type' || key === 'edit'){
                return;
            }
            if(key.indexOf('-') > 0){
                var arr = key.split('-');
                key = arr[0]+arr[1].replace(/(\w)/,function(v){return v.toUpperCase()});
            }
			if((type === 'shape' && key === 'backgroundColor') || (type === 'bg' && key === 'opacity')){
                imgcss[key] = value;
				return true;
			}else if(key === 'url'){
				linkurl = value;
				return true;
			}
			if(key === 'textShadow' || key === 'boxShadow'){
				value = 'rgb(0, 0, 0) 0px 0px ' + value;
			}
			if(key !== 'placeHolder' && key !== 'type' && key !== 'html' && key.indexOf('img') < 0){
				if(key.indexOf('animation') >= 0 || key === 'rotate' || key === 'scale'){
					if(key === 'rotate' || key === 'scale'){
						value = key +'(' + value + ') translateZ(0)';
						key = 'transform';
						transcss[key] = value;
					}else{
                        if(addAnimate){
                            seccss[key] = value;
                        }
					}
				}else if(key === 'position' || key === 'zIndex' || key === 'top' || key === 'left'){
					seccss[key] = value;
				}else if(key === 'lineHeight'){
					elecss[key] = value;
					lineheight = value;
				}else{
    				elecss[key] = value;
                }
			}
		});

        if(!edit){
			if(type !== 'bg'){
				seccss['z-index'] = num;
			}
		}

        var content = '';

        //元素
        switch(type){
            case 'text':
                content = <Text edit={edit} html={this.props.html} />;
            break;
            case 'img':
                assign(elecss,{
                    overflow:'hidden',
                    position:'relative'
                })
                content = <Img edit={edit} imgSrc={this.props['img-src']} imgWidth={this.props['img-width']} imgTop={this.props['img-top']} imgLeft={this.props['img-left']} />;
            break;
            case 'shape':
                content = <Shape edit={edit} imgSrc={this.props['img-src']} imgcss={imgcss} />;
            break;
            case 'bg':
                content = <Bg edit={edit} imgSrc={this.props['img-src']} imgWidth={this.props['img-width']} imgMargintop={this.props['img-margin-top']} imgMarginleft={this.props['img-margin-left']} imgcss={imgcss} />;
            break;
        }


        if(!lineheight || ~~lineheight < 0){
			lineheight = false;
		}
		if(!linkurl && linkurl.length <= 0){
			linkurl = false;
		}

        var classes = 'section_ele animated';
        if(stopAnimate && this.props.type !='bg'){
            classes += ' no';
        }
		if(type){
			classes += ' section_'+ type;
		}
		if(EleConfig[type].dragType){
			classes += ' section_'+ EleConfig[type].dragType;
		}
		if(this.props['animation-name'] && addAnimate){
			classes += ' ' + this.props['animation-name'];
		}
        return (
            <div ref="ele" className={classes} data-num={num} data-type={type} data-animation={this.props['animation-name']} data-duration={this.props['animation-duration']} data-delay={this.props['animation-delay']} style={seccss} >
                <div className="transform" style={transcss}>
                    {handle}
                    <div className="chose">
                        <div className="ele" data-line={lineheight} data-url={linkurl} style={elecss}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    componentDidUpdate:function(){
        this.removeNo();
    },
    componentDidMount:function(){
        this.removeNo();
    },
    removeNo:function(){
        if(this.props.type != 'bg'){
            setTimeout(function(){
                this.refs.ele.classList.remove('no');
            }.bind(this),0);
        }
    }
});

module.exports = item;
