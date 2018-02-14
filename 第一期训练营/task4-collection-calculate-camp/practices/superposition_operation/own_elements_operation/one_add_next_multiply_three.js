'use strict';
function one_add_next_multiply_three(collection) {
  var ans = [];
  for (var i = 0; i < collection.length - 1; i++) {
    ans.push((collection[i] + collection[i + 1]) * 3);
  }
  return ans;
}
module.exports = one_add_next_multiply_three;
