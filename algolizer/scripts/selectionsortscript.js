async function selectionSort(){
    disableFeatures();
    
    for(var i=0;i<bars.length;i++){
        
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "blue";
        

        var minindex = i;
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "blue";
        // await delay();
        

        for(var j = i+1;j<bars.length;j++){
            document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "blue";
            // await delay();
            
            document.querySelector('[data-index=\"'+ minindex +'\"]').style["background"] = "red";
            document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "blue";

            if(bars[j]<bars[minindex]){
                minindex = j;
            }

            // await delay();
            document.querySelector('[data-index=\"'+ minindex +'\"]').style["background"] = "green";

           await delay();
           document.querySelector('[data-index=\"'+ j +'\"]').style["background"] = "red";
           

        }
           
        var temp = bars[i];
        var tempBarHeight = document.querySelector('[data-index=\"'+ i +'\"]').style["height"];
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
        // await delay();

        bars[i] = bars[minindex];
        document.querySelector('[data-index=\"'+ i +'\"]').style["height"] = document.querySelector('[data-index=\"'+ minindex +'\"]').style["height"];        

        bars[minindex] = temp;
        document.querySelector('[data-index=\"'+ minindex +'\"]').style["height"] = tempBarHeight;       

        await delay();
        document.querySelector('[data-index=\"'+ minindex +'\"]').style["background"] = "red";
        document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "red";
    }

    console.log(bars);
    console.log("done!");
    // for(var i=0;i<bars.length;i++) {
    //     await delay();
    //     document.querySelector('[data-index=\"'+ i +'\"]').style["background"] = "green";
    // }
    afterCompleteView();
}