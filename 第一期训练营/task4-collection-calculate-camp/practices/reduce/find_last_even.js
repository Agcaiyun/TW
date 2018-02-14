'use strict';
// .pop() 改变原数组
function find_last_even(collection) {
  let evenArr = collection.filter((ele) => ele % 2 === 0);
  return Array.from(evenArr).pop();
}

module.exports = find_last_even;
