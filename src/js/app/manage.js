import React from 'react';
import ReactDOM from 'react-dom';
import jquery from '../common/core/jquery';
import namespace from '../common/core/namespace';
import Manage from '../components/manage';

import '../../css/public.css';
import '../common/ui/dialog/dialog.css';
import '../common/ui/tip-message/tipmessage.css';
import '../../css/jquery-ui.css';
import '../../css/ui.css';
import '../../css/content.css';
import '../../css/jcrop.css';
import '../../css/blockbox.css';

window.onload = function() {
    ReactDOM.render(<Manage />,document.getElementById('wrap'));
};
