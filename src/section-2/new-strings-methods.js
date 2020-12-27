// String
const text = 'Lorem ipsum dolor sit amet';

console.log('\n--- Starts with ---');
console.log(text.startsWith('Lorem'));
console.log(text.startsWith('ipsum'));
console.log(text.startsWith('rem', 2));

console.log('\n--- Ends with ---');
console.log(text.endsWith('amet'));
console.log(text.endsWith('ame'));
console.log(text.endsWith('ame', 25));

console.log('\n--- Repeat ---');
console.log('lol'.repeat(10));

console.log('\n--- Includes ---');
console.log(text.includes('ipsum'));
console.log(text.includes('acrat'));
