$(document).ready(function () {

    $('#header .gnb > li').mouseenter(function(){ // .gnb 자식 li를 마우스 오버했을때
        // this = .gnb 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_1.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });

    $('#header .gnb > li').mouseleave(function(){ // .gnb 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_1.png','.png'))
    })	;




    $(".scrollBox").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

});
$(function () {
    $(".naviJs > li > a, .top_button > a").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");

        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);
        // var drop = true
        if (a >= 100 && a <=500 && drop) {}
            // $("").addClass("on");
            // $('#header').addClass('wheel');

        // } else {
        //     // $("").removeClass("on");
        //     // $('#header').removeClass('wheel');
        //
        // }




        if (a >= 180) {
            $("#scene01 .title1").addClass("on");

        } else {
            $("#scene01 .title1").removeClass("on");

        }

        if (a >= 816) {
            $('.top_button').addClass('on');
        } else {
            $('.top_button').removeClass('on');
        }


        if (a >= 1014) {
            $("#scene01 .title2").addClass("on");

        } else {
            $("#scene01 .title2").removeClass("on");

        }


        if (a >= 1766) {
            $("#scene01 .title3").addClass("on");

        } else {
            $("#scene01 .title3").removeClass("on");

        }


        if (a >= 3513) {
            $("#scene01 .title4").addClass("on");

        } else {
            $("#scene01 .title4").removeClass("on");

        }


        if (a >= 4245) {
            $("#scene01 .title5").addClass("on");

        } else {
            $("#scene01 .title5").removeClass("on");

        }














        $(".wrap > div").each(function (c) {
            var d = 100;
            var b = $(".wrap > div:first").position().top;
            var e = $(this).position().top;
            if (a <= b - d) {
                $(".naviJs").each(function () {
                    $("li", this).removeClass("on").eq(0).addClass("on")
                })
            } else {
                if (a >= e - d) {
                    $(".naviJs").each(function () {
                        $("li", this).removeClass("on").eq(c).addClass("on")
                    })
                }
            }
        })
    })


});