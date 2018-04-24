import Data from '../data';
import Model from '../../../common/model';

export const CHOSE_PAGE = 'CHOSE_PAGE';
export const CHOSE_ITEM = 'CHOSE_ITEM';
export const CLEAR_PAGE = 'CLEAR_PAGE';
export const MODIFY_ITEM = 'MODIFY_ITEM';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export function changePage(page) {
    return (dispatch, getState) => {
        dispatch(chosePage(page));
    }
}

function chosePage(page) {
    return {
        type: CHOSE_PAGE,
        page
    }
}

function clearPage(page) {
    return {
        type: CLEAR_PAGE,
        page
    }
}

export function choseItem(num) {
    return {
        type: CHOSE_ITEM,
        num
    }
}

export function modifyItem(data) {
    return {
        type: MODIFY_ITEM,
        data
    }
}
