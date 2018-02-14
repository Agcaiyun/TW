'use strict';
// 完成题目需要的两个功能函数在之前已经写过了,所以也可以直接进行引用,然后再在函数中进行调用引用的函数
function double_to_one(collection) {
  let result = [];
  for (let item of collection) {
    Array.isArray(item) ? result.push(...item) : result.push(item);
  }
  let temp = [];
  for (let item of result) {
    if (!temp.includes(item)) {
      temp.push(item)
    }
  }
  return temp;
}

module.exports = double_to_one;
