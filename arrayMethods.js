const numbers = [0, 1, 2, 3, 4, 9, 10];

// adding the array of object to the first
const test = numbers.unshift(12);

// to get the copy of the number from start index 1 - 7; 
// will not accept the second argument lower then first;
const test2 = numbers.slice(1, 7);


// to get the copy of the number from start index 4 - 2; 
// Accept the second argument lower then first;
const test3 = numbers.splice(4, 2);

// add the elements using splice 
numbers.splice(1, 0, 1, 45, 78, 546, 465, 45, 54);

// removes the first elements and return it not accept the arguments
const test5 = numbers.shift(112);

//  to sort the order of numbers
const test6 = numbers.sort((a, b) => a - b);

//  use to get the numbers reverse
const test7 = numbers.reverse();

// to push the new element in the array
const test8 = numbers.push(12);


