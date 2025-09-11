// SOLUTION-1
// Filtering Even Numbers

// input: array of numbers
// output: array of even numbers

const filterEvenNumbers = (arr) => {
    const length = arr.length;
    for(let j=0; j<length; j++) {
        for(let i=0; i<arr.length; i++) {
            if(arr[i]%2!=0) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

// console.log(filterEvenNumbers([1,3,5,7,9,11]));


// SOLUTION-2