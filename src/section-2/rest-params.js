// Without rest params
function multiply(mult, arg1, arg2, arg3) {
  const arrOfMultipleArgs = [];
  arrOfMultipleArgs.push(mult * arg1);
  arrOfMultipleArgs.push(mult * arg2);
  arrOfMultipleArgs.push(mult * arg3);
  return arrOfMultipleArgs;
}

// With rest params
function multiplyRestParams(mult, ...args) {
  return args.map((arg) => mult * arg);
}

console.log(multiply(5, 10, 20, 30));
console.log(multiplyRestParams(5, 10, 20, 30));
