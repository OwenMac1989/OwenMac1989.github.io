
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


/*
c.fillStyle = 'rgba(110, 25, 69, 0.8)';

c.fillRect(50, 50, 100, 100);

c.fillStyle = 'rgba(25, 35, 110, 0.8)';

c.fillRect(150, 150, 100, 100);

c.fillStyle = 'rgba(25, 110, 83, 0.8)';

c.fillRect(300, 300, 100, 100);
*/


//console.log(canvas)

/*
//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#003399";
c.stroke();


//arc
/* c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false );
c.strokeStyle = "#660066";
c.stroke(); */
/*

for (var x = 0; x <25; x++){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(300, 300, 30, 0, Math.PI * 2, false );
    c.strokeStyle = "#660066";
    c.stroke();
}
*/
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI *2, false);
// c.strokeStyle = '#660066';
// c.stroke();



function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
    }

    this.update = function()
        {
            if (this.x + this.radius > 
                innerWidth || this.x - this.
                radius < 0)
                {
                this.dx = -this.dx;
                }
            if( this.y + this.radius > 
                innerHeight || this.y -this.
                radius < 0) 
                {
                    
                    this.dy = -this.dy;
                }
        
            this.x +- this.dx;
            this.y += this.dy;

            this.draw();
        }
    

    }


var circleArray = [];
for ( var i = 0; i < 100; i++)
{
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5);
    var dx = (Math.random() - 0.5);
     
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

console.log(circleArray);



function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++)
    {
        circleArray[i].update();
    }

}
Circle();
animate();


