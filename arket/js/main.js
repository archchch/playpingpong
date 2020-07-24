$(document).ready(function () {

    $('#header .gnb > li').mouseenter(function(){ // .gnb 자식 li를 마우스 오버했을때
        // this = .gnb 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_1.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });

    $('#header .gnb > li').mouseleave(function(){ // .gnb 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_1.png','.png'))
    });




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




    $("#visual").delay(2000).fadeOut(700);



    $('#main_slides').slidesjs({
        width:1920,
        height:1249,
        play: {
            active: false,
            interval: 5000,
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


    $('.button1').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button1.png','button1_1.png'));
    });

    $('.button1').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button1_1.png','button1.png'));
    });



    $('#main_slides2').slidesjs({
        width:1920,
        height:955,
        play: {
            active: false,
            interval: 5000,
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


    $('.button2').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button2.png','button2_1.png'));
    });

    $('.button2').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button2_1.png','button2.png'));
    });


    $('.button3').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button3.png','button3_1.png'));
    });

    $('.button3').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button3_1.png','button3.png'));
    });


    $('.button4').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button4.png','button4_1.png'));
    });

    $('.button4').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button4_1.png','button4.png'));
    });


    $('.button5').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button5.png','button5_1.png'));
    });

    $('.button5').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button5_1.png','button5.png'));
    });


    $('.button6').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button6.png','button6_1.png'));
    });

    $('.button6').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button6_1.png','button6.png'));
    });

    $('#main_slides3').slidesjs({
        width:1920,
        height:1546,
        play: {
            active: false,
            interval: 5000,
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


    $('.button7').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button7.png','button7_1.png'));
    });

    $('.button7').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button7_1.png','button7.png'));
    });



    $('.button8').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button8.png','button8_1.png'));
    });

    $('.button8').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button8_1.png','button8.png'));
    });



    $('.button9').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button9.png','button9_1.png'));
    });

    $('.button9').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button9_1.png','button9.png'));
    });


    $('#main_slides4').slidesjs({
        width:1920,
        height:518,
        play: {
            active: false,
            interval: 5000,
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

    $('.button10').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button10.png','button10_1.png'));
    });

    $('.button10').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('button10_1.png','button10.png'));
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

        if (a >= 433) {
            $("#scene02 .title1").addClass("on");

        } else {
            $("#scene02 .title1").removeClass("on");

        }

        if (a >= 1074) {
            $('.top_button').addClass('on');
        } else {
            $('.top_button').removeClass('on');
        }


        if (a >= 1738) {
            $("#scene03 .title2").addClass("on");

        } else {
            $("#scene03 .title2").removeClass("on");

        }


        if (a >= 3500) {
            $("#scene04 .title3").addClass("on");

        } else {
            $("#scene04 .title3").removeClass("on");

        }


        if (a >= 4851) {
            $("#scene05 .title4").addClass("on");

        } else {
            $("#scene05 .title4").removeClass("on");

        }


        if (a >= 5546) {
            $("#scene05 .title5").addClass("on");

        } else {
            $("#scene05 .title5").removeClass("on");

        }


        if (a >= 6780) {
            $("#scene05 .title6").addClass("on");

        } else {
            $("#scene05 .title6").removeClass("on");

        }


        if (a >= 7424) {
            $("#scene06 .title7").addClass("on");

        } else {
            $("#scene06 .title7").removeClass("on");

        }

        if (a >= 8736) {
            $("#scene07 .title8").addClass("on");

        } else {
            $("#scene07 .title8").removeClass("on");

        }


        if (a >= 11218) {
            $("#scene09 .title9").addClass("on");

        } else {
            $("#scene09 .title9").removeClass("on");

        }


        if (a >= 12807) {
            $("#scene09 .title10").addClass("on");

        } else {
            $("#scene09 .title10").removeClass("on");

        }


        if (a >= 13474) {
            $("#scene10 .title11").addClass("on");

        } else {
            $("#scene10 .title11").removeClass("on");

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