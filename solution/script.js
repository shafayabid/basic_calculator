document.getElementById("seven").addEventListener("click", getSeven);
document.getElementById("eight").addEventListener("click", getEight);
document.getElementById("nine").addEventListener("click", getNine);
document.getElementById("four").addEventListener("click", getFour);
document.getElementById("five").addEventListener("click", getFive);
document.getElementById("six").addEventListener("click", getSix);
document.getElementById("one").addEventListener("click", getOne);
document.getElementById("two").addEventListener("click", getTwo);
document.getElementById("three").addEventListener("click", getThree);
document.getElementById("zero").addEventListener("click", getZero);
document.getElementById("reset").addEventListener("click", getReset);
document.getElementById("delete").addEventListener("click", getDelete);
document.getElementById("point").addEventListener("click", getPoint);
document.getElementById("plus").addEventListener("click", getPlus);
document.getElementById("minus").addEventListener("click", getMinus);
document.getElementById("divide").addEventListener("click", getDivide);
document.getElementById("multiply").addEventListener("click", getMultiply);
document.getElementById("equal").addEventListener("click", compute);


var digitCount = 0;
var input = [];
var inputAll = [];
var Operator = '';
var operatorCount = 0;
var result = 0;

function getSeven(){

    input[digitCount] = 7;
    digitCount++;
    printOnScreen(input);
    
}
function getEight(){

    input[digitCount] = 8;
    digitCount++;
    printOnScreen(input);
}
function getNine(){

    input[digitCount] = 9;
    digitCount++;
    printOnScreen(input);
}
function getFour(){

    input[digitCount] = 4;
    digitCount++;
    printOnScreen(input);
}
function getFive(){

    input[digitCount] = 5;
    digitCount++;
    printOnScreen(input);
}
function getSix(){

    input[digitCount] = 6;
    digitCount++;
    printOnScreen(input);
    inputAll = input;
}
function getOne(){

    input[digitCount] = 1;
    digitCount++;
    printOnScreen(input);
}
function getTwo(){

    input[digitCount] = 2;
    digitCount++;
    printOnScreen(input);
}
function getThree(){

    input[digitCount] = 3;
    digitCount++;
    printOnScreen(input);
}
function getZero(){

    input[digitCount] = 0;
    digitCount++;
    printOnScreen(input);
}
function getReset(){

    input = [];
    inputAll = [];
    printOnScreen(input);
}
function getDelete(){

    input.pop();
    printOnScreen(input);
}
function getPoint(){
    input[digitCount] = ".";
    digitCount++;
    printOnScreen(input);
}
function getPlus(){
    input[digitCount] = "+";
    digitCount++;
    Operator = '+'
    printOther(Operator);
    operatorCount++;

    inputAll = inputAll.concat(input);
    input = [];

}
function getMinus(){
    input[digitCount] = "-";
    digitCount++;
    Operator = '-'
    printOther(Operator);
    operatorCount++;

    inputAll = inputAll.concat(input);
    input = [];

}
function getMultiply(){
    input[digitCount] = "*";
    digitCount++;
    Operator = 'x'
    printOther(Operator);
    operatorCount++;

    inputAll = inputAll.concat(input);
    input = [];

}
function getDivide(){
    input[digitCount] = "/";
    digitCount++;
    Operator = '/'
    printOther(Operator);
    operatorCount++;

    inputAll = inputAll.concat(input);
    input = [];

}
function printOnScreen(num){

    // var index = num.indexOf("+" || "-" || "x" || "/");
    // if (index > -1) {
    //     num.splice(index, 1);
    //   }

    formatedNum = new Intl.NumberFormat('en-US');
    num = formatedNum.format(num.join(''));
    document.getElementById("screen").innerHTML = num;
}
function printOther(num){
    document.getElementById("screen").innerHTML = num;
}
function compute()
{
    inputAll = inputAll.concat(input);
    inputAll = inputAll.join('').split('');
    console.log((inputAll.join('')).toString());
    result = math.evaluate((inputAll.join('')).toString());
    console.log(result);
    console.log()
    // getReset();
}




