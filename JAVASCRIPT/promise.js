// A Promise object represents the completion or failure of an asynchronous operation.
// It allows you to attach callbacks for the success or failure of that asynchronous operation.

// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - fulfilled: meaning that the operation completed successfully.
// - rejected: meaning that the operation failed.
// A Promise is created using the Promise constructor, which takes a function as an argument.
// This function is called the executor function, and it is executed immediately by the Promise implementation.
// The executor function takes two arguments: resolve and reject.
// These are functions that you can call to either fulfill or reject the promise.

// Example of creating a Promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 2000);
});
// To handle the result of a Promise, you can use the .then() method for fulfilled promises and .catch() for rejected promises.
myPromise
  .then((result) => {
    console.log(result); // Output: "Promise resolved!" after 2 seconds
  })
  .catch((error) => {
    console.error(error);
  });
// You can also chain multiple .then() calls to handle the result of a promise and perform additional operations.
myPromise
  .then((result) => {
    console.log(result); // Output: "Promise resolved!" after 2 seconds
    return "Next step";
  })
  .then((nextResult) => {
    console.log(nextResult); // Output: "Next step"
  })
  .catch((error) => {
    console.error(error);
  });
