/* Created by songjing on 2015/9/7 */
var model = {
	develop:'dev',
	prex:'http://scene.meizu.cn',
    apiUrl:{
        'auth':'',
        'list':'/home.php/Index/next_page.html',			//列表ajax加载分页接口 p
        'model':'/home.php/Index/next_template_page',		//列表ajax加载模板分页接口 p
        'setStatus':'/home.php/Index/setstatus.html',		//设置上下线接口  hid, status 0下线 1上线
        'setInfo':'/home.php/Index/setinfo.html',			//修改标题和描述接口  hid, title, description
		'getPicList':'',									//获取编辑器图片列表
        'del':'/home.php/Index/del.html',					//删除  hid
        'uploadcover':'/home.php/File/uploadCover.html',	//列表页图片上传，带裁剪
        'uploadpic':'/home.php/File/uploadPicture.html',	//图片上传
        'uploadmodelpic':'/home.php/File/uploadTemplatePicture.html',	//模板图片上传
        'uploadaudio':'/home.php/File/uploadAudio.html',	//音频上传
        'save':'/home.php/Editor/save_data.html',			//保存
        'checkuser':'/home.php/User/check_user.html',		//验证用户权限
        'getModel':'/home.php/Editor/editor_template.html',	//获取模板数据
        'countDay':'/home.php/Datareport/report_day.html',	//获取按天的统计数据接口      hid,startTime,endTime
        'countHour':'/home.php/Datareport/report_hour.html'	//获取按小时的统计数据接口      hid,startTime,endTime
    },
    tipInfo:{
    	'endtip':'已经到达最后一页了！',
    	'del':'确定要删除吗？',
    	'offline':'确定要下线吗？',
    	'online':'确定要上线吗？',
    	'noresponse':'无可用数据！',
    	'modsuccess':'修改成功！',
    	'modfailure':'修改失败！',
    	'delsuccess':'删除成功',
    	'delfailure':'删除失败',
    	'buildleftfail':'构建左侧失败！',
    	'buildpreviewfail':'构建预览失败！',
    	'buildnodata':'缺少页面数据',
    	'checkauthfail':'获取用户身份失败',
    	'templeSaveTip':'请复制上方文本框内文本，当前仅显示编辑中的模板信息',
    	'delNotEmpty':'项目内页面数不能为零！',
    	'endmstart':'结束日期不能小于开始日期！',
    	'insertPicError':'请先选择图片！',
    	'deltip':'确定要删除本页吗？',
    	'pageTooMore':'页面数超过限制！'

    },
    errorCode:{
    	'Q_TYPE_DENIED':'上传文件类型不匹配',
    	'F_EXCEED_SIZE':'文件大小超过限制',
    	'F_DUPLICATE':'文件已存在',
    	'Q_EXCEED_NUM_LIMIT':'文件数量超出限制',
    	'Q_EXCEED_SIZE_LIMIT':'文件过大'
    }
};

//区分开发环境或者正式环境
if(model.develop == 'dev'){
	model.prefix = '';
	$.extend(model.apiUrl,{
		uploadcover:'server/fileupload.php',
		checkuser:'json/checkuser.json',
		list:'json/list.json',
		countHour:'json/count_hour.json',
		countDay:'json/count_day.json',
		getPicList:'json/pic_list.json',
		uploadpic:'server/fileupload.php',
		uploadmodelpic:'server/fileupload.php',
		uploadaudio:'server/fileupload.php',	
	});

}


module.exports = model;
