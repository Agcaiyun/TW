'use strict';
 //重构后
function collectSameElements(collectionA, collectionB) {
  let ans = [];
  for(let item of collectionA){
    if(collectionB[0].includes(item)){
      ans.push(item);
    }
  }
  return ans;
}



/* //第一次做
function collectSameElements(collectionA , collectionB) {
  var sameElem = [];
  var  k = 0;
  for(var i = 0;i < collectionA.length;i++){
    for(var j = 0;j < collectionB[0].length;j++){
      if(collectionA[i] == collectionB[0][j]){
        sameElem[k++] = collectionB[0][j];
        break;
      }
    }
  }

  return sameElem;
}
 */

/* //小波老师
function include(collection,ch){
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA , collectionB) {
  let result = [];
  for(let item of collectionA){
    if(include(collectionB[0],item)){
      result.push(item);
    }
  }
  return result;
}
 */





