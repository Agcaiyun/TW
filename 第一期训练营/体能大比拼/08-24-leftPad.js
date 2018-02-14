/* 实现一个left-pad函数
leftpad功能，就是字符串前面拼指定字符到固定长度，比如
leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
三个参数，
第一个：当前字符串；
第二个：需要返回字符串的长度
第三个：用来拼接的字符串 */

let currentStr = 'hello';
const length = 20;
let concatStr = '1';
console.log(leftPad(currentStr,length,concatStr));

function leftPad(currentStr,length,concatStr){
    let result = '';
    if(currentStr.length > length){
        return currentStr;
    }else{
        let count = length - currentStr.length;
        for(let index = 0; index < count; index++){
            result += concatStr;
        }
        result += currentStr;
    }
    return result;
}