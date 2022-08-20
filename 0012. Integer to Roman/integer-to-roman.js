/**
 * @param {number} num
 * @return {string}
 */


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    let array = [];
    while(num > 0){
        if(num >= 1000){
            array.push('M');
            num -=1000;
        }else if(num < 1000 && num >= 900){
            array.push('CM');
            num -=900;
        }else if(num < 900 && num >= 500){
            array.push('D');
            num -=500;
        }else if(num < 500 && num >= 400){
            array.push('CD');
            num -=400;
        }else if(num < 400 && num >= 100){
            array.push('C');
            num -=100;
        }else if(num < 100 && num >= 90){
            array.push('XC');
            num -=90;
        }else if(num < 90 && num >= 50){
            array.push('L');
            num -=50;
        }else if(num < 50 && num >= 40){
            array.push('XL');
            num -=40;
        }else if(num < 40 && num >= 10){
            array.push('X');
            num -=10;
        }else if(num < 10 && num >= 9){
            array.push('IX');
            num -=9;
        }else if(num < 9 && num >= 5){
            array.push('V');
            num -=5;
        }else if(num < 5 && num >= 4){
            array.push('IV');
            num -=4;
        }else if(num < 4 && num >= 1){
            array.push('I');
            num -=1;
        }
    }
    return array.join("");
};

/*
Runtime: 554 ms
*/

// OR


var intToRoman = function(num) {
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let ans = ""
    for(let i=0; num > 0;i++){
        while (num >= val[i]) {
            ans += rom[i];
            num -= val[i];
        }
    }
    return ans
};

/*
Runtime: 67 ms
Memory Usage: 46.8 MB
*/
