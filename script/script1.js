var theme=0;
function toggle() {
	if(theme==0){
		document.getElementById('pagestyle').setAttribute('href', "css/styleinvert.css");
		theme=1;
	}
	else{
		document.getElementById('pagestyle').setAttribute('href', "css/style.css");
		theme=0;
	}
				
}	
		
		
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