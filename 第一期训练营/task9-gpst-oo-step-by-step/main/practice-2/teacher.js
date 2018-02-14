const Person = require('./person');

class Teacher extends Person{
    constructor(name,age,clazzes,id){
        super(name,age,id);
        this.clazzes = clazzes;
    }
    introduce(){
        if(this.clazzes.length === 0){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach Class ${this.clazzes[0].num},${this.clazzes[1].num}.`
        }
    }
}

module.exports = Teacher;