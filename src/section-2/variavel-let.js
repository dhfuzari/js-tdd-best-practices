/* eslint-disable no-shadow */

const animal = 'cat';
console.log(animal);
{
  const animal = 'dog';
  console.log(animal);
}
console.log(animal);
