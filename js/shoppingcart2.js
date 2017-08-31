$(function() {
				$.get("../JSON/data3.json", function(data) {
					var strCookie = $.cookie("cart");
					var objCookie = strCookie ? JSON.parse(strCookie):{};
					console.log(objCookie);
					var html= "";
					for(var attr in objCookie) {
						//html += "<li><img src='" + data[attr].imgUrl + "'><span>" + data[attr].title + "</span><span id='" + attr + "'><em class='minus'>-</em><input type='' value='" + objCookie[attr] + "'><em class='plus'>+</em></span></li>"
						var oNum = Math.round(objCookie[attr])*Math.round(data[attr].price1);
						
						html+="<li><img src='" + data[attr].dtImg+"'><p>" + data[attr].ptitle + "</p><p>" + data[attr].price1 + "</p><span id='" + attr + "'><a class='minus'>-</a><input type='' value='" + objCookie[attr] + "'><a class='plus'>+</a></span><span id='add'>" + oNum + "</span></li>";
					}
					$("#shop-main-bt-center").html(html);
					$(".minus").on("click", function() {
						var id = $(this).parent().attr("id");
						var num = --objCookie[id];
						$(this).siblings("input").val(num);
						cookie(id,num,true);
						return false;
					})
					$(".plus").on("click", function() {
						var id = $(this).parent().attr("id");
						var num = ++objCookie[id];
						$(this).siblings("input").val(num);
						cookie(id,num,true);
						return false;
					})
					
				})
			})