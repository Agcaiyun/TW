'use strict';

function find_first_even(collection) {
  for(let item of collection){
    if(item % 2 === 0 ){
      return item;
    }
  }
}


module.exports = find_first_even;

