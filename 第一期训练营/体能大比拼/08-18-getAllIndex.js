/* 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环 */

// .indexOf 也是可以获得数组中，与 item 相同的所有元素相同的索引值的 
//语法：arr.indexOf(searchElement)  or   arr.indexOf(searchElemtn[,fromIndex = 0])
let arr1 = [1, 3, 7, 1 ,4,] ;
let arr2 = [1,4,5,6,7,3,4,1,2,4,1,2,1];
let arr3 = [3,34,34,,5,1,34,1,6,1,4,1,6]
let arr4 = [];
let item = 1;
console.log(arr1 + '-->' + 'item' + '=' + item + '-->' + getAllIndex(arr1,item));
console.log(arr2 + '-->' + 'item' + '=' + item + '-->' + getAllIndex(arr2,item));
console.log(arr3 + '-->' + 'item' + '=' + item + '-->' + getAllIndex(arr3,item));
console.log(arr4 + '-->' + 'item' + '=' + item + '-->' + getAllIndex(arr4,item));

function getAllIndex(arr ,item){
    let result = [];
    let index = arr.indexOf(item);
    if(index === -1){
        return '该元素不在数组中';
    }
    while(index != -1){
        result.push(index);
        index = arr.indexOf(item,index + 1);
    }
    return result;

}