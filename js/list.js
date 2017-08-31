$.get("../JSON/data3.json", function(data){
				var str = "";
				for(var i in data) {
					str +=	"<li><a href='shoppingcart1.html?id="+ i +"'><dl><dt><img src='"+data[i].dtImg+"'></dt><dd>"+data[i].ddtitle+"</dd></dl><p>"+data[i].ptitle+"</p><p><span>"+data[i].price1+"</span><span>"+data[i].price2+"</span></p></a></li>"
				};
			$("#lists").html(str)
		})
