function* genNames() {
  // call first name
  console.log("First name");
  yield "Daniel";

  // call second name
  console.log("Second name");
  yield "Henrique";

  // call third name
  console.log("Third name");
  yield "Fuzari";

  console.log("All yields done");
}

const names = genNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
