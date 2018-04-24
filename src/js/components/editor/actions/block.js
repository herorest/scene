import Data from '../data';
import Model from '../../../common/model';
import tipmessage from 'js/common/ui/tip-message/tipmessage';

export const SHOW_PREVIEW = 'SHOW_PREVIEW';
export const SHOW_PICTURE = 'SHOW_PICTURE';
export const SHOW_MUSIC = 'SHOW_MUSIC';

export const ADD_MUSIC = 'ADD_MUSIC';
export const CHOSE_MUSIC = 'CHOSE_MUSIC';
export const UPDATE_MUSIC = 'UPDATE_MUSIC';

export const RECEIVE_PICTURE = 'RECEIVE_PICTURE';
export const ADD_PICTURE = 'ADD_PICTURE';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';

export function showPreview(status) {
    return {
        type: SHOW_PREVIEW,
        status
    }
}

export function showMusic(status) {
    return {
        type: SHOW_MUSIC,
        status
    }
}

export function choseMusic(num) {
    return {
        type: CHOSE_MUSIC,
        num
    }
}

//添加音乐
export function addMusic(data) {
    return {
        type: ADD_MUSIC,
        data
    }
}

//预览更新成正式地址
export function updateMusic(data) {
    return {
        type: UPDATE_MUSIC,
        data
    }
}


//控制图片库显示与否
export function showPicture(status) {
    return {
        type: SHOW_PICTURE,
        status
    }
}

//接收图片库图片
export function receivePicture(data) {
    return {
        type: RECEIVE_PICTURE,
        data
    }
}

//获取图片库图片
export function getPicture(){
    return (dispatch, getState) => {
        var state = getState();
        $.ajax({
            type: "get",
            url: Model.prefix + Model.apiUrl.getPicList,
            data: {
                'hid': hid
            },
            success: function(result) {
                if (result.status == 1) {
                    var data = result.data;
                    dispatch(receivePicture(data));
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

//添加图片
export function addPicture(data) {
    return {
        type: ADD_PICTURE,
        data
    }
}

//预览图更新成正式地址
export function updatePicture(data) {
    return {
        type: UPDATE_PICTURE,
        data
    }
}
