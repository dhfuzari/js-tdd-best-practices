const ireland = {
  live: 'Dublin',
  love: 'Galway',
};

const text = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}`;
console.log(text);

const newTest = `Eu moro em ${ireland.live} e sou apaixonado por ${ireland.love}`;
console.log(newTest);

// eslint-disable-next-line no-useless-concat
const fruits = '\n' + 'banana' + '\n' + 'orange' + '\n' + 'apple' + '\n\n';
console.log(fruits);

const newFruits = `banana
orange
apple`;
console.log(newFruits);
