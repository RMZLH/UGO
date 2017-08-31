//网页刷新遮罩层效果
$(function(){
			$("#close").click(function(){
				$("#popup-box-main").hide();
			})
})
//购物车效果，如果购物车中物品为0,则提醒购物车里无东西,如果购物车里物品不为0，则显示购物车列表中的东西
$(function(){
	$("#shoppingcart").on("mouseenter",function(){
		clearTimeout(timer);
		$("#shoppingcart #hide").show();
		$("#shoppingcart #hide").html("<img src='../img/loading.gif'>").find("img").css({"position":"absolute","left":"0","right":"0","bottom":"0","top":"0","margin":"auto",});
		var timer=setTimeout(function(){
			$("#shoppingcart #hide").find("img").hide();
			$("#shoppingcart #hide").html("你的购物车中还没有任何商品").css({"text-align":"center","line-height":"54px","color":"#d1d1d1"});
		},1000)
		$("#shoppingcart").on("mouseout",function(){
			$("#shoppingcart #hide").hide();
			
		})
		
	})
	
})

//二级级列表效果
$(function(){
	//二级级列表开始时消失
	$("#banner #nav-list3").hide();
	$("#banner #nav-list3 .list3").css({"display":"none"});
	$("#banner #list2").on("mouseenter","li",function(){
		//当二级列表中有li划过后出现当前所指的ul
		var index=$(this).index();
		$("#banner #nav-list3").show();
		$("#banner #nav-list3").css({"z-index":"99"});
		$("#banner #nav-list3  .list3").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
		$("#banner #nav-list3").on("mouseleave",function(){
			$("#banner #nav-list3").hide;
			$("#banner #nav-list3").css({"z-index":"-1"});
			$("#banner #nav-list3  .list3").css({"display":"none"});
		})	
	})
	
})
//轮播图效果
$(function(){
				var $ali = $("#list-img li");
				//克隆第一张追加到最后一张后面
				$("#list-img li:first").clone(true).appendTo($("#list-img"));
				//设置ul的宽度
				var iper_width = $("#list-img li:first").width();
				$("#list-img").width(iper_width*($ali.length+1)); 
				var i = 0;//对应索引
				//设置定时器
				var timer = setInterval(function(){
					move();
				},3000)
				//运动函数
				function move(){
					clearInterval(timer);
					i++;
					//临界点判断
					if(i == $ali.length+1){
						i=1;
						$("#list-img").css({"left":0});
					}
					if(i==-1){
						i=$ali.length-1;
						$("#list-img").css({"left":-iper_width*($ali.length)});
					}
					//小面的小按钮事件
					if(i==$ali.length){
						$("#list-btn a").eq(0).addClass("select").siblings().removeClass("select");
					}
					else{
						$("#list-btn a").eq(i).addClass("select").siblings().removeClass("select");
					}
					$("#list-img").stop().animate({left:-i*iper_width},500);
					timer = setInterval(function(){
						move();
					},3000)
				}
				
				//下面小按钮点击事件
				$("#list-btn a").hover(function(){
					i=$(this).index()-1;
					move();
					clearInterval(timer);
				},function(){
					move();
				})
			})
			
//右侧楼梯效果
			var flag=true;
			$(function(){
				//绑定事件
				$(window).scroll(function(){
					if(flag){
						var $scrollTop = $(document).scrollTop();
						//console.log($scrollTop);
						//当滚动条滚动高度大于215时,楼梯位置变化
						if($scrollTop>215){
							$("#stairway").css({"position":"fixed","top":"50px"})
						}else{
							$("#stairway").css({"position":"absolute","top":"290px"})
							}
						//选中谁就出现蓝色边框
						$("#main-main .Louti").each(function(){
							if($(this).offset().top>=$scrollTop){
								$(" #stairway li").eq($(this).index()-1).addClass("hover").siblings().removeClass("hover");
								return false;
							}
						})
					}
					
				})
				$("#stairway li:not(:last)").click(function(){
					flag=false;
					var index = $(this).index();
					$(this).addClass("hover").siblings().removeClass("hover");
					var $top = $("#main-main .Louti").eq(index).offset().top;
					$("body,html").animate({"scrollTop":$top},500,function(){
						flag=true;
					});
				})
				$("#stairway .last").click(function(){
					flag=false;
					$("body,html").animate({"scrollTop":"0"},500,function(){
						flag=true;
					});
					$("#stairway").css({"position":"absolute","top":"290px"})
					
				});	
			})
//点击左右按钮实现切换效果
//热门品牌
$(function(){	
	$(".list-btn-lf").on("click",function(){
				$("#list-content #list-content2").css({"left":"0"});
				$("#list-content #list-content1").css({"left":"-3200px"})
	})
	$(".list-btn-rt").on("click",function(){
		$("#list-content #list-content1").css({"left":"0"});
		$("#list-content #list-content2").css({"left":"-3200px"})
	})
})

//选项卡切换效果
//特卖专区
$(function(){
	$("#main-content3-lf").on("mouseenter","p",function(){
		var index=$(this).index();
		$("#main-content3-lf p").eq(index).css({"background":"#000","color":"#fff"}).find("a").css({"display":"block"}).end().siblings().css({"background":"#fff","color":"#666"}).find("a").css({"display":"none"})
		//选中哪个p该索引下的ul出现
		$("#main-content3-rt ul").eq(index).css({"display":"block"}).siblings().css({"display":"none"})
	})
})
//template样板
$(function(){
			$.get("../JSON/data1.json",function(data){
			var html = template("nav",data);
				$("#main-content3-lf").html(html);
			})	
			$.get("../JSON/data1.json",function(data){
				var html = template("nav2",data);
				$("#main-content3-rt").html(html);
			});
			
			$.get("../JSON/data2.json",function(data){
			var html = template("nav3",data);
				$("#banner #list2").html(html);
			})
			$.get("../JSON/data2.json",function(data){
				var html = template("nav4",data);
				$("#nav-list3").html(html);
			});
})

