'use strict';
//重构后
function createUpdatedCollection(collectionA, objectB) {
  let C = [];
  let ans = [];
  for(let item of collectionA){
    if(C.some(ele => ele.key === item)){
      C.find(ele => ele.key === item).count++;
    }else{
      C.push({key:item,count:1});
    }
  }

  for(let item of C){
    if(objectB.value.includes(item.key)){
      ans.push({key:item.key,count:item.count - parseInt((item.count / 3))});
    }else{
      ans.push({key:item.key,count:item.count});
    }
  }
  return ans;
}



/*
//the firse time
var C = [
      {key: 'a', count: 0},
      {key: 'e', count: 0},
      {key: 'h', count: 0},
      {key: 't', count: 0},
      {key: 'f', count: 0},
      {key: 'c', count: 0},
      {key: 'g', count: 0},
      {key: 'b', count: 0},
      {key: 'd', count: 0}
  ]


function createUpdatedCollection(collectionA, objectB) {
  // return '实现练习要求，并改写该行代码。';


  // 统计 collectionA 中相同元素的个数
  for(var i = 0;i < C.length;i++){
    for(var j = 0;j < collectionA.length;j++){
        if( C[i].key == collectionA[j]){
          C[i].count++;
        }
    }
  }

  //选出C集合中的元素的key属性跟B对象中value属性中的元素相同的元素,
  //把他们的count，满3减1，输出减过之后的新C集合'
  var temp = 0;
  for(var i = 0;i < C.length;i++){
    for(var  j = 0;j < objectB.value.length;j++){
      if(C[i].key == objectB.value[j]){
        temp = parseInt(C[i].count / 3);
        C[i].count = C[i].count - temp;
      }
    }
  }
  return C;
}
 */


      
