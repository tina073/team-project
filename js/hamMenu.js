$(function(){

	$(".hamBtn").click(function(){
		//오픈 메뉴
		let hamBg = $(".hamBg");
		
		if (hamBg.css("right") === "0px") {
			hamBg.animate({right: "-100%"});
			$(".gnb").stop().hide();
			$("h1 img").attr("src","images/logo_b.png");
			$(".hamBtn span").css("background-color","#000");
		} else {
			hamBg.animate({right: "0"});
			$(".hamBtn span").css("background-color","#fff");
			setTimeout(function(){
				$(".gnb").stop().show().addClass("open");
				$("h1 img").attr("src","images/logo_w.png");
			}, 300);
		}
	});

	//햄버거 버튼 x로 바뀌는 효과
	const menuTrigger = document.querySelector('.hamBtn');
	menuTrigger.addEventListener('click', (event) => {
	event.currentTarget.classList.toggle('active-1');
	});
})