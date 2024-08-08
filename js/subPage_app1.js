$(document).ready(function() {
    let sections = $('.intro, .home, .park, .myCar');
    let currentSectionIndex = 0;
    let isScrolling = false;

    // function scrollToSection(index) {
    //     if (index >= 0 && index < sections.length) {
    //         isScrolling = true;
    //         $('html, body').animate({
    //             scrollTop: $(sections[index]).offset().top
    //         }, 1000, function() {
    //             isScrolling = false;
    //         });
    //         currentSectionIndex = index;
    //     }
    // }

    function handleScroll(event) {
        if ($(window).width() >= 1200) {
            if (isScrolling) return;

            if (event.originalEvent.deltaY > 0) {
                // 스크롤 다운
                scrollToSection(currentSectionIndex + 1);
            } else {
                // 스크롤 업
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }

    function handleAnimation() {
        if ($(window).width() >= 1200) {
            let scrollTop = $(this).scrollTop();

            if (scrollTop >= 950 && scrollTop <= 1680) {
                $(".introImg").stop(true).css({opacity: 0.7, top: "40px"}).animate({top: "0px", opacity: 1}, 1000);
            } else if (scrollTop >= 1680 && scrollTop <= 2360) {
                $(".homeImg").stop(true, true).css({opacity: 0.7, top: "40px"}).animate({top: "0px", opacity: 1}, 1000);
            } else if (scrollTop >= 2360 && scrollTop <= 3080) {
                $(".parkImg").stop(true, true).css({opacity: 0.7, top: "40px"}).animate({top: "0px", opacity: 1}, 1000);
            } else if (scrollTop > 3080) {
                $(".myCarImg").stop(true, true).css({opacity: 0.7, top: "40px"}).animate({top: "0px", opacity: 1}, 1000);
            }
        }
    }

    $(window).on('wheel', handleScroll);
    $(window).scroll(handleAnimation);

    // 윈도우 리사이즈 이벤트에 대응하여 필요 시 애니메이션 및 스크롤 이벤트 비활성화
    $(window).resize(function() {
        if ($(window).width() < 1200) {
            isScrolling = false;
        }
    });

    var $quickTopBtn = $('.top');
     var $footer = $('#footer');

    // 'Top' 버튼 클릭 시 페이지 상단으로 스크롤
    $quickTopBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

     //footer가 보였을때 top버튼 나타나게 하기 
     
 
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
});