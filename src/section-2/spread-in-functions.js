function makeSandwich(bread, cheese, sauce) {
  console.log(
    `Your sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done`
  );
}
// Call makeSandwich function without spread values
makeSandwich("australian", "bree", "spiced");

// Using spread to call makeSandwich function
const ingredients = ["australian", "bree", "spiced"];
makeSandwich(...ingredients);
