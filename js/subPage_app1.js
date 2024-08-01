$(function() {
    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();

        // 각 섹션의 높이 계산
        let introHeight = $('.intro').height();
        let homeHeight = $('.home').height();
        let parkHeight = $('.park').height();
        let myCarHeight = $('.myCar').height();

        // 스크롤 위치에 따라 각 이미지의 top을 조정
        $('.introImg').css('top', `${Math.max(100 - (scrollTop / introHeight * 100), 0)}vh`);
        $('.homeImg').css('top', `${Math.max(100 - ((scrollTop - introHeight) / homeHeight * 100), 0)}vh`);
        $('.parkImg').css('top', `${Math.max(100 - ((scrollTop - (introHeight + homeHeight)) / parkHeight * 100), 0)}vh`);
        $('.myCarImg').css('top', `${Math.max(100 - ((scrollTop - (introHeight + homeHeight + parkHeight)) / myCarHeight * 100), 0)}vh`);
    });

    
    
});