 SPA_RESOLVE_INIT = function(transition) {
    document.getElementById("content").innerHTML = '<section class="bg Taurus-bg">\
        <article class="fate-box Taurus-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Taurus-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + data.taurus.constellation + '</p>\
                            <p class="date">' + data.taurus.today + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.taurus.fate + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.taurus.behoove + '</p>\
                    <p class="fate-content">别做：' + data.taurus.taboo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Taurus-but-01-bg" href="#">去晒运势</a>\
            <a class="but fr Taurus-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }