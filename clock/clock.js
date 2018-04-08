var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.translate(canvas.width/2,canvas.height/2);

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.translate(canvas.width/2,canvas.height/2);
})


let p = Math.PI;
let w = .01;
let r = 7;

function clk(){
    requestAnimationFrame(clk);
    ctx.clearRect(-window.innerWidth/2,-window.innerHeight/2,window.innerWidth,window.innerHeight);
    let d = new Date();
    let sc = d.getSeconds();
    let mn = d.getMinutes();
    let hr = d.getHours()%12;
    let sca = sc*(2*p/60)-p/2;
    let mna = mn*(2*p/60)-p/2;
    let hra = hr*(2*p/12)-p/2 + mna/12;
    let hras = Math.sin(hra);
    let mnas = Math.sin(mna);
    let scas = Math.sin(sca);
    let hrac = Math.cos(hra);
    let mnac = Math.cos(mna);
    let scac = Math.cos(sca);
    let hrad = 270;
    let mrad = 200;
    let srad = 130;
    let crad = 230;

    let clka = -p/2+p/6-0.05;
    for(let i=1;i<13;i++){
        ctx.fillStyle = '#b30059';
        if(i%3==0){
            ctx.font="40px Georgia";
        }
        else{
            ctx.font="20px Georgia";
        }
       
        ctx.fillText(i, crad*Math.cos(clka),crad*Math.sin(clka));
        clka +=p/6;
    }
    
    ctx.fillStyle = 'white';
    ctx.font="40px Georgia";
    ctx.fillText(hr+" : "+mn+" : "+sc ,-80,10);

    ctx.lineWidth=60;
    ctx.strokeStyle = '#732673';
    ctx.beginPath();
    ctx.arc(0,0,hrad,hra-w,hra+w);
    ctx.stroke();
    ctx.strokeStyle = '#0000cc';
    ctx.beginPath();
    ctx.arc(0,0,mrad,mna-w,mna+w);
    ctx.stroke();
    ctx.strokeStyle = '#00cc00';
    ctx.beginPath();
    ctx.arc(0,0,srad,sca-w,sca+w);
    ctx.stroke();

    ctx.fillStyle = '#732673';
    ctx.beginPath();
    ctx.arc(hrad*hrac,hrad*hras,r,0,2*Math.PI);
    ctx.fill();
    ctx.fillStyle = '#0000cc';
    ctx.beginPath();
    ctx.arc(mrad*mnac,mrad*mnas,r,0,2*Math.PI);
    ctx.fill();
    ctx.fillStyle = '#00cc00';
    ctx.beginPath();
    ctx.arc(srad*scac,srad*scas,r,0,2*Math.PI);
    ctx.fill();


    ctx.lineWidth=7;
    ctx.strokeStyle = '#732673';
    ctx.beginPath();
    ctx.arc(0,0,hrad,0,2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = '#0000cc';
    ctx.beginPath();
    ctx.arc(0,0,mrad,0,2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = '#00cc00';
    ctx.beginPath();
    ctx.arc(0,0,srad,0,2*Math.PI);
    ctx.stroke();



}

clk();