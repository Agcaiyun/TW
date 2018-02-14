'use strict';

module.exports = function collectSameElements(collectionA,collectionB){
    if (!collectionA || !collectionB || !Array.isArray(collectionA) || !Array.isArray(collectionB)) {
        return null;
    }
    let result = [];
    collectionA.forEach(item => {
        if(collectionB[0].includes(item)){
            result.push(item)
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

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    for (let item of collectionA) {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    }
    return result;
}
 */