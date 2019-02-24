function colorchange(){
    var d=document.getElementById("can")
    d.style.background="orange"
    var ctx=d.getContext("2d")
    ctx.fillStyle="#19FF99"
    ctx.font="30px Roboto"
    ctx.fillText("Welcome ",80,60)
}
function reset(){
	var d=document.getElementById("can1")
	var d1=document.getElementById("can2")
	var ctx2=d1.getContext("2d")
    var ctx=d.getContext("2d")
	ctx.clearRect(0,0,d.width,d.height)
	ctx2.clearRect(0,0,d.width,d.height)
	
	
}
var pic;
var redfil;
var test;

function nightmode(){
	var d=document.getElementById("black");
	d.className="nightmode";

}
function make_rec(){
	var d=document.getElementById("can")
	var ctx=d.getContext("2d");
	ctx.fillStyle="green"
	ctx.fillRect(20,20,25,25);
	ctx.fillRect(60,20,50,50);
	ctx.fillStyle="Black"
	ctx.font="50px Arial"
	ctx.fillText("Hayy",50,80)
}
function doclr(){
	var d=document.getElementById("can")
	var ctx=d.getContext("2d");
	ctx.clearRect(0,0,d.width,d.height)
	d.style.background="orange"
}
//color change by input 
function dochange(){
	var d=document.getElementById("change")
	var color=document.getElementById("do")
	var color_input=color.value
	d.style.background=color_input;

}
function dosldr(){
	var d=document.getElementById("can1")
	var input=document.getElementById("sldr")
	var input_value=input.value
	var ctx=d.getContext("2d")
	ctx.clearRect(0,0,d.width,d.height)
	ctx.fillStyle="yellow"
	ctx.fillRect(10,10,input_value,input_value)
}
function doalert(){
	var d=document.getElementById("inp")
	var dd=d.value
	alert("you choose " + dd)
}
//upload the image 
function upload(){
	var d=document.getElementById("can1")
	
	var image=document.getElementById("fInput")
	 pic=new SimpleImage(image)
	 redfil=new SimpleImage(image)
	 test=new SimpleImage(image)
	var ctx=d.getContext("2d")
	pic.drawTo(d)
}
//make black & white 
function makeGray(){
	
	for (var pixel of pic.values()){
		
		var avg=(pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3
		pixel.setRed(avg)
		pixel.setBlue(avg)
		pixel.setGreen(avg)
	}
	var d=document.getElementById("can2")
	pic.drawTo(d)
	
}
//Red color filter 
function redFilter(){
    var d=document.getElementById("can2")
    var ctx=d.getContext("2d")
	ctx.clearRect(0,0,d.width,d.height)
	
	
	for (var pixel of redfil.values()){
		var avg=(pixel.getGreen()+pixel.getBlue()+pixel.getRed())/3
		if (avg<128){
		pixel.setRed(2*avg)
		pixel.setBlue(0)
		pixel.setGreen(0)
		}
	else{
		pixel.setRed(255)
		pixel.setBlue(2*avg-255)
		pixel.setGreen(2*avg-255)
	}
    }
    
    
   
	redfil.drawTo(d)

}
function Blue_filter(){
	var d=document.getElementById("can2")
    var ctx=d.getContext("2d")
	ctx.clearRect(0,0,d.width,d.height)
	for (pixel of test.values()){
		avg=pixel.getGreen()+pixel.getBlue()+pixel.getRed()/3
		if (pixel.getY()<test.Height/2 && pixel.getX()<test.getWidth){
			pixel.setRed(255)
			pixel.setGreen(255)
			pixel.setBlue(100)
			
		}
		else{
			pixel.setRed(75)
			pixel.setGreen(68)
			pixel.setBlue(255)

		}
	}
	
	var d =document.getElementById("can2")
	test.drawTo(d)

}
