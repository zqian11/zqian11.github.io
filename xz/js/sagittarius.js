 SPA_RESOLVE_INIT = function(transition) {
    document.getElementById("content").innerHTML = '<section class="bg Sagittarius-bg">\
        <article class="fate-box Sagittarius-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Sagittarius-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + data.sagittarius.constellation + '</p>\
                            <p class="date">' + data.sagittarius.today + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.sagittarius.fate + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.sagittarius.behoove + '</p>\
                    <p class="fate-content">别做：' + data.sagittarius.taboo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Sagittarius-but-01-bg" href="#">去晒运势</a>\
            <a class="but fr Sagittarius-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }