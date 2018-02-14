'use strict';

function choose_even(collection) {
  //filter 不会改变元素组,所以不需要 Array.from(collection)
  return collection.filter((item) => item % 2 === 0);
}

module.exports = choose_even;
