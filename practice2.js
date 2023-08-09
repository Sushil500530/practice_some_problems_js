/*
// check isLeapYear 
function isLeapYear(year){
    let remainder = year % 4;
    // console.log(remainder)
    if(remainder === 0){
        console.log('your year is leap year!')
    }
    else{
        console.log('your year is not a leap year!')
    }
}
isLeapYear(2024);

*/

// find odd number in array 
// function FindOdd(number){
//     // let sum = 0;
//     const oddNumber = [];
//     for(i = 1; i < number.length; i++){
//         let index = i;
//         let element = number[index];
//         // sum = sum + element;
//         // console.log(index, element, sum)
//         if(element % 2 !==0){
//             console.log(index , element);
//             oddNumber.push(element);
//         }
//     }
//     return oddNumber;
// }
// const myOdd = [15, 56, 68,45,  58, 22, 25, 35, 54, 23, 55, 77, 80];
// FindOdd(myOdd);


// function getSumOfArray(numbers){
//     // console.log(number);
//     let sum = 0;
//     for(i = 0; i < numbers.length; i++){
//         var index = i;
//         var element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }
// const myOdd1 = [15, 56, 68, 58, 22, 25, 35, 54, 23, 55, 77, 80];
// getSumOfArray(myOdd1);
function getSumOfArray(numbers){
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        sum = sum + element;
    }
    return sum;
}
const myOdd = [34, 65, 36, 66, 76, 79, 90, 54];
getSumOfArray(myOdd);

function getOddNumber(numbers){
    // new array add and create 
    const oddNmbr = [];
    console.log(oddNmbr)
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];   
        // odd and even number pawar jnno ata use kora hoy 
        if(element % 2 !== 0){
            console.log(index, element); 
            oddNmbr.push(element);

        }       
    }
    return oddNmbr;
}
const myOddNum = [34, 65, 36, 66, 76, 79, 90, 54, 55, 99, 411];
const myOddnum = getOddNumber(myOddNum);
console.log(myOddnum);
const myOddsum = getSumOfArray(myOddnum);
console.log(myOddsum)