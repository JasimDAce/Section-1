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

//1. access the first smartphone price
console.log(smartphone[1].price);

//2. add new color in 3rd smartphone
smartphone[2].colors.push('brown');
console.log(smartphone[2]);



//4. filter all smartphones containing white color
const filterArray = smartphone.filter((n)=>{return n.colors.indexOf('white')+1});
console.log(filterArray);

const keyword = 'Apple';

const appleSmartPhone = smartphone.filter((phone) => { return phone.brand.toLocaleLowerCase() === keyword.toLocaleLowerCase()});
console.log(appleSmartPhone);


const appleSmartPhone2 = smartphone.filter((phone) => { return phone.brand.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())});
console.log(appleSmartPhone2);


//3.create an array containing all the brands of smartphone
const newArray = smartphone.map((n) => {return n.brand})
console.log(new Set(newArray))
console.log(Array.from('APPLE'));

const brandName = smartphone.filter((phone) => {return phone.brand.indexOf(phone.brand)})
console.log(brandName);


let [brand,model,price] = ['Apple','Iphone 16', 79999];
console.log(brand + ' ' + model + ' - ' + price );
console.log(`${brand}`)


const newArray3 = smartphone.map((phone , index) => {return `${index+1}. ${phone.brand} ${phone.model} - ${phone.price}`});
console.log(newArray3);

const newArray4 = smartphone.map((phone) => {return  phone.colors.map((col) => {return `${phone.brand} ${phone.model} `})}).flat();
console.log(newArray4)

// (white,128)

const newArray5 = smartphone.map((phone) => {return  phone.colors.map((col) => {return phone.ram.map((ram) => {
    {return `${phone.brand} ${phone.model} ${col} ${ram}`}
})})}).flat(2);
console.log(newArray5)