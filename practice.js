// mile theke kilometer ber korar program 
function mileToKilo(mile){
    let kilo = mile * 1.61;
    return kilo;
}
let mileAvar = 20;
console.log(mileToKilo(mileAvar), "KM");

// used function , even numbers ans is true , and odd numbers is false
function isNumber( number){
    const remainder = number % 2;
    console.log(remainder)
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const num = 554541511;
const result =isNumber(num);
console.log(num + ' ' + 'is even number' + " : " + result);

/*
// used function and n type number give sum 
function numberOfSum(num){
    let Sum =0;
    for(let i = 0; i <= num; i++){
        Sum = Sum + i;
        console.log(i,Sum)
        
    }
    return Sum;
}
let Number = 30;
console.log(numberOfSum(Number));


// used function solve multiplication of any number(it's another called factorial)
function multiplecationSum(num1){
    let multiSum = 1;
    for(let i = 1; i <= num1; i++){
        multiSum = multiSum * i;
        console.log(i, multiSum)
    }
    return multiSum;
}
const numbr = 5;
console.log(multiplecationSum(numbr));

*/

// reverse factorial 
function reverseFact(num2){
    let reverSum = 1;
    for(let i = num2; i >= 1 ; i--){
        reverSum = reverSum * i;
        // console.log(reverSum, i);
    }
    return reverSum;
}
let multiNum = 12;
console.log('multiplication system'+ ' ' + multiNum + ' ' + 'number sum is : ' + reverseFact(multiNum));