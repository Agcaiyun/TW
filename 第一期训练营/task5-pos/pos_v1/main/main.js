'use strict';

//TODO: 请在该文件中实现练习要求并删除此注释

function build_Tags_list(tags){
    let all_Tags_list = loadAllItems();
    //build count
    //初始化
    for(let item of all_Tags_list){
        item.count = 0;
        item.total = 0;
    }
    //barcode 扫描输入的原始条形码
    //cd 分离 - 之后的 标准条形码
    for(let barcode of tags){
        let count = 1;
        let bc = barcode;
        //散装称量的情况
        if(barcode.includes('-')){
            bc = barcode.split('-')[0];
            count = parseFloat(barcode.split('-')[1]);
        }
        for(let item of all_Tags_list){
            if(item.barcode == bc){
                item.count += count;
            }
        }
    }
    let Tags_list = [];
    for(let item of all_Tags_list){
            if(item.count != 0){
            Tags_list.push(item);
        }
    }
    return Tags_list;
}

function calc_item_price(Tags_list){
    let price_total = 0;
    let cut_total = 0;
    let promotions = loadPromotions();
    for(let promotion of promotions){
        if(promotion.type == 'BUY_TWO_GET_ONE_FREE'){
            for(let barcode of promotion.barcodes){
                for(let item of Tags_list){
                    if(item.barcode == barcode){
                        item.total = ((item.count - Math.floor(item.count/3)) * item.price);
                        price_total += item.total;
                        cut_total += (Math.floor(item.count/3) * item.price);
                    }
                }
            }
        }
    }
    for(let item of Tags_list){
        if(item.total == 0){
            item.total = (item.count * item.price);
            price_total += item.total;
        }
    }
    //build_price
    let price_list = {};
    price_list.Tags_list = Tags_list;
    price_list.price_total = price_total;
    price_list.cut_total = cut_total;
    return price_list;
}




function build_print_string(price_list){
    let price_str = "***<没钱赚商店>收据***\n";
    for(let item of price_list.Tags_list){
        price_str += "名称："+item.name+"，数量："+item.count+item.unit+"，单价："+item.price.toFixed(2)+"(元)，小计："+item.total.toFixed(2)+"(元)\n";
    }
    price_str += "----------------------\n";
    price_str += "总计："+price_list.price_total.toFixed(2)+"(元)\n"
    price_str += "节省："+price_list.cut_total.toFixed(2)+"(元)\n"
    price_str += "**********************";
    return price_str;
}


function printReceipt(tags){
    let Tags_list = build_Tags_list(tags);
    let price_list = calc_item_price(Tags_list);
    let price_str = build_print_string(price_list);
    console.log(price_str);
}
