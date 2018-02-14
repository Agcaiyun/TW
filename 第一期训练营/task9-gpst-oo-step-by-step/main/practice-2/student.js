const Person = require('./person');

class Student extends Person{
    //这里 name,age,clazz,id 的顺序不能错，因为在 main-spec.js 中调用 Student 时传入参数是有一定顺序的
    constructor(name,age,clazz,id){
        super(name,age,id);
        this.clazz = clazz;
    }
    introduce(){
        return `${super.introduce()} I am a Student. I am at Class ${this.clazz.num}.`;
    }
}


module.exports = Student;