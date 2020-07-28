


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();

    $(".container").niceScroll({
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


    $('.mail').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('mail.png','mail2.png'));
    });

    $('.mail').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('mail2.png','mail.png'));
    });


    // =========================
    // on event section      ===
    //==========================

    // $('#intro1 .text_section .button').click(function (event, delta) {

    $('#intro1 .text_section .button').on('click',function(){
        $('#intro1').addClass('out');
        $('#intro2').addClass('on');
        $('#key').removeClass();
        $('#key').delay(1000).queueAddClass('key2');

        $('#intro2 .first .time > div:nth-child(1) span:first-child').delay(1200).fadeIn(1,function(){
            Counter1();
            Counter2();
        });

    });


    $("#intro1").on("mousewheel", function (event, delta) {
        if (delta > 0) {  //마우스 휠을 올렸을때

        } else if (delta < 0) {//마우스 휠을 내렸을때
            if ( $('#key').hasClass('key1')){
                $('#key').removeClass();
                $('#key').delay(1200).queueAddClass('key2');
                $('#intro1').removeClass('on');
                $('#intro1').addClass('out');
                $('#intro2').addClass('on');
                $('#intro2 .first .time > div:nth-child(1) span:first-child').delay(1200).fadeIn(1,function(){
                    Counter1();
                    Counter2();
                });
            }



            $('#intro1 .text_section .button').mouseenter(function(){
                $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
            });
            $('#intro1 .text_section .button').mouseleave(function(){
                $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
            });

            $('#intro1 .text_section .button').on('click',function(){
                $('#intro,#intro2').addClass('on');
                $('#key').removeClass();
                $('#key').delay(1000).queueAddClass('in2');

            });

            $('#intro1 .text_section .button').on('click',function(){
                $('#intro,#intro2').addClass('on');
                $('#key').removeClass();
                $('#key').delay(1000).queueAddClass('in2');
            });

        }
    });


    $("#intro2").on("mousewheel", function (event, delta) {
        if (delta > 0) {  //마우스 휠을 올렸을때
            if ( $('#key').hasClass('key2')){
                $('#key').removeClass();
                $('#key').delay(1200).queueAddClass('key1');
                $('#intro2').removeClass('on');
                $('#intro1').removeClass('out');
                $('#intro1').addClass('on');
            }
        } else if (delta < 0) {//마우스 휠을 내렸을때
            if ( $('#key').hasClass('key2')){
                $('#key').removeClass();
                $('#key').delay(1200).queueAddClass('key3');
                $('#intro2').removeClass('on');
                $('#intro2').addClass('out');
                $('#container').addClass('on');
                $('#main_header').delay(1000).queueAddClass('fix');
            }
        }
    });


    // $("#intro3").on("mousewheel", function (event, delta) {
    //     if (delta > 0) {  //마우스 휠을 올렸을때
    //         if ( $('#key').hasClass('key3')){
    //             $('#key').removeClass();
    //             $('#key').delay(1200).queueAddClass('key2');
    //             $('#intro3').removeClass('on');
    //             $('#intro2').removeClass('out');
    //             $('#intro2').addClass('on');
    //         }
    //     } else if (delta < 0) {//마우스 휠을 내렸을때
    //         if ( $('#key').hasClass('key3')){
    //             $('#key').removeClass();
    //             $('#intro3').removeClass('on');
    //             $('#intro3').addClass('out');
    //             $('#container').addClass('on');
    //             $('#section01 .boxs > li').addClass('on');
    //             $('#section01').addClass('on');
    //
    //         }
    //     }
    // });




    $("#container").on("mousewheel", function (event, delta) {
        if (delta > 0) {  //마우스 휠을 올렸을때
            if ( $('#key').hasClass('key4')){
                $('#key').removeClass();
                $('#key').delay(1200).queueAddClass('key3');
                $('#container').removeClass('on');
                $('#intro2').removeClass('out');

            }
        } else if (delta < 0) {//마우스 휠을 내렸을때
            $('#intro2').addClass('on');
        }
    });




    function Counter1 () {
        var count =0;
        var c = 0;
        var i = setInterval(function () {
            $('#intro2 .first .time > div:nth-child(1) span:nth-child(2)').html(c);
            count++;
            c++;
            if (count==7){
                clearInterval(i);
            }
        },50);//로딩 속도
    }
    function Counter2 () {
        var count =0;
        var c = 0;
        var i = setInterval(function () {
            $('#intro2 .first .time > div:nth-child(2)').html(c);
            count++;
            c++;
            if (count==49){
                clearInterval(i);
            }
        },50);//로딩 속도
    }


    $('#intro1 .text_section .button').mouseenter(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_on.png'));
    });
    $('#intro1 .text_section .button').mouseleave(function(){
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_on.png','.png'));
    });



    // intro
    $('#intro1').addClass('in');
    $('#intro2 .first .button').on('click',function(){
        $('#intro2 .first,#intro2 .second').addClass('on');
    });
    $('#intro2 .second .button').on('click',function(){
        $('#intro2 .first,#intro2 .second').removeClass('on')
    });


    $('#intro3 .left .menu > li').on('click',function(){
        $('#intro3 .left .menu > li').removeClass('on');
        $(this).addClass('on');

        if ( $('#intro3 .left .menu > li:nth-child(1)').hasClass('on')) {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(1)').addClass('on');
        } else if ( $('#intro3 .left .menu > li:nth-child(2)').hasClass('on')) {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(2)').addClass('on');
        } else if ( $('#intro3 .left .menu > li:nth-child(3)').hasClass('on')) {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(3)').addClass('on');
        } else if ( $('#intro3 .left .menu > li:nth-child(4)').hasClass('on')) {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(4)').addClass('on');
        } else if ( $('#intro3 .left .menu > li:nth-child(5)').hasClass('on')) {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(5)').addClass('on');
        } else {
            $('#intro3 .right .menu > li').removeClass('on');
            $('#intro3 .right .menu > li:nth-child(6)').addClass('on');
        }


    });







//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        if ( scrollTop === 0 ) {
            $('#key').queueAddClass('key4');
        } else {
            $('#key').removeClass();
        }

        if ( scrollTop >= 2940 ) {
            $('#main_header').removeClass('fix');
        } else {

        }




        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












