$(function() {
    $('.fh').click(function() {
        $('html , body').animate({ scrollTop: 0 }, 'slow');
    });



    $(".ssk").focus(function() {
        $(this).css({
            'outline': '#FFBA00 1px solid',
            'color': '#000'
        })
        if ($(this).val() == "大家都在搜:误机躲过失事航班")
            $(this).val("");
    })
    $(".ssk").blur(function() {
        $(this).css({
            'outline': ''
        })
        if ($(this).val() == "") {
            $(this).val("大家都在搜:误机躲过失事航班");
            $(this).css({
                'color': '#BABABA'
            })
        }

    })

    $(".news_right_sfq").each(function() {
            $(this).hover(function() {
                $(".news_right_sfq").removeClass("news_right_sfq_first");
                // over
                $(".news_right_sfq").each(function() {
                    $(this).css({
                        'list-style-type': '',
                        'background': '',
                        'border': '',
                        'border-top': '',
                        'height': ''
                    });
                });
                $(this).css({
                    'list-style-type': 'disc #FDD000',
                    'background': '#F9F9F9',
                    'border': '1px solid #E5E5E5',
                    'border-top': '3px solid #FDD000',
                    'height': '130px'
                })
            }, function() {
                // out
                $(".news_right_sfq").each(function() {
                    $(this).css({
                        'list-style-type': '',
                        'background': '',
                        'border': '',
                        'border-top': '',
                        'height': ''
                    });
                });
                $(this).css({
                    'list-style-type': 'disc #FDD000',
                    'background': '#F9F9F9',
                    'border': '1px solid #E5E5E5',
                    'border-top': '3px solid #FDD000',
                    'height': '130px'
                })
            });
        })
        // 轮播图
    var jds = $("#jd li");
    var s = 1;
    var intval;
    jds.each(function() {
        $(this).hover(function() {
            s = $(this).index();
            jds.each(function() {
                $(this).css({
                    'background': '#CCCCCC',
                    'width': '8px'
                });
            });
            $(this).css({
                'background': '#FDD000',
                'width': '20px'
            })
            $(".lbt ul:nth-child(1)").css({
                'transform': "translate(" + (-320 * $(this).index()) + "px)"
            })
        })
    })
    var setI = function() {
        intval = setInterval(function() {
            jds.each(function() {
                jds.each(function() {
                    $(this).css({
                        'background': '#CCCCCC',
                        'width': '8px'
                    });
                });
            })
            $("#jd li:nth-child(" + (s + 1) + ")").css({
                'background': '#FDD000',
                'width': '20px'
            })
            $(".lbt ul:nth-child(1)").css({
                'transform': "translate(" + (-320 * s) + "px)"
            })
            s++;
            if (s > 2) { s = 0 };
        }, 1000)
    }
    setI();
    $(".lbt").hover(function() {
        // over
        clearInterval(intval);
    }, function() {
        // out
        setI();
    });
})
