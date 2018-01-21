var res=0,inp1=0,inp2=0,opt="";

		function setreset(){
			document.getElementById("input").innerHTML  = 0;
			res=0;
			inp1=0;
			inp2=0;
			opt="";
		}

		function getinput(x){
			var inp;
			switch (x) {
					case 0:
						inp = 0;
						break;
					case 1:
						inp = 1;
						break;
					case 2:
						inp = 2;
						break;
					case 3:
						inp = 3;
						break;
					case 4:
						inp = 4;
						break;
					case 5:
						inp = 5;
						break;
					case 6:
						inp = 6;
						break;
					case 7:
						inp = 7;
						break;
					case 8:
						inp = 8;
						break;
					case 9:
						inp = 9;
			}
			document.getElementById("input").innerHTML  += inp ;
		}
		

		function setopt(x){

			inp1 = Number(document.getElementById("input").innerHTML);
			document.getElementById("input").innerHTML  = 0; 
			switch (x) {
					case '/':
						opt = '/';
						break;
					case '*':
						opt = '*';
						break;
					case '-':
						opt = '-';
						break;
					case '+':
						opt = '+';



			}

			
		}

		function getres(){

			inp2 = Number(document.getElementById("input").innerHTML);

			res = eval(inp1+opt+inp2);

			document.getElementById("input").innerHTML  = res; 
			

			
		}

		function putdec(){
			var ele = document.getElementById("input").innerHTML.toString();
			ele = ele.concat(".");
			document.getElementById("input").innerHTML = ele;
		}
