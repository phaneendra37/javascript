// using the constructor function
const newObj = new Object();

// using by assigning the obj 
const newObj1 = { name: "testing" };
const newObj2 = { name2: "phaneEndra" };
const newObj3 = { name2: "Kumar" };
const newStaff = Object.assign({ test: "phaneendra" }, newObj, newObj1, newObj3, newObj2);

const testObj = { name: "phaneendra", age: 44, lastName: "Kumar" }

function test(greet, greet1, greet2) { }
test.call(testObj, "phaneendra", "fdsfdsfsd", "fdsfdsfsdf");
test.apply(testObj, ['dffdsdf', 'fdsfdsfdsf', 'fdsfds']);
const testing = test.bind(testObj);
testing(['phanee', "sdsadsadsa", 'dasdsdsadsa'], 'fdf', 'fsassss')