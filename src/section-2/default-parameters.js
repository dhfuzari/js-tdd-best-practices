function hello(_name, _surname) {
  const name = _name || 'Daniel Henrique';
  const surname = _surname || 'Fuzari';
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
