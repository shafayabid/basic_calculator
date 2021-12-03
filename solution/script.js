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

    inputDisplay[digitCountDisplay] = 7;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 7;
    digitCountAll++;
    
}
function getEight(){

    inputDisplay[digitCountDisplay] = 8;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 8;
    digitCountAll++;
}
function getNine(){

    inputDisplay[digitCountDisplay] = 9;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 9;
    digitCountAll++;
}
function getFour(){

    inputDisplay[digitCountDisplay] = 4;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 4;
    digitCountAll++;
}
function getFive(){

    inputDisplay[digitCountDisplay] = 5;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 5;
    digitCountAll++;
}
function getSix(){

    inputDisplay[digitCountDisplay] = 6;
    digitCountDisplay++;
    printOnScreen(inputDisplay);
    inputAll = inputDisplay;

    inputAll[digitCountAll] = 6;
    digitCountAll++;
}
function getOne(){

    inputDisplay[digitCountDisplay] = 1;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 1;
    digitCountAll++;
}
function getTwo(){

    inputDisplay[digitCountDisplay] = 2;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 2;
    digitCountAll++;
}
function getThree(){

    inputDisplay[digitCountDisplay] = 3;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 3;
    digitCountAll++;
}
function getZero(){

    inputDisplay[digitCountDisplay] = 0;
    digitCountDisplay++;
    printOnScreen(inputDisplay);

    inputAll[digitCountAll] = 0;
    digitCountAll++;
}
function getReset(){

    inputDisplay = [];
    inputAll = [];
    digitCountDisplay = 0;
    digitCountAll = 0;
    printOnScreen(inputDisplay);
}
function getDelete(){

    inputDisplay.pop();
    printOnScreen(inputDisplay);
    digitCountDisplay--;

    if(inputAll[digitCountAll] != "+" || inputAll[digitCountAll] != "-" || inputAll[digitCountAll] != "*" || inputAll[digitCountAll] != "/"){
        inputAll.pop();
        digitCountAll--;
    }
}
function getPoint(){
    inputDisplay[digitCountDisplay] = ".";
    digitCountDisplay++;
    printOnScreen(inputDisplay);
}
function getPlus(){
    inputAll[digitCountAll] = "+";
    Operator = "+";
    printOther(Operator);
    operatorCount++;
    digitCountAll++;

    inputDisplay.splice(0, inputDisplay.length);
    digitCountDisplay = 0;

}
function getMinus(){
    inputAll[digitCountAll] = "-";
    Operator = "-";
    printOther(Operator);
    operatorCount++;
    digitCountAll++;

    inputDisplay.splice(0, inputDisplay.length);
    digitCountDisplay = 0;

}
function getMultiply(){
    inputAll[digitCountAll] = "*";
    Operator = "x";
    printOther(Operator);
    operatorCount++;
    digitCountAll++;

    inputDisplay.splice(0, inputDisplay.length);
    digitCountDisplay = 0;

}
function getDivide(){
    inputAll[digitCountAll] = "/";
    Operator = "/";
    printOther(Operator);
    operatorCount++;
    digitCountAll++;

    inputDisplay.splice(0, inputDisplay.length);
    digitCountDisplay = 0;

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
    inputAll = inputAll.concat(inputDisplay);
    console.log(inputAll);
    console.log((inputAll.join('')).toString());
    result = math.evaluate((inputAll.join('')).toString());
    console.log(result);
    getReset();
}








