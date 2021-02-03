// Main method
// Only one "default" per file
// You can import it using any name
// You don't need use keys to import a default module
// Ex.: import sumFunction, { sub } from "../utils";
function sum(leftOper, rightOper) {
  return leftOper + rightOper;
}

// Named export
// You can have several exports within the same file
// You must import it using it's original name and you need use kyes "{}" to import it
// Ex.: import { sub } from "../utils";
export function sub(leftOper, rightOper) {
  return leftOper - rightOper;
}

// Another way to export a named function. It must keep the same rules from the named export above
function mult(leftOper, rightOper) {
  return leftOper * rightOper;
}
function div(leftOper, rightOper) {
  return leftOper / rightOper;
}
export { mult, div };

// Named exports with alias
function multplicationFunction(leftOper, rightOper) {
  return leftOper * rightOper;
}
function divisionFunction(leftOper, rightOper) {
  return leftOper / rightOper;
}
export {
  multplicationFunction as multiplication,
  divisionFunction as division,
};

// Export variables
const PI = 3.14;
export { PI };

export default sum;
