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

    $("#visual").delay(1000).fadeOut(700);


    $('#contents02 .plus').on('click',function () {
       $('#pop01').fadeIn(700);
    });


    $('#pop01 .close').on('click',function () {
        $('#pop01').fadeOut(700);
    });


    $('#contents04 .center > li:nth-child(1)').on('click',function () {
        $('#contents04 > ul > li').removeClass('on');
        $('#contents04 > ul > li:nth-child(1)').addClass('on');
    });

    $('#contents04 .center > li:nth-child(2)').on('click',function () {
        $('#contents04 > ul > li').removeClass('on');
        $('#contents04 > ul > li:nth-child(2)').addClass('on');
    });

    $('#contents04 .center > li:nth-child(3)').on('click',function () {
        $('#contents04 > ul > li').removeClass('on');
        $('#contents04 > ul > li:nth-child(3)').addClass('on');
    });




    $('#sc05_slides').slidesjs({
        width:1583,
        height:1143,
        play: {
            active: false,
            interval: 3000,
            effect: "fade",
            auto: true,
            pauseOnHover: false,
            restartDelay: 2500
        },
        navigation: {
            active: true,
            effect: "fade"
        },
        pagination: {
            active: true,
            effect: "fade"
        },
        effect: {
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
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


        if (a >= 233) {
            $("#scene01 .title").addClass("on");

        } else {
            $("#scene01 .title").removeClass("on");

        }



        if (a >= 233) {
            $("#scene01 .box .img").addClass("on");

        } else {
            $("#scene01 .box .img").removeClass("on");

        }

        if (a >= 1588) {
            $("#scene01 .txt2").addClass("on");

        } else {
            $("#scene01 .txt2").removeClass("on");

        }

        if (a >= 1588) {
            $("#scene01 .box2 .img2").addClass("on");

        } else {
            $("#scene01 .box2 .img2").removeClass("on");

        }

        if (a >= 1588) {
            $("#scene01 .box3 .img2_3").addClass("on");

        } else {
            $("#scene01 .box3 .img2_3").removeClass("on");

        }

        if (a >= 2662) {
            $("#contents02 .box4 .img3").addClass("on");

        } else {
            $("#contents02 .box4 .img3").removeClass("on");

        }

        if (a >= 2662) {
            $("#contents02 .mar").addClass("on");

        } else {
            $("#contents02 .mar").removeClass("on");

        }

        if (a >= 3403) {
            $("#contents02 .tag").addClass("on");

        } else {
            $("#contents02 .tag").removeClass("on");

        }

        if (a >= 4000) {
            $("#contents02 .mlc").addClass("on");

        } else {
            $("#contents02 .mlc").removeClass("on");

        }

        if (a >= 4000) {
            $("#contents02 .box5 .img4").addClass("on");

        } else {
            $("#contents02 .box5 .img4").removeClass("on");

        }

        if (a >= 4000) {
            $("#contents02 .box6 .img5").addClass("on");

        } else {
            $("#contents02 .box6 .img5").removeClass("on");

        }

        if (a >= 4833) {
            $("#contents02 .title02").addClass("on");

        } else {
            $("#contents02 .title02").removeClass("on");

        }

        if (a >= 4833) {
            $("#contents02 .box8 .img6").addClass("on");

        } else {
            $("#contents02 .box8 .img6").removeClass("on");

        }

        if (a >= 5283) {
            $("#contents02 .box7 .img6_03").addClass("on");

        } else {
            $("#contents02 .box7 .img6_03").removeClass("on");

        }

        if (a >= 6164) {
            $(".box9 .about3").addClass("on");

        } else {
            $(".box9 .about3").removeClass("on");

        }

        if (a >= 6164) {
            $(".box10 .sculpture").addClass("on");

        } else {
            $(".box10 .sculpture").removeClass("on");

        }

        if (a >= 6164) {
            $(".marke").addClass("on");

        } else {
            $(".marke").removeClass("on");

        }

        if (a >= 6630) {
            $(".off").addClass("on");

        } else {
            $(".off").removeClass("on");

        }

        if (a >= 12809) {
            $(".ba1").addClass("on");

        } else {
            $(".ba1").removeClass("on");

        }

        if (a >= 12809) {
            $(".ba3").addClass("on");

        } else {
            $(".ba3").removeClass("on");

        }






        //
        // if (a >= 646) {
        //     $("").addClass("on");
        //
        // } else {
        //     $("").removeClass("on");
        //
        // }






        $("#receipt").stop().animate({"margin-top": a * 0.3}, 200);




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