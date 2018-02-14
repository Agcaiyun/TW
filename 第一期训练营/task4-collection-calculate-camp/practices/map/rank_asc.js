'use strict';
//sort() 返回排序后的数组,原数组已经被排序后的数组代替
//所以为了不改变原数组,需要用 Array.from()  对原数组进行备份
var rank_asc = function (collection) {
    //下面是三种思路
    //collection.sort((a,b) => a - b > 0 ? -1 : 1);
    //collection.sort((a,b) => b - a);
    let result = Array.from(collection);
    return result.sort((a, b) => b - a);
}

module.exports = rank_asc;
