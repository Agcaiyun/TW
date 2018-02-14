'use strict'
module.exports = function createUpdatedCollection(collectionA, objectB) {
//排除意外情况
    if (!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0) {
        return null;
    }
//将 collectionA 进行一次 深拷贝，这样 现在的变动不会影响到原来的 collectionA
    let result = JSON.parse(JSON.stringify(collectionA));
    let valubObj = objectB.value;

    result.forEach((item) => {
        if(valubObj.includes(item.key)){
            item.count--;
        }
    })
    return result;
}    

/* 'use strict';

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    }
    return result;
}
 */