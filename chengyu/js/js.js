
/*
*返回
*/ 

$("#back").on("click",function(){
	history.back();
});
$(".again").click(function(){
	location.replace("index.html");
})

/*
*倒计时
*/

var k;
clearInterval(k);
res();
function res(){
    var num=60;
    k=setInterval(time,1000);
    console.log(num);
    function time(){
        if(num>0){
            num--;
        }
        if(num==0){
            clearInterval(k);
        }
        if(num<10){
            num="0"+num;
        }
        $("#time").text(num);
        console.log($("#time").text());
        if($("#time").text()=="00"){
            clearInterval(k);
            location.assign("#/error");
        }
    }
}


/*
分享弹出层
*/




/*
*屏幕旋转
*/
//横竖屏提示
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    if (window.orientation === 180 || window.orientation === 0) {
        //options.orientationchange('portrait');
        console.log("屏幕横过来啦");
    }
    if (window.orientation === 90 || window.orientation === -90 ){//横屏时
        //options.orientationchange('landscape')
        console.log("屏幕竖过来啦");
    }
}, false);

