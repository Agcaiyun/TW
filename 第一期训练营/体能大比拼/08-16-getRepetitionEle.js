/* 题目：找出数组 arr 中重复出现过的元素
例如：let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];输出：'a', 'ed' */

let arr = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
getRepetitonEle(arr);

function getRepetitonEle(arr){
    let result = [];
    for(let item of arr){
        if(result.includes(item)){
            console.log(item)
        }else{
            result.push(item);
        }
    }
}