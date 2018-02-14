'use strict';
//重构后
function createUpdatedCollection(collectionA, objectB) {
  let ans = [];
  for (let item of collectionA) {
    if (objectB.value.includes(item.key)) {
      ans.push({ key: item.key, count: item.count - 1 });
    } else {
      ans.push({ key: item.key, count: item.count });
    }
  }
  return ans;
}


/* 
//the first time
function createUpdatedCollection(collectionA, objectB) {
  // return '实现练习要求，并改写该行代码。';

  for(var i = 0;i < collectionA.length;i++){
    for(var  j = 0;j < objectB.value.length;j++){
      if(collectionA[i].key == objectB.value[j]){
        collectionA[i].count = collectionA[i].count - 1;
      }
    }
  }
  return collectionA;
} */