const arr = [ 65,'df',true,console.log];

console.log(typeof arr);
console.log(Array.isArray())
console.log(arr);
console.log('\n\n\n');

const movies = ['300','MI','Deadpool','Expendables', '3 Idiots', 'Inception'];
console.log(movies);
console.log(movies[1]);
//TODO: indexOf is used to know the index of the name using the name we know 

console.log(movies.indexOf('Inception'));
 

//TODO: we use movies.at(index) just to find the index 
console.log(movies.at(-2));


//TODO: we can change the const array elements but we cannot change its size of the array
movies[2] = 'Deadpool & Wolverine';

 
//FIXME: slicing first index is inclusive and the last index is exclusive

console.log (movies.slice(2,5)); //FIXME: also works with strings

//TODO: if we want all the element till the last element we dont write last parameter;

console.log(movies.slice(2));

//FIXME: if we write the negative index  we start from the index and move right  
console.log(movies.slice(-4,-2));

// //
// console.log(movies.slice(8));
// console.log(movies[8]);

console.log(movies[2].slice(-9));

//TODO: push is used to add an element at the end of the array

movies.push('Kanchana');
console.log(movies);


//FIXME: unshift is used to add the element at the end of the array
movies.unshift('Gangs of Wasseypur');
console.log(movies)

//TODO: pop remove the element from the end and shift is used to remove the element from the beginning 

movies.pop();
movies.shift();
console.log(movies);

//TODO: splice is used to remove the element at a particular index 

//movies.splice(3,2);
console.log(movies);

//FIXME: splice is also used to remove and then we can add if we dont want to remove and just add we give the index 0
// console.log(movies.splice(3,2,'Invincible'));
// console.log(movies.splice(3,2,'John Wick','The Boys','Invincible'));
console.log(movies.splice(3,0,'John Wick','The Boys','Invincible'));
























console.log(movies);