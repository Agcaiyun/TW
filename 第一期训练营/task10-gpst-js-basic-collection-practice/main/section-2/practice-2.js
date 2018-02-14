'use strict';
module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((item) => {
        findNormal(result,item);
        findSpecial(result,item);
    })
    return result;
}    

function findNormal(result,item){
    if(item.length == 1){
        if(result.some((ele) => ele.key === item)){
            result.find((ele) => ele.key === item).count++
        }else{
            result.push({key:item,count:1});
        }
    }
    return result;
}

function findSpecial(result,item){
    if(item.includes('-')){
        let key = item.split('-')[0];
        let count = parseInt(item.split('-')[1]);
        getResult(result,key,count);
    }
    return result;
}

function getResult(result,key,count){
    if(result.some((ele) => ele.key === key)){
        result.find((ele) => ele.key === key).count += count;
    }else{
        result.push({key:key,count:count});
    }
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

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
 */