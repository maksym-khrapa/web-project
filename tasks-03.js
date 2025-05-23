//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length == 5) arr.push(key);
    if (obj[key].length == 5) arr.push(obj[key]);
  }
  return arr;
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      console.log(i);
      return i;
    });
  }
  return res;
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 0;
    this.species = "shark";
  }
}
class Cat extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master, legs, species) {
    super(name, age, legs, species, status);
    this.legs = 4;
    this.species = "dog";
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
