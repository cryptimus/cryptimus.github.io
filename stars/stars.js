var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
ctx.translate(canvas.width/2,canvas.height/2);

let step = canvas.width;

function star(){
    this.x = Math.random()*step-step/2;
    this.y = Math.random()*step-step/2;
    this.r = 0;
    this.px = 0;
    this.py = 0;

    this.draw = function(){
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(this.px,this.py);
        ctx.lineTo(this.x,this.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fill();
    }
    this.update = function(){
        this.px = this.x;
        this.py = this.y;
        this.r+=0.2;
        this.x+=(this.x)/5;
        this.y+=(this.y)/5;
        this.draw();
    }
    this.reset  = function(){
        this.x = Math.random()*step-step/2;
        this.y = Math.random()*step-step/2;
        this.r = 0;
        this.px = 0;
        this.py = 0;
    }

}

let stars = [];
for(var i=0;i<100;i++){
     stars.push(new star());
}

function animate(){
    ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
    for(var i=0;i<stars.length;i++){
        stars[i].update();
        if(stars[i].x <-canvas.width/2 || stars[i].x > canvas.width/2 || stars[i].y <-canvas.height/2 || stars[i].y > canvas.height/2){
            stars[i].reset();
            
        }
    }
    
}

let sf = setInterval(animate,50);