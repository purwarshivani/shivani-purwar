// function changeOpacity(){
// 	var cir=document.getElementById('circle');
// 	//circle.style.opacity=currentOpacity+0.1;
// 	var currentOpacity=parseFloat(circle.style.opacity);
// 	// if (currentOpacity<1) {
// 	// 	circle.style.opacity=currentOpacity+0.01;
// 	// }
// 	if (currentOpacity>=0.2) {
// 	 	circle.style.opacity=currentOpacity-0.01;
// 	 }
// }
// function clickFunction(){
// 	//circle.style.background='blue';
// 	//alert('Button Clicked');
// 	setInterval(changeOpacity,100);
// }
// function myLoad(){
// 	var cir=document.getElementById('circle');
// 	cir.addEventListener('click',clickFunction);

// 	// circle.style.opacity='0.1';
// 	circle.style.opacity='1';

// }

// document.addEventListener('DOMContentLoaded',myLoad);
//
function moveLeft(){
	var circle=document.getElementById('circle');
	var currentLeft=circle.offsetLeft;
	circle.style.left=currentLeft - 1 + 'px';
}

function moveRight(){
	var circle=document.getElementById('circle');
	var currentLeft=circle.offsetLeft;
	
	circle.style.left=currentLeft + 1 + 'px';
		
	
}
function moveUp(){
	var circle=document.getElementById('circle');
	var currentTop=circle.offsetTop;
	
		circle.style.top=currentTop -1 + 'px';
	
}
function moveDown(){
	var circle=document.getElementById('circle');
	var currentTop=circle.offsetTop;
	
		circle.style.top=currentTop +1 + 'px';
	
}
var interval;
var leftPressed = false;
var rightPressed=false;
var topPressed=false;
var downPressed=false;

function myKeyDown(event){
	clearInterval(interval);
	if (event.keyCode==37) leftPressed=true;
	if (event.keyCode==39) rightPressed=true;
	if (event.keyCode==38) topPressed=true;
	if (event.keyCode==40) downPressed=true;
	// var cir=document.getElementById('circle');
	// var currentLeft=circle.offsetLeft;

	// circle.style.left=currentLeft -10 + 'px';
}

function myKeyUp(event){
	if(event.keyCode==37) leftPressed=false;
	if(event.keyCode==39) rightPressed=false;
	if(event.keyCode==38) topPressed=false;
	if(event.keyCode==40) downPressed=false;
}
function movement(){
	if(leftPressed==true) moveLeft();
	if (rightPressed==true) moveRight();
	if (topPressed==true) moveUp();
	if(downPressed==true) moveDown();
}
function myLoad(){
	//var cir=document.getElementById('circle');
	//cir.addEventListener('click',clickAgain);
	document.addEventListener('keydown',myKeyDown);
	document.addEventListener('keyUp' ,myKeyUp );

	interval=setInterval(movement, 8);

}

document.addEventListener('DOMContentLoaded',myLoad);