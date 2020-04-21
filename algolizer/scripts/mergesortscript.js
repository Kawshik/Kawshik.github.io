async function merge(bars,startIndex,midIndex,endIndex){

	// document.querySelector('[data-index=\"'+ startIndex +'\"]').style["background"] = "black";
	document.querySelector('[data-index=\"'+ (midIndex+1) +'\"]').style["background"] = "green";
	// document.querySelector('[data-index=\"'+ endIndex +'\"]').style["background"] = "black";	

	//declare two temp arrays sizes
	var arr_size_left = midIndex - startIndex + 1;
	var arr_size_right = endIndex - midIndex;
			
	//create two temp arrays
	var leftArray = new Array();
	var rightArray = new Array();

	//fill the left array with left values
	for(var i=0;i<arr_size_left;i++) {
		leftArray.push(bars[startIndex+i]);
	}

	//fill the right array with right values
	for(var i=0;i<arr_size_right;i++) {
		rightArray.push(bars[midIndex+i+1]);
	}

	//check each value for both the arrays and add the to the main array
	var i=0,j=0,k=startIndex;
	while(i<arr_size_left && j<arr_size_right) {
		if(leftArray[i]<=rightArray[j]) {

			document.querySelector('[data-index=\"'+ (startIndex + i) +'\"]').style["background"] = "blue";
			document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "black";
			bars[k] = leftArray[i];
			// document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = document.querySelector('[data-index=\"'+ (startIndex+i) +'\"]').style["height"];
			document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = leftArray[i] + "px";
			await delay();
			document.querySelector('[data-index=\"'+ (startIndex + i) +'\"]').style["background"] = "red";
			document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "red";
			i++;

			document.querySelector('[data-index=\"'+ (midIndex+1) +'\"]').style["background"] = "green";
		} else {
			// await delay();
			document.querySelector('[data-index=\"'+ (midIndex + j + 1) +'\"]').style["background"] = "blue";
			document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "black";
			bars[k] = rightArray[j];
			// document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = document.querySelector('[data-index=\"'+ (midIndex+j+1) +'\"]').style["height"];
			document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = rightArray[j] + "px";
			await delay();
			document.querySelector('[data-index=\"'+ (midIndex + j + 1) +'\"]').style["background"] = "red";
			document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "red";
			j++;

			document.querySelector('[data-index=\"'+ (midIndex+1) +'\"]').style["background"] = "green";
		}
		k++;
	}

	//put the left over items into the main array form the left array
	while(i<arr_size_left) {
		document.querySelector('[data-index=\"'+ (startIndex + i) +'\"]').style["background"] = "blue";
		document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "black";

		bars[k] = leftArray[i];
		// document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = document.querySelector('[data-index=\"'+ (startIndex+i) +'\"]').style["height"];
		document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = leftArray[i] + "px";
		await delay();

		document.querySelector('[data-index=\"'+ (startIndex + i) +'\"]').style["background"] = "red";
		document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "red";
		i++;
		k++;
	} 

	//put the left over items into the main array form the right array
	while(j<arr_size_right) {
		
		document.querySelector('[data-index=\"'+ (midIndex + j + 1) +'\"]').style["background"] = "blue";
		document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "black";
		bars[k] = rightArray[j];
		// document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = document.querySelector('[data-index=\"'+ (midIndex+j+1) +'\"]').style["height"];
		document.querySelector('[data-index=\"'+ k +'\"]').style["height"] = rightArray[j] + "px";
		await delay();

		document.querySelector('[data-index=\"'+ (midIndex + j + 1) +'\"]').style["background"] = "red";
		document.querySelector('[data-index=\"'+ k +'\"]').style["background"] = "red";
		j++;
		k++;
	}


	// document.querySelector('[data-index=\"'+ (startIndex) +'\"]').style["background"] = "red";
	document.querySelector('[data-index=\"'+ (midIndex+1) +'\"]').style["background"] = "red";
	// document.querySelector('[data-index=\"'+ (endIndex) +'\"]').style["background"] = "red";	
}

async function Sort(bars, startIndex, endIndex) {
	if(startIndex>=endIndex) {
		return;
	}
	var midIndex = Math.floor((endIndex + startIndex) / 2);
	await Sort(bars, startIndex, midIndex);
	await Sort(bars, midIndex+1, endIndex);
	
	
	await merge(bars,startIndex,midIndex,endIndex);
}

async function mergeSort() {

	disableFeatures();

	var startIndex = 0;
	var endIndex = bars.length - 1;
	await Sort(bars, startIndex, endIndex);

	console.log(bars);
	// for(var i=0;i<bars.length;i++) {
 //        await delay();
 //        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
 //    }
	
 	afterCompleteView();
}