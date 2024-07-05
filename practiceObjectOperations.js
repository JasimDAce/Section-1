// const laptops = [
//     { 
//         brand : 'Apple',
//         model : 'MacBook Pro',
//         price : 200000,
//         colors : ['silver','space gray'],
//         ram : ['8GB','16GB']
//     },
//     { 
//         brand : 'Dell',
//         model : 'XPS 13',
//         price : 150000,
//         colors : ['black','white'],
//         ram : ['8GB','32GB']
//     },
//     { 
//         brand : 'HP',
//         model : 'Spectre x360',
//         price : 120000,
//         colors : ['black','gold'],
//         ram : ['8GB','16GB']
//     },
//     { 
//         brand : 'Asus',
//         model : 'ZenBook',
//         price : 100000,
//         colors : ['blue','silver'],
//         ram : ['8GB','16GB']
//     },
//     { 
//         brand : 'Lenovo',
//         model : 'ThinkPad',
//         price : 90000,
//         colors : ['black'],
//         ram : ['8GB','32GB']
//     },
// ];

// // 1. Access the model of the last laptop
// const lastModel = laptops[laptops.length-1].model;
// // 2. Add a new RAM option to the second laptop
// laptops[1].ram.push('16GB');
// // 3. Create an array containing all the models of laptops
// const models = laptops.map((m) => {return m.model});
// // 4. Filter all laptops that have 'black' color option
// const blackColorLaptops = laptops.filter((l) => { return l.colors.includes('black')});
// // 5. Find the laptop with the highest price
// const highestPrice = laptops.find((a,l) => {return (a.price>l.price)?a:l,laptops[0]});
// // 6. Create a new array containing laptops that have at least '16GB' RAM option
// const laptops16GB = laptops.filter((lap) => {return lap.ram.includes('16GB') || lap.ram.includes('32GB')});
// // 7. Create an array containing the prices of all laptops and sort it in ascending order
// const allPrices = (laptops.map((lap) => {return lap.price})).sort((a,b) => {return a-b});
// // 8. Add a new laptop to the array
// laptops.push({
//     brand:'Jasim',
//     model: '21',
//     price: '500000',
//     colors : ['skin'],
//     ram: ['16GB']
// });
// // 9. Find the index of the laptop with the model 'ZenBook'
// const indexOfZenBook = laptops.findIndex((lap) => {return lap.model === 'ZenBook'});
// // 10. Remove the laptop with the brand 'HP' from the array
// laptops.splice(laptops.findIndex((lap)=>{return lap.brand.includes('HP')}),1);
// // 11. Get the total price of all laptops combined using reduce
// const totalPrice = laptops.reduce((acc,lap) => {return acc + lap.price},0);
// // 12. Check if any laptop has '64GB' RAM option using some
// console.log(laptops.some((lap) => {return lap.ram.includes('64GB')}));
// // 13. Get an array of all RAM options available across all laptops (without duplicates)
// //const ram = laptops.map((lap) => {return lap.ram}).filter((ram) => {return indexOf(ram)});
// // 14. Check if all laptops have a price greater than 50000 using every
// console.log(laptops.every((lap) => {return lap.price > 50000}));
// // 15. Replace the model of the laptop with the brand 'Asus' with 'VivoBook' using find and update
// laptops.find((lap) => {return lap.brand === 'Asus'}).brand = 'VivoBook';
// console.log(laptops)
// console.log(allPrices);


const products = [
    {
        id: 1,
        name: 'Laptop',
        price: 1500,
        categories: ['electronics', 'computers'],
        variants: [
            { color: 'silver', stock: 50 },
            { color: 'black', stock: 20 }
        ]
    },
    {
        id: 2,
        name: 'Phone',
        price: 800,
        categories: ['electronics', 'mobile'],
        variants: [
            { color: 'white', stock: 100 },
            { color: 'black', stock: 80 }
        ]
    },
    {
        id: 3,
        name: 'Tablet',
        price: 600,
        categories: ['electronics', 'computers'],
        variants: [
            { color: 'gray', stock: 30 },
            { color: 'black', stock: 50 }
        ]
    }
];

// 1. Create an array of all product names.
    const allProductsName = products.map((prod) => {return prod.name});
// 2. Find the total stock of all products.
    const totalStock = products.reduce((acc,prod) => { return acc + prod.variants.reduce((ac, vari) =>{return ac + vari.stock},0)},0);
// 3. Create a new array of products that are in the 'computers' category.
    const computerProducts = products.filter((prod) => {return prod.categories.includes('computers')});
// 4. Use flatMap to create an array of all variant colors available across all products.
    const allColors = products.flatMap((prod) => {return prod.variants.flatMap((vari)=>{return vari.color})});
// 5. Check if any product has a stock greater than 80 using some.
    const isStockGreaterThan80 = products.some((prod) => {return prod.variants.some((vari) => {return vari.stock > 80})});
// 6. Check if all products have a price less than 2000 using every.
    console.log(products.every((prod) => {return prod.price < 2000}));
// 7. Find the product with the highest price.
    const highestPrice = products.reduce((acc , prod) => {return acc.price>prod.price?acc:prod},products[0]);
// 8. Create a new array of products, each with an added field 'discountedPrice' which is 10% off the original price.
    const newProducts = products.map((prod) => ({...prod,discountedPrice: prod.price*0.9 }));
    console.log(newProducts)
// 9. Find the index of the product with the name 'Tablet'.
    const tabletIndex = products.findIndex((prod) => {return prod.name.includes('Tablet')});
    console.log(tabletIndex);
// 10. Remove the product with the id 2 from the array.
    products.splice(2,1);
    console.log(products);
// 11. Use reduce to calculate the total price of all products.
    const totalPrice = products.reduce((acc,prod) => {return acc + prod.price},0);
// 12. Create a new array with each product having its name and price as a single string, like 'Laptop - $1500'.
    const newProducts2 = products.map((prod) => {return prod['price-name'] = prod.price+prod.name});
    console.log(newProducts2)
// 13. Use map to create an array of objects, each containing product id and the total stock for that product.

// 14. Flatten the array of categories into a single array containing all unique categories across all products.
   const flatProducts =  products.map((prod) => {return prod.categories}).flat();
   console.log(flatProducts);
// 15. Sort the products array by price in descending order.
  products.sort((a,b) => {return b.price - a.price});
  console.log(products);


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Filter out odd numbers from 'numbers' array
// 2. Map 'numbers' array to an array of squared values
// 3. Check if all numbers in 'numbers' array are less than 20
// 4. Find the first even number in 'numbers' array using find
// 5. Calculate the sum of all numbers in 'numbers' array using reduce
// 6. Concatenate 'numbers' array with [11, 12, 13] using concat
// 7. Remove the last 3 elements from 'numbers' array using splice
// 8. Check if any number in 'numbers' array is greater than 10 using some
// 9. Create a new array by flattening [[1, 2], [3, 4], [5, 6]] using flat
// 10. Sort 'numbers' array in descending order using sort

const books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 },
  { id: 2, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 4, title: '1984', author: 'George Orwell', year: 1949 },
];

// 11. Extract titles of all books in 'books' array into a new array
// 12. Find the book with the latest publication year using reduce
// 13. Create a new array with books published after 1950 using filter
// 14. Check if all books in 'books' array are written by different authors using every
// 15. Find the index of the book titled '1984' in 'books' array using findIndex
