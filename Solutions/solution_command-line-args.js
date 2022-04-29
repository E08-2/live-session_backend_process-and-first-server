// Function to sum an array of strings we will convert to numbers
const sum = arr => {
    return arr.reduce((total, num) => total + Number(num), 0);
}

// Function to get the average from an array of strings we will convert to numbers
const avg = arr => {
    return sum(arr) / arr.length;
}

// * BONUS function to find the median value in the array of extra arguments
const med = arr => {
    const numbersArr = arr.map(num => Number(num));
    const sortedArr = numbersArr.sort((a, b) => a - b);
    const middleIndex = (sortedArr.length - 1) / 2;

    // Calculate the median value, based on whether the array has an odd or even number of values
    const medianValue = middleIndex % 1 === 0
        // Case where array has an ODD number of values
        ? sortedArr[middleIndex]
        // Case where array has an EVEN number of values
        : (sortedArr[Math.floor(middleIndex)] + sortedArr[Math.ceil(middleIndex)]) / 2;
    
    return medianValue;
}

// Function to check if all the extra arguments we give can be read as numbers!
const checkArgsAreNumbers = arr => {
    arr.forEach(val => {
        if (isNaN(val)) {
            console.log(`Sorry, the argument ${val} is not a number, please try again`);
            process.exit();
        }
    })
}

// Create an array of the extra arguments we give in the command line
const args = process.argv.slice(2);

// Create 2 new variables:
// functionToCall = the first value in args
// restOfArguments = an array containing all other values in args (except the first!) - created with the spread operator
const [functionToCall, ...restOfArguments] = args;

// Check BEFORE we try to call a function if all the rest of our arguments (except the first one) can be read as numbers
checkArgsAreNumbers(restOfArguments);

// Use the first extra argument in the command line to find a function
// If we find a function, pass the rest of the extra command line arguments in an array to the function we call
switch(functionToCall) {
    case "sum":
        console.log(sum(restOfArguments));
        break;
    case "avg":
        console.log(avg(restOfArguments));
        break;
    case "med":
        console.log(med(restOfArguments));
        break;
    default:
        console.log(`I cannot calculate that, please type either "sum" (to calculate the sum), "avg" (to calculate the mean) or "med" (to calculate the median)`);
        break;
}