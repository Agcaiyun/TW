'use strict';
// function choose_no_repeat_number(collection) {
//   let result = []
//   return collection.filter((ele) => {
//     return !result.includes(ele) ? result.push(ele) : null
//   })
// }

function choose_no_repeat_number(collection) {
  let result = new Set();
  collection.map(item => result.add(item))
  return Array.from(result);
}

module.exports = choose_no_repeat_number;
