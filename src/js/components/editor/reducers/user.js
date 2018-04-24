import {RECEIVE_USERTYPE, REQUEST_USERTYPE} from '../actions/user.js';

module.exports = function user(state = 1, action) {
    switch (action.type) {
        case RECEIVE_USERTYPE:
            return state = action.usertype;
        default:
            return state;
    }
};
