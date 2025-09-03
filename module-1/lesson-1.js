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
