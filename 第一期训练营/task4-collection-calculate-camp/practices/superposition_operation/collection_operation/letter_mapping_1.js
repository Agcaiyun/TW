'use strict';

function even_to_letter(collection) {
    let evenArr = collection.filter((ele) => ele % 2 === 0);
    return evenArr.map((ele) => String.fromCharCode(ele + 96));
}

module.exports = even_to_letter;
