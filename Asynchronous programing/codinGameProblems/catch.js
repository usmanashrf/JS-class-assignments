
/*
In JavaScript, you can access the fullfillment value or the rejection reason of a promise in 2 ways.
A) Use 2 callbacks on promise.then(fn, fn):
promise
  .then(success, error);

B) Or use a chain of promise.then(fn).catch(fn):
promise
  .then(success)
  .catch(error);
*/


//1. What's the same
function success(value) {
    console.log('Resolved: ', value);
  }
  function error(err) {
    console.log('Error: ', err);
  }

  Promise.resolve('Hi!')
  .then(success, error);
// Logs 'Resolved: Hi!'
Promise.resolve('Hi!')
  .then(success)
  .catch(error);
// Logs 'Resolved: Hi!'



/* Otherwise, in case of rejection, error callback is called  */
Promise.reject('Oops!')
 .then(success, error);
// Logs 'Error: Oops!'
Promise.reject('Oops!')
 .then(success)
 .catch(error);
// Logs 'Error: Oops!'


//===============================================================================//
//===============================================================================//


//2. What's the difference

/*
The difference is seen when the success() callback of the resolved promise
returns a rejected promise. That might happen when the resolved value is invalid.
*/

//Let's modify the success callback to return a rejected promise

function rejectSuccess(invalidValue) {
    console.log('Invalid success: ', invalidValue);
    return Promise.reject('Invalid!');
  }

  Promise.resolve('Zzz!')
 .then(rejectSuccess, error);
// Logs 'Invalid success: Zzzzz!'
Promise.resolve('Zzz!')
 .then(rejectSuccess)
 .catch(error);
// Logs 'Invalid success: Zzzzz!'
// Logs 'Error: Invalid!'