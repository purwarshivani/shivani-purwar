//


function moveLeft(){
 	var circle = document.getElementById('circle');
 	var currentLeft = circle.offsetLeft;
 	circle.style.left = currentLeft - 1 + 'px';
 	
 }
function moveRight(){
	var circle = document.getElementById('circle');
	var currentLeft=circle.offsetLeft;
	circle.style.left= currentLeft + 1 +'px';

}
function moveTop(){
	var circle = document.getElementById('circle');
	var currentTop=circle.offsetTop;
	circle.style.top= currentTop - 1 +'px';
}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentTop=circle.offsetTop;
	circle.style.top= currentTop + 1 +'px';

}	
var interval;
 function ClickFunction(event){
 	clearInterval(interval);
 	if(event.keyCode == 37) interval = setInterval(moveLeft, 7);
 	if(event.keyCode == 39) interval = setInterval(moveRight, 7);
 	if(event.keyCode==38) interval = setInterval(moveTop, 7);
 	if(event.keyCode==40) interval = setInterval(moveDown,7);
 }       

function myLoad() {
  
  document.addEventListener('keydown', ClickFunction);
  
}

document.addEventListener('DOMContentLoaded', myLoad);
