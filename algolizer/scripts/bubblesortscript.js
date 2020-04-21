async function bubbleSort(){
	disableFeatures();
	for(var i=0;i<bars.length-1;i++){

		for(var j=0;j<bars.length-i-1;j++){
			if(bars[j]>bars[j+1]){
				document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "blue";
				document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "blue";
				await delay();

				var temp = bars[j];
				var tempBarHeight = document.querySelector('[data-index=\"'+ j +'\"]').style["height"];

				bars[j] = bars[j+1];
				document.querySelector('[data-index=\"'+ j +'\"]').style["height"] = document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["height"]

				bars[j+1]=temp;
				document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["height"] = tempBarHeight;
				               		
				await delay();

				document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "red";               		
				document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "red";               		

			} else{
				document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "blue";
				document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "blue";
				await delay();               	
				document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "red";               		
				document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "red";               		

			}
		}
	}

	console.log(bars);
	console.log("done!");
	// for(var i=0;i<bars.length;i++) {
	// 	await delay();
	// 	document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
	// }
	afterCompleteView();
}