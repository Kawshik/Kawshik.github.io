//Create the bars and the bar array
var bars;

var barsCustom = [101,364,69,438,83,383,279,73,472,320,251,76,51,75,345,439,26,324,284,405,226,443,80,328,415,198,24,270,273,165,104,457,15,145,7,86,269,243,156,147,84,156,224,63,160,236,15,210,155,481,449,500,212,386,24,110,296,360,495,233,319,345,72,300,78,136,409,127,140,442,468,411,177,126,219,238,343,181,238,364,477,112,407,230,256,443,274,381,292,244,419,133,30,25,369,229,77,35,283,314];

var MAX_ARRAY_SIZE = 100;
var MAX_HEIGHT_VALUE = 500;


function createBars(){
	bars = new Array();
	for (var i = 0; i < MAX_ARRAY_SIZE; i++) {
		
		var bar = document.createElement("div");
		
		bar.classList.add("bar-thick");		//creates thick bars of size 5px
		// bar.classList.add("bar-thin");	//creates thin bars of size 1px
		
		var height = Math.floor(Math.random() * (MAX_HEIGHT_VALUE - 5 + 1) + 5);
		
		bars.push(height);					//creates bars with random heights
		// bars.push(barsCustom[i]);		//creates bars with custom heights
		

		bar.style["height"] = height + "px";           //set the height of the bars with the random array values
		// bar.style["height"] = barsCustom[i] + "px"; //set the height of the bars with the custom array values
		
		bar.setAttribute('data-index', i+'');

		var container = document.getElementById("bar_container");
		container.appendChild(bar);
	}
}


function removeAllBars() { 
    var e = document.getElementById("bar_container");
    var child = e.lastElementChild;  
    while (child) { 
    	e.removeChild(child); 
        child = e.lastElementChild; 
    } 
}

function reset(){
	removeAllBars();
	createBars();
}

 
// try to reduce the number of delays used
function delay() {
  return new Promise(resolve => setTimeout(resolve, 0));
}


createBars();

//print the random bars array
console.log(bars);

//print the custom bars array
// console.log(arrString);


