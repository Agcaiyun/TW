
'use strict';
//自己整理后
function collectSameElements(collectionA, collectionB) {
  let ans = [];
  for(let item of collectionA){
    if(collectionB.includes(item)){
      ans.push(item);
    }
  }
  return ans;
}


/* 第一次做的时候写的代码
function collectSameElements(collectionA, collectionB) {
  var sameElem = [];
  var  k = 0;
  for(var i = 0;i < collectionA.length;i++){
    for(var j = 0;j < collectionB.length;j++){
      if(collectionA[i] == collectionB[j]){
        sameElem[k++] = collectionB[j];
        break;
      }
    }
  }

  return sameElem;
}
 */


/* 小波老师的代码
function includes(collection,ch){
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA, collectionB) {
  let ans = [];
  for(let item of collectionA){
    if (includes(collectionB,item)) {
      ans.push(item);
    }
  }
  return ans;
}
 */


