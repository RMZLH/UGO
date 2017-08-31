//放大镜效果
$(function(){
		var oMiddleBox = document.getElementById("main-box-lf-top1");
		var oShadow = document.getElementById("shadow");
		var oLargeBox = document.getElementById("main-box-lf-top2");
		var oSmallImg = $("#main-box-lf-bottom").find("img").get(0);
		var oMiddleImg = $("#main-box-lf-top1").find("img").get(0);
		var oLargeImg = $("#main-box-lf-top2").find("img").get(0);
		let iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth,
    	iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight,
    	iImgMaxL = 0,
    	iImgMaxT = 0;
		//当左侧有鼠标进入时，右侧出现大图,鼠标离开，大图消失
		$("#main-box-lf-top1").hover(function(){
			$("#main-box-lf-top2").css({"display":"block"})
			//鼠标划过左侧图片，遮罩层跟随鼠标移动，同时大图向相反方向移动	
			iImgMaxL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
    		iImgMaxT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
    		
		},function(){
			$("#main-box-lf-top2").css({"display":"none"})
			oShadow.style.left = '-1000px';
		});
		
		
    	
	})
