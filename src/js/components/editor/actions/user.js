import Data from '../data';
import Model from '../../../common/model';
import tipmessage from 'js/common/ui/tip-message/tipmessage';


export const REQUEST_USERTYPE = 'REQUEST_USERTYPE';
export const RECEIVE_USERTYPE = 'RECEIVE_USERTYPE';

function requestUsertype() {
    return {
        type: REQUEST_USERTYPE
    }
}

function receiveUsertype(usertype) {
    return {
        type: RECEIVE_USERTYPE,
        usertype
    }
}

export function getUserType() {
    return (dispatch, getState) => {
        let state = getState();
        dispatch(requestUsertype());
        $.ajax({
            type: "get",
            url: Model.prefix + Model.apiUrl.checkuser,
            success: function(data) {
                dispatch(receiveUsertype((data.status || data.status === 0)?data.status:0));
            },
            error:function(data){
            	MZ.tipmessage.show({
                    message:Model.tipInfo.checkauthfail,
                    delay:1000,
                    pos:'middle',
                    type:'fail'});
            }
        })
    }
}
