var Panel = {
	common:[
		'<div class="e_attr_tab">',
			'<ul>',
			'</ul>',
		'</div>',
		'<div class="e_attr_content">',
		'</div>',
	].join(''),
	
	background:[
	'<div class="panel">',
		'<div class="pane_type_bg">',
			'<div class="pane_type_bg_btn row">',
				'<a href="javascript:void(0);" class="changebg">更换背景</a>',
				'<a href="javascript:void(0);" class="removebg">移除</a>',
			'</div>',
			'<div class="pane_type_bg_view row">',
				'<img src="images/temple1.jpg" class="background">',
			'</div>',
			'<div class="pane_type_bg_color row">',
				'<div class="title">主题颜色</div>',
				'<div class="content pane_attr" data-css="background-color">',
					'<span class="color nocolor" style="background-color:initial;"></span> ',
					'<span class="color" style="background-color:#3A3A3A;"></span>',
					'<span class="color" style="background-color:#FF6C6C;"></span>',
					'<span class="color" style="background-color:#FBC600;"></span>',
					'<span class="color" style="background-color:#90D356;"></span>',
					'<span class="color" style="background-color:#2B90ED;"></span>',
					'<span class="color" style="background-color:#305577;"></span>',
					'<span class="allcolor"></span>',
				'</div>',
			'</div>',
			'<div class="pane_type_bg_alpha row pane_attr" data-css="opacity">',
				'<div class="title">透明</div>',
				'<div class="content">',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
			'</div>',
		'</div>',
	'</div>'
	].join(''),
	
	text:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_text">',
				'<div class="pane_type_common_content pane_type_text_content row">',
					'<div class="title">文本内容</div>',
					'<textarea class="tcontent pane_attr" data-css="html" placeholder="请输入文本">请输入文本</textarea>',
				'</div>',
				'<div class="pane_type_common_url pane_type_btn_url row">',
					'<div class="title">URL</div>',
					'<input type="text" class="url pane_attr" data-css="url" value="">',
				'</div>',
				'<div class="pane_type_common_font pane_type_text_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor pane_attr" data-css="color"></a>',
					'</div>',
					
					'<div id="fontcolor_picker" class="cp_default clearfix">',
			            '<div class="color_picker_wrapper">',
			                '<div class="color_picker"></div>',
			                '<div class="color_picker_indicator"></div>',
			            '</div>',
			            '<div class="color_slide_wrapper">',
			                '<div class="color_slide"></div>',
			                '<div class="color_slide_indicator"></div>',
			            '</div>',
			        '</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize pane_attr" data-css="font-size">',
							'<option value="18px">18px</option>',
							'<option value="20px">20px</option>',
							'<option value="22px">22px</option>',
							'<option value="24px">24px</option>',
							'<option value="26px">26px</option>',
							'<option value="28px">28px</option>',
							'<option value="30px">30px</option>',
							'<option value="32px">32px</option>',
							'<option value="36px">36px</option>',
							'<option value="40px">40px</option>',
							'<option value="44px">44px</option>',
							'<option value="48px">48px</option>',
							'<option value="52px">52px</option>',
							'<option value="56px">56px</option>',
							'<option value="60px">60px</option>',
							'<option value="64px">64px</option>',
							'<option value="68px">68px</option>',
							'<option value="72px">72px</option>',
							'<option value="76px">76px</option>',
							'<option value="80px">80px</option>',
							'<option value="84px">84px</option>',
						'</select>',
					'</div>',
				'</div>',
				'<div class="pane_type_common_style pane_type_text_style row">',
					'<div class="title">风格</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="fontstyle bold pane_attr" data-css="font-weight">B</a>',
						'<a href="javascript:void(0);" class="fontstyle italic pane_attr" data-css="font-style">I</a>',
						'<a href="javascript:void(0);" class="fontstyle underline pane_attr" data-css="text-decoration">U</a>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_common_font row">',
					'<div class="title">背景</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor backcolor pane_attr" data-css="background-color"></a>',
					'</div>',
					
					'<div class="title">行距</div>',
					'<div class="content">',
						'<select class="lineheight pane_attr" data-css="line-height">',
							'<option value="1">1倍</option>',
							'<option value="1.2">1.2倍</option>',
							'<option value="1.35">1.35倍</option>',
							'<option value="1.5">1.5倍</option>',
							'<option value="2">2倍</option>',
							'<option value="2.5">2.5倍</option>',
						'</select>',
					'</div>',
					
				'</div>',
				'<div class="pane_type_common_border pane_type_text_border row">',
					'<div class="title">边框</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor bordercolor pane_attr" data-css="border-color"></a>',
						'<select class="borderstyle pane_attr" data-css="border-style">',
							'<option value="none">无</option>',
							'<option value="dotted">点状</option>',
							'<option value="solid">实线</option>',
							'<option value="double">双线</option>',
							'<option value="dashed">虚线</option>',
						'</select>',
						'<input type="text" class="borderwidth pane_attr" data-css="border-width" value="0px">',
					'</div>',
					
				'</div>',
				
				'<div class="pane_type_text_alpha row pane_attr" data-css="opacity">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_text_shadow row pane_attr" data-css="text-shadow">',
					'<div class="title">阴影</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_text_radius row pane_attr" data-css="border-radius">',
					'<div class="title">圆角</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_text_rotate row pane_attr" data-css="rotate">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_align pane_type_text_align row">',
					'<div class="title">对齐</div>',
					'<div class="content pane_attr" data-css="text-align">',
						'<a href="javascript:void(0);" class="textalign left">左对齐</a>',
						'<a href="javascript:void(0);" class="textalign cent">居中</a>',
						'<a href="javascript:void(0);" class="textalign right">右对齐</a>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_text_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx pane_attr" data-css="left" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony pane_attr" data-css="top" value="0px">',
				'</div>',
				
			'</div>',
		'</div>',
	].join(''),
	
	animate:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_animate">',
				'<div class="pane_type_animate_speed row pane_attr" data-css="animation-duration">',
					'<div class="title">速度</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_animate_delay row pane_attr" data-css="animation-delay">',
					'<div class="title">延迟</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_animate_action row clearfix pane_attr" data-css="animation-name">',
					'<div class="action" data-type="none">',
						'<div class="pic"></div>',
						'<div class="name">无效果</div>',
					'</div>',
					
					'<div class="action" data-type="fadeIn">',
						'<div class="pic"></div>',
						'<div class="name">淡入</div>',
					'</div>',
					
					'<div class="action" data-type="bounceSmallIn">',
						'<div class="pic"></div>',
						'<div class="name">弹性放大</div>',
					'</div>',
					
					'<div class="action" data-type="bounceBigIn">',
						'<div class="pic"></div>',
						'<div class="name">弹性缩小</div>',
					'</div>',
					
					'<div class="action" data-type="zoomIn">',
						'<div class="pic"></div>',
						'<div class="name">放大</div>',
					'</div>',
					
					'<div class="action" data-type="zoomInDown">',
						'<div class="pic"></div>',
						'<div class="name">下落放大</div>',
					'</div>',
					
					'<div class="action" data-type="rotateInDownLeft">',
						'<div class="pic"></div>',
						'<div class="name">从左滚入</div>',
					'</div>',
					
					'<div class="action" data-type="rotateInDownRight">',
						'<div class="pic"></div>',
						'<div class="name">从右滚入</div>',
					'</div>',
					
					'<div class="action" data-type="slideInLeft">',
						'<div class="pic"></div>',
						'<div class="name">向右飞入</div>',
					'</div>',
					
					'<div class="action" data-type="slideInRight">',
						'<div class="pic"></div>',
						'<div class="name">向左飞入</div>',
					'</div>',
					
					'<div class="action" data-type="slideInUp">',
						'<div class="pic"></div>',
						'<div class="name">向上飞入</div>',
					'</div>',
					
					'<div class="action" data-type="slideInDown">',
						'<div class="pic"></div>',
						'<div class="name">向下飞入</div>',
					'</div>',
					
					'<div class="action" data-type="slideRight">',
						'<div class="pic"></div>',
						'<div class="name">向右滑入</div>',
					'</div>',
					
					'<div class="action" data-type="slideLeft">',
						'<div class="pic"></div>',
						'<div class="name">向左滑入</div>',
					'</div>',
					
					'<div class="action" data-type="slideUp">',
						'<div class="pic"></div>',
						'<div class="name">向上滑入</div>',
					'</div>',
					
					'<div class="action" data-type="slideDown">',
						'<div class="pic"></div>',
						'<div class="name">向下滑入</div>',
					'</div>',
					
					'<div class="action" data-type="lightSpeedIn">',
						'<div class="pic"></div>',
						'<div class="name">刹车</div>',
					'</div>',
					
					'<div class="action" data-type="flipInY">',
						'<div class="pic"></div>',
						'<div class="name">左右翻转</div>',
					'</div>',
					
					'<div class="action" data-type="flipInX">',
						'<div class="pic"></div>',
						'<div class="name">上下翻转</div>',
					'</div>',
					
					'<div class="action" data-type="rotateIn">',
						'<div class="pic"></div>',
						'<div class="name">旋转出现</div>',
					'</div>',
					
					'<div class="action" data-type="stretchRight">',
						'<div class="pic"></div>',
						'<div class="name">向右展开</div>',
					'</div>',
					
					'<div class="action" data-type="stretchLeft">',
						'<div class="pic"></div>',
						'<div class="name">向左展开</div>',
					'</div>',
					
					'<div class="action" data-type="pullUp">',
						'<div class="pic"></div>',
						'<div class="name">向上展开</div>',
					'</div>',
					
					'<div class="action" data-type="pullDown">',
						'<div class="pic"></div>',
						'<div class="name">向下展开</div>',
					'</div>',
				
				'</div>',
			'</div>',
		'</div>',
	].join(''),
	
	img:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_img">',
				'<div class="pane_type_img_btn row">',
					'<a href="javascript:void(0);" class="changeimg">更换图片</a>',
					'<a href="javascript:void(0);" class="cropimg">裁剪</a>',
				'</div>',
				
				'<div class="pane_type_img_alpha row pane_attr" data-css="opacity">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_img_shadow row pane_attr" data-css="box-shadow">',
					'<div class="title">阴影</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_img_radius row pane_attr" data-css="border-radius">',
					'<div class="title">圆角</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_img_rotate row pane_attr" data-css="rotate">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_img_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx pane_attr" data-css="left" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony pane_attr" data-css="top" value="0px">',
				'</div>',
				
				'<div class="pane_type_common_size pane_type_img_size row">',
					'<div class="title">大小</div>',
					'<label>宽</label>',
					'<input type="text" class="sizew pane_attr" data-css="width" value="0px">',
					'<label>高</label>',
					'<input type="text" class="sizeh pane_attr" data-css="height" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join(''),
	
	btn:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_btn">',
				
				'<div class="pane_type_common_url pane_type_btn_url row">',
					'<div class="title">URL</div>',
					'<input type="text" class="url pane_attr" data-css="url" value="">',
				'</div>',
				'<div class="pane_type_common_content pane_type_btn_content row">',
					'<div class="title">文本内容</div>',
					'<div contenteditable="true" class="tcontent pane_attr" data-css="html"><p>请输入文本</p></div>',
				'</div>',
				'<div class="pane_type_common_font pane_type_btn_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor pane_attr" data-css="color"></a>',
					'</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize pane_attr" data-css="font-size">',
							'<option value="18px">18px</option>',
							'<option value="20px">20px</option>',
							'<option value="22px">22px</option>',
							'<option value="24px">24px</option>',
							'<option value="26px">26px</option>',
							'<option value="28px">28px</option>',
							'<option value="30px">30px</option>',
							'<option value="32px">32px</option>',
							'<option value="36px">36px</option>',
							'<option value="40px">40px</option>',
							'<option value="44px">44px</option>',
							'<option value="48px">48px</option>',
							'<option value="52px">52px</option>',
							'<option value="56px">56px</option>',
							'<option value="60px">60px</option>',
							'<option value="64px">64px</option>',
							'<option value="68px">68px</option>',
							'<option value="72px">72px</option>',
							'<option value="76px">76px</option>',
							'<option value="80px">80px</option>',
							'<option value="84px">84px</option>',
						'</select>',
					'</div>',
				'</div>',

				'<div class="pane_type_common_font pane_type_btn_font row">',
					'<div class="title">背景</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor backcolor pane_attr" data-css="background-color"></a>',
					'</div>',
					
					'<div class="title">行距</div>',
					'<div class="content">',
						'<select class="lineheight pane_attr" data-css="line-height">',
							'<option value="1">1倍</option>',
							'<option value="1.2">1.2倍</option>',
							'<option value="1.35">1.35倍</option>',
							'<option value="1.5">1.5倍</option>',
							'<option value="2">2倍</option>',
							'<option value="2.5">2.5倍</option>',
						'</select>',
					'</div>',
					
				'</div>',
				'<div class="pane_type_common_border pane_type_btn_border row">',
					'<div class="title">边框</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor bordercolor pane_attr" data-css="border-style"></a>',
						'<select class="borderstyle pane_attr" data-css="border-style">',
							'<option value="none">无</option>',
							'<option value="dotted">点状</option>',
							'<option value="solid">实线</option>',
							'<option value="double">双线</option>',
							'<option value="dashed">虚线</option>',
						'</select>',
						'<input type="text" class="borderwidth pane_attr" data-css="border-width" value="0px">',
					'</div>',
					
				'</div>',
				
				'<div class="pane_type_btn_alpha row pane_attr" data-css="opacity">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_btn_shadow row pane_attr" data-css="box-shadow">',
					'<div class="title">阴影</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_btn_radius row pane_attr" data-css="radius">',
					'<div class="title">圆角</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_btn_rotate row pane_attr" data-css="scale">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_btn_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx pane_attr" data-css="left" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony pane_attr" data-css="top" value="0px">',
				'</div>',
				
//				'<div class="pane_type_common_position pane_type_btn_position row">',
//					'<div class="title">大小</div>',
//					'<label>宽</label>',
//					'<input type="text" class="sizewidth pane_attr" data-css="width" value="0px">',
//				'</div>',
//				
			'</div>',
		'</div>'
	].join(''),
	
	//跳转链接
	link:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_link">',
				
				'<div class="pane_type_common_url pane_type_link_url row">',
					'<div class="title">URL</div>',
					'<input type="text" class="url" value="">',
				'</div>',
				'<div class="pane_type_common_text pane_type_link_text row">',
					'<div class="title">按钮文字</div>',
					'<input type="text" class="text" value="">',
				'</div>',
				'<div class="pane_type_common_font pane_type_link_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor"></a>',
					'</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize">',
							'<option>18px</option>',
							'<option>20px</option>',
							'<option>22px</option>',
							'<option>24px</option>',
							'<option>26px</option>',
							'<option>28px</option>',
							'<option>30px</option>',
							'<option>32px</option>',
							'<option>36px</option>',
							'<option>40px</option>',
							'<option>44px</option>',
							'<option>48px</option>',
							'<option>52px</option>',
							'<option>56px</option>',
							'<option>60px</option>',
							'<option>64px</option>',
						'</select>',
					'</div>',
				'</div>',

				'<div class="pane_type_common_style pane_type_link_style row">',
					'<div class="title">样式</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>关注</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>购物</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>录像</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>应用</p></a>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_link_alpha row">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_link_rotate row">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_link_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join(''),
	
	//电话
	tel:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_tel">',
				
				'<div class="pane_type_common_url pane_type_tel_url row">',
					'<div class="title">呼叫号码</div>',
					'<input type="text" class="tel" value="">',
				'</div>',
				'<div class="pane_type_common_text pane_type_tel_text row">',
					'<div class="title">按钮文字</div>',
					'<input type="text" class="text" value="">',
				'</div>',
				'<div class="pane_type_common_font pane_type_tel_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor"></a>',
					'</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize">',
							'<option>18px</option>',
							'<option>20px</option>',
							'<option>22px</option>',
							'<option>24px</option>',
							'<option>26px</option>',
							'<option>28px</option>',
							'<option>30px</option>',
							'<option>32px</option>',
							'<option>36px</option>',
							'<option>40px</option>',
							'<option>44px</option>',
							'<option>48px</option>',
							'<option>52px</option>',
							'<option>56px</option>',
							'<option>60px</option>',
							'<option>64px</option>',
						'</select>',
					'</div>',
				'</div>',

				'<div class="pane_type_tel_alpha row">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_tel_rotate row">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_tel_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join(''),
	
	//互动
	zan:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_zan">',
				
				'<div class="pane_type_common_text pane_type_link_text row">',
					'<div class="title">文字</div>',
					'<input type="text" class="text" value="">',
				'</div>',
				'<div class="pane_type_common_font pane_type_link_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor"></a>',
					'</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize">',
							'<option>18px</option>',
							'<option>20px</option>',
							'<option>22px</option>',
							'<option>24px</option>',
							'<option>26px</option>',
							'<option>28px</option>',
							'<option>30px</option>',
							'<option>32px</option>',
							'<option>36px</option>',
							'<option>40px</option>',
							'<option>44px</option>',
							'<option>48px</option>',
							'<option>52px</option>',
							'<option>56px</option>',
							'<option>60px</option>',
							'<option>64px</option>',
						'</select>',
					'</div>',
				'</div>',

				'<div class="pane_type_common_style pane_type_zan_style row">',
					'<div class="title">样式</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>送花</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>喜欢</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>顶起</p></a>',
						'<a href="javascript:void(0);" class="linkstyle"><i></i><p>悼念</p></a>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_zan_alpha row">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_zan_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join(''),
	
	//跳转链接
	countdown:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_countdown">',

				'<div class="pane_type_common_font pane_type_countdown_font row">',
					'<div class="title">颜色</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor fontcolor"></a>',
					'</div>',
					
					'<div id="fontcolor_picker" class="cp_default clearfix">',
			            '<div class="color_picker_wrapper">',
			                '<div class="color_picker"></div>',
			                '<div class="color_picker_indicator"></div>',
			            '</div>',
			            '<div class="color_slide_wrapper">',
			                '<div class="color_slide"></div>',
			                '<div class="color_slide_indicator"></div>',
			            '</div>',
			        '</div>',
					
					'<div class="title">字号</div>',
					'<div class="content">',
						'<select class="fontsize">',
							'<option>18px</option>',
							'<option>20px</option>',
							'<option>22px</option>',
							'<option>24px</option>',
							'<option>26px</option>',
							'<option>28px</option>',
							'<option>30px</option>',
							'<option>32px</option>',
							'<option>36px</option>',
							'<option>40px</option>',
							'<option>44px</option>',
							'<option>48px</option>',
							'<option>52px</option>',
							'<option>56px</option>',
							'<option>60px</option>',
							'<option>64px</option>',
						'</select>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_countdown_time pane_type_countdown_starttime row">',
					'<div class="title">倒计时起始时间</div>',
					'<div class="content">',
						'<input type="text" value="" class="date" name="datepickerStart">',
						'<select class="hour" name="hour">',
							'<option>00</option>',
							'<option>01</option>',
							'<option>02</option>',
							'<option>03</option>',
							'<option>04</option>',
							'<option>05</option>',
							'<option>06</option>',
							'<option>07</option>',
							'<option>08</option>',
							'<option>09</option>',
							'<option>10</option>',
							'<option>11</option>',
							'<option>12</option>',
							'<option>13</option>',
							'<option>14</option>',
							'<option>15</option>',
							'<option>16</option>',
							'<option>17</option>',
							'<option>18</option>',
							'<option>19</option>',
							'<option>20</option>',
							'<option>21</option>',
							'<option>22</option>',
							'<option>23</option>',
						'</select>',
						'<span>:</span>',
						'<select class="minute" name="minute">',
							'<option>00</option>',
							'<option>10</option>',
							'<option>20</option>',
							'<option>30</option>',
							'<option>40</option>',
							'<option>50</option>',
							'<option>59</option>',
						'</select>',
					'</div>',
					
				'</div>',
				
				'<div class="pane_type_countdown_time pane_type_countdown_endtime row">',
					'<div class="title">倒计时截止时间</div>',
					'<div class="content">',
						'<input type="text" value="" class="date" name="datepickerEnd" readonly>',
						'<select class="hour" name="hour">',
							'<option>00</option>',
							'<option>01</option>',
							'<option>02</option>',
							'<option>03</option>',
							'<option>04</option>',
							'<option>05</option>',
							'<option>06</option>',
							'<option>07</option>',
							'<option>08</option>',
							'<option>09</option>',
							'<option>10</option>',
							'<option>11</option>',
							'<option>12</option>',
							'<option>13</option>',
							'<option>14</option>',
							'<option>15</option>',
							'<option>16</option>',
							'<option>17</option>',
							'<option>18</option>',
							'<option>19</option>',
							'<option>20</option>',
							'<option>21</option>',
							'<option>22</option>',
							'<option>23</option>',
						'</select>',
						'<span>:</span>',
						'<select class="minute" name="minute">',
							'<option>00</option>',
							'<option>10</option>',
							'<option>20</option>',
							'<option>30</option>',
							'<option>40</option>',
							'<option>50</option>',
							'<option>59</option>',
						'</select>',
					'</div>',
					
				'</div>',
				
				'<div class="pane_type_countdown_alpha row">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_countdown_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join(''),
	shape:[
		'<div class="pane">',
			'<div class="pane_type_common pane_type_shape">',

				'<div class="pane_type_common_font pane_type_shape_font row">',
					'<div class="title">填充</div>',
					'<div class="content">',
						'<a href="javascript:void(0);" class="chosecolor backcolor pane_attr" data-css="background-color"></a>',
					'</div>',
				'</div>',
				
				'<div class="pane_type_shape_alpha row pane_attr" data-css="opacity">',
					'<div class="title">透明</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',

				'<div class="pane_type_shape_rotate row pane_attr" data-css="rotate">',
					'<div class="title">旋转</div>',
					'<div class="slider"></div>',
					'<div class="value"></div>',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_shape_position row">',
					'<div class="title">位置</div>',
					'<label>X</label>',
					'<input type="text" class="positionx pane_attr" data-css="left" value="0px">',
					'<label>Y</label>',
					'<input type="text" class="positiony pane_attr" data-css="top" value="0px">',
				'</div>',
				
				'<div class="pane_type_common_position pane_type_shape_position row">',
					'<div class="title">大小</div>',
					'<label>宽</label>',
					'<input type="text" class="sizewidth pane_attr" data-css="width" value="0px">',
					'<label>高</label>',
					'<input type="text" class="sizeheight pane_attr" data-css="height" value="0px">',
				'</div>',
				
			'</div>',
		'</div>'
	].join('')
}

return Panel;