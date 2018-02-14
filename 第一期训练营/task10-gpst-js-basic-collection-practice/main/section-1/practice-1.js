'use strict';
module.exports = function collectSameElements(collectionA,collectionB){
    //排除特殊情况，比如输入不是数组 或者 不是 collectionA collectionB  中的元素的，然后再处理正常的一般情况
    if(!collectionA || !collectionB || !Array.isArray(collectionA) || !Array.isArray(collectionB)){
        return null;
    }
    let result = [];
    collectionA.forEach(item => {
        if(collectionB.includes(item)){
            result.push(item);
        }
    })
    return result;
}


/* 
function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    for (let item of collectionA) {
        if (includes(collectionB, item)) {
            result.push(item);
        }
    }
    return result;
}
 */