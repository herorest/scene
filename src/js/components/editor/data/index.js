import assign from 'object-assign';
const pagejson = [];
const template = [];
const boxlist = [];
const musiclist = [];

const get = function(type,key){
    var arr;
    if(type == 'page'){
        arr = pagejson;
    }else if(type == 'temp'){
        arr = template;
    }
    if(!isNaN(key)){
        key = arr.length - 1;
    }
    return assign(arr[key] || []);
};

const set = function(type,val){
    var arr;
    if(type == 'page'){
        arr = pagejson;
    }else if(type == 'temp'){
        arr = template;
    }
    arr.push(val);
    return arr.length - 1;
};

const isParent = function(obj,parentObj){
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != "BODY"){
        if (obj == parentObj){
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
};

module.exports = {
    get,
    set,
    boxlist,
    musiclist,
    isParent
}
