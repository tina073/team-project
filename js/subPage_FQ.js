$(function(){
    //카테고리 버튼 체인지 컬러
    $(".categoryBtn_wrap li").click(function(){
        $(".categoryBtn_wrap li").removeClass();
        $(this).addClass("on");
    })

    //게시판 목록 체인지
    $(".categoryBtn_wrap li").click(function(){
        const btnidx = $(this).index();
        $(".board").eq(btnidx).show().siblings().hide();
    })

    //아코디언 박스 슬라이드
    $(".boardWrap li").click(function(){
        let selectAccordion = $(this).find(".accordionBox");
        $(".accordionBox").not(selectAccordion).removeClass("slide");
        selectAccordion.toggleClass("slide");
    })
})
