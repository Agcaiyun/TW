function main(string){
    let cacheString = ['1','2','3','4','5','6','7','8','9','0'];
    let cacheBarcode = [':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::','||:::'];
    let content = '';
    let barcode = [];
    let result = '';

    //输入为空
    if (string == '') {
        return '';
    }

    //输入非空
    return string.includes('|') ?  BarcodeToString(string) : stringToBarcode(string);

    //return ZIP  code given barcode
    function BarcodeToString(string) {
        let barcode = getContent(string);
        let result = getContentString(barcode);
        let resultStr = getResultStr(result);
        return resultStr;
    }

    function stringToBarcode(string){
        let str = deleteSymbol(string);
        let securityStr = getSecurityCode(str);
        let result = getResult(securityStr);
        return result;
        // return securityStr;
    }

    function getContent(string){
        //去头去尾 ('|')  得到中间的内容 content:String
        //再截取长度为 5 的字符串（有实际意义的内容），放入 barcode[]
        for (let i = 1; i < string.length - 1; i++) {
            content += string[i];
        }
        for (let index = 0; index <= content.length - 5; index += 5) {
            let string = content.substr(index, 5);
            barcode.push(string);
        }
        return barcode;
    }

    function getContentString(barcode){
        //得到 barcode 中的元素 在  cacheString 中的下标，并将 cacheString 中的该元素放入到 result:string 中去
        for(let i = 0;i < barcode.length;i++){
            for(let j = 0;j < cacheBarcode.length;j++){
                if(barcode[i] == cacheBarcode[j]){
                    result += cacheString[j];
                }
            }
        }
        return result;
    }

    function getResultStr(result){
        // return result;
        //处理长度为 9 需要加入'-' 的情况
        if (result.length == 9) {
            //复制一份 result --> arr:[]，在需要的位置插入 '-'，然后再将数组转换为String 
            let arr = Array.from(result);
            arr.splice(5, 0, '-');
            let str = arr.join('');
            return str;
        } else {
            return result;
        }
    }

    function deleteSymbol(string){
        //先去掉 string 中的 '-'
        if (string.length == 10) {
            let str = string.replace('-', '');
            return str;
        }else{
            return string;
        }
    }

    function getSecurityCode(str){
        let arr = Array.from(str);
        let sum = 0;
        for(let i = 0;i < arr.length;i++){
            sum += parseInt(arr[i]);
        }
        // 得到最后那位验证码
        let securityCode = 10 - sum % 10;
        //得到包含验证码的 字符串
        str += securityCode;
        return str;
    }

    function getResult(string){
        result += '|';
        let str = string;
        let arr = Array.from(str);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < cacheString.length; j++) {
                if (arr[i] == cacheString[j]) {
                    result += cacheBarcode[j];
                }
            }
        }
        result += '|';
        return result;
    }
}

module.exports = main;
