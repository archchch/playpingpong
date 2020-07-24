$(document).ready(function () {



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
    $(".naviJs > li > a, .topBtn").click(function () {
        var b = $($(this).attr("href")).position().top;
        var a = $(".gnb").innerHeight();
        $(".scrollBox").stop().animate({scrollTop: b - a}, 1200, "easeInOutExpo");

        return false
    });
    $(".scrollBox").scroll(function () {
        var a = $(".scrollBox").scrollTop();
        $(".posNum").text(a);







        if (a >= 300) {
            $("#scene02 .img2_1").addClass("on");

        } else {
            $("#scene02 .img2_1").removeClass("on");

        }

        if (a >= 1135) {
            $("#scene02 .img3_1").addClass("on");

        } else {
            $("#scene02 .img3_1").removeClass("on");

        }

        if (a >= 3740) {
            $("#scene03 .img4_1").addClass("on");

        } else {
            $("#scene03 .img4_1").removeClass("on");

        }

        if (a >= 4451) {
            $("#scene03 .img4_2").addClass("on");

        } else {
            $("#scene03 .img4_2").removeClass("on");

        }

        if (a >= 5005) {
            $("#scene04 .img5_1").addClass("on");

        } else {
            $("#scene04 .img5_1").removeClass("on");

        }

        if (a >= 6612) {
            $("#scene05 .img6_1").addClass("on");

        } else {
            $("#scene05 .img6_1").removeClass("on");

        }


        if (a >= 7910) {
            $("#scene07 .img8_1").addClass("on");

        } else {
            $("#scene07 .img8_1").removeClass("on");

        }

        if (a >= 10625) {
            $("#scene08 .img9_1").addClass("on");

        } else {
            $("#scene08 .img9_1").removeClass("on");

        }

        if (a >= 12792) {
            $("#scene09 .img10_1").addClass("on");

        } else {
            $("#scene09 .img10_1").removeClass("on");

        }


        if (a >= 14300) {
            $("#scene09 .img10_2").addClass("on");

        } else {
            $("#scene09 .img10_2").removeClass("on");

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