// A primtive type, like an array or object

const foo = Symbol("name");
const bar = Symbol("name");

console.log(foo, typeof foo);
console.log(bar, typeof bar);
console.log(foo === bar);

const person = {
  [Symbol("city")]: "Esp. Sto. do Pinhal",
  [Symbol("name")]: "Daniel",
  [Symbol("name")]: "Henrique",
  age: 36,
};

console.log(person);
console.log(Object.keys(person));
console.log(Object.getOwnPropertySymbols(person));

const symbolsOfPerson = Object.getOwnPropertySymbols(person);
console.log(symbolsOfPerson);

const dataSymbols = symbolsOfPerson.map((symbol) => {
  console.log(symbol, person[symbol]);
  return person[symbol];
});

console.log(dataSymbols);
