const sumAll = function(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "ERROR";
    }
    if(+(num1) !== num1 || +(num2) !== num2){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR"
    }
    if(num1 > num2){
        return ((num1 - num2 + 1) / 2) * (2 * num2 + num1 - num2);
    }
    else if(num1 < num2){
        return ((num2 - num1 + 1) / 2) * (2 * num1 + num2 - num1);
    }
    return num1;
};

// Do not edit below this line
module.exports = sumAll;
