'use strict';

// function compare_collections(collection_a, collection_b) {
//   for(let item of collection_a){
//     if(!collection_b.includes(item)){
//       return false;
//     }
//   }
//   return true;
// }

// .every() 方法 不改变原数组
function compare_collections(collection_a, collection_b) {
  if(collection_a == null || collection_b == null){
    return false;
  }
  if(collection_a.length !== collection_b.length){
    return false;
  }
  return collection_a.every((ele, index) => ele === collection_b[index]);
}  

module.exports = compare_collections;


