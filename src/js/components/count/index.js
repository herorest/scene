var React = require('react');
var Header = require('js/components/common/head');
var tip = require('js/common/ui/tip-message/tipmessage');
var str = require('js/common/utils/string');
var dialog = require('js/common/ui/dialog/dialog');
var modelO = require('js/common/model');
var blockbox = require('js/common/plugins/blockbox');
var lineChart = require('js/common/plugins/lineChart.js');
var makeTable = require('js/common/plugins/maketable.js');
require('js/common/plugins/jquery-ui');
require('js/common/utils/date');

var countCom = React.createClass({
	getInitialState:function() {
		return {
		  backsrc: 'manage.html',
		  name: '',
		  avata:'images/logo_default.jpg',
		  title:'',
		  desc:'',
		  pubtime:'',
		  modtime:'',
		  startt:'',
		  endt:'',
		  data:[]
		};
	},
	componentDidMount:function(){
		var date = new Date();
        this.state.endt = new Date(date.getYear(),date.getMonth()+1,date.getDate()).getTime() / 1000;
        this.state.startt = this.state.endt;
		this.setDate();
		this.getinfo();
		this.getData();
	},

	setDate:function(){
		var _self = this;
        $("#datepickerStart").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(selectedDate) {
                var end = $("#datepickerEnd").datepicker("getDate");
                var start = $("#datepickerStart").datepicker("getDate");
                if($("#datepickerEnd").val() == '')
                    $("#datepickerEnd").datepicker("setDate", selectedDate);
                else{
                    if(end < start){
                        $("#datepickerEnd").datepicker("setDate", selectedDate);
                        MZ.tipmessage.show({message:modelO.tipInfo.endmstart,delay:1000,pos:'middle',type:'fail'});
                    }
                }
				this.blur();
				_self.setState({
					startt : $("#datepickerStart").datepicker("getDate").getTime() / 1000,
					endt : $("#datepickerEnd").datepicker("getDate").getTime() / 1000
				});
                _self.getData();
            }
        }).datepicker("setDate",this.state.startt);

        $("#datepickerEnd").datepicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(selectedDate) {
                var end = $("#datepickerEnd").datepicker("getDate");
                var start = $("#datepickerStart").datepicker("getDate");
                if($("#datepickerStart").val() == '')
                    $("#datepickerStart").datepicker("setDate", selectedDate);
                else{
                    if(end < start){
                        $("#datepickerStart").datepicker("setDate", selectedDate);
                        MZ.tipmessage.show({message:modelO.tipInfo.endmstart,delay:1000,pos:'middle',type:'fail'});
                    }
                }
				this.blur();
				_self.setState({
					startt : $("#datepickerStart").datepicker("getDate").getTime() / 1000,
					endt : $("#datepickerEnd").datepicker("getDate").getTime() / 1000
				});
                _self.getData();
            }
        }).datepicker("setDate",this.state.endt );
	},

	getinfo:function(){
		if(this.isMounted()){
			var _self = this;
			$.ajax({
	        	type: "get",
	            url: modelO.prefix + modelO.apiUrl.checkuser,
	            dataType:'json',
	            success: function (data) {

	            },
	            error:function(data){
	            	MZ.tipmessage.show({message:modelO.tipInfo.checkauthfail,delay:1000,pos:'middle',type:'fail'});
	            }
	    	})
		}
	},

	getData:function(){
		if(this.isMounted()){
			var _self = this;
	        var href = modelO.prefix + (this.state.startt === this.state.endt ? modelO.apiUrl.countHour : modelO.apiUrl.countDay);
	        var params = {
	            'startTime':this.state.startt,
	            'endTime':this.state.endt + 24 * 3600 - 1,
	            'hid':this.props.hid
	        }
	        $.ajax({
	            type:"post",
	            url:href,
	            data:params,
	            success:function(result) {
	                if (result.status == 1) {
	                    _self.setTable(result.data);
	                    _self.setChart(result.data);
	                }
	            },
	            error:function(){
	            	MZ.tipmessage.show({message:'',delay:1000,pos:'middle',type:'fail'});
	            }
	        })
		}
	},
	filter:function(e){
		var _self = this;
		var date = e.target.name,startt,endt = new Date().getTime() / 1000;
		switch(date){
			case 'today':
				startt = endt;
				break;
			case 'seven':
				startt = endt- 7 * 24 * 3600;
				break;
			case 'month':
				startt = endt - 30 * 24 * 3600;
				break;
			case 'year':
				startt = endt - 365 * 24 * 3600;
				break;
		}
		_self.setState({
			startt : startt,
			endt : endt
		});
		this.getData();
	},
	setTable:function(data){
        if(data && data.length > 0) {
        	var type = this.state.startt === this.state.endt ? 'hour':'day';
            new makeTable().render({
                id:'table',
                data:data,
                pagelength:10,
                type:type
            });
            $('#table').show().siblings('.tip').hide();
        }else {
            $('#table').hide().siblings('.tip').show();
            $('.tablemore a').hide();
        }
    },

    setChart: function(data){
        if(data && data.length > 0){
        	var type = this.state.startt === this.state.endt ? 'hour':'day';
            new lineChart().render({
                id:'chart',
                data:data,
                type:type
            });
            $('#chart').siblings('.tip').hide();
            $('.charttrigger').show();
        }else{
            $('#chart').siblings('.tip').show();
            if($('#chart').length > 0){
                $('#chart').html('');
            }
            $('.charttrigger').hide();
        }
    },

	getQueryString:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	},

	render:function() {
		return (
			<div className="count">
				<div className="w_header">
					<Header />
				</div>
				<div className="w_content w1000">
					<div className="w_project clearfix">
						<a href={this.state.backsrc} className="p_back">返回项目</a>
						<div className="p_avata"><img src={this.state.avata} /></div>
						<div className="p_info">
							<div className="p_info_title">
								{this.state.title}
							</div>
							<div className="p_info_descript">
								{this.state.desc}
							</div>
							<div className="p_info_time">
								<span>发布时间：{this.state.pubtime}</span><span>最后修改时间：{this.state.modtime}</span>
							</div>
						</div>
					</div>
					<div className="w_count">
						<div className="c_filter">
							<div className="c_filter_line clearfix">
								<span className="c_filter_line_title">统计时间：</span>
								<div className="c_filter_line_time clearfix">
									<div className="c_filter_line_time_input clearfix">
										<span>日期</span>
										<input type="text" id="datepickerStart" className="date start_date" name="startt" readOnly="true" />
									</div>
									<i className="c_filter_line_arrow"></i>
									<div className="c_filter_line_time_input clearfix">
										<span>日期</span>
										<input type="text" id="datepickerEnd" className="date end_date" name="endt" readOnly="true" />
									</div>
								</div>
								<div className="c_filter_line_date">
									<a href="javascript:void(0);" name="today" onClick={this.filter}>今天</a>
									<a href="javascript:void(0);" name="seven" onClick={this.filter}>最近7天</a>
									<a href="javascript:void(0);" name="month" onClick={this.filter}>最近一月</a>
								</div>
							</div>
						</div>

						<div className="chartbox">
							<div id="chart" className="chart"></div>
							<p className="tip">暂无数据</p>
						</div>

						<div className="charttrigger clearfix">
							<label><input type="checkbox" name="chartoption" checked value="1" readOnly /><span>UV</span></label>
							<label><input type="checkbox" name="chartoption" checked value="2" readOnly /><span>PV</span></label>
							<label><input type="checkbox" name="chartoption" checked value="3" readOnly /><span>IP</span></label>
							<label><input type="checkbox" name="chartoption" checked value="4" readOnly /><span>跳出率</span></label>
						</div>

						<div className="tablebox">
							<table id="table"></table>
							<p className="tip">暂无数据</p>
						</div>

						<div className="tablemore">
							<a href="javascript:void(0);" className="more">加载更多</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
module.exports = countCom;
