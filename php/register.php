<?php
$name = $_GET["username"];
$psw = $_GET["password"];
$arr = array(array("username"=>"18348477327","password"=>"aaaaaa"),array("username"=>"18384432777","password"=>"bbbbbb"));

foreach($arr as $item){
	if($item["username"]== $name && $item["password"] == $psw){
		echo "1";
		break;
	}else{
		echo "0";
	}
}
?>