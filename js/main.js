const menuToggle = document.querySelector('#menu-toggle');
const navListHolder = document.querySelector(".nav-list-holder");


menuToggle.onclick = function ()  {
	menuToggle.classList.toggle('menu-icon-active');
 navListHolder.classList.toggle("nav-list-holder--visible");
};








var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	
if($(window).scrollTop() >= 20){
	
	
	
	$btnTop.fadeIn();
}else {
	
	$btnTop.fadeOut();
}	
	
});

$btnTop.on("click", function(){
	
	$("html,body").animate({scrollTop:0}, 1500)
	
	
});