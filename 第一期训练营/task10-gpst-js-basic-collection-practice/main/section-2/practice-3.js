module.exports = function summarySameElements(collection) {
    let result = [];
    collection.forEach((item) => {
        findNormal(result, item);
        findSpecial(result, item);
    })
    return result;
}

function findNormal(result, item) {
    if (item.length == 1) {
        if (result.some((ele) => ele.name === item)) {
            result.find((ele) => ele.name === item).summary++
        } else {
            result.push({ name: item, summary: 1 });
        }
    }
    return result;
}

function findSpecial(result, item) {
    if (item.includes('-')) {
        let name = item.split('-')[0];
        let summary = parseInt(item.split('-')[1]);
        getResult(result, name, summary);
    }
    if(item.includes(':')){
        let name = item.slice(':')[0];
        let summary = parseInt(item.split(':')[1]);
        getResult(result, name, summary);
    }
    if(item.includes('[')){
        let name = item.split('[')[0];
        let summary = parseInt(item.split('[')[1].substring(0,item.split('[')[1].length - 1));
        getResult(result, name, summary);
    }
    
    return result;
}

function getResult(result, name, summary) {
    if (result.some((ele) => ele.name === name)) {
        result.find((ele) => ele.name === name).summary += summary;
    } else {
        result.push({ name: name, summary: summary });
    }
    return result;
}

/* 'use strict';

function find(collection, ch) {
    for (let item of collection) {
        if (item.name === ch) {
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
            obj.summary++;
        } else {
            result.push({name: item, summary: 1});
        }
    }
    return result;
}

function split(item) {
    if (item.includes("-")) {
        let array = item.split("-");
        return {name: array[0], summary: parseInt(array[1], 10)};
    }

    if (item.includes("[")) {
        let name = item.charAt(0);
        let summary = parseInt(item.substr(2, item.length - 1));
        return {name, summary};
    }

    if (item.includes(":")) {
        let array = item.split(":");
        return {name: array[0], summary: parseInt(array[1], 10)};
    }
}

function push(result, name, summary) {
    for (var i = 0; i < summary; i++) {
        result.push(name);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {name, summary} = split(item);
            push(result, name, summary);
        }
    }
    return result;
}

module.exports = function summarySameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
 */