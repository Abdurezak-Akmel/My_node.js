export const add = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a*b;

export const divide = (a, b) => a/b;

//The factorial of a number

//input a positive integer - check for validity of input
//use loop to decrement and multiply

export const factorial = (number) => {
    if(number<1||typeof(number)===NaN)
        console.log("Invalid input");
    else {
        for(let i=number-1; i>1; i--) {
            number*=i;
        }
        return number;
    }
}

// console.log(factorial('d'));

// The Largest of Numbers

// input - array of numbers
// output - the largest number

// pick to at atime and hold the larger on a variable
// iterativelly pick one from the array, compare it and hold hte max

export const largestNumber = (numbers) => {
    let max = 0;
    for(let i=0; i<numbers.length; i++){
        max = Math.max(max, numbers[i]);
    }
    return max;
}
// console.log(largestNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));