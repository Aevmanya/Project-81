canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle= "black";
ctx.lineWidth= 3;
ctx.rect(150, 143, 430, 200);
ctx.stroke();


ctx.beginPath()
ctx.strokeStyle= "blue";
ctx.lineWidth= 3;
ctx.arc(250, 220, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "yellow";
ctx.lineWidth= 3;
ctx.arc(305, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "black";
ctx.lineWidth= 3;
ctx.arc(360, 220, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "green";
ctx.lineWidth= 3;
ctx.arc(415, 260, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle= "red";
ctx.lineWidth= 3;
ctx.arc(470, 220, 40, 0, 2 * Math.PI);
ctx.stroke();