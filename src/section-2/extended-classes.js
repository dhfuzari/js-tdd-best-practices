/* eslint-disable max-classes-per-file */

class Animal {
  constructor(kind) {
    this.kind = kind;
  }

  hello() {
    console.log(`Hi, I'm a(n) ${this.kind}`);
  }
}

const elephant = new Animal("Elephant");
elephant.hello();

class Dog extends Animal {
  constructor(kind, sound) {
    super(kind);
    this.sound = sound;
  }

  bark() {
    console.log(`${this.sound} I'm ${this.kind}`);
  }
}

const dog = new Dog("Dog", "Au-au");
dog.hello();
dog.bark();
