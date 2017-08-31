		
						var strSearch = location.search;
						var arrSearch = strSearch.split("=");
						var id = arrSearch[1];
						$.get("../JSON/data3.json", function(data){
						var str1 ="";
						var str2="";
						var str3="";
						var str4="";
						var str5="";
							str1 += "<img src='"+data[id].dtImg+"'>";
							str2 += ""+data[id].ptitle+"";
							str3 += ""+data[id].price1+"";
							str4 += ""+data[id].price2+"";
							str5 += "<a href='#'>立即购买</a><a class='btn' href='shoppingcart2.html' data-id='"+id+"'>加入购物车</a><span>扫一扫<br/>加入购物车</span>";
						$("#main-box-lf-top1 li").html(str1);
						$("#main-box-lf-top2 li").html(str1);
						$("#main-box-lf-bottom li").html(str1);
						$("#main-box1-ct #title").html(str2);
						$("#span1").html(str3);
						$("#span2").html(str4);	
						$("#p-shop").html(str5);
						
						$(".btn").on("click",function(){
							var id = $(this).attr("data-id");
							var num = 1;
							cookie(id,num,false);
						})
						
					})
//放大镜效果
$(function(){
		var oBox = document.getElementById("main-box1-lf");
		var oMiddleBox = document.getElementById("main-box-lf-top1");
		var oShadow = document.getElementById("shadow");
		var oLargeBox = document.getElementById("main-box-lf-top2");
		let
			    iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth,
			    iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight,
			    iImgMaxL = 0,
			    iImgMaxT = 0;
			
			oMiddleBox.onmouseenter = function(){
			    oLargeBox.style.display = "block";
			    iImgMaxL = $("#main-box-lf-top2").find("img").get(0).offsetWidth- oLargeBox.offsetWidth;
			    //console.log("这是iImgMaxL"+iImgMaxL);
			    iImgMaxT = $("#main-box-lf-top2").find("img").height() - oLargeBox.offsetHeight;
			    //console.log("这是iImgMaxT"+iImgMaxT);
			}
			oMiddleBox.onmousemove = function(ev){
			    // 鼠标移动效果
			    let e = ev || window.event;
			    let iL = e.pageX -oBox.offsetLeft - oMiddleBox.offsetLeft - oShadow.offsetWidth/2,
			        iT = e.pageY -oBox.offsetTop - oMiddleBox.offsetTop -oShadow.offsetHeight/2;
			        console.log("这是iL"+iL);
			        console.log("这是iT"+iT);
			    if(iL < 0) {
			        iL = 0;
			    }
			    if(iT < 0) {
			        iT = 0;
			    }
			    if(iL >= iMaxL) {
			        iL = iMaxL;
			    }
			    if(iT >= iMaxT) {
			        iT = iMaxT;
			    }
			    //console.log("这是iL"+iL);
			    //console.log("这是iT"+iT);
			    oShadow.style.left = iL + "px";
			    oShadow.style.top  = iT + "px";
			
			    // 比例关系
			    // iL / iMaxL = iImgL / iImgMaxL
			    let iImgL = iL * iImgMaxL / iMaxL,
			        iImgT = iT * iImgMaxT / iMaxT;
			    	$("#main-box-lf-top2 img").get(0).style.left = -iImgL + "px";
			    	$("#main-box-lf-top2 img").get(0).style.top = -iImgT + "px";
			};
			oMiddleBox.onmouseleave = function(){
			    oLargeBox.style.display = "none";
			    oShadow.style.left = "-1000px";
			};

})
//倒计时效果
$(function(){
	var intDiff = parseInt(600000);//倒计时总秒数量
	function timer(intDiff){
    window.setInterval(function(){
    var day=0,
        hour=0,
        minute=0,
        second=0;//时间默认值       
    if(intDiff > 0){
        day = Math.floor(intDiff / (60 * 60 * 24));
        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html("还剩"+day+"天");
    $('#hour_show').html('<s id="h"></s>'+hour+'时');
    $('#minute_show').html('<s></s>'+minute+'分');
    $('#second_show').html('<s></s>'+second+'秒');
    intDiff--;
    }, 1000);
} 
$(function(){
    timer(intDiff);
});
})
