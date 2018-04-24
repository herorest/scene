import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login';
import '../../css/public.css';
import '../../css/login.css';

import jquery from '../common/core/jquery';
import namespace from '../common/core/namespace';
import validate from '../common/ui/validate/validate';

window.onload = function() {
    ReactDOM.render(<Login />, document.getElementById('l_login'));
    MZ.validate.render({
        wrap:$('#validate'),
        submitClass:'l_submit',
        rules:{
            account:{
                required:true,
                message:{required:'请输入账号'}
            },
            password:{
                required:true,
                message:{required:'请输入密码'}
            },
            valicode:{
                required:true,
                message:{required:'请输入验证码'}
            }
        },
        callback:function(){
            if($('.l_submit').length > 0 && !$('.l_submit').hasClass('disabled')){
                window.location.href = 'manage.html';
            }
        }
    });
};
