'use strict';
var is_exist_element = function(collection,element){
    let evenIndexArr = collection.filter((_,index) => index % 2 === 0);
    return evenIndexArr.includes(element);
};
module.exports = is_exist_element;
