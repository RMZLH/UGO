/*
			 封装ajax方法的参数说明
			 * type: 请求类型 （必须）
			 * url:  请求地址(必须)
			 * data: 请求参数 （非必须）
			 * fnSuc: 请求成功时的回调函数（必须）
			 * 
			 * */
			
			
			function Ajax(type,url,fnSuc,data){
				var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
				var str = "";
				for(var attr in data){
					str += attr + "=" + data[attr] + "&";
				}
				str = str.replace(/&$/,"");

				type = type.toUpperCase();
				
				if(type == "GET"){
					xhr.open("GET",url+"?"+str,true);
					xhr.send();
				}
				if(type == "POST"){
					xhr.open("POST",url,true);
					//设置数据的格式为form-data
					xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
					xhr.send(str);
				}
				
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4 && xhr.status == 200){
						var data = xhr.responseText;
						fnSuc(data);
					}
				}
			}