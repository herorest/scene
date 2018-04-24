import {SET_PAGEJSON_ID,MODIFY_PAGEJSON} from '../actions/json.js';
import assign from 'object-assign';

const initState = {
    id: '-1',
    modifed: false,
};
module.exports = function json(state = initState, action) {
    var ostate = assign({},state);
    switch (action.type) {
        case SET_PAGEJSON_ID:
            ostate.id = action.id;
            return ostate;
        case MODIFY_PAGEJSON:
            ostate.modifed = action.modifed;
            return ostate;
        default:
            return state;
    }
};
