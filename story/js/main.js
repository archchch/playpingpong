
$(document).ready(function() {


    $('#header .gnb > li').mouseenter(function(){ // .gnb 자식 li를 마우스 오버했을때
        // this = .gnb 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('.png','_1.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });

    $('#header .gnb > li').mouseleave(function(){ // .gnb 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src',$(this).children().children('img').attr('src').replace('_1.png','.png'))
    })	;





    Logic();

    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true
                $(".top_button").removeClass("on");
            } else { // 01 = false
                $('.top_button').addClass('on');
            }
            if(index ==2){// 02 = true
                $("#section02 .title2").addClass("on");
            }else{//02 = false
                $("#section02 .title2").removeClass("on");
            }
            if(index ==3){// 03 = true
                $("#section03 .title3").addClass("on");
            }else{//02 = false
                $("#section03 .title3").removeClass("on");
            }
            if(index ==4){// 04 = true
                $("#section04 .title4").addClass("on");
            }else{//02 = false
                $("#section04 .title4").removeClass("on");
            }
            if(index ==5){// 05 = true
                $("#section05 .title5").addClass("on");
            }else{//02 = false
                $("#section05 .title5").removeClass("on");
            }
            if(index ==6){// 05 = true
                $("#section06 .title6").addClass("on");
            }else{//02 = false
                $("#section06 .title6").removeClass("on");
            }
            if(index ==7){// 05 = true

            }else{//02 = false

            }
            if(index ==8){// 05 = true
                $("#section08 .title8").addClass("on");
            }else{//02 = false
                $("#section08 .title8").removeClass("on");
            }
            if(index ==9){// 05 = true
                $("#section09 .title9").addClass("on");
            }else{//02 = false
                $("#section09 .title9").removeClass("on");
            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }

        }
    });



});