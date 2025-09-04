// 1. Variables
// The three keyword differ in reassignment and redeclaration

// var is early
// Redeclaration and reassignment is allowed
var first = 0;
// console.log(first);

//Introduced in ES6
let second = 2;
// console.log(second);

{const third = 'I am third';
    // console.log(third);
}
const third = 'as';
// console.log(third);

const arr = [1, 2, 3];
arr[0] = 0;
// console.log(arr[0]);
// arr = [2,3,4];
// console.log(arr);

const obj = {
    head: "head office",
    body: "regional branches",
    foot: "Wereda Divisions"
};

obj.head = "head quarter";
// console.log(obj);

// 2. Functions

// Can be called before declaration
// addTwoNumbers();

function addTwoNumbers(){
    const numOne = 12, numTwo = 21;
    const sum = numOne + numTwo;
    console.log(sum);
}

// cann't be accessed before initialization
// add();

const add = function(){
    const numOne = 12, numTwo = 33;
    const sum = numOne + numTwo;
    console.log(sum);
}

// Arrow Functions
const addThreeNumbers = (a,b,c) => a+b+c;
// console.log(addThreeNumbers(3, 4, 2));

// Immediatelly Invoked Function Expression (IIFE)
(
    function multiply(){
        const num1 = 2, num2 = 4;
        const pro = num1*num2;
        // console.log(pro);
    }
)();

//Variable Parameters/Rest Parameter
const addManyNumbers = (...numbers) => {
    let sum = 0;
    for (i=0; i<numbers.length; i++) 
        sum+=numbers[i];
    return sum;
}
// console.log(addManyNumbers(1, 3, 5, 7, 1));


//Revision

//Area of Circle
const areaOfCircle = (radius) => {
    return Math.PI*(radius**2);
}
// console.log(areaOfCircle(4));

//Area of Triangle
const areaOfTriangle = (base, height) => {
    return 0.5*base*height;
}
// console.log(areaOfTriangle(10, 5));

//Circumference of a Circle
const circumferenceOfCircle = (radius) => {
    return 2*Math.PI*radius;
}
// console.log(circumferenceOfCircle(10));

//Determining the Y-coordinate of a line
const giveYCordinate = (coefficient, x, intercept) => {
    return coefficient*x+intercept;
}
// console.log(giveYCordinate(2, 2, 6));

//The for loop
const numberArray = [1, 2, 3, 4, 5, 6, 7];
for(i=0; i<numberArray.length; i++) {
    // console.log(numberArray[i]);
}


// Exercise - Fundamentals of JS

// The getDataType Function
const getDataType = (unknownData) => {
    return typeof(unknownData);
}
// console.log(getDataType('safd'));

//Negative, Positive or zero checker
const signChecker = (number) => {
    if(number<0)
        console.log("negative");
    else if (number===0)
        console.log("zero");
    else
        console.log("positive");
}
// signChecker(0);

//Grade Calculator

const calculateGrade = (mark) => {
    mark = Number(mark);
    if(typeof(mark)==NaN || mark<0 || mark>100){
        console.log("Invalid mark input!");
    }
    if(mark<=100 && mark>=90)
        console.log('A');
    else if(mark<90 && mark>=80)
        console.log('B');
    else if(mark<80 && mark>=70)
        console.log('C');
    else if(mark<70 && mark>=60)
        console.log('D');
    else if(mark<60 && mark>=0) 
        console.log('F');
}
// calculateGrade('sd');

const userGradeInput = () => {
    const mark = prompt("Please enter your mark: ", "your mark out of 100");
    calculateGrade(mark);
}
// userGradeInput();

// Log all even numbers below 50
const logEven = () => {
    for(let i=0; i<=50; i++){
        if(i%2!=0)
            continue;
        console.log(i);
    }
}
// logEven();

const sumtoN = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum+=i;
    }
    return sum;
}
// console.log(sumtoN(100));

// Check for palindromity
const checkPalindrome = (str) => { //acaacaad
    let palinTruth = false;
    for(let i=1; i<=str.length; i++) {
        if(str[i-1]===str[str.length-i])
            palinTruth = true;
        else {
            palinTruth = false;
            break;
        }
    }
    return palinTruth;
}
// console.log(checkPalindrome('aaaadaaaa'));


// Stop: exercise 8
