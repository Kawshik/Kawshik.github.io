//Create the bars and the bar array
var bars;

var barsCustom = [101,364,69,438,83,383,279,73,472,320,251,76,51,75,345,439,26,324,284,405,226,443,80,328,415,198,24,270,273,165,104,457,15,145,7,86,269,243,156,147,84,156,224,63,160,236,15,210,155,481,449,500,212,386,24,110,296,360,495,233,319,345,72,300,78,136,409,127,140,442,468,411,177,126,219,238,343,181,238,364,477,112,407,230,256,443,274,381,292,244,419,133,30,25,369,229,77,35,283,314];

var MAX_ARRAY_SIZE = 100;

var MAX_HEIGHT_VALUE = 400;

var BAR_WIDTH_NUMBER = 1;
// 1 = thick bars
// 0 = thin bars

var THICK_BARS_LIMIT = 170;

var delayTime = 0;

function createBars(){
	bars = new Array();
	
	var container = document.getElementById("bar_container");
	
	for (var i = 0; i < MAX_ARRAY_SIZE; i++) {
		
		var bar = document.createElement("div");
		if(BAR_WIDTH_NUMBER == 1)
			bar.classList.add("bar-thick");//creates thick bars of size 5px
		else
			bar.classList.add("bar-thin");	//creates thin bars of size 1px
		
		var height = Math.floor(Math.random() * (MAX_HEIGHT_VALUE - 5 + 1) + 5);
		
		bars.push(height);					//creates bars with random heights
		// bars.push(barsCustom[i]);		//creates bars with custom heights
		

		bar.style["height"] = height + "px";           //set the height of the bars with the random array values
		// bar.style["height"] = barsCustom[i] + "px"; //set the height of the bars with the custom array values
		
		bar.setAttribute('data-index', i+'');

		container.appendChild(bar);
	}
}

function reCreateBars(){
	removeAllBars();
	
	var container = document.getElementById("bar_container");

	for (var i = 0; i < MAX_ARRAY_SIZE; i++) {
		var bar = document.createElement("div");
		if(BAR_WIDTH_NUMBER == 1)
			bar.classList.add("bar-thick");//creates thick bars of size 5px
		else
			bar.classList.add("bar-thin");	//creates thin bars of size 1px

		bar.style["height"] = bars[i] + "px";
		bar.setAttribute('data-index', i+'');

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
  return new Promise(resolve => setTimeout(resolve, delayTime));
}


async function afterCompleteView(){
	var temp = delayTime;
	delayTime = 0;
	for(var i=0;i<bars.length;i++) {
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
        await delay();
    }
    delayTime = temp;
    enableFeatures();
}

createBars();

//print the random bars array
console.log(bars);

//print the custom bars array
// console.log(arrString);



// CHANGE NUMBER SLIDER
var sliderNumber;
var sliderNumberValue;
var sliderNumberWidth;
var sliderNumberValueWidth;
var sliderNumberValuePositionMultiplier;

// CHANGE SPEED SLIDER
var sliderSpeed;
var sliderSpeedValue;
var sliderSpeedWidth;
var sliderSpeedValueWidth;
var sliderSpeedValuePositionMultiplier;

//Initial Value
sliderNumberValue = document.getElementById("slider-number-value");
sliderNumberValue.style.left = 26.466 + "px";

var settings = document.getElementById("settings");

function showSettings(){
	settings.classList.add("show");


	//SETTING UP NUMBER SLIDER
	sliderNumber =  document.getElementById("slider-number");
	sliderNumberWidth = document.getElementById("slider-number-container").offsetWidth;
	sliderNumberValueWidth = sliderNumberValue.offsetWidth;

	// console.log(sliderNumberValue.style.left);

	sliderNumberValuePositionMultiplier = sliderNumberWidth - sliderNumberValueWidth;
	// console.log(sliderNumberValuePositionMultiplier);
	sliderNumber.addEventListener("input", showNumberSliderValue, false);


	// SETTING UP SPEED SLIDER
	sliderSpeed =  document.getElementById("slider-speed");
	sliderSpeedValue = document.getElementById("slider-speed-value");
	sliderSpeedWidth = document.getElementById("slider-speed-container").offsetWidth;
	sliderSpeedValueWidth = sliderSpeedValue.offsetWidth;
	// console.log(sliderSpeedValueWidth);

	sliderSpeedValuePositionMultiplier = sliderSpeedWidth - sliderSpeedValueWidth;
	// console.log(sliderSpeedValuePositionMultiplier);

	// TODO: use anonymous function while code clean up
	sliderSpeed.addEventListener("input", showSpeedSliderValue, false); 
}


// TODO: code is copied make it DRY

// CHANGE NUMBER SLIDER
function showNumberSliderValue() {
	var totalBars = document.getElementById("total_bars");
	var barWidth = document.getElementById("bar_width");

	sliderNumberValue.innerHTML = sliderNumber.value;
	totalBars.innerHTML = sliderNumber.value;

	var sliderNumberValuePosition = (sliderNumber.value / sliderNumber.max);
	var leftPosition = (sliderNumberValuePosition * sliderNumberValuePositionMultiplier);
	if(leftPosition<=5)
		sliderNumberValue.style.left = (leftPosition - 2) + "px";
	else
		sliderNumberValue.style.left = (leftPosition - 0.7) + "px";

	MAX_ARRAY_SIZE = sliderNumber.value;


	var switchBtn = document.querySelector('[data-switchname=\"width\"]');
	
	if(MAX_ARRAY_SIZE>THICK_BARS_LIMIT){
		BAR_WIDTH_NUMBER = 0;
		bar_width.innerHTML = "1 px";
		switchBtn.style.pointerEvents = 'none';
		switchBtn.classList.add("disabled");
		toggleValue = "left";
		toggle("width");
	}
	else{
		if(switchValue!=toggleValue){
			toggle("width");
		}

		if(switchValue=="left"){
			BAR_WIDTH_NUMBER = 1;
			bar_width.innerHTML = "5 px";

		} else {
			BAR_WIDTH_NUMBER = 0;
			bar_width.innerHTML = "1 px";
		}

		toggleValue = switchValue;

		switchBtn.style.pointerEvents = 'auto';
		switchBtn.classList.remove("disabled");
	}

	// console.log(MAX_ARRAY_SIZE);
	// console.log(sliderNumberValue.style.left);
	reset();

}

// CHANGE SPEED SLIDER
function showSpeedSliderValue() {
	sliderSpeedValue.innerHTML = sliderSpeed.value;
	delayTime = Math.pow(sliderSpeed.value,2) * 10;
	var sliderSpeedValuePosition = (sliderSpeed.value / sliderSpeed.max);
	sliderSpeedValue.style.left = (sliderSpeedValuePosition * sliderSpeedValuePositionMultiplier) + "px";
}

function hideSettings(){
	settings.classList.remove("show");
}




function disableFeatures() {
	document.getElementById("slider-number").disabled = true; 
	document.getElementById("slider-number").classList.add("disabled");

	document.getElementById("generate-btn").style.pointerEvents = "none";  
	document.getElementById("generate-btn").classList.add("disabled");

	var algoDiv = document.getElementsByClassName("sort-btn");
	for (var i = 0; i < algoDiv.length; i++) {
		algoDiv[i].style.pointerEvents = "none";
		algoDiv[i].classList.add("disabled");
	}

	document.querySelector('[data-switchname=\"width\"]').classList.add("disabled");

}

function enableFeatures() {
	document.getElementById("slider-number").disabled = false;
	document.getElementById("slider-number").classList.remove("disabled");

	document.getElementById("generate-btn").style.pointerEvents = "auto";
	document.getElementById("generate-btn").classList.remove("disabled");

	var algoDiv = document.getElementsByClassName("sort-btn");
	for (var i = 0; i < algoDiv.length; i++) {
		algoDiv[i].style.pointerEvents = "auto";
		algoDiv[i].classList.remove("disabled");
	}

	document.querySelector('[data-switchname=\"width\"]').classList.remove("disabled");
}




// SWITCH FUNCTIONALITY
var toggleValue = "left";
function toggle(switchName){
	if(toggleValue=="left"){
		document.querySelector('[data-switchname=\"'+ switchName +'\"]').childNodes[1].style.marginLeft = 11 + "px";
		toggleValue = "right";
	}
	else{
		document.querySelector('[data-switchname=\"'+ switchName +'\"]').childNodes[1].style.marginLeft = -1 + "px";
		toggleValue = "left";
	}

	// console.log(document.querySelector('[data-switchname=\"'+ switchName +'\"]').childNodes[1].style.marginLeft);
}

var switchValue = "left";
function changeBarWidth(switchName){
	var barWidth = document.getElementById("bar_width");

	if(MAX_ARRAY_SIZE>THICK_BARS_LIMIT){
		toggleValue = "left";
		switchValue = "left";
		toggle(switchName);
		barWidth.innerHTML = "1 px";
	} else {
		toggle(switchName);
		if(toggleValue=="left"){
			BAR_WIDTH_NUMBER = 1;
			reCreateBars();
			switchValue = toggleValue;
			barWidth.innerHTML = "5 px";
		} else {
			BAR_WIDTH_NUMBER = 0;
			barWidth.innerHTML = "1 px";
			reCreateBars();
			switchValue = toggleValue;
		}
	}
}


