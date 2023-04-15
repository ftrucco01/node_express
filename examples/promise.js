/**
 * Promise: an object that represents the eventual outcome or error of an asynchronous operation. 
 * They are like promises in real life, where we make a call to a server but we don't know 
 * when we will receive the response, what type of response we will get, when it will finish, 
 * or how it will finish.
 * 
 * Usage: Promise > Pending > Completed || Rejected
 * 
 * They have a .then() method to decide what happens 
 * when the promise is fulfilled (either with success or error).
 */

const promiseCompleted = true;

/**
 * Promise basic structure
 */
const myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if( promiseCompleted ){
            resolve('Promise completed');
        }else{
            reject('Promise rejected');
        }
    }, 3000);
});

const myPromiseRejected = ( reason ) => {
    console.log( reason );
};

const myPromiseCompleted = ( message ) => {
    console.log( message );
};

/**
 * Catching promise response
 */
myPromise.then( myPromiseCompleted, myPromiseRejected );
