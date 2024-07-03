const laptops = [
    { 
        brand : 'Apple',
        model : 'MacBook Pro',
        price : 200000,
        colors : ['silver','space gray'],
        ram : ['8GB','16GB']
    },
    { 
        brand : 'Dell',
        model : 'XPS 13',
        price : 150000,
        colors : ['black','white'],
        ram : ['8GB','32GB']
    },
    { 
        brand : 'HP',
        model : 'Spectre x360',
        price : 120000,
        colors : ['black','gold'],
        ram : ['8GB','16GB']
    },
    { 
        brand : 'Asus',
        model : 'ZenBook',
        price : 100000,
        colors : ['blue','silver'],
        ram : ['8GB','16GB']
    },
    { 
        brand : 'Lenovo',
        model : 'ThinkPad',
        price : 90000,
        colors : ['black'],
        ram : ['8GB','32GB']
    },
];

// 1. Access the model of the last laptop
const lastModel = laptops[laptops.length-1].model;
// 2. Add a new RAM option to the second laptop
laptops[1].ram.push('16GB');
// 3. Create an array containing all the models of laptops
const models = laptops.map((m) => {return m.model});
// 4. Filter all laptops that have 'black' color option
const blackColorLaptops = laptops.filter((l) => { return l.colors.includes('black')});
// 5. Find the laptop with the highest price
const highestPrice = laptops.find((a,l) => {return (a.price>l.price)?a:l,laptops[0]});
// 6. Create a new array containing laptops that have at least '16GB' RAM option
const laptops16GB = laptops.filter((lap) => {return lap.ram.includes('16GB') || lap.ram.includes('32GB')});
// 7. Create an array containing the prices of all laptops and sort it in ascending order
const allPrices = (laptops.map((lap) => {return lap.price})).sort((a,b) => {return a-b});
// 8. Add a new laptop to the array
laptops.push({
    brand:'Jasim',
    model: '21',
    price: '500000',
    colors : ['skin'],
    ram: ['16GB']
});
// 9. Find the index of the laptop with the model 'ZenBook'
const indexOfZenBook = laptops.findIndex((lap) => {return lap.model === 'ZenBook'});
// 10. Remove the laptop with the brand 'HP' from the array
laptops.splice(laptops.findIndex((lap)=>{return lap.brand.includes('HP')}),1);
// 11. Get the total price of all laptops combined using reduce
const totalPrice = laptops.reduce((acc,lap) => {return acc + lap.price},0);
// 12. Check if any laptop has '64GB' RAM option using some
console.log(laptops.some((lap) => {return lap.ram.includes('64GB')}));
// 13. Get an array of all RAM options available across all laptops (without duplicates)
//const ram = laptops.map((lap) => {return lap.ram}).filter((ram) => {return indexOf(ram)});
// 14. Check if all laptops have a price greater than 50000 using every
console.log(laptops.every((lap) => {return lap.price > 50000}));
// 15. Replace the model of the laptop with the brand 'Asus' with 'VivoBook' using find and update
laptops.find((lap) => {return lap.brand === 'Asus'}).brand = 'VivoBook';
console.log(laptops)
console.log(allPrices);