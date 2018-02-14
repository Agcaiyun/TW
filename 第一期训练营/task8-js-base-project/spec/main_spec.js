"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("return barcode given ZIP code", function(){
    // sinon.spy(console, 'log');

    //return barcode given ZIP code
    it("return null given null string", function(){
        var result = main('');
        var expect_string = '';
        
        expect(result).to.equal(expect_string);
    });

    it("return barcode given 5 digit num", function(){
        var result = main('12345');  //验证码为：5
        var expect_string = '|:::||::|:|::||::|::|:|:|::|:|:|';
        
        expect(result).to.equal(expect_string);
    });

    //测试中有重复的数字
    it("return barcode given 9 digit num", function () {
        var result = main('223450688');  //验证码为：2
        var expect_string = '|::|:|::|:|::||::|::|:|:|:||::::||::|::|:|::|:::|:||';

        expect(result).to.equal(expect_string);
    });

    it("return barcode given 10 digit num", function () {
        var result = main('12345-0678'); //验证码为：4
        var expect_string = '|:::||::|:|::||::|::|:|:|:||::::||::|:::||::|::|::||';

        expect(result).to.equal(expect_string);
    });
});

describe("return ZIP code given barcode", function(){

    //return ZIP code given barcode
    it("return null given null barcode", function(){
        var result = main('');
        var expect_string = '';
        
        expect(result).to.equal(expect_string);
    });

    it("return 5 digit num given barcode", function(){
        var result = main('|:::||:::||::||::|::|:|:|:|');
        var expect_string = '11345';
        
        expect(result).to.equal(expect_string);
    });

    it("return 10 digit num given barcode", function () {
        var result = main('|:::||::|:|::|:|:|::|:|:|:||::::||::|:|::|:|::|');
        var expect_string = '12245-0699';

        expect(result).to.equal(expect_string);
    });
});

