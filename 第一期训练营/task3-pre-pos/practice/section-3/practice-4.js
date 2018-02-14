'use strict';
//重构后
function createUpdatedCollection(collectionA, objectB) {
  let C = [];
  let ans = [];
  for(let item of collectionA){
    if(item.length == 1){
      //这里不能用 includes 方法，不然 不同情况会被分开计算
      if(C.some(ele => ele.key === item)){
        C.find(ele => ele.key === item).count++;
      }else{
        C.push({key:item,count:1});
      }
    }else{
      if(item.includes('-')){
        let key = item.split('-')[0];
        let count = parseInt(item.split('-')[1]);
        if (C.some(ele => ele.key === key)) {
          C.find(ele => ele.key === key).count += count;
        } else {
          C.push({ key: key, count: count});
        }
      }
    }
  }
  
  for(let item of C){
    if(objectB.value.includes(item.key)){
      ans.push({key:item.key,count:item.count - Math.floor(item.count / 3)})
    }else{
      ans.push({key:item.key,count:item.count});
    }
  }

  return ans;
}
/* 
    if(item.length == 1){
      if(ans.some(ele => ele.key === item)){
        ans.find(ele => ele.key === item).count++;
      }else{
        ans.push({key:item,count:1});
      }
    }else{
      let key = item.split('-')[0];
      let count = parseInt(item.split('-')[1]);
      if(ans.some(ele => ele.key === key)){
        ans.find(ele => ele.key === key).count += count;
      }else{
        ans.push({key:key,count:count});
      }
    }
  } */
 

/* 
//the first time
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
  //统计 collectionA 中各个元素的个数
  var temp;
  for(var i = 0;i < C.length;i++){
    for(var j = 0;j < collectionA.length;j++){
      if(collectionA[j].length == 1){
        if(C[i].key == collectionA[j]){
          C[i].count++;
        }
      }else{
        temp = collectionA[j].slice(0,1) ;
        if( C[i].key == temp){
          C[i].count  += parseInt( collectionA[j].slice(2) );
        }
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