'use strict'
// 可以直接将 section-2/practice-1 的程序直接引用过来
const countSameElements = require('../../main/section-2/practice-1');

module.exports = function createUpdatedCollection(collectionA, objectB) {
    if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
        return null;
    }
    const valueArr = countSameElements(collectionA);
    const valueObj = objectB.value;
    let result = JSON.parse(JSON.stringify(valueArr));
    result.forEach((item) => {
        if(valueObj.includes(item.key)){
            item.count -= Math.floor(item.count / 3);
        }
    });
    return result;
}   


/* 'use strict';

function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

function summarize(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;
}

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

function discount(collection, promotionItems) {
    let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
 */