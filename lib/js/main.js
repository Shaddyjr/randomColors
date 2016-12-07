var x; //Must declare global variables outside of functions if they are to be shared between functions

setup = function(){
	createCanvas(600,500);
	x=0;
	frameRate(1);
}

draw = function(){
	background(100);
	x += 1;
	
	//Grayscale circle
	fill(200); //Single number means Grayscale
	ellipse(x,100, 50,50);

	//RGB circle
	fill(200,100,0); //3 numbers means RGB (Red, Green, Blue)
	ellipse(x,200, 50,50);
	
	//Random grayscale circle
	fill(random(225)); 
	//Every draw loop will make a new color.
	ellipse(x,300, 50,50);

	//Random colors circle
	fill(random(225),random(225),random(225)); 
	//Every draw loop will make a new color.
	ellipse(x,400, 50,50);
}
