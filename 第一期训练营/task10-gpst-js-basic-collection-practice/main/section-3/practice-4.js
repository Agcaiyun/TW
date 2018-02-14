'use strict'
//直接引用之前的 countSameElements 函数进行相同元素的统计
const countSameElements = require('../../main/section-2/practice-2');

module.exports = function createUpdatedCollection(collectionA, objectB) {
    if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
        return null;
    }
    let valueArr = countSameElements(collectionA);
    let valueObj = objectB.value;
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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
 */