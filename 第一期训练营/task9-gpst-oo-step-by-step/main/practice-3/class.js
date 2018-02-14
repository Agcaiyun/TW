// // Write your code here
// const Teacher = require('./teacher');

// module.exports = class Class {
//     constructor(num){
//         this.num =  num;
//     }
//     appendMember(student){
//         student.clazz.num = this.num;
//         student.introduce = function () {
//             return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.num}.`
//         }
//         Teacher.notifyStudentAppended(`${student.name} has joined Class ${this.num}`);
//     }
//     assignLeader(student){
//         if(student.introduce() === `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.num}.`){
//             //是班级号一样的学生，但可能不是这个学校的，所以要验证一下学号是否一样，一样 代表是这个班级的这个人，不一样 可能是班级号一样的不同人或者虽班级号一样但却是不同学校的
//             //学号不同，则不是班级学生中的一员
//             if(student.clazz.num !== this.num){
//                 return `It is not one of us.`;
//             } else {
//                 this.leader = student.name;
//                 student.introduce = function () {
//                     return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${student.clazz.num}.`;
//                 }
//                 Teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.num}`);
//                 return `Assign team leader successfully.`;
//             }
//         }else{
//             return `It is not one of us.`;
//         }
//     }
//     hasStudent(student){
//         if(student.clazz.num === this.num){
//             return true;
//         }else{
//             return false;
//         }
//     }


// }

// Write your code here
var Teacher = require('./teacher');

module.exports = class Class {
    constructor(num){
        this.num = num;
    }
    appendMember(student){
        student.clazz.num = this.num;
        student.introduce = function () {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.num}.`;
        }
        Teacher.notifyStudentAppended(`${student.name} has joined Class ${this.num}`);
        //console.log(`I am ${teacher.name}. I know ${student.name} has joined Class ${student.clazz.num}`);
    }
    assignLeader(student){
        if (student.introduce() === `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.num}.`){
            if (student.clazz.num !== this.num){
                return `It is not one of us.`;
            }
            else {
                this.leader = student.name;
                student.introduce = function () {
                    return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${student.clazz.num}.`;
                }
                Teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.num}`);
                return `Assign team leader successfully.`;
                //console.log(`I am ${teacher.name}. I know ${student.name} become Leader of Class ${student.clazz.num}`);
            }
        }
        else return `It is not one of us.`;
    }
    hasStudent(stdent){
        if (stdent.clazz.num === this.num)    return true ;
        else return false;
    }
}