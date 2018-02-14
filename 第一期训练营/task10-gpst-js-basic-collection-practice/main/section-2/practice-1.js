'use strict';

module.exports = function countSameElements(collection) {
    //先排除特殊情况，再进行一般情况的处理
    if(!collection || !Array.isArray(collection)){
        return null;
    }
    let result = [];
    collection.forEach((item) =>{
        if (result.some((value) => value.key === item)) {
            result.find((value) => value.key === item).count++;
        } else {
            result.push({ key: item, count: 1 });
        }
    })
    return result;
}    

/* function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

module.exports = function countSameElements(collection) {
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
 */