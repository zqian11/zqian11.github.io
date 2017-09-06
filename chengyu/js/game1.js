// 倒计时
var _time=document.getElementById("time");
var _true=document.getElementById("pic3-4");
var _false1=document.getElementById("pic3-5");
var _false2=document.getElementById("pic3-6");
var _false3=document.getElementById("pic3-7");
var sum=60;
var k=setInterval(function(){
	sum--;
	_time.innerHTML=sum;
	if(sum==0){
		clearInterval(k);
		location.assign("false.html");
	}
	_true.onclick=function(){
		if(sum>0){
			clearInterval(k);
			location.assign("game2.html");
		}
	}
	fal(_false1);
	fal(_false2);
	fal(_false3);
	function fal(ele){
		ele.onclick=function(){
			if(sum>0){
				clearInterval(k);
				location.assign("false.html");
			}
		}
	}
},1000);
