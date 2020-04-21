async function insertionSort(){
    disableFeatures();
    
    for(var i=1;i<bars.length;i++){
   		
   		var key = bars[i];
   		var keyBarHeight = document.querySelector('[data-index=\"'+ i +'\"]').style["height"];

   		document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "blue";
   		await delay();

	   	var j = i-1;
           
       	while(j>=0 && bars[j]>key){
			document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "green";
   			document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "green";

            bars[j+1] = bars[j];

			await delay();		        	
        	document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["height"] = document.querySelector('[data-index=\"'+ j +'\"]').style["height"];
        	document.querySelector('[data-index=\"'+ j +'\"]').style["height"] = keyBarHeight;

   			await delay();
        	document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["background"] = "red";
            document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "red";
            
            j--;
        }
        
        bars[j+1] = key;
        document.querySelector('[data-index=\"'+ (j+1) +'\"]').style["height"] = keyBarHeight;
        await delay();
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "red";
    }

    console.log(bars);
    console.log("done!");
    // for(var i=0;i<bars.length;i++) {
		  // await delay();
    // 	document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
    // }
    afterCompleteView();
}
