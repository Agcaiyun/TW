'use strict';
var even_asc_odd_desc = function (collection) {
    let evenArr = [];
    let oddArr = [];
    for (let item of collection) {
        item % 2 === 0 ? evenArr.push(item) : oddArr.push(item);
    }
    let evenSortArr = Array.from(evenArr).sort((a, b) => a - b);
    let oddSortArr = Array.from(oddArr).sort((a, b) => b - a);
    return evenSortArr.concat(oddSortArr);
};
module.exports = even_asc_odd_desc;
