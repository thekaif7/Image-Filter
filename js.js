function colorchange(){
    var d=document.getElementById("can")
    d.style.background="orange"
    var ctx=d.getContext("2d")
    ctx.fillStyle="#19FF99"
    ctx.font="30px Roboto"
    ctx.fillText("Welcome ",80,60)
}
function reset(){
    var d=document.getElementById("can")
    var ctx=d.getContext("2d")
    ctx.clearRect(0,0,d.width,d.height)
	
	d.style.background="#FFD4CD"
}