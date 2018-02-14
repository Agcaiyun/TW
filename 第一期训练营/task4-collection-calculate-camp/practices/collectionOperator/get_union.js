'use strict';
function get_union(collection_a, collection_b) {
  let result = collection_a;
  for(let item of collection_b){
    collection_a.includes(item) ? null : result.push(item);
  }
  return result;
}

module.exports = get_union;

