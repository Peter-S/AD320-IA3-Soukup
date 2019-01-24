document.getElementById("event1").addEventListener("click", myFunction1);
document.getElementById("event2").addEventListener("mouseover", myFunction2);
document.getElementById("event2").addEventListener("mouseout", myFunction3);
document.getElementById("event2").addEventListener("click", myFunction4);
document.getElementById("event3").addEventListener("dblclick", myFunction5);
document.getElementById("event5").addEventListener("keydown", myFunction7);

function myFunction1() {
	alert ("You Clicked |WTF|");
}

function myFunction2() {
	document.body.style.backgroundColor = "chartreuse";
}

function myFunction3() {
	document.body.style.backgroundColor = "white";
}

function myFunction4() {
	document.body.style.backgroundColor = "red";
}

function myFunction5() {
	document.getElementById("time").innerHTML = Date();
}

function myFunction6(box) {
	box.style.background="yellow";
}

function myFunction7() {
	alert("You pressed a Key");
}
