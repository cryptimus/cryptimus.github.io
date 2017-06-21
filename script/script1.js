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
		