'use strict';

//map 返回新的数组,不改变原数组,所以不需要 from 
function map_to_even(collection) {
  return collection.map(ele => ele * 2);
}
module.exports = map_to_even;
