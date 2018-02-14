/* 给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。
给定 [1,2,[1,2]]，返回 [1,2,1,2]。

给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。
给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。 */


let arr1 = [1,2,[1,2],[3,4]];
let arr2 = [4,[3,[2,[1]]]];
let arr3 = [1,2,[1,2]];
console.log(getArr(arr1));
console.log(getArr(arr2));
console.log(getArr(arr3));


function getArr(arr) {
    let str = arr.join();
    str = str.split(0,arr.length);
    return arr + '---->' + str + '---->' +  (typeof str);
}