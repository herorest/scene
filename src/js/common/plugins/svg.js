//处理svg
var svgObj = function(type,width,height,color){
	this.type = type;
	this.width = width;
	this.height = height;
	this.color = color;
	this.init();
}
svgObj.prototype = {
	init:function(){
		this.size = 'width:'+this.width+'; height:'+this.height+'; opacity: 1; position:absolute;';
		this.svgtype = [
			//矩形
			'<svg width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><rect id="1" fill="'+this.color+'" sketch:type="MSShapeGroup" x="0" y="0" width="1000" height="1000"></rect></g></svg>',
			//圆角矩形
			'<svg width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><rect id="1" fill="'+this.color+'" sketch:type="MSShapeGroup" x="0" y="0" width="1000" height="1000" rx="40"></rect></g></svg>',
			//圆形
			'<svg width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><ellipse id="cicle" fill="'+this.color+'" sketch:type="MSShapeGroup" cx="50%" cy="500" rx="500" ry="500"></ellipse></g></svg>',
			//心型
			'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve" preserveAspectRatio="none meet" style="'+this.size+'"><path fill="'+this.color+'" d="M734.312237 776.325499c-87.909166 0-169.646771-44.099381-223.447095-116.818589C457.096541 732.243515 375.375308 776.325499 287.418047 776.325499c-158.470221 0-287.397592-140.957359-287.397592-314.232774 0-103.371322 46.176692-175.886893 83.296101-234.150878 107.880009-169.236426 379.125737-379.846144 390.616442-388.725372 11.06808-8.555863 24.006763-12.836353 36.916794-12.836353 12.939707 0 25.860994 4.28049 36.916794 12.836353 11.502985 8.879228 282.765085 219.488946 390.614395 388.725372 37.136805 58.265008 83.328847 130.780579 83.328847 234.150878C1021.708806 635.36814 892.781435 776.325499 734.312237 776.325499z" transform="translate(0, 812) scale(1, -1)"></path></svg>',
  			//对话框
  			'<svg width="1831px" height="1615px" viewBox="0 0 1831 1615" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><path d="M332.739712,1222.04892 C130.9383,1095.62753 2.43202839,904.900193 2.43202839,691.525916 C2.43202839,310.884107 411.384816,2.31295319 915.853644,2.31295319 C1420.32247,2.31295319 1829.27526,310.884107 1829.27526,691.525916 C1829.27526,1072.16772 1420.32247,1380.73888 915.853644,1380.73888 C858.451802,1380.73888 802.286644,1376.74368 747.819941,1369.10171 L186.957669,1608.34605 L332.739739,1222.04894 Z" fill="'+this.color+'" sketch:type="MSShapeGroup"></path></g></svg>',
  			//五角星
  			'<svg width="2154px" height="2090px" viewBox="0 0 2154 2090" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><polygon id="Star-4" fill="'+this.color+'" sketch:type="MSShapeGroup" points="1077.11743 1731.70446 411.833563 2088.26117 538.891477 1333.06195 0.665519381 798.226904 744.475499 688.044824 1077.11743 0.941883458 1409.75937 688.044824 2153.56935 798.226904 1615.34339 1333.06195 1742.4013 2088.26117 "></polygon></g></svg>',
  			//三角形
  			'<svg width="1948px" height="1702px" viewBox="0 0 1948 1702" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" style="'+this.size+'"><g stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><polygon id="Triangle-5" fill="'+this.color+'" sketch:type="MSShapeGroup" points="973.445788 0.916023272 1946.43838 1701.31435 0.453197292 1701.31435 "></polygon></g></svg>',
  			//直角三角形
  			'<svg width="1948px" height="1702px" viewBox="0 0 1948 1702" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none meet" style="'+this.size+'"><g id="Page-1" stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><polygon id="Triangle-5" fill="'+this.color+'" sketch:type="MSShapeGroup" points="1.2879616 0.916023272 1947.27314 1701.31435 1.2879616 1701.31435 "></polygon></g></svg>',
  			//提示框
  			'<svg width="1990px" height="1298px" viewBox="0 0 1990 1298" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" style="'+this.size+'"><g id="Page-1" stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><path d="M315.800357,859.640693 L2.26890959,670.707546 L315.800357,481.774398 L315.800357,51.3373336 C315.800357,23.7269962 338.193674,1.34439534 365.802403,1.34439534 L1937.96603,1.34439534 C1965.5814,1.34439534 1987.96807,23.7285455 1987.96807,51.3373336 L1987.96807,1246.89304 C1987.96807,1274.50338 1965.57476,1296.88598 1937.96603,1296.88598 L365.802403,1296.88598 C338.187035,1296.88598 315.800357,1274.50183 315.800357,1246.89304 L315.800357,859.640693 Z" id="Triangle-5" fill="'+this.color+'" sketch:type="MSShapeGroup"></path></g></svg>',
  			//五边形
  			'<svg width="1977px" height="1914px" viewBox="0 0 1977 1914" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" style="'+this.size+'"><g id="Page-1" stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><polygon id="Polygon-2" fill="'+this.color+'" sketch:type="MSShapeGroup" points="990.446847 6.88179013 1972.47315 734.229528 1597.37248 1911.10289 383.521211 1911.10289 8.42053884 734.229528 "></polygon></g></svg>',
  			//六边形
			'<svg width="1804px" height="2114px" viewBox="0 0 1804 2114" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" style="'+this.size+'"><g id="Page-1" stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><polygon id="Polygon-2" fill="'+this.color+'" sketch:type="MSShapeGroup" points="902.853644 6.88179013 1797.07992 533.195558 1797.07992 1585.82309 902.853644 2112.13686 8.62736529 1585.82309 8.62736529 533.195558 "></polygon></g></svg>',
			//书签
			'<svg width="1205px" height="1827px" viewBox="0 0 1205 1827" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" style="'+this.size+'"><g id="Page-1" stroke="none" stroke-width="1" fill="'+this.color+'" fill-rule="evenodd" sketch:type="MSPage"><path d="M8.26467581,3.82448779 L1199.68417,3.82448779 L1199.68417,1825.67984 L603.974425,1370.216 L8.26467581,1825.67984 L8.26467581,3.82448779 Z" id="Rectangle-202" fill="'+this.color+'" sketch:type="MSShapeGroup"></path></g></svg>'
		]
	},
	getHtml:function(){
		return this.svgtype[this.type - 1];
	}
}

return svgObj;