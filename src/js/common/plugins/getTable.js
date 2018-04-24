require('plugins/dataTables.js');
require('plugins/create-table.js');

//显示表格
var getTableData = function(option){
	this.id = option.id;
	this.geturl = option.geturl;
	this.data = option.data;
	this.init();
}
getTableData.prototype = {
	init: function (url) {
        var self = this;
        var param = self.getTableJson(this.id,this.geturl);
        var createTable = new CreateTable();
        createTable.render(param, function(){});
    },
    getTableJson: function (id,url) {
        var self = this;
        var param = {
            id: id, //往该DOM窗口里插入表格
            width: '', //表格宽度，不传值默认自适应
            height: '', //表格高度，不传值默认自适应
            searching: false,
            sort: 'no',
            maxLen: 'auto',
            pageSize: 10, //一页显示的数据数
            aaData:this.data,
            aoColumns: this.getTableColumn(),
            url:url,
            ajaxCallback: function (res) {
                return self.ajaxCallback(res);
            },
            queryString: this.getUpdateData(),
            type: 2, //0: ajax一次返回所有数据 1: ajax按页返回数据    2: 非ajax
            page: false, //是否分页
            bSort: false
        };
        return param;
    },
    ajaxCallback: function (res) {
        var result = {
            data: []
        };
        var list = res.value.members;
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var resultI = list[i];
            result.data.push([
                resultI,
                updateUrl
            ]);
        }
        return result;
    },
    getTableColumn: function () {
        var json = [
            // { //设置表头
            {
                sTitle: " 黑名单",
                sClass: " ta_c "
            }, {
                sTitle: "操作",
                sClass: "ta_c"
            }
        ];
        return json;
    },

    getUpdateData: function () {
        var data = this.getData();
        return data;
    },
    getData: function () {
        var json = {
            action:'smembers',
            sign:'445851879410ac4ef3cab636598ec020'
        };
        return json;
    }
}

return getTableData;
    