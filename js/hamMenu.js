$(function(){

	$(".hamBtn").click(function(){
		let hamBg = $(".hamBg");
		
		if (hamBg.css("right") === "0px") {
			hamBg.animate({right: "-100%"});
			$("#menu").stop().hide();
			$("h1 img").attr("src","images/logo_b.png")
			setTimeout(function(){
				$(".hamBtn img").attr("src","images/icon_ham_b.svg");
			}, 300);
		} else {
			hamBg.animate({right: "0"});
			$(".hamBtn img").attr("src","images/icon_ham.svg");
			setTimeout(function(){
				$("#menu").stop().show().addClass("open");
				$("h1 img").attr("src","images/logo_w.png");
			}, 300);
		}
	});
	
})