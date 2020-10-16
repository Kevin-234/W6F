console.log(animals.join());
// expected output: "monkey,cat,lion,bear,panda"

console.log(animals.join(''));
// expected output: "monkeycatlionbearpanda"

console.log(animals.join('-'));
// expected output: "monkey-cat-lion-bear-panda"

// concat (combine)
const meat = ['chicken', 'beef', 'pork'];
const fruits = ['blueberry', 'strawberry', 'rasberry'];

let combo = fruits.concat(meat);
console.log(combo);

// it'll shows
// combo
// (6) ["blueberry", "strawberry", "rasberry", "chicken", "beef", "pork"]
// 0: "blueberry"
// 1: "strawberry"
// 2: "rasberry"
// 3: "chicken"
// 4: "beef"
// 5: "pork"
// length: 6
// __proto__: Array(0)