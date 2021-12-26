
var noOfSquares=6;
//color plate
var arr=[];
//color picker for target
var picked;
//to get all the square div
var squares = document.getElementsByClassName("square");
//to get the RGB display
var targetColor = document.getElementById("targetcolor");
//messsage that can be empty,tryagain,or correct
var message = document.getElementById("message");
//heading
var head = document.querySelector("h1");
//reset Button
var reset = document.getElementById("newcolor");

init();

function init(){

//generate random color plate
arr = generateRandomColor(noOfSquares);
//get targetcolor randomly from the aray size;
picked = arr[randomPickedColorIndex()];
//updating target RGB display
targetColor.textContent=picked;	
	
}
for(var i=0;i<squares.length;i++){
	//setting square color one by one to plate colors
	squares[i].style.backgroundColor=arr[i];
	//adding eventlistener to all squares
	squares[i].addEventListener("click",function(){
		if (picked===this.style.backgroundColor){
			
			message.textContent="correct";
			message.style.color="green";
		//when correct set everything to the target color and set new color to play again
		changeColor(this.style.backgroundColor);
				reset.textContent="Play Again?";
		}
			else{
					message.textContent="try again";
					message.style.color="red";
					//to hide the wrong square, we will set it to background color
					this.style.backgroundColor ="#232323";
	
			}
	})
}
//setting eventlistener for reset button
reset.addEventListener("click",resetIn);

//to get the random color from existiong plate;
function randomPickedColorIndex(){
	
	return Math.floor(Math.random()*arr.length);
}

function generateRandomColor(limit)
{
	var color=[];
	for(var i=0;i<limit;i++)
		color.push(rgbGenerator());
	return color;	
}
function rgbGenerator(){
	
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")" ;	
}
//when correct,change everything to correct color
function changeColor(color){
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=color;
	head.style.backgroundColor=color;
		
}
function resetIn(){
	arr=generateRandomColor(noOfSquares);
	picked=arr[randomPickedColorIndex()];
	targetColor.textContent=picked;
	message.textContent="";
	head.style.backgroundColor="steelblue";
		
		for(var i=0;i<squares.length;i++)
			squares[i].style.backgroundColor=arr[i];
}
