// Create a starter array with `name = [a, b, c]`
const animals = ['puppy', 'cat', 'lion', 'dipper'];

console.log(animals);
// Change an item in an array with `name[index] = y`
animals[3] = 'monkey'

console.log(animals);

  

// Create a starter array
const animals = [ "monkey", "cat", "lion", "bear", "panda" ];

console.log(animals);
// Split an array into two using .split()
// Split an array with .splice()
let arr = ["I", "will", "be", "an", "hero"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["will"]

// Join two arrays with .join()
const animals = [ "monkey", "cat", "lion", "bear", "panda" ];

console.log(animals.join());
// expected output: "Fire,Air,Water"

console.log(animals.join(''));
// expected output: "monkeycatlionbearpanda"

console.log(animals.join('-'));
// expected output: "monkey-cat-lion-bear-panda"
