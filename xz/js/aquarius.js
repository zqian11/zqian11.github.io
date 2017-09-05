 SPA_RESOLVE_INIT = function(transition) {
    document.getElementById("content").innerHTML = '<section class="bg Aquarius-bg">\
        <article class="fate-box Aquarius-fate-bg">\
            <section class="content-box">\
                <h1 class="constellation-box">\
                    <span>\
                        <i class="fl constellation-logo Aquarius-logo"></i>\
                        <div class="constellation-title fl">\
                            <p class="constellation">' + data.aquarius.constellation + '</p>\
                            <p class="date">' + data.aquarius.today + '</p>\
                        </div>\
                    </span>\
                </h1>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日运势</h2>\
                    <p class="fate-content">' + data.aquarius.fate + '</p>\
                </section>\
                <section class="fate-text">\
                    <h2 class="fate-name">今日禁忌</h2>\
                    <p class="fate-content">去做：' + data.aquarius.behoove + '</p>\
                    <p class="fate-content">别做：' + data.aquarius.taboo + '</p>\
                </section>\
            </section>\
        </article>\
        <section class="but-box clearfix">\
            <a class="but fl Aquarius-but-01-bg" href="#">去晒运势</a>\
            <a class="but fr Aquarius-but-02-bg" href="#index">换个星座</a>\
        </section>\
    </section>';
 }