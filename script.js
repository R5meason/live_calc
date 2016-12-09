$(document).ready(function () {
    ready('reset');
});


var num1 = [];
var num2 = [];
var decimalCheck1 = false;
var decimalCheck2 = false;
var operArr = [];
var result = 0;
var lastOperatorEntered = null;

var ready = function (state) {
    if (state === 'reset') {
        document.getElementById('display').innerText = 0;
    }
    else {
        document.getElementById('display').innerText = 'ERROR';
    }
};

var btnVal = function (val) {
    if (num1.length >= 15 || num2.length >= 15) {
        document.getElementById('miniDisplay').innerText = "MAX # OF CHARACTERS REACHED";
    }
    else {
        if (operArr.length <= 0 && result !== num1[0]) {
            if (val === ".") {
                if (!decimalCheck1) {
                    num1.push(val);
                    decimalCheck1 = true;
                }
            }
            else {
                num1.push(val);
            }
            document.getElementById('display').innerText = num1.join("").substring(0, 15);
        }
        else {
            if (val === ".") {
                if (!decimalCheck2) {
                    num2.push(val);
                    decimalCheck2 = true;
                }
            }
            else {
                num2.push(val);
            }
            document.getElementById('display').innerText = num2.join("").substring(0, 15);
        }
    }
};


var operator = function (math) {
    if (num1.length >= 1) {
        if (operArr.length <= 0 && result !== num1[0]) {
            result = num1.join("");
            num1 = [];
            num1.push(result);
            operArr.push(math);
            lastOperatorEntered = math;
            document.getElementById('miniDisplay').innerText = lastOperatorEntered;
        }
        else {
            if (num2.length > 0) {
                result = num2.join("");
                num2 = [];
                num2.push(result);
                equal();
            }
            if (operArr.length >= num1.length) {
                operArr = [];
            }
            operArr.push(math);
            lastOperatorEntered = math;
            document.getElementById('miniDisplay').innerText = lastOperatorEntered;
        }
        decimalCheck2 = false
    }
};

var equal = function () {
    if (num2.length <= "0") {
        document.getElementById('display').innerText = num1;
    }
    else {
        document.getElementById('miniDisplay').innerText = " ";
        result = num2.join("");
        num2 = [];
        num2.push(result);
        var firstNum = parseFloat(num1[0]);
        var secondNum = parseFloat(num2[0]);

        if (operArr[0] === "+") {
            result = firstNum + secondNum;
        }
        else if (operArr[0] === "-") {
            result = firstNum - secondNum;
        }
        else if (operArr[0] === "*") {
            result = firstNum * secondNum;
        }
        else if (operArr[0] === "/") {
            result = firstNum / secondNum;
        }
        if (result.length < 16) {
            document.getElementById('display').innerText = result;
        }
        else {
            maximumNum = result.toString().substr(0, 15);
            document.getElementById('display').innerText = maximumNum;
            document.getElementById('miniDisplay').innerText = "MAX # OF CHARACTERS REACHED";
        }
        num2 = [];
        num1 = [];
        operArr = [];
        num1.push(result);
        decimalCheck2 = false
    }
};


