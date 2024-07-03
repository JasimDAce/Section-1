const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : 'abc123',
    age : 34
};

console.log(user);
console.log(typeof(user));

//TODO: There are two ways to know the value through key in objects

console.log(user.name);
console.log(user['email']);
//we use the second way for two reason first that we can pass special characters ie roll-no which if we do it from the first way it will interpret like roll - no

user['roll-no'] = 2101012131;

user.address = 'Lucknow';
user.age = 22;
console.log(user);
// the second way is the we can pass variable

const key = 'address';
console.log(user[key]);

// FIXME: predefined interface is object
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user.contact = ['7307917662','9335249949'];
console.log(user.contact[0]);
console.log(user.contact[1]);

// const smartphone = { 
//     brand : 'Apple',
//     model : 'Iphone 16',
//     price : 79999,
//     colors : ['white','green','black']
// };

//syntax to access 2nd color of the smartphone
// console.log(smartphone.colors[1]);
// smartphone.colors.splice(smartphone.colors.indexOf('green'),1,'sea green','forest green');
// console.log(smartphone);

const smartphone = [
    { 
        brand : 'Apple',
        model : 'Iphone 16',
        price : 79999,
        colors : ['white','green','black'],
        ram : ['6GB','8GB']
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
// console.log(smartphone.length);

// console.log(smartphone[1].price);

// smartphone[2].colors.push('brown');
// console.log(smartphone[2]);

// const newArray = smartphone.map((n) => {return n.brand})
// console.log(newArray)


const filterArray = smartphone.filter((n)=>{return n.colors.includes('white')});
console.log(filterArray);
//access the first smartphone price
//2. add new color in 3rd smartphone
//create an array containing all the brands of smartphone
//filter all smartphones containing white color
