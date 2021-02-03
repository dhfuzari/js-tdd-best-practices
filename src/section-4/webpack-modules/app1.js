// import "method" from "library"
// * => it loads everithing from lib
// as => it`s an alias for all methods imported from library as "*"
import * as R from "ramda";
import react from "react";
import reactDOM from "react-dom";

import sumFunction, {
  sub,
  mult,
  div,
  multiplication,
  division,
  PI,
} from "../utils";

console.log("APP 1");
const arr1 = [1, 1, 1, 2, 2, 3, 4, 55, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1, 56];

const arr3 = R.union(arr1, arr2);
console.log("🚀 ~ file: app.js ~ line 7 ~ arr3", arr3);
const arr4 = R.uniq(arr1);
console.log("🚀 ~ file: app.js ~ line 9 ~ arr4", arr4);

const resultSum = sumFunction(10, 40);
console.log("🚀 ~ file: app.js ~ line 18 ~ resultSum", resultSum);

const resultSub = sub(50, 30);
console.log("🚀 ~ file: app1.js ~ line 21 ~ resultSub", resultSub);

const multResult = mult(6, 8);
console.log("🚀 ~ file: app1.js ~ line 24 ~ multResult", multResult);

const divResult = div(1540, 2);
console.log("🚀 ~ file: app1.js ~ line 27 ~ divResult", divResult);

const multiplicationResult = multiplication(6, 8);
console.log(
  "🚀 ~ file: app1.js ~ line 36 ~ multiplicationResult",
  multiplicationResult
);

const divisionResult = division(1540, 2);
console.log("🚀 ~ file: app1.js ~ line 42 ~ divisionResult", divisionResult);

console.log("🚀 ~ file: app1.js ~ line 14 ~ PI", PI);
