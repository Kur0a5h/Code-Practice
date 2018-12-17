

const input = 4132;
let output=0;
function kaprekar(num){
    
    let sum=ascendingDigits(num);
    output=0;
    
    for(let i=1;i>0;i++){
    const reversedNum = reverse_a_number(sum);
    if(sum!==6147){
        sum=ascendingDigits(reversedNum-sum); //sum isnt storing like i expect
        output++;
    }else{
    return output;
    }
    }
}
function ascendingDigits(n){
    n=n+"";
    return parseInt(n.split("").sort().join(""));
}
function reverse_a_number(n){
	n = n + "";
    return parseInt(n.split("").reverse().join(""));
}

// console.log(`Kaprekar's constant for ${input}: ${kaprekar(input)}`);