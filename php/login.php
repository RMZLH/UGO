<?php
$name = $_GET["username"];
$psw = $_GET["password"];
$arr = array(array("username"=>"aaaaaa","password"=>"aaaaaa"),array("username"=>"bbbbbb","password"=>"bbbbbb"));

foreach($arr as $item){
	if($item["username"]== $name && $item["password"] == $psw){
		echo "1";
		break;
	}else{
		echo "0";
	}
}
?>