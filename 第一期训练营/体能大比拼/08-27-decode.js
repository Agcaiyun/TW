/* 给定编码如下，给出一个整数,返回解码方法的种数；
例如：
给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
1-> 'A’
2-> ‘B’
…
26-> ‘Z’ */

let num1 = 1234;
let num2 = 1112;
let num3 = 109;
console.log(decode(num1));
console.log(decode(num2));
console.log(decode(num3));


function decode(num) {
    if (num < 0) {
        return 0;
    }
    //正常情况
    let sum = 0;
    let str = num + '';
    //一位解码
    arr = str.split('');
    arr.includes('0') ? sum += 0 : sum += 1;
    //两位解码 只有一个是两位的
    sum = recodeTwo(str, sum, num)
    //两位解码 中 两两一组
    return recodeTwoTwo(str, sum, num);
}

//两位解码  中 只有一个是两位的，其他的都仍然是一位的
function recodeTwo(str, sum, num) {
    let cacheArr = [];
    for (let i = 0; i < str.length - 1; i += 1) {
        let cacheTwo = str.slice(i, i + 2);
        cacheArr.push(cacheTwo)
    }
    // 过滤掉 > 27 的部分
    let filterArr = [];
    for (let item of cacheArr) {
        filterArr = cacheArr.filter((ele) => ele < 26);
    }
    //cacheResult 存放两位拆分的所有可能
    //splice 直接改变原数组,所以用 backupArr 来复制原数组来保护元素组
    let backupArr = [];
    let cacheResult = [];
    for (let i = 0; i < filterArr.length; i++) {
        backupArr = Array.from(arr);
        backupArr.splice(i, 2, filterArr[i]);
        cacheResult.push(backupArr);
    }
    for (let item of cacheResult) {
        item.includes('0') ? sum += 0 : sum += 1;
    }
    return sum;
}

//两位解码 中 两两一组
function recodeTwoTwo(str, sum, num) {
    let twoCache = [];
    if (str.length % 2 != 0) {
        return num + '  ' + '---->' + '    ' + sum + '种解码方法';
    } else {
        for (let i = 0; i < str.length - 1; i += 2) {
            twoCache.push(str.slice(i, i + 2));
        }
    }
    for (let item of twoCache) {
        item < 26 ? sum += 1 : sum += 0;
    }
    return num + '  ' + '---->' + '    ' + sum + '种解码方法';
}