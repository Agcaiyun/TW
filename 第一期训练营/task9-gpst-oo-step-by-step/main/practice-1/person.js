
// Write your code here
// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return `My name is ${this.name}. I am ${this.age} years old.`
//     }
//     static basicIntroduce(name,age){
//         return `My name is ${name}. I am ${age} years old.`
//     }
// }
// module.exports = Person;


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.` ;
    }
}

module.exports = Person;