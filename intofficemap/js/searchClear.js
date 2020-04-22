let button1 = document.getElementById("clearButton");
let button2 = document.getElementById("searchButton");
let inputT = document.getElementById("textInput");
let brvert = document.getElementById("brvert");

inputT.oninput =  function() {
	if (this.value != "") { 
		button2.disabled = false; 
		button2.style.borderRadius = '0';
		button1.style.display = 'block';
		brvert.style.display = 'block';
	}
	else {
		inputT.value = ""; 
		button2.disabled = true; 
		button2.style.borderRadius = '0px 10px 10px 0px';
		button1.style.display = 'none';
		brvert.style.display = 'none';
	}
};
button1.onclick = function(e) {
	inputT.value = ""; 
	button2.disabled = true; 
	button2.style.borderRadius = '0px 10px 10px 0px';
	button1.style.display = 'none';
	brvert.style.display = 'none';
	document.getElementById("overlay-2").style.display = "none";
}