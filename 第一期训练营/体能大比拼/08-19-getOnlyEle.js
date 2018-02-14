/* 数组去重
例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’] */

let arr = ['s','a','s','b','a',1,'1',1];
console.log(getOnlyEle(arr));

function getOnlyEle(arr){
    let result = [];
    arr.forEach((item) => {
        if(!result.includes(item)){
            result.push(item);
        }
    })
    return result;
}