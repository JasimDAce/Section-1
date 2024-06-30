function addNums(a,b){
    var c = a+b;
    console.log(c);
}

addNums(241,4);
//console.log(c);
//It will show error thats why we use var in functions

const getAvg = function(m1,m2,m3,m4){
    const avg = (m1+m1+m3+m4)/4;
   return avg;
}

const res = getAvg(2,5);
//if we dont pass enough parameters we get undefined and if we pass more parameter than asked then
console.log(res);
//if we do any operations with undefined variable and number we get NaN (Not a Number)
//if we do undefined with string it gives undifinets
console.log(undefined + 's');


//Arrow function

const fact = (n) => {
    if(n == 1){
        return 1;
    }
    return n*fact(n-1);
}

let num = fact(5);
console.log(num);
//array destructuring
let [a,b,c,d] =[1,2,4,5];

console.log(a);

const getReport = (m1,m2,m3,m4,max)=>{
    const avg = getAvg(m1,m2,m3,m4);
    const percentage = avg/max*100;
    return [avg,percentage];
}

const[v1,v2 ] = getReport(343,5,4,64,500);
console.log(v1,v2);

const divi = (start,end)=>{
    let sum =0;
    for(let s = start ; s<=end;s++){
        if(s%7==0){
            console.log(s);
           sum += s;
        }
    }
    return sum;
}

console.log(divi(1,100));



let num2 = 200;

