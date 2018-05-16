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
function moveLeft(){
	var circle=document.getElementById('circle');
	var currentLeft=circle.offsetLeft;
	circle.style.left=currentLeft -1 + 'px';
}
function moveRight(){
	var circle=document.getElementById('circle');
	var currentLeft=circle.offsetLeft;
	circle.style.left=currentLeft +1 + 'px';
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
function clickAgain(event){
	clearInterval(interval);
	if (event.keyCode==37) interval =setInterval(moveLeft, 8);
	if (event.keyCode==39) interval =setInterval(moveRight, 8);
	if (event.keyCode==38) interval =setInterval(moveUp, 8);
	if (event.keyCode==40) interval =setInterval(moveDown, 8);
	// var cir=document.getElementById('circle');
	// var currentLeft=circle.offsetLeft;

	// circle.style.left=currentLeft -10 + 'px';
}

function myLoad(){
	//var cir=document.getElementById('circle');
	//cir.addEventListener('click',clickAgain);
	document.addEventListener('keydown',clickAgain);

}

document.addEventListener('DOMContentLoaded',myLoad);