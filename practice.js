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


// try another 
function factorial(factNumber){
    let factResult = 1;
    for (let i = factNumber; i >=1 ; i--){
        factResult = factResult * i;
         console.log(i, factResult);
    }
    return factResult;
}
 const giveNumber = 15;
 const factCall = factorial(giveNumber);
 console.log(factCall);



//  inches convert to feet 
const myInche = 68;
const myFeet = myInche / 12;
console.log(myFeet);
let feetFixed = myFeet.toFixed(2);
let feetInt = parseFloat(feetFixed);
console.log(feetInt)

// feet convert inches 
const feet = 14;
const inches = feet * 12;
let inchesInt = parseInt(inches);
console.log(inchesInt)
// console.log(inchesInt,`"`)
console.log(feet, "feet convert inches is :" , inchesInt);



// used while loop solve factorial
function whileFact(num2){
    let number2 = 1;
    let result2 = 1;
    while(number2 <= num2){
        result2 = result2 * number2;
        console.log(number2 , result2);
        number2++;
    }
    return result2;
}
let factNum2 = 52;
console.log(whileFact(factNum2));

// used while loop solve factorial reverse
function whileFact(num3){
    let number3 = num3;
    let result3 = 1;
    while(number3 >= 1){
        result3 = result3 * number3;
        console.log(number3 , result3);
        number3--;
    }
    return result3;
}
let factNum3 = 52;
console.log(whileFact(factNum3));
