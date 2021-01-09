const person = "Mike";
const age = 100;

function myTagFunction(strings, ...restParams) {
  console.log(strings);
  console.log(restParams);
  const [personExp, ageExp] = [...restParams];
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""),  so disregard.
  // let str2 = strings[2]

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

const output = myTagFunction`That ${person} is a ${age}.`;

console.log(output);
