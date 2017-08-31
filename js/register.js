//注册页面
//手机号码的判断
$(function(){
		$("#text1").on("blur",function(){			
			$("#tip1").show();
			if($("#text1").val()!==""){
				var sPhonename = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!sPhonename.test($("#text1").val())){
						alert("你输入的手机号有误，请重新输入")
				}	
			}
			else{
				alert("请输入你的手机号码")
			}
		
		})
})
//验证码的判断
//生成4位验证码 封装一个函数生成验证码
$(function(){
	function getCode(n) {
				 var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
				 var str = "";
				 for (var i = 0; i < n; i++) {
				  var index = Math.floor(Math.random() * 62);
				  	  str += all.charAt(index);
				 
				 }
				 return str;
	}
	console.log(getCode(4));
	//将生成的验证码直接写入验证码输入框
	$("#verify").on("click",function(){
			$("#text2").val(getCode(4));
	})	
	$("#text2").on("blur",function(){
		$("#tip2").show();
		if($("#text2").val!==""){
			return 
		}else{
			alert("请点击右侧验证码区域生成验证码");
		}
	})
})
//短信验证码的判断
//随机生成六位数字验证码
$(function(){
	function getVerify(n){
				 var str = "";
				 for (var i = 0; i < n; i++) {
				  var index = Math.floor(Math.random() * 9);
				  	  str += index; 
				 }
				 return str;
	}
	$("#Verify2").on("click",function(){
		$("#Verify2").html(getVerify(6));
	})
	$("#text3").on("blur",function(){
		$("#tip3").show();
		if($("#text3").val()!==""){
			if($("#text3").val()!==$("#Verify2").html()){
				alert("短信验证码错误，请重新输入");
			}
		}else{
			alert("请输入您的验证码")
		}
		
	})
})
//输入密码进行判断
$(function(){
	$("#text4").on("blur",function(){
			$("#tip4").show();
			if($("#text4").val()!==""){
			var oRegAccount = /^\w{6,25}$/;
				if(!oRegAccount.test($("#text4").val())){
					alert('您输入的密码有误，请重新输入！');
				}	
			}else{
				alert("请输入你的密码");
			}
	})
	
})
//密码的确认
$(function(){
	$("#text5").on("blur",function(){
			$("#tip5").show();
			if($("#text5").val()!==""){
					if($("#text5").val()!==$("#text4").val()){
						alert('俩次密码不一致，请重新输入！');
					}	
			}else{
				alert("请确认你的密码");
			}
	})
	
})
$(function(){
	//提交验证
	var oBtn= document.getElementById("btn");
	var oUsername = document.getElementById("text1");
	var oPassword = document.getElementById("text4");
	oBtn.onclick = function(){
				var username = oUsername.value;
				var password = oPassword.value;
				var data = {"username":username,"password":password};				
				Ajax("GET","../php/login.php",foo,data);				
				function foo(data){
					if(data == 1){
						//用户名被占用的话返回用户登录页面
						window.location.href="usernamelogin.html";
					}else{
						//用户名被占用的话返回手机登录页面
						window.location.href="phonelogin.html";
					}
				}			
	}		
})
