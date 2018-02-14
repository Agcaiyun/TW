// const Person = require('./person');

// module.exports = class Student extends Person  {
//     constructor(name,age,clazz,id){
//         super(name,age,id);
//         this.clazz = clazz;
//     }
//     introduce(){
//         return `${super.introduce()} I am a Student. I haven't been allowed to join Class.`;
//     }
// }

const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name,age,clazz,id) {
        super(name, age,id);
        this.clazz = clazz;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I haven't been allowed to join Class.`;
    }
}
