const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");
const { assert } = require("chai");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printTextCallback(err, data){
        console.log (data);
    }
    callbackFunction(printTextCallback);   
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    promiseFunction().then(response => console.log(response))
}
/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    console.log (await promiseFunction());
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function printErrCallback(error){
        throw error;
    }
    callbackFunctionError(printErrCallback);  
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(function(error) {
        throw error;
    });
}

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError();
      } catch (error) {
        throw error;
      }
}

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
