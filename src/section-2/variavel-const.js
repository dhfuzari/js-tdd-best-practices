/* eslint-disable no-const-assign */

const secretNumber = 28;

const daniel = {
  name: 'Daniel',
  age: 18,
};

Object.freeze(daniel);

console.log(daniel.age);
daniel.age = 35;
console.log(daniel.age);

try {
  secretNumber = 30;
  console.log(secretNumber);
} catch (err) {
  console.log('Error: ', err);
}
