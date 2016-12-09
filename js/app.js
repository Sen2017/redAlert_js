console.log("Sanity Check");

function hello() {
	console.log("hello");
	var changeDiv = document.getElementById('divElement');
	changeDiv.innerHTML = "Ohmygawd COOL";
	console.log(changeDiv);
}

function soFast(){
	console.log("moo!");
	var classElements = document.getElementsByClassName("firstPeriod");
	console.log(classElements);
	classElements[0].innerHTML = "wat";
}