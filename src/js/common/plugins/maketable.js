/**
 * Created by songjing on 2015/8/6.
 * option.type  包含day和hour两种表格，根据需要使用
 * option.source  目前是区分了unit和plan两种形式的数据
 * option.data  提供的数据
 */

var tableObj = function(){}

tableObj.prototype.render = function(option){
    this.tablewrap = $('#'+option.id);
    this.data = option.data;
    this.type = option.type;
    this.applist = option.app;
    this.currentPage = 1;
    this.pagelength = this.type=='hour'?'24':option.pagelength;
    $('.tablemore a').unbind();
    this.makehtml(this.data);
}

tableObj.prototype.makehtml = function(data) {
    var _self = this;
    if(this.type == 'day') {
        var html = '<tr>' +
            '<th width="20%">日期</th>' +
            '<th width="16%">UV</th>' +
            '<th width="16%">PV</th>' +
            '<th width="16%">IP</th>' +
            '<th width="16%">跳出率</th>' +
            '<th width="16%">停留时间</th>' +
            '</tr>';
    }else if(this.type == 'hour'){
    	var html = '<tr>' +
            '<th width="20%">小时</th>' +
            '<th width="16%">UV</th>' +
            '<th width="16%">PV</th>' +
            '<th width="16%">IP</th>' +
            '<th width="16%">跳出率</th>' +
            '<th width="16%">停留时间</th>' +
            '</tr>';
    }

    var page = 1;
    $.each(data, function (index) {
        var classname = index % 2 == 0 ? 'even' : '',appname = '',o = this;
        if (index % _self.pagelength == 0 && index != 0) page++;
        if (page != 1) classname += ' hide';
		
        html += '<tr class="' + classname + '" data-page=' + page + '">';
        
        if(_self.type == 'day'){
        	html += '<td>' + MZ.date.format("yyyy年MM月dd日", new Date(this.date * 1000)) + '</td>';
        }else if(_self.type == 'hour'){
        	html += '<td>' + this.hour + '点' + '</td>';
        }
        html += '<td>' + this.uv + '</td>' +
        '<td>' + this.pv + '</td>' +
        '<td>' + this.ip + '</td>' +
        '<td>' + this.jump + '%' + '</td>' +
        '<td>' + this.time + '</td>' +
        '</tr>';
    })
    this.tablewrap.html(html);
    this.changepage();
}

tableObj.prototype.changepage = function(){
    var _self = this;
    var lastpage = parseInt($('#table tr').last().attr('data-page'));
    if(_self.currentPage < lastpage){
        $('.tablemore a').show();
    }else{
        $('.tablemore a').hide();
    }
    $('.tablemore a').click(function(){
        if(_self.currentPage < lastpage){
            _self.currentPage ++ ;
            $.each($('#table').find('tr'),function(){
                if(parseInt($(this).attr('data-page')) == _self.currentPage){
                    $(this).show();
                }
            })
            if(_self.currentPage == lastpage){
                $(this).hide();
            }
        }
    })
}


//日期转date格式
tableObj.prototype.getTimeByDateStr = function(dateStr){
    var year = parseInt(dateStr.substring(0,4));
    var month = parseInt(dateStr.substring(5,7),10)-1;
    var day = parseInt(dateStr.substring(8,10),10);
    return new Date(year, month, day);
}

module.exports = tableObj;
