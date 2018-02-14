/**下面两个函数是在项目中就已经给出的，所以不用重复写 */
function loadAllItems(){
    //  loadAllItems code
    return result;
}

function loadPromotions(){
    //loadPromotions code
    return result;
}
/**上面两个函数是在项目中就已经给出的，所以不用重复写 */


function build_Tags_list(Tags){
    var   allItems = loadAllItems();
    // creatTagsList code
    return Tags_List;
}

// function creat_promotion_list(){
//     var promotions =  loadPromotions();
//     //creat_promotion_list code
//     return TagsPromotionList;
// }

// function checkPromotion(){
//     //checkPromotion code
//     return lastPromotionList;
// }

function calc_item_price(Tags_List){
    //calculationLastPrice code
    return price_list;
}

function printReceipt(Tags){
    //printReceipt code
    //console.log
    return ReceiptInfo;
}

function printReceipt(){
    var Tags_List = build_Tags_list(Tags);
    // printReceipt code
    var price_list = calc_item_price(Tags_List);
    // printReceipt code
    var price_str = build_print_string(price_list);
    return result;

}
