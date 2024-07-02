const nums = [36,19,10,2,6,13,48];


//TODO: map is used to for modification and we have first element second index third array

const sq = nums.map((num) => {return num*num});
console.log(sq);

const prices = [ 23.88,274.50,888.90,274.2121,99.99];

const newPrice = prices.map((num) => {return parseInt(num)});
console.log(newPrice);


//FIXME: if we create a function and then we can assign the function to a new variable and it will act like a function


//:TODO: in filter we return the element and in map we return the condition;

console.log('\n\n\nFiltered Array')
const filteredArray = prices.filter(num => num>50 && num<300);
console.log(filteredArray);