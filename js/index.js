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
    // $(".quickTopBtn").click(function(e){
    //         e.preventDefault();
    //         $('html, body').animate({ scrollTop: 0 },500); 
    // });
    //footer가 보였을때 top버튼 나타나게 하기 
    var $quickTopBtn = $('.quickTopBtn');
    var $footer = $('#footer');

    $(window).on('scroll', function() {
        var footerOffset = $footer.offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        // footer가 화면에 보일 때 quickTopBtn에 'show' 클래스 추가
        //footer가 보이면 이 높이 값보다 윈도우 bottom이 커지니까 footer가 보인다구 할수잇음
        //이때 class show추가 ! 
        if (windowBottom >= footerOffset) {
            $quickTopBtn.addClass('show');
        } else {
            $quickTopBtn.removeClass('show');
        }
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

      function checkWindowSize() {
        if ($(window).width() <= 520) {
            $("article").off("mouseover mouseout");
        } else {
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
            
        }
    }

    // 초기 윈도우 크기 체크
    checkWindowSize();

    // 윈도우 리사이즈 이벤트 핸들링
    $(window).resize(function() {
        checkWindowSize();
    });


      function applyAnimation() {
        if (window.matchMedia("(max-width: 520px)").matches) {
            // 화면 크기가 520px 이하일 때 애니메이션 비활성화
            $('#header').off('mouseenter'); 
            $('#header').mouseenter(function() {
                $('.mainimage').css({ 'opacity': 0 }).animate({
                    'opacity': 1
                }, 2000);

                $('.mainletter').css({ 'opacity': 0 }).animate({
                    'opacity': 1, top:"600px"
                }, 2000);
            });
        } else {
            // 화면 크기가 520px 초과일 때 애니메이션 적용
            $('#header').mouseenter(function() {
                $('.mainimage').css({ 'opacity': 0 }).animate({
                    'opacity': 1
                }, 2000);

                $('.mainletter').css({ 'opacity': 0 }).animate({
                    'opacity': 1, 'left': "100px"
                }, 2000);
            });
        }
    }

    // 문서가 준비되면 애니메이션 적용
    applyAnimation();

    // 화면 크기 변경 시 애니메이션 적용 재검토
    $(window).on('resize', applyAnimation);
      

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





var naAnimated = false; // 애니메이션이 실행되었는지 여부를 추적

$(window).on('scroll', function() {
    var thirdOffset = $('#third').offset().top;
    var thirdHeight = $('#third').outerHeight();
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (!hasAnimated && scrollTop > thirdOffset - windowHeight && scrollTop < thirdOffset + thirdHeight) {
        $('.left').addClass('animate');
        naAnimated = true; // 애니메이션이 실행되었음을 표시
    } else if (scrollTop < thirdOffset - windowHeight || scrollTop > thirdOffset + thirdHeight) {
        $('.left').removeClass('animate');
        naAnimated = false; // 애니메이션이 다시 실행될 수 있도록 플래그를 리셋
    }
});

// addpage 스크롤 내리면 옆에서 이미지 나타나게 ! ! ! 
var $addpageImg = $('#addpage img');
var isAnimated = false;

// 스크롤 이벤트
$(window).on('scroll', function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var addpageTop = $('#addpage').offset().top;
    var addpageBottom = addpageTop + $('#addpage').height();

    // #addpage가 화면에 나타날 때
    if (windowTop + windowHeight >= addpageTop && windowTop <= addpageBottom) {
        if (!isAnimated) {
            $addpageImg.addClass('slide-in'); // 슬라이드 인 클래스 추가
            isAnimated = true;
        }
    } else {
        if (isAnimated) {
            $addpageImg.removeClass('slide-in'); // 슬라이드 인 클래스 제거
            isAnimated = false;
        }
    }
});

let currentSection = 0;
// 섹션 엘리먼트들
const sections = ['#header', '#second', '#third'];

// 스크롤 이벤트 핸들러
$(window).on('wheel', function(e) {
 if ($('html, body').is(':animated')) return;

    if (e.originalEvent.deltaY > 0) {
        // 스크롤 다운
        if (currentSection < sections.length - 1) {
            currentSection++;
            $('html, body').animate({
                scrollTop: $(sections[currentSection]).offset().top
            }, 1000);  // 애니메이션 시간을 1000ms로 설정
            console.log($(sections[currentSection]).offset().top);
        }
        
    } else {
        // 스크롤 업
        if (currentSection > 0 && currentSection < sections.length - 1) {
            currentSection--;
            $('html, body').animate({
                scrollTop: $(sections[currentSection]).offset().top
            }, 1000);  // 애니메이션 시간을 1000ms로 설정
            console.log($(sections[currentSection]).offset().top);
        }
    }
});

// 'Top' 버튼 클릭 시 페이지 상단으로 스크롤
$quickTopBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    currentSection = 0;
    console.log($(sections[currentSection]).offset().top);
});
        });
