	async function quicksort(bars, leftIndex, rightIndex) {
		if(leftIndex>=rightIndex) {
			return;
		}
		
		var pivotIndex = Math.floor((rightIndex + leftIndex) / 2);
		// var pivotIndex = leftIndex;
		var pivotValue = bars[pivotIndex];
		document.querySelector('[data-index=\"'+ pivotIndex +'\"]').style["background"] = "green";

		var index = await partition(bars,leftIndex,pivotValue,rightIndex);
		await quicksort(bars,leftIndex,index-1);
		await quicksort(bars,index,rightIndex);
		document.querySelector('[data-index=\"'+ pivotIndex +'\"]').style["background"] = "red";
	}
	
	async function partition(bars,leftIndex, pivotValue,rightIndex) {
		while(leftIndex<=rightIndex) {
			while(bars[leftIndex]<pivotValue) {
				document.querySelector('[data-index=\"'+ leftIndex +'\"]').style["background"] = "black";
				await delay();
				document.querySelector('[data-index=\"'+ leftIndex +'\"]').style["background"] = "red";
				leftIndex++;
			}
			
			while(bars[rightIndex]>pivotValue) {
				document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["background"] = "black";
				await delay();
				document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["background"] = "red";
				rightIndex--;
			}
			
			if(leftIndex<=rightIndex) {
				await swap(bars,leftIndex,rightIndex);
				leftIndex++;
				rightIndex--;
			}
		}
		
		return leftIndex;
	}
	
	async function swap(bars, leftIndex, rightIndex) {
		var temp = bars[leftIndex];
		bars[leftIndex] = bars[rightIndex];
		document.querySelector('[data-index=\"'+ leftIndex +'\"]').style["background"] = "yellow";
		document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["background"] = "yellow";
		document.querySelector('[data-index=\"'+ leftIndex +'\"]').style["height"] =  document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["height"];
		await delay();
		bars[rightIndex] = temp;
		document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["height"] = temp + "px";
		document.querySelector('[data-index=\"'+ leftIndex +'\"]').style["background"] = "red";
		document.querySelector('[data-index=\"'+ rightIndex +'\"]').style["background"] = "red";
	}	

async function quickSort() {
	var leftIndex = 0;
	var rightIndex = bars.length - 1;
	await quicksort(bars,leftIndex,rightIndex);
	console.log(bars);
	for(var i=0;i<bars.length;i++) {
        await delay();
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
    }
}