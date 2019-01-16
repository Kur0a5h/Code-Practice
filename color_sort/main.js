


array=[2,0,2,1,1,0];

function colorSort(nums){
    let array=nums
    let countZero=0;
    let countOne=0;
    for(i=0;i<array.length; i++){
        currentColor=array[i];
        switch(currentColor){
            case 0:
                countZero++;
                array.splice(i,1);
                array.splice(0,0,currentColor);
                break;
            case 1:
                countOne++;
                array.splice(i,1);
                array.splice(countZero-1,0,currentColor);
                break;
            case 2:
                array.splice(i,1);
                array.splice(countZero+countOne-1,0,currentColor);
                break;
        }

    }
    return array
}