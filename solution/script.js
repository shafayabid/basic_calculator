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


var digitCountDisplay = 0;
var digitCountAll = 0;
var inputDisplay = [];
var inputAll = [];
var Operator = '';
var operatorCount = 0;
var result = 0;

function getSeven(){

    inputDisplay.push("7");
    printOnScreen(inputDisplay);

    inputAll.push("7");
    
}
function getEight(){

    inputDisplay.push("8");
    printOnScreen(inputDisplay);

    inputAll.push("8");
}
function getNine(){

    inputDisplay.push("9");
    printOnScreen(inputDisplay);

    inputAll.push("9");
}
function getFour(){

    inputDisplay.push("4");
    printOnScreen(inputDisplay);

    inputAll.push("4");
}
function getFive(){

    inputDisplay.push("5");
    printOnScreen(inputDisplay);

    inputAll.push("5");
}
function getSix(){

    inputDisplay.push("6");
    printOnScreen(inputDisplay);

    inputAll.push("6");
}
function getOne(){

    inputDisplay.push("1");
    printOnScreen(inputDisplay);

    inputAll.push("1");
}
function getTwo(){

    inputDisplay.push("2");
    printOnScreen(inputDisplay);

    inputAll.push("2");
}
function getThree(){

    inputDisplay.push("3");
    printOnScreen(inputDisplay);

    inputAll.push("3");
}
function getZero(){

    inputDisplay.push("0");
    printOnScreen(inputDisplay);

    inputAll.push("0");
}
function getReset(){

    inputDisplay.splice(0, inputDisplay.length);
    inputAll.splice(0, inputAll.length);
    printOnScreen(inputDisplay);
}
function getDelete(){

    inputDisplay.pop();
    printOnScreen(inputDisplay);

    inputAll.pop();
}
function getPoint(){
    inputDisplay[digitCountDisplay] = ".";
    digitCountDisplay++;
    printOnScreen(inputDisplay);
}
function getPlus(){
    inputAll.push("+");
    Operator = "+";
    printOther(Operator);

    inputDisplay.splice(0, inputDisplay.length);

}
function getMinus(){
    inputAll.push("-");
    Operator = "-";
    printOther(Operator);

    inputDisplay.splice(0, inputDisplay.length);

}
function getMultiply(){
    inputAll.push("*");
    Operator = "x";
    printOther(Operator);

    inputDisplay.splice(0, inputDisplay.length);

}
function getDivide(){
    inputAll.push("/");
    Operator = "/";
    printOther(Operator);

    inputDisplay.splice(0, inputDisplay.length);

}
function printOnScreen(num){

    formatedNum = new Intl.NumberFormat('en-US');
    num = formatedNum.format(num.join(''));
    document.getElementById("screen").innerHTML = num;
}
function printOther(num){
    document.getElementById("screen").innerHTML = num;
}
function compute()
{   
    var result = math.evaluate((inputAll.join('')).toString());
    printOther(result.toString());
}











