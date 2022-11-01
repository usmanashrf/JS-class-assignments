class Person {
    constructor(name) {
      this.name = name;
    }

    sum(num1,num2) {
        return num1+num2;
    }
  }
  
  // creating an object
  const person1 = new Person('John');
  const person2 = new Person('Jack');
  
  console.log(person1.name); // John
  console.log(person2.name); // Jack

  console.log(person1.sum(5,9));
