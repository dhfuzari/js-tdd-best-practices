class Animal {
  constructor(kind, sound) {
    this.kind = kind;
    this.sound = sound;
    this.steps = 0;
  }

  // Static class method
  static info() {
    console.log('This is a class to create animals');
  }

  // Common method
  walk() {
    this.steps += 1;
    console.log(this.steps);
  }

  // Common method
  hello() {
    console.log(`${this.sound} I'm a ${this.kind}`);
  }

  // Getter method
  get kindAnimal() {
    return `I'm a ${this.kind}`;
  }

  // Setter method
  set kindAnimal(kind) {
    this.kind = kind;
  }
}

const dog = new Animal('dog', 'bark');
console.log(dog);

const cat = new Animal('cat', 'meow');
console.log(cat);

cat.walk();
cat.walk();
cat.walk();
dog.walk();
dog.walk();
dog.hello();
cat.hello();
console.log(dog.kindAnimal);
console.log(cat.kindAnimal);
cat.kindAnimal = 'white cat';
dog.kindAnimal = 'black dog';
console.log(dog.kindAnimal);
console.log(cat.kindAnimal);
