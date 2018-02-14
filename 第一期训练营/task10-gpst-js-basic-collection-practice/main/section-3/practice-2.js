'use strict'
module.exports = function createUpdatedCollection(collectionA, objectB) {
    if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
        return null;
    }
    let result = JSON.parse(JSON.stringify(collectionA));
    let valueObj = objectB.value;
    result.forEach((item) => {
        if(valueObj.includes(item.key)){
            item.count = item.count - Math.floor(item.count / 3);
        }
    });
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
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}
 */