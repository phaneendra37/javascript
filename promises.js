// Promise.resolve(value): Returns a Promise that is resolved with the given value.
// Promise.reject(reason): Returns a Promise that is rejected with the given reason.
// Promise.all(iterable): Returns a single Promise that resolves when all of the promises in the iterable argument have resolved, or rejects with the reason of the first promise that rejects.
// Promise.allSettled(iterable): Returns a promise that resolves after all of the provided promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
// Promise.any(iterable): Returns a promise that resolves as soon as one of the promises in the iterable resolves, or rejects if all of the promises in the iterable reject.
// Promise.race(iterable): Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// Instance Methods:
// promise.then(onFulfilled, onRejected): Adds fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original fulfillment value if the promise is not handled.
// promise.catch(onRejected): Adds a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
// promise.finally(onFinally): Adds a callback to be invoked when the promise is settled, regardless of its outcome, and returns a Promise.
// promise.then() and promise.catch(): Both methods return new promises, allowing method chaining.

// Promise.all([newProject, newProject2]) either one reject reject all
// Promise.any([promise1, promise2, promise3]) it waits to check first promise resolve
// const test = Promise.resolve('Hai');
// const test2 = Promise.reject('Hai');

// These are the promises i had
const promise = new Promise((resole, reject) => {
    setTimeout(() => { resole('Promise resolved') }, 1000);
});
const promise1 = new Promise((resole, reject) => {
    setTimeout(() => { reject('Promise2 rejected') }, 4000);
});
const promise2 = new Promise((resole, reject) => {
    setTimeout(() => { resole('Promise2 resolved') }, 2000);
});
const promise3 = new Promise((resole, reject) => {
    setTimeout(() => { resole('Promise3 resolved') }, 2500);
});



// if i use race method it will give first promise either resolve or reject
const rac = Promise.race([promise, promise1, promise2, promise3]);
const all = Promise.all([promise, promise1, promise2, promise3]);
const set = Promise.allSettled([promise, promise1, promise2, promise3]);
const any = Promise.any([promise, promise1, promise2, promise3]);


rac.then((res) => { console.log(res); }).catch((err) => { console.error(err); });
any.then((res) => { console.log(res); }).catch((err) => { console.error(err); });
set.then((res) => { console.log(res); }).catch((err) => { console.error(err); });
all.then((res) => { console.log(res); }).catch((err) => { console.error(err); });
