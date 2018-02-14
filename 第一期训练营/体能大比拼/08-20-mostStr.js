/* 判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5} */

let str1 = 'abcsbaddbizdbas';
let str2 = 'aaaaabbdbdbb';
console.log(mostStr(str1));
console.log(mostStr(str2));

function mostStr(str){
    let countArr = getCountArr(str);
    let result = getMostStr(countArr);
    return result;
}    

function getCountArr(str){
    //先统计各个元素的个数
    let countObj = [];
    //将字符串转换为数组
    let arr = Array.from(str);
    arr.forEach((item) => {
        if(countObj.some((ele) => ele.key === item)){
            countObj.find((ele) => ele.key === item).count++;
        }else{
            countObj.push({key:item,count:1});
        }
    })
    return countObj;
}

function getMostStr(countObj){
    let result = '{';
    let max = countObj[0].count;
    
    for(let i = 1;i < countObj.length;i++){
        countObj[i].count > max ? max = countObj[i].count : max;
    }
    countObj.forEach((item) =>  {
        if(item.count === max){
            result += item.key + ':' + item.count;
        }
    });
    result += '}';
    return result;
}