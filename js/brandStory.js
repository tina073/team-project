$(function(){
    // 미션 버튼
    $(".missionBtn").hover(function(){ 
        let missionIcon = $(this).find("img");
        let originalWidth = missionIcon.width();
        let newWidth = originalWidth + 20;
        
        missionIcon.data('originalWidth', originalWidth); // 원래의 width 값을 data 속성에 저장 hover-out에 originalWidth의 값을 넘겨주기 위해서
        
        missionIcon.stop().animate({width: newWidth + "px"});
    }, function(){
        let missionIcon = $(this).find("img");
        let originalWidth = missionIcon.data('originalWidth');
        
        missionIcon.stop().animate({width: originalWidth + "px"});
    });

     //footer가 보였을때 top버튼 나타나게 하기 
     var $quickTopBtn = $('.quickTopBtn');
     var $footer = $('#footer');

    // 'Top' 버튼 클릭 시 페이지 상단으로 스크롤
$quickTopBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});
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