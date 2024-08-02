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
});