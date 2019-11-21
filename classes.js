class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    currentAge(){
        return `I am ${this.name} and I am ${this.age} years old`
    }

    static speech(){
        return "I can talk"
    }

    totalWorkExperience(proffesionalYears){
        let otherJobs = 2
        return otherJobs  + proffesionalYears;
      }
}

let person = new Person("Clyde", 24)
console.log(person.currentAge())
console.log(Person.speech)

class Youth extends Person{
    constructor(hobby, age, name){
        super();
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
}
let youth = new Youth("swimming", 19, "Chris");
console.log(youth.currentAge());

