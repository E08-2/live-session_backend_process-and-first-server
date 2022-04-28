// * Q1. How can we access all OUR command-line arguments?

// const arguments = process.argv.slice(2);
// console.log(arguments);

// Now let's log the first of OUR arguments:

// console.log(arguments[0]);

// We can also log all our arguments using a loop...

// for (let arg of arguments) {
//     console.log(arg);
// }

// =======================

// * Q2. How can we use the command-line to call functions inside our program?

// Function 1 - just say "Hello world!"
const sayHello = () => {
    console.log("Hello world!");
}

// Function 2 - say "hello" to all the people we specify
const sayHelloToPeople = peopleArray => {
    // for (let person of peopleArray) {
    //     console.log(`Hello ${person}!`);
    // }
    
    for (let i = 0; i < peopleArray.length; i++) {
        if (i === 0) {
            console.log(`Hello ${peopleArray[i]}!`);
        } else {
            // process.exit() immediately quits the current process - no more code will run!
            console.log("Exiting the current process immediately!")
            process.exit();
        }
    }
}

// sayHello();
// sayHelloToPeople(["jamie", "ozzy osbourne"]);

// * Let's say that the first argument in the command line will be the FUNCTION to call, and any other arguments can be used by that function if needed!

// So argument 1 = a function to call
// All other arguments = values to use in that function

// First, grab an array containing all OUR arguments
const arguments = process.argv.slice(2);

// Destructure the "arguments" array
const [ functionToCall, ...allOtherArguments ] = arguments;

// We now have two new variables:

// 1. "functionToCall" - a string, based on index 0 of "arguments" (the first command line argument)
// 2. "allOtherArguments" - an array, containing ALL other command line arguments

// * Now define a switch statement to decide which function to call...

switch(functionToCall) {
    case "sayHello":
        sayHello();
        break;
    case "sayHelloToPeople":
        sayHelloToPeople(allOtherArguments);
        // This will not run if we exit the process before sayHelloPeople() is finished!
        console.log("Now all the people have been logged!");
        break;
    default:
        console.log("Unexpected function!");
        break;
}