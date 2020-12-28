function Animal(kind, sound) {
  this.kind = kind;
  this.sound = sound;
  this.steps = 0;
  this.walk = () => {
    this.steps += 1;
    console.log(this.steps);
  };
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

Animal.prototype.hello = () => {
  console.log(`${this.sound} I'm a ${this.kind}`);
};

dog.hello();
cat.hello();
