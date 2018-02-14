/* 计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：
* nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2]
* arr1 = [1,2] arr2 = [1,2,2] ======>[1,2]
* arr1 = [1,1,2,1,2,2] arr2 = [1,2,2] ======>[1,2,2]
 */

let arr1 = [1,2];
let arr2 = [1,2,2];
let arr3 = [1,1,2,1,2,2];
let arr4 = [1,2,3];

console.log(and(arr1,arr2));
console.log(and(arr3,arr4));

function and(arr1,arr2){
    let arr = Array.from(arr2);
    let index = -1;
    let result = [];
    arr1.forEach((item) => {
        if(arr.some((ele) => ele === item)){
            result.push(item);
            arr.splice(arr.indexOf(item),1);
        }
    })
    return arr1 + '\n' + arr2 + '\n' + '交数组为：' + result;
}