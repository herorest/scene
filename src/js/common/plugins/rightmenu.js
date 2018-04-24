function rightMenu(ev,options){
	//默认值
	var defaults = {
		menuList:[],
		id:'div_RightMenu',
		name:'div_RightMenu',
		item:'divMenuItem'
	}
	//继承属性
	$.extend(this, defaults, options);
	
	//初始化
	this.objMenu = $('#'+this.id);
	this.target = ev.target;
	this._ev = ev;
	this._init();
}

rightMenu.prototype = {
	/**
     * 初始化dialog
     */
	_init:function(){
		if ($('#'+this.id).length === 0) {
            var menuCount = this.menuList.length;
            if (menuCount > 0) {
                //构建
                var divMenuList = '<div id="'+ this.id +'" class="'+ this.name +'" style="display:none;">';
                for (var i = 0; i < menuCount; i++) {
                    divMenuList += '<div class="'+ this.item +' '+ this.menuList[i].menuClass +'"  onclick='+ this.menuList[i].clickEvent +'>' + this.menuList[i].menuName + '</div>';
                }
                divMenuList += "</div>";
                //插入
                $('body').append(divMenuList);
                //子菜单
                this._subMenu();
                //初始化
				this.objMenu = $('#'+this.id);
				
				this.show(this._ev);
            }
        }else{
        	this.objMenu.remove();
        	this.hide();
        	this._init();
        }
	},
	/**
     * 子菜单方法
     */
	_subMenu:function(){
		var objM = this.objMenu.find('.'+this.item);
        objM.bind("mouseover", function() {
            this.style.backgroundColor = "#316ac5";
            this.style.paddingLeft = "30px";
        });
        objM.bind("mouseout", function() {
            this.style.backgroundColor = '#EAEAEA';
        });
	},
	/**
     * 移动子菜单位置
     */
	_moveTo:function(event){
        if (this.objMenu.size() > 0) {
            this.objMenu.hide();
            var clientX = event.clientX;
            var clientY = event.clientY;
            var redge = document.body.clientWidth - clientX;
            var bedge = document.body.clientHeight - clientY;
            var menu = this.objMenu.get(0);
            var menuLeft = 0;
            var menuTop = 0;
            
            if (redge < this.objMenu.outerWidth(true))
                menuLeft = document.body.scrollLeft + clientX - this.objMenu.outerWidth(true);
            else
                menuLeft = document.body.scrollLeft + clientX;
            if (bedge < this.objMenu.outerHeight(true))
                menuTop = document.body.scrollTop + clientY - this.objMenu.outerHeight(true);
           
            else
                menuTop = document.body.scrollTop + clientY;
            this.objMenu.css({ top: menuTop + "px", left: menuLeft + "px" });
            this.objMenu.show();
        }
	},
	/**
     * 显示
     */
	show:function(event){
        this._moveTo(event);
	},
	/**
     * 隐藏
     */
	hide:function(){
		this.objMenu.hide();
	}
}

return rightMenu;