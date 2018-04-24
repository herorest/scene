require('main');
"use strict";

var historyObj = function(){
	
}
historyObj.prototype = {
	constructor:this,
	/**
	 * 历史json数组
	 */
	value:[],
	/**
	 * 插入json
	 */
	insert:function(modify){
		this.value.push(modify);
		console.log(this.value);
	},
	/**
	 * 出栈最后一条json，并返回上一条
	 */
	backspace:function(){
		
	},
	/**
	 * 出栈
	 */
	delete:function(){
		this.value.pop();
	}
	
}
return historyObj;