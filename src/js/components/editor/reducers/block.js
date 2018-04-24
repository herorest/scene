import {SHOW_PREVIEW,SHOW_PICTURE,SHOW_MUSIC,ADD_MUSIC,RECEIVE_PICTURE,ADD_PICTURE,UPDATE_PICTURE,CHOSE_MUSIC,UPDATE_MUSIC} from '../actions/block.js';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
    preview:false,
    picture:{
        show:false,
        data:[
            {title:'标题1',src:'images/temple0.jpg'},
            {title:'标题2',src:'images/temple1.jpg'}
        ],
        chose:0
    },
    music:{
        show:false,
        data:[
            {title:'无背景音乐',src:''},
            {title:'气势磅礴',src:'audio/1.mp3'},
            {title:'激情澎湃',src:'audio/2.mp3'}
        ],
        chose:0
    }
});

module.exports = function block(state = initState, action) {
    var newstate = {};
    switch (action.type) {
        case SHOW_PREVIEW:
            newstate = state.set('preview',action.status);
            return newstate;
        case SHOW_PICTURE:
            newstate = state.updateIn(['picture','show'],function(list){
                return action.status;
            });
            return newstate;
        case SHOW_MUSIC:
            newstate = state.updateIn(['music','show'],function(list){
                return action.status;
            });
            return newstate;
        case ADD_MUSIC:
            if(!action.data){
                return state;
            }
            newstate = state.updateIn(['music','data'],function(list){
                return Immutable.List([...list.toJS(),action.data]);
            });
            return newstate;
        case UPDATE_MUSIC:
            newstate = state.updateIn(['music','data'],function(list){
                var newlist = list.toJS();
                for(var i=0;i<newlist.length;i++){
                    if(newlist[i].id == action.data.id){
                        newlist[i] = action.data;
                    }
                }
                return newlist;
            });
            return newstate;
        case CHOSE_MUSIC:
            newstate = state.updateIn(['music','chose'],function(list){
                return action.num;
            });
            return newstate;
        case RECEIVE_PICTURE:
            newstate = state.updateIn(['picture','data'],function(list){
                if(list.size > 0){
                    return Immutable.List([...list.toJS(),...action.data]);
                }
                return Immutable.List(action.data);
            });
            return newstate;
        case ADD_PICTURE:
            if(!action.data){
                return state;
            }
            newstate = state.updateIn(['picture','data'],function(list){
                return Immutable.List([...list.toJS(),action.data]);
            });
            return newstate;
        case UPDATE_PICTURE:
            newstate = state.updateIn(['picture','data'],function(list){
                var newlist = list.toJS();
                for(var i=0;i<newlist.length;i++){
                    if(newlist[i].id == action.data.id){
                        newlist[i] = action.data;
                    }
                }
                return newlist;
            });
            return newstate;
        default:
            return state;
    }
};
