export default class Person {
  constructor(name) {
    if (!name) {
      throw new Error("Person name is required");
    }
    this.name = name;
  }

  introduceYourself() {
    console.log(`Olá, meu nome é ${this.name}`);
  }
}
