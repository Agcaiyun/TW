'use strict';
//重构后
function collectSameElements(collectionA, objectB) {
  let result = [];
  for(let item of collectionA){
    if(objectB.value.includes(item)){
      result.push(item);
    }
  }
  return result;
}



/* // the first time 
function collectSameElements(collectionA, objectB) {
  var sameElem = [];
  var  k = 0;
  for(var i = 0;i < collectionA.length;i++){
    for(var j = 0;j < objectB.value.length;j++){
      if(collectionA[i] == objectB.value[j]){
        sameElem[k++] = objectB.value[j];
        break;
      }
    }
  }

  return sameElem;
} */


/* //小波老师

function include(collection,ch){
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function collectSameElements(collectionA, objectB) {
  let result = [];
  for(let item of collectionA){
    if(include(objectB.value,item)){
      result.push(item);
    }
  }
  return result;
}
 */

