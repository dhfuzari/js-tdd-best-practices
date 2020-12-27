/* eslint-disable no-use-before-define */

// Acontece o hosting - retorna undefined
console.log(dog);
const dog = 'woof';

console.log(cat); // Erro - ReferenceError
let cat = 'meaw';

console.log(pig); // Erro - ReferenceError
const pig = 'ronk';
