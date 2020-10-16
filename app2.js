// Create a starter array
const animals = ['monkey', 'cat', 'lion', 'bear'];

console.log(animals);
// Add an item to an array with `name[] = x`
animals[animals.length] = 'panda';

console.log(animals);
// splice
const wolf = animals.splice(3, 1);

console.log(animals);
console.logs(wolf);
// Add an item to the end of an array using .push()
animals.push('snake');

console.log(snake);
// Add an item to the beginning of an array using .unshift()
animals.unshift('tiger');

console.log(tiger);

// Remove an item from the beginning of an array using .shift()
const firstItem = animals.shift();

console.log(animals);
console.log(firstItem);

// Remove an item from the end of an array using .pop()
const lastItem = animals.pop();

console.log(animals);
console.log(lastItem);