import React from 'react';
import ReactDOM from 'react-dom';
import jquery from '../common/core/jquery';
import namespace from '../common/core/namespace';
import { Provider } from 'react-redux'
import configureStore from '../components/editor/store';
import App from '../components/editor/components/app';
import Loading from '../components/editor/components/app';

import '../../css/public.css';
import '../common/ui/dialog/dialog.css';
import '../common/ui/tip-message/tipmessage.css';
import '../../css/jquery-ui.css';
import '../../css/ui.css';
import '../../css/content.css';
import '../../css/jcrop.css';
import '../../css/loading.css';
import '../../css/editor.css';
import '../../css/blockbox.css';
import '../../css/panel.css';
import '../../css/vendor.css';


const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
