/* eslint-disable no-restricted-syntax */
// Iterables and Iterators

const text = "Ireland"; // Iterable
const it = text[Symbol.iterator](); // Iterator

console.log(Symbol.iterator);
console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (const letter of text) {
  console.log(letter);
}

const numbers = [1, 2, 3, 4];
for (const item of numbers) {
  console.log(item);
}

const person = {
  name: "Eric",
  address: "South Park",
};

const personIsIterable = person[Symbol.iterator]();
console.log("personIsIterable: ", personIsIterable);

// for (const prop of person) {
//   console.log(prop);
// }

const map = new Map();
map.set("name", "Eric");
map.set("address", "South Park");
console.log(map);
for (const [key, value] of map) {
  console.log(key, value);
}

const set = new Set(["blue", "red", "green"]);
console.log(set);
