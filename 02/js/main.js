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

    $("#visual").delay(4000).fadeOut(700);

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

        if (a >= 1100) {
            $("#scene02 .img2_2").addClass("on");

        } else {
            $("#scene02 .img2_2").removeClass("on");

        }

        if (a >= 1490) {
            $("#scene02 .img2_3").addClass("on");

        } else {
            $("#scene02 .img2_3").removeClass("on");

        }


        if (a >= 2218) {
            $("#scene02 .img2_4").addClass("on");

        } else {
            $("#scene02 .img2_4").removeClass("on");

        }


        if (a >= 3575) {
            $("#scene03 .img3_1").addClass("on");

        } else {
            $("#scene03 .img3_1").removeClass("on");

        }


        if (a >= 7232) {
            $("#scene04 .img4_1").addClass("on");

        } else {
            $("#scene04 .img4_1").removeClass("on");

        }

        if (a >= 7922) {
            $("#scene04 .img4_2").addClass("on");

        } else {
            $("#scene04 .img4_2").removeClass("on");

        }


        if (a >= 8420) {
            $("#scene04 .img4_3").addClass("on");

        } else {
            $("#scene04 .img4_3").removeClass("on");

        }

        if (a >= 10290) {
            $("#scene05 .img5_1").addClass("on");

        } else {
            $("#scene05 .img5_1").removeClass("on");

        }

        if (a >= 14971) {
            $("#scene06 .img6_1").addClass("on");

        } else {
            $("#scene06 .img6_1").removeClass("on");

        }


        if (a >= 16206) {
            $("#scene06 .img6_2").addClass("on");

        } else {
            $("#scene06 .img6_2").removeClass("on");

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