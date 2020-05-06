const secretNumber = 28;

const daniel = {
  name: "Daniel",
  age: 53,
};

Object.freeze(daniel);

console.log(daniel.age);
daniel.age = 35;
console.log(daniel.age);
