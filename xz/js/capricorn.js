 SPA_RESOLVE_INIT = function(transition) {
    document.getElementById("content").innerHTML = '<section class="bg Capricorn-bg">\
        <article class="fate-box Capricorn-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Capricorn-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + data.capricorn.constellation + '</p>\
                            <p class="date">' + data.capricorn.today + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.capricorn.fate + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.capricorn.behoove + '</p>\
                    <p class="fate-content">别做：' + data.capricorn.taboo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Capricorn-but-01-bg" href="#">去晒运势</a>\
            <a class="but fr Capricorn-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }