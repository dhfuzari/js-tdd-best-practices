// import just two methos form "ramda" library - "union" and "uniq"
import { union, uniq } from "ramda";

console.log("APP 2");
const arr1 = [1, 1, 1, 2, 2, 3, 4, 55, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1, 56];

const arr3 = union(arr1, arr2);
console.log("🚀 ~ file: app.js ~ line 7 ~ arr3", arr3);
const arr4 = uniq(arr1);
console.log("🚀 ~ file: app.js ~ line 9 ~ arr4", arr4);
