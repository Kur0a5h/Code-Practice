// $(document).ready(()=>{

// })
var keypad=[['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
var output=[];
var newOutput=[];

function inputNumberString(numstr){
    numberArray=numstr.split("");
    for(k=0;k<numberArray.length;k++){
        keypressConcat(parseInt((numberArray[k])));
    };
    return output;
    
}
function keypressConcat(num){
    letterArrayIndex=num-2;
    letterArray=keypad[letterArrayIndex];
    
    if(output.length===0){
    for(i=0;i<letterArray.length;i++){
        
        output.push(letterArray[i]);
    }
    }else{
        for(i=0;i<output.length;i++){
            for(j=0;j<letterArray.length;j++){
                letterConcat=output[i]+letterArray[j];
                newOutput.push(letterConcat);
                

            }
            
        }
    }
    
    if(newOutput.length===0){
    return output;
    }else{
        output=newOutput;
        return newOutput;
    }
}