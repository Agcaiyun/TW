'use strict';
function choose_no_repeat_number(collection) {
  let result = [];
  for (let item of collection) {
    result.includes(item) ? null : result.push(item);
  }
  return result;
}

// function choose_no_repeat_number(collection) {
//   let result = new Set();
//   for (let item of collection) {
//     result.add(item);
//   }
//   return Array.from(result);
// }

module.exports = choose_no_repeat_number;
