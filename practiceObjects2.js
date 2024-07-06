const smartphone = [
    { 
        brand : 'Apple',
        model : 'Iphone 16',
        price : 79999,
        colors : ['white','green','black'],
        ram : ['6GB','8GB']
    },
    { 
        brand : 'Apple',
        model : 'Iphone 15',
        price : 59999,
        colors : ['red','green','blue'],
        ram : ['6GB','2GB']
    },
    { 
        brand : 'samsung',
        model : 's24 ultra',
        price : 110000,
        colors : ['white','gray','black'],
        ram : ['2GB','8GB']
    },
    { 
        brand : 'samsung',
        model : 's24 ultra',
        price : 110000,
        colors : ['white','gray','black'],
        ram : ['2GB','8GB']
    },
    { 
        brand : 'MI',
        model : 'Poco x2',
        price : 79999,
        colors : ['gray','black'],
        ram : ['2GB','8GB']
    },
    { 
        brand : 'OnePlus',
        model : '12R',
        price : 36000,
        colors : ['blue','pink'],
        ram : ['2GB','64GB']
    },
    { 
        brand : 'Motorola',
        model : 'Edge50',
        price : 24000,
        colors : ['white'],
        ram : ['2GB','8GB']
    },
];

/*
1. Filter out all smartphones priced above 60,000.
    - Create a new array containing only the smartphones that have a price greater than 60,000.
*/

    //const smartPhonesAbove60000 = smartphone.filter((phone) => phone.price>60000);

/*
2. Extract an array of all unique colors available across all smartphones.
    - Use appropriate array methods to get an array of all unique colors from the smartphone array.
*/

    const allColors = (smartphone.map((phone) => {return phone.colors.map((color) => color)})).flat();
    const uniqueColors = Array.from(new Set(allColors));
    console.log(uniqueColors);

/*
3. Group smartphones by brand.
    - Create an object where the keys are brand names and the values are arrays of smartphones belonging to that brand.
*/

    // const brandNameKeyAndPhoneValue = smartphone.filter((phone,_,arr) => {return arr.map((p) => {return {phone.brand : p}})});
   // console.log(brandNameKeyAndPhoneValue);

/*
4. Calculate the total price of all smartphones in the 'samsung' brand.
    - Use array methods to find the total price of all smartphones with the brand 'samsung'.
*/

    const totalPrice = (smartphone.filter((phone) => phone.brand.includes('samsung'))).reduce((acc,phone) => {return acc+phone.price},0);
    console.log(totalPrice);

/*
5. Create an array of all RAM options available across all smartphones, without duplicates.
    - Use array methods to get an array of all unique RAM options available in the smartphone array.
*/

   const allRam = Array.from(new Set((smartphone.map((phone) => phone.ram)).flat()))
   console.log(allRam)

/*
6. Find the most expensive smartphone.
    - Use an array method to find the smartphone with the highest price.
*/

 const highestPrice = smartphone.reduce((highest , phone) => {return highest>phone.price?highest:phone.price});
 

/*
7. Create an array of objects, each containing the brand, model, and the combined stock of all variants for that smartphone.
    - Calculate the combined stock of all variants and store it in a new array of objects.
*/

     const obj = (smartphone.map((phone) => { return phone.colors.map((col) => {return `${phone.brand} ${phone.model} - ${col}`})})).flat();
     console.log(obj);

/*
8. Generate a string for each smartphone in the format "{brand} {model} - {price}" and sort the strings alphabetically.
    - Create and sort the array of strings.
*/

    const newObj = (smartphone.map((phone) => { return `${phone.brand} ${phone.model} - ${phone.price}`})).sort();
    console.log(newObj);
/*    
9. Check if there is any smartphone with a RAM option of '64GB'.
    - Use an array method to check if any smartphone has a '64GB' RAM option.
*/

  const ram64GB = smartphone.some((phone) => {return phone.ram === '64BG'});
  console.log(ram64GB);

/*
10. Create an array of objects, each containing a unique color and an array of smartphones available in that color.
    - Group the smartphones by each unique color.
*/

    // const newArray = phone.map((phone) => {return phone.includes.(Array.from(new Set((smartphone.map((phone,_,arr) => {return phone.colors.map((col) => {
    //     return col }) })).flat())))})
    // console.log(newArray);
/*

11. Count the number of different models available for each brand.
    - Create an object where the keys are brand names and the values are the number of different models available for that brand.
*/

// we have only on model each useless question

/*
12. Filter out all smartphones that do not have a 'black' color variant.
    - Create a new array containing only the smartphones that have 'black' as one of their color options.
*/

    const noBlack = smartphone.filter((phone) => {return !(phone.colors.includes('black'))});
    console.log(noBlack);

/*
13. Create an array of all model names sorted by their price in ascending order.
    - Extract and sort the model names by their respective prices.
*/

    const modelByPrice = (smartphone.map((phone) => {return phone.price})).sort((a,b) => {return a-b});
    console.log(modelByPrice);

/*
14. Find the index of the first smartphone priced above 100,000.
    - Use an array method to find the index of the first smartphone with a price greater than 100,000.
*/

const firstPhoneAbove1L = smartphone.find((phone) => {return phone.price > 100000});
console.log(firstPhoneAbove1L);

/*
15. Calculate the total number of smartphones available across all models and variants.
    - Use array methods to calculate the total stock of all smartphones, combining all variants.
*/

    const totalNumberOfSmartPhone = smartphone.reduce((acc, phone) => {return acc + phone.colors.length},0);
    console.log(totalNumberOfSmartPhone);
