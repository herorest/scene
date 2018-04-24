import React from 'react';
import ReactDOM from 'react-dom';
import '../common/core/jquery';
import namespace from '../common/core/namespace';
import Count from '../components/count';

import '../../css/public.css';
import '../common/ui/dialog/dialog.css';
import '../common/ui/tip-message/tipmessage.css';
import '../../css/jquery-ui.css';
import '../../css/ui.css';
import '../../css/content.css';
import '../../css/count.css';

window.onload = function() {
    ReactDOM.render(<Count />,document.getElementById('wrap'));
};
