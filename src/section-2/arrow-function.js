const ireland = ["Dublin", "Galway", "Cork"];

const love = ireland.map((name) => `I love ${name}`);
console.log(love);

const loveArrowFunc = ireland.map((name) => `I love ${name}`);
console.log(loveArrowFunc);

const loveArrowFuncFilter = ireland
  .filter((name) => name === "Dublin")
  .map((name) => `I love ${name}`);
console.log(loveArrowFuncFilter);
