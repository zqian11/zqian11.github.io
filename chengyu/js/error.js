 SPA_RESOLVE_INIT = function(transition) { 
	document.getElementById("change").innerHTML = '<div class="problem error">\
      <div class="pro-tit">\
        <img src="images/pro-tit.png">\
        <span>第<i class="now-num">2</i>/20题</span>\
      </div>\
      <div class="error-c">\
        <div class="pic">\
          <img src="images/white.jpg" class="pic-t">\
          <div class="black"></div>\
          <div class="beat">\
            <div class="yet">\
              <img src="images/yet.png" alt=""><span>共闯16关</span>\
            </div>\
            <h3>失败</h3>\
            <p>正确答案：相濡以沫</p>\
            <p>你已经超过70%的人啦</p>\
          </div>\
        </div>\
        <div class="user">\
          <div class="user-pic">\
            <img src="images/error-user.png">\
          </div>\
          <div class="user-name">\
            <p class="id">WillTo12534SM</p>\
            <p class="name">称号：登峰造极</p>\
          </div>\
        </div>\
        <div class="option">\
          <ul>\
            <li class="act" id="share-btn" onclick="show()">\
              发出挑战\
            </li>\
            <li class="again">\
              <a href="#/one">再来一次</a>\
            </li>\
          </ul>\
        </div>\
        <div class="share">\
          <img src="images/share.png">\
        </div>\
      </div>\
    </div>';
    console.log(history.replaceState);
}