// JavaScript Question
// 1. WAP to check if a number exists between 70 and 120.
// 2. WAP to check if a person is eligible for DL.
// 3. WAP to find greatest from three numbers.
// 4. WAP to check if a number is perfect square.
// 5. WAP to check if a number is divisible by 7 and 11

//solution 1:
let n = 88;
if(n>= 70 &&  n<=120)
    console.log(`Yes ${n}, Exist between 70 and 120`);
else
    console.log(`No ${n}, Does not exists between 70 and 120`);
//Solution 2:
let age = 17;
if(age>17)
    console.log('Yes, He is eligible for DL.');
else
    console.log('NO, He is not eligible for DL.');
//solution 3
let num1 = 11;
let num2 = 18;
let num3 = 7;
if(num1 > num2){
    if(num1 > num3)
        console.log(`${num1} is the greatest number amongs the three numbers`);
    else
        console.log(`${num3} is the greatest number amongs the three numbers`);
}
else 
    console.log(`${num2} is the greatest number amongs the three numbers`);
// Solution 4:
let perfectSquare = 16;
let perfectSquareNumber = Math.sqrt(perfectSquare);
if((perfectSquareNumber % 1) === 0)
    console.log(`${perfectSquare}, is a perfect square`);
else
    console.log(`${perfectSquare}, is not a perfect square`);
//solution 5
let num4 = 77;
if(num4%7 === 0){
    if(num4%11 === 0)
        console.log(`Yes ${num4}, is divisible by 7 and 11`);
}
else
    console.log(`No ${num4}, is not divisible by 7 and 11`);
