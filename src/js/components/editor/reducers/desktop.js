import {CHOSE_PAGE,CHOSE_ITEM,MODIFY_ITEM,CLEAR_PAGE} from '../actions/desktop.js';
import Immutable from 'immutable';

const initState = Immutable.fromJS({
    page: {
        curr:1,
        prev:0
    },
    data: [],
    items: 1,
    modifed: false
});

module.exports = function desktop(state = initState, action) {
    var newstate = {};
    switch (action.type) {
        case CHOSE_PAGE:
            var curr = state.getIn(['page','curr']);
            newstate = state.setIn(['page','curr'],action.page);
            newstate = newstate.setIn(['page','prev'],curr);
            newstate = newstate.updateIn(['data'],function(list){
                var newlist = data.getIn(['value',action.page-1]);
                return newlist;
            });
            return newstate;
        case CLEAR_PAGE:
            newstate = state.set('page',action.page);
            newstate = newstate.updateIn(['data'],function(list){
                return Immutable.fromJS([]);
            });
            return newstate;
        case CHOSE_ITEM:
            newstate = state.set('items',action.num);
            return newstate;
        case MODIFY_ITEM:
            //
            return newstate;
        default:
            return state;
    }
};
