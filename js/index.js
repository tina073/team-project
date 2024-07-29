$(function() {

    // 동영상 skip버튼 누르면 사라짐
    $('#skipButton').click(function() {
        $('.video').hide(); 
        $('#fixed').show();
        $('body').css('overflow',"auto"); //비디오 없어지면 스크롤 활성화 시켜 
    });


    // 페이지 로드 시 비디오가 보이는 경우 메뉴 바 숨기기
    if ($('.video').is(':visible')) {
        $('#fixed').hide();
        $('body').css('overflow', 'hidden'); // 비디오가 보일 때 스크롤 비활성화
    }

    //top버튼 누르면 맨위로 올라가기
    $(".bartop").click(function(e){
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 },500); 
    });

    //스크롤 내리면 위에 메뉴바 고정됨
    $(window).on('scroll', function() {
        var header = $('#fixed');
        var scrollPosition = $(this).scrollTop();
    
        if (scrollPosition > 0) {
          header.addClass('scrolled');
          $("#fixed img").attr("src","images/logo_n.png");
        } else {
          header.removeClass('scrolled');
          $("#fixed img").attr("src", "images/logo_w.png");
        }
      });

      $("#header").mouseenter(function(){
        $('.mainimage').css({ 'opacity': 0}).animate({
            'opacity': 1
          }, 2000);
          
          $('.mainletter').css({ 'opacity': 0}).animate({
            'opacity': 1,'left':"100px",
          }, 2000);
      });
      

      function animateCount($element, end, duration) {
        $({ val: 0 }).animate({ val: end }, {
            duration: duration,
            step: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $element.text(num);
            },
            complete: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $element.text(num);
            }
        });
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let hasAnimated = false;
    $(window).on('scroll', function() {
        var fifthOffset = $('#fifth').offset().top;
        var fifthHeight = $('#fifth').outerHeight();
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();


        if (scrollTop > fifthOffset - windowHeight && scrollTop < fifthOffset + fifthHeight) {
            if (!hasAnimated) { // 애니메이션이 아직 실행되지 않은 경우
                animateCount($('.countNum1'), 100, 2000);
                animateCount($('.countNum2'), 300, 2000);
                animateCount($('.countNum3'), 54456, 2000);
                // #fifthMent와 #countMent의 초기 상태를 설정합니다.
                $('#fifthMent, .countMent').css({
                    opacity: 0,
                    position: 'relative', // 애니메이션을 위한 초기 상태
                    display: 'block' // display가 block으로 설정되지 않은 경우 대비
                });

                // 위에서 아래로 나타나게 하는 애니메이션
                $('#fifthMent').animate({
                    opacity: 1,
                    top:"30px"
                }, 2000); // 애니메이션 시간

                $('.countMent').animate({
                    opacity: 1,
                    top:"30px" // 최종 위치
                }, 2000); // 애니메이션 시간
                hasAnimated = true; // 애니메이션이 실행되었음을 표시
            }
        } else {
            hasAnimated = false; // 화면 밖으로 사라졌을 때 플래그를 리셋
        }

    });

   
$("article").on("mouseover", function() {
    $(this).stop().animate({"width": "35%"}, 500, function() {
        $(this).find("h3").stop().animate({"right": "10px"}, 400);
        $(this).find("p").stop().animate({"right": "10px"}, 600);
    });
    $(this).find("img").stop().animate({"opacity": "0.9"}, 1200);
});
$("article").on("mouseout",function(){
    $(this).stop().animate({"width":"20%"}, 400);
    $(this).find("img").stop().animate({"opacity":"0"}, 2000);
    $(this).find("h3").stop().animate({"right":"-310px"}, 200);
    $(this).find("p").stop().animate({"right":"-310px"}, 500);
});
    
        });
