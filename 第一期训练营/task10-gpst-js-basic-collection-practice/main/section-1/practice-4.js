'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    if (!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0) {
        return;
    }
    //取出 collectionA.key 和 objectB.value 分别组成新的数组，为后续的比较做准备
    const valueA = [];
    collectionA.forEach((ele) => {
        valueA.push(ele.key);
    })
    const valueB = objectB.value;

    let result = [];
    valueA.forEach((ele) => {
        if(valueB.includes(ele)){
            result.push(ele);
        }
    })
    return result;

    
}    

/* function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item.key)) {
            result.push(item.key);
        }
    }
    return result;
}
 */