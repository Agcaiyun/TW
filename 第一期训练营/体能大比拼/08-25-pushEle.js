/* 将数组中所包含的某个元素找出，并放在数组后面
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].

function XXX(arr,elem){ }

参数：
arr:数组
elem:某个元素 */

let arr1 = [0, 1, 0, 3, 12];
let arr2 = [1, 23, 4, 5, 6, 4, 4, 8, 6];
let target1 = 0;
let target2 = 4;
console.log(pushEle(arr1,target1));
console.log(pushEle(arr2,target2));

function pushEle(arr,target){
    let result = [];
    let cacheNormal = [];
    let cacheTarget = [];
    for(let item of arr){
        item === target ? cacheTarget.push(item) : cacheNormal.push(item);
    }
    result = cacheNormal.concat(cacheTarget);
    return arr + result;
}