import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from 'js/common/plugins/DevTools'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    return store;
}
