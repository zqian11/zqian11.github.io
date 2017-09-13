 SPA_RESOLVE_INIT = function(transition) { 
	document.getElementById("change").innerHTML = '<div class="problem">\
      <div class="pro-tit">\
        <img src="images/pro-tit.png">\
        <span>第<i class="now-num">4</i>/20题</span>\
      </div>\
      <div class="pro-img">\
      </div>\
      <div class="time">\
        <span id="time">60</span>\
        <p>请直接选出答案</p>\
      </div>\
      <div class="option">\
        <ul>\
          <li>\
            <a href=""></a>\
          </li>\
          <li>\
             <a href=""></a>\
          </li>\
          <li>\
             <a href=""></a>\
          </li>\
          <li>\
             <a href=""></a>\
          </li>\
        </ul>\
      </div>\
    </div>';
    clearInterval(k);
    res();//倒计时

  var len=item.list.length-30;
  var num=Math.round(Math.random()*len);
  if(item.list[num].qtype==1){
     $(".pro-img").html("<img src='"+item.list[num].img+"'>");
     for(var i=0;i<$(".option a").length;i++){
      $(".option a")[i].innerHTML=item.list[num].option[i];
      if( $(".option a")[i].innerHTML==item.list[num].right){
        $($(".option a")[i]).parent().attr("class","act").siblings().removeClass("act");
        $($(".option a")[i]).attr("href","#/five");
      }
      else{
        $($(".option a")[i]).attr("href","#/error");
      }
      
    }
  }
}