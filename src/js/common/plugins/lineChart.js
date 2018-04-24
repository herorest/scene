/**
 * Created by songjing on 2015/7/27.
 */

var chart = require('js/common/plugins/echarts.js');
var theme = require('js/common/plugins/echarts_Theme.js');

var lineChart = function(){}

lineChart.prototype.render = function(option){
    this.opts = option;
    this.wrap = document.getElementById(option.id);
    this.type = option.type;
    this.legend = option.legend == false?false:true;
    this.makechart();
}
lineChart.prototype.makechart = function() {
    this.wrap.innerHTML = '';
    this.myChart = echarts.init(this.wrap);
    this.makejson(this.opts.data);
}
lineChart.prototype.makejson = function(data) {
    var _self = this,xaxis = [],party = {},series = [],seriesname = [],legend = [];
    if($('input[name=chartoption]').length > 0){
        if($('input[name=chartoption]:checked').length > 1){
            $.each($('input[name=chartoption]:checked'),function(){
                legend.push({
                    name : $(this).siblings('span').html(),
                    id  : parseInt($(this).val())
                })
            })
        }else{
            legend = {
                name : $('input[name=chartoption]:checked + span').html(),
                id  : parseInt($('input[name=chartoption]:checked').val())
            };
        }

    }
    this.option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:seriesname
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : xaxis
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : series
    }

    if(_self.type == 'day'){
        var startt = new Date(_self.getTimeByDateStr($('#datepickerStart').val())).getTime() / 1000;
        var endt = new Date(_self.getTimeByDateStr($('#datepickerEnd').val())).getTime() / 1000;
        var nowt = startt;
        while(nowt <= endt){
            xaxis.push(MZ.date.format("yyyy-MM-dd", new Date(nowt * 1000)));
            nowt += 24 * 3600;
        }
        party = [];
        $.each($('input[name=chartoption]:checked'),function(){
            party.push(data);
        })
    }else if(_self.type == 'hour'){
        for (var n = 0; n <= 23; n++) {
            xaxis.push(n + '点');
        }
        party = [];
       	$.each($('input[name=chartoption]:checked'),function(){
            party.push(data);
        })
    }
    var count,cost,price ;
    $.each(party,function(index){
        var json = {name:'',type:'line',data:[],date:''},p = this;
        $.each(p,function(key,value){
            if(_self.type === 'day'){
            	json.date = MZ.date.format("yyyy-MM-dd", new Date(value.date * 1000));
            }else if(_self.type === 'hour'){
            	json.hour = value.hour;
            }
            if(legend.length > 1){
                $.each(legend,function(i){
                    if(i == index)
                        json.name = this.name;
                })
            }else{
                json.name = legend.name;
            }
            $.each(xaxis,function(k,v){
                if(!json.data[k]) json.data[k] = 0;
                var justice = '';
                if(_self.type == 'day'){
                    justice = json.date;
                }else if(_self.type == 'hour') {
                    justice = json.hour;
                }
                if(legend.length > 1){
                    $.each(legend,function(key){
                        if(key == index){
                        	if(_self.type == 'hour'){
                        		v = ~~(v.replace('点',''));
                        	}
                            if(v == justice){
                                switch(this.id){
                                    case 1:
                                        json.data[k] = value.uv;
                                        break;
                                    case 2:
                                        json.data[k] = value.pv;
                                        break;
                                    case 3:
                                        json.data[k] = value.ip;
                                        break;
                                    case 4:
                                        json.data[k] = value.jump;
                                        break;
                                    case 5:
                                        json.data[k] = value.time;
                                        break;
                                }

                            }
                        }
                    })
                }else{
                    if(v == justice){
                        switch(legend.id){
                            case 1:
                                json.data[k] = value.uv;
                                break;
                            case 2:
                                json.data[k] = value.pv;
                                break;
                            case 3:
                                json.data[k] = value.ip;
                                break;
                            case 4:
                                json.data[k] = value.jump;
                                break;
                            case 5:
                                json.data[k] = value.time;
                                break;
                        }
                    }
                }
            })
        })
        series.push(json);
    })

    if(!this.legend){
        this.option.legend = this.legend;
    }else{
        $.each(series,function(k,v){
            seriesname.push(v.name);
        })
    }
    this.myChart.setOption(this.option);
    this.myChart.setTheme(theme);
}

//日期转date格式
lineChart.prototype.getTimeByDateStr = function(dateStr){
    var year = parseInt(dateStr.substring(0,4));
    var month = parseInt(dateStr.substring(5,7),10)-1;
    var day = parseInt(dateStr.substring(8,10),10);
    return new Date(year, month, day);
}

module.exports = lineChart;
