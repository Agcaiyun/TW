'use strict';
function collect_last_element(collection) {
  //为了不改变原数组
  let temp = Array.from(collection);
  return temp.pop();
}

module.exports = collect_last_element;
