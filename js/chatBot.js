$(document).ready(function() {
    // 챗봇 버튼 클릭 이벤트
    $(".bar").find(".chat").click(function() {
        $(".chatIntro").show();
    });

    // 챗봇 닫기 버튼 클릭 이벤트
    $("#close-chat").click(function() {
        $(".chatIntro").hide();
    });

    // 챗봇 시작 버튼 클릭 이벤트
    $(".send").click(function() {
        $(".chatMain").show();
        $(".chatIntro").hide();
    });

    // 메인 챗봇 로고 클릭 이벤트
    $("#main-chat-logo2").click(function() {
        $(".chatIntro").show();
        $(".chatMain").hide();
    });

    // 메인 챗봇 닫기 버튼 클릭 이벤트
    $("#main-close-chat").click(function() {
        $(".chatMain").hide();
    });
});