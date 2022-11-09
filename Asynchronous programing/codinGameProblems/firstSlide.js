/*

setTimeout and setInterval are the only native functions of the JavaScript 
to execute code asynchronously. However, if you are familiar with JavaScript,
 you have probably dealt with asynchronous execution in various forms.
  It can happen in multiple situations (non-exhaustive list):

   - Performing an HTTP request
   - Any I/O operation when you are in a NodeJS environment
   - Dealing with a WebSocket (client or server side)
*/

setTimeout(function() {
    console.log('I am an asynchronous message');
}, 1000);

console.log('I am a synchronous message');

/*
its output will be 
I am a synchronous message
I am an asynchronous message
 */

//==================================================================================//
setTimeout(function() {
    console.log('I am an asynchronous message');
}); // You can omit the 0

console.log('Test 1');

for (let i = 0; i < 10; ++i) {
    doSomeStuff();
    console.log('Loop '+i);
}

console.log('Test 2');

// The 'I am an asynchronous message' will be displayed when the main thread reach here

function doSomeStuff() {
    return 1 + 1;
}

/*
Output will be 
Test 1
Loop 0
Loop 1
Loop 2
Loop 3
Loop 4
Loop 5
Loop 6
Loop 7
Loop 8
Loop 9
Test 2
I am an asynchronous message
*/





//=========================================================================================

let counter = 0;

let timer = setInterval(function() {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');

/*
output of above will be

I am a synchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
I am an asynchronous message
 */



let fs = require('fs');

fs.readFile('test.txt', 'utf8', function(error, data) {
    if (error) {
         throw error;
    }

    console.log("Asynchronous message. Content of test.txt:", data);
});

console.log('Synchronous message');

/* 
output will be
Synchronous message
Asynchronous message. Content of test.txt: Hello world !
*/