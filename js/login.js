
$(function(){
	//账户登录验证开始
	$("#username").on("blur",function(){
		//输入帐号是否为空的判断
		//不为空时判断输入框内容是否是6位到12位之间的数字和字母组合或是邮箱号或是11位手机号	
			$("#tip1").show();
			var sAccount=$("#username").val();
			if($("#username").val()!==""){
					var oRegAccount = /^\w{6,12}$/||/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/||/^[1][3,4,5,7,8][0-9]{9}$/
				if(!oRegAccount.test(sAccount)) {
					alert('您输入的帐号有误，请重新输入！');
				}	
			}
			else{
				alert("请输入您的账号")
			}
			
	})
	$("#password").on("blur",function(){
		//判断密码的输入，是否为空，不为空时判断是否是六位密码
		$("#tip2").show();
		if($("#password").val()!==""){
			if($("#password").val().length<6){
				alert("输入密码错误，请检查输入的密码");
			}
		}else{
			alert("请输入您的密码")
		}
		
	})
	//账户登录验证结束
	//手机号快捷验证开始
	//手机号码的验证
	$("#phonename").on("blur",function(){
		if($("#phonename").val()!==""){
			$("#tip3").show();
			var sPhonename = /^[1][3,4,5,7,8][0-9]{9}$/;
			if(!sPhonename.test($("#phonename").val())){
				alert("你输入的手机号有误，请重新输入")
			}			
		}else{
			alert("请输入你的手机号")
		}
	})
	//验证码的验证
	//生成4位验证码 封装一个函数生成验证码
	function getCode(n) {
				 var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
				 var str = "";
				 for (var i = 0; i < n; i++) {
				  var index = Math.floor(Math.random() * 62);
				  	  str += all.charAt(index);
				 
				 }
				 return str;
	}
	//将生成的验证码直接写入验证码输入框
	$("#verify").on("click",function(){
				$("#phoneverify").val(getCode(4));	
	})	
	$("#phoneverify").on("blur",function(){
		if($("#phoneverify").val()!==""){
			$("#tip4").show();		
		}else{
			alert("请输入你获取的验证码")
		}
	})
			
	//手机号快捷验证结束
	//表单提交验证
	var oBtn = document.getElementById("btn");
	var oUsername = document.getElementById("username");
	var oPassword = document.getElementById("password");
	oBtn.onclick = function(){
				var username = oUsername.value;
				var password = oPassword.value;
				var data = {"username":username,"password":password};				
				Ajax("GET","../php/login.php",foo,data);				
				function foo(data){
					if(data == 1){
						//用户名被占用的话返回注册页面
						window.location.href="register.html";
					}else{
						//用户名被占用的话返回主页面
						window.location.href="index.html";
					}
				}			
	}			
})
