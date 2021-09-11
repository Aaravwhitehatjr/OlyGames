
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430 , 200);
ctx.stroke();


canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.arc(300 , 210 ,40 ,0 ,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="black";
ctx.arc( 350,210 ,40 ,0 ,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="red";
ctx.arc( 400,210 ,40 ,0 ,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.arc( 320, 260, 40 ,0 ,2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="green";
ctx.arc( 380, 260 ,40 ,0 ,2 * Math.PI);
ctx.stroke();

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}



