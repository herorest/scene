import { combineReducers } from 'redux';
import pagejson from './json';
import userstate from './user';
import blockbox from './block';
import desktop from './desktop';

const rootReducer = combineReducers({
  pagejson, userstate, blockbox, desktop
});

module.exports = rootReducer;
