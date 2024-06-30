// we can find sqrt using num**0.5
for(let i = 0; i< 11; i++){
    console.log(i);
}
console.log('---------------while loop-------------');
let n = 11;
while(n<=20){
    console.log(n);
    n+=2;
}
console.log('--------------do while loop-------------');
const k = 10;
do{
    console.log(k);
}while(k>20);

console.log('---------------for of loop-------------');

const nums = [234,646,834,2,34,32,656,54];
// for( let a of nums){
//     console.log(a);
// }
nums.forEach((a)=>{
    console.log(a);
})