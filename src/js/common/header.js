require('main');

var header = function(){
	this.init();
};
header.prototype = {
	init:function(){
		this.menu();
	},
	menu:function(){
		$('.h_name').mouseenter(function(){
			$('.h_menu').slideDown(200);
		}).mouseleave(function(){
			$('.h_menu').slideUp(200);
		})
	}
}
new header();