function hello(name, surname) {
  name = name || 'Daniel Henrique';
  surname = surname || 'Fuzari';
  console.log(`Hello ${name} ${surname}! How are you?`);
}

hello();

console.log(' ------------------ ');

function helloDefaultParameters(name = 'Daniel Henrique', surname = 'Fuzari') {
  console.log(`Hello ${name} ${surname}! How are you?`);
}

helloDefaultParameters();
helloDefaultParameters('Daniel');
helloDefaultParameters('Geraldo Cesar');
