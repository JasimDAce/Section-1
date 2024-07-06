// Array Operations

// Given array
const numbers = [1, 2, 3, 4, 5];

// 1. Filter out even numbers from 'numbers' array
    const evenNumbers = numbers.filter((num) => num%2===0);
// 2. Map 'numbers' array to an array of squared values
    const squaredNumbers = numbers.map((num) => num*num);
// 3. Use reduce to find the sum of all numbers in 'numbers' array
    const sum = numbers.reduce((acc,num) => acc+num,0);
// 4. Check if all numbers in 'numbers' array are less than 10
    const less10 = numbers.every((num) => num<10);
// 5. Find the index of the first number greater than 3 in 'numbers' array
    const indexOfGreaterThan3 = numbers.findIndex(num => num>3);
// Object Operations

// Given object
const person = {
  name: 'John',
  age: 30,
  skills: ['JavaScript', 'React']
};

// 6. Access the age of the person object
const age = person.age;
// 7. Add a new skill 'Node.js' to the skills array in person object
person.skills.push('Node.js');
// 8. Check if the person object has a property 'location'
console.log((Object.keys(person)).includes('location'));
// 9. Remove the 'age' property from the person object
 // I dont know how to remove property but i can try
 delete person.age
 console.log(person);
// 10. Use Object.keys to get an array of keys in the person object
 const keys = Object.keys(person);
 console.log(keys);
// 11. Use Object.values to get an array of values in the person object
 const values = Object.values(person);
 console.log(values);
// 12. Use Object.entries to get an array of key-value pairs in the person object
 const entries = Object.entries(person);
// 13. Create a new object 'newPerson' with spread operator, adding an additional property 'city: 'New York''
 const newPerson = {... person ,'city':'New York'}
 console.log(newPerson);
// 14. Use destructuring to extract 'name' and 'skills' from the person object
  [name1 , skills] = [person.name,person.skills];
  console.log(name1);
  console.log(skills);
// 15. Check if person has a skill 'React' in the skills array
  console.log(person.skills.includes('React'));

// Additional Array and Object Operations

// Given array of objects
const products = [
  { id: 1, name: 'Laptop', price: 1500 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 600 }
];

// 16. Use map to create an array of product names
    const newName  = products.map((prod) => prod.name);
    console.log(newName);
// 17. Use filter to find products with price greater than 1000
    const priceGreaterThanThousand = products.filter((prod) => prod.price>1000);
    console.log(priceGreaterThanThousand);
// 18. Use reduce to calculate the total price of all products
    const totalPrice = products.reduce((acc,prod) => {return acc + prod.price},0);
    console.log(totalPrice);
// 19. Use find to get the product with id 2
    const product = products.find((prod) => {return prod.id === 2})
    console.log(product);
// 20. Use some to check if any product has price less than 500
    const less500 = products.some((prod) => {return prod.price < 500});
    console.log(less500);