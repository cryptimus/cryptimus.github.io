
$(document).ready(function(){
    $("#btn").click(function(){
		$(".college, .skillicon").toggleClass("invertfilter");
		$("body").toggleClass("invertbody");
		$("hr").toggleClass("inverthr");
		$(".theme").toggleClass("inverttheme");
		$(".overlay").toggleClass("invertoverlay");
		$(".btn").toggleClass("invertbtn");
		$(".contact").toggleClass("invertcontact");
		$(".contact-icons").toggleClass("invertcontact-icons");
    });
});

		
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}