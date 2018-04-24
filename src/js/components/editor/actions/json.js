import Data from '../data';
import Model from '../../../common/model';
import tipmessage from 'js/common/ui/tip-message/tipmessage';


export const REQUEST_PAGEJSON = 'REQUEST_PAGEJSON';
export const RECEIVE_PAGEJSON = 'RECEIVE_PAGEJSON';
export const MODIFY_PAGEJSON = 'MODIFY_PAGEJSON';
export const CACHE_PAGEJSON = 'CACHE_PAGEJSON';
export const SAVE_PAGEJSON = 'SAVE_PAGEJSON';
export const RECEIVE_SAVE_PAGEJSON = 'RECEIVE_SAVE_PAGEJSON';
export const SET_PAGEJSON_ID = 'SET_PAGEJSON_ID';

function requestSavePagejson() {
    return {
        type: REQUEST_SAVE_PAGEJSON,
    };
}

function receiveSavePagejson() {
    return {
        type: RECEIVE_SAVE_PAGEJSON
    }
}

export function modifyPagejson(modifed) {
    return {
        type: MODIFY_PAGEJSON,
        modifed
    };
}

export function setPagejsonId(id) {
    return {
        type: SET_PAGEJSON_ID,
        id
    };
}

export function cachePagejson(json) {
    return (dispatch, getState) => {
        var state = getState();
        var id = Data.set('page',json);
        dispatch(setPagejsonId(id));
    }
}

export function savePagejson() {
    return (dispatch, getState) => {
        var state = getState();
        if (state.pagejson.modifed) {
            var pagedata = {
                "value": Data.get('page')
            };
            dispatch(requestSavePagejson());
            $.ajax({
                type: "post",
                url: Model.prefix + Model.apiUrl.save,
                data: {
                    'hid': hid,
                    'pagedata': pagedata
                },
                success: function(result) {
                    if (result.status == 1) {
                        dispatch(receiveSavePagejson());
                    }
                },
                error: function() {
                    MZ.tipmessage.show({
                        message: '',
                        delay: 1000,
                        pos: 'middle',
                        type: 'fail'
                    });
                }
            })
        }
    }
}
