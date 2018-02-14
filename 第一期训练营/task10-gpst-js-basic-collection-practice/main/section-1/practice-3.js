'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    if(!collectionA || !objectB || !Array.isArray(collectionA) || Object.keys(objectB).length === 0){
        return null;
      }
      const valueArr = objectB.value;
      let result = [];
      collectionA.forEach((ele) => {
          if(valueArr.includes(ele)){
              result.push(ele);
          }
      })
      return result;
}    

/* function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item)) {
            result.push(item);
        }
    }
    return result;
}
 */