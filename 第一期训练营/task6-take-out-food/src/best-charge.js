const loadPromotions = require('./promotions.js') ;
const loadAllItems = require('./items.js');

function bestCharge(selectedItems) {
  
 // return /*TODO*/;
  var price_normal;
  var price_half;
  var price_flow;
  var Tags_list = build_Tags_list(selectedItems);
  var item_price = calc_item_price(Tags_list);
  var receipt = print_receipt(item_price , normal_price(Tags_list)  , half_price(Tags_list) , flow_price(Tags_list) , Tags_list);
  var print_string = receipt;
  return print_string;
 
  // console.log( receipt );
}
//获取所购商品的详细信息，包括：id name price count all_price
function build_Tags_list(selectedItems){
  var all_items = loadAllItems();
  var id = [];
  var count = [];
  var Tags_list = [];
  var all_price = [];
  for(let item of selectedItems){
    id.push(item.split(' x ')[0]);
    count.push(parseInt(item.split(' x ')[1]));
  }

  for(let item of all_items){
    if(id.includes(item.id)){
      Tags_list.push(item);
    }
  }

  for(let i = 0;i < count.length;i++){
    Tags_list[i].count = count[i];
    Tags_list[i].all_price = count[i] * Tags_list[i].price;
  }
  return Tags_list;
}

function calc_item_price(Tags_list){
  //分别计算出三种不同计算方案的最终价格
  price_normal = normal_price(Tags_list);
  price_half = half_price(Tags_list);
  price_flow = flow_price(Tags_list);
  //比较得出最终的最优惠的价格
  var best_price = compare_price(price_normal,price_half,price_flow);
  return  best_price;
 
}

//计较三种方法的价格，得到最优惠的价格
function compare_price(price_normal , price_half , price_flow){
  var min = Math.min(price_normal,price_half);
  min = Math.min(min,price_flow);
  return min;
}

//根据最优惠的方案打印出最终的消费清单
function print_receipt(item_price , price_normal  , price_half , price_flow , Tags_list){
  if(item_price == price_normal){
    return normal_print(Tags_list);
    // return 1;
  }else{
    if(item_price == price_flow){
      return flow_print(Tags_list);
    // return 2;
    }else{
      return half_print(Tags_list);
      // return 3;
    }
  }
}


//计算出来没有任何活动的 所有购买商品的 总价格
function normal_price(Tags_list){
  let normal = 0;
  for(let item of Tags_list){
    normal += item.all_price;
  }
  return normal;
}

//打印 没有任何活动 时的购物清单
function normal_print(Tags_list){
  // var normal = normal_price(Tags_list);
  var normal_string = '============= 订餐明细 =============\n';
  for (let item of Tags_list) {
    normal_string += item.name + ' x ' + item.count + ' = ' + item.all_price + '元' + '\n';
  }
  normal_string += '-----------------------------------\n';
  normal_string += '总计：' + price_normal + '元' + '\n';
  normal_string += '==================================='
  return  normal_string ;
}


//计算出 指定菜品半价后的 价格 和 半价菜品名单
function half_price(Tags_list){
  let  half = 0;

  let promotions = loadPromotions();
  let half_obj = promotions.filter(ele => ele.type === '指定菜品半价');
  
  for(let item of Tags_list){
    if(half_obj[0].items.includes(item.id)){
      half += item.all_price / 2 ;
      // half_name.push(item.name);
    }else{
      half += item.all_price;
    }
  }
  return half; 
}

//打印 指定菜品半价后的 购物清单
function half_print(Tags_list){
  //得到 指定菜品半价 的菜品名单
  var half_name_list = build_half_name(Tags_list);
 
  var half_string = '============= 订餐明细 =============\n';
  for (let item of Tags_list) {
    half_string += item.name + ' x ' + item.count + ' = ' + item.all_price + '元' + '\n';
  }
  half_string += '-----------------------------------\n';
  half_string += '使用优惠:\n';
  half_string += '指定菜品半价(' + half_name_list.join('，') + ')，省' + ( price_normal - price_half )  + '元\n' ;
  half_string += '-----------------------------------\n'
  half_string += '总计：' + price_half  + '元' + '\n';
  half_string += '===================================';

  return half_string;
}

//获得 指定菜品半价 的菜品名单
function build_half_name(Tags_list){
  let half_name = [];
  let promotions = loadPromotions();
  let half_name_obj = promotions.filter(ele => ele.type === '指定菜品半价');
  for(let item of Tags_list){
    if(half_name_obj[0].items.includes(item.id)){
      half_name.push(item.name)
    }
  }
  return half_name;
}


function flow_price(Tags_list){
  let flow = 0;
  for(let item of Tags_list){
    flow += item.all_price;
  }
  if(flow > 30){
      flow -= 6;
  }
  return flow;
}

function flow_print(Tags_list){
  // var flow = flow_price(Tags_list);
  var flow_string = '============= 订餐明细 =============\n';
  for (let item of Tags_list) {
    flow_string += item.name + ' x ' + item.count + ' = ' + item.all_price + '元' + '\n';
  }
  flow_string += '-----------------------------------\n';
  flow_string += '使用优惠:\n';
  flow_string += '满30减6元，省6元\n' ; 
  flow_string += '-----------------------------------\n'
  flow_string += '总计：' + price_flow + '元' + '\n';
  flow_string += '==================================='
  return flow_string;
}

module.exports = bestCharge;