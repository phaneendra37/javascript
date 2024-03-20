const donar = [
    { name: 'John', bloodGroup: 'A+' },
    { name: 'Alice', bloodGroup: 'O-' },
    { name: 'Bob', bloodGroup: 'AB+' },
    { name: 'David', bloodGroup: 'B-' },
    { name: 'Emma', bloodGroup: 'A+' },
    { name: 'Frank', bloodGroup: 'B+' },
    { name: 'Grace', bloodGroup: 'O+' },
    { name: 'Charlotte', bloodGroup: 'AB+' },
    { name: 'Edward', bloodGroup: 'B-' },
    { name: 'Fiona', bloodGroup: 'A+' },
    { name: 'George', bloodGroup: 'B+' },
    { name: 'Hannah', bloodGroup: 'O+' },
    { name: 'Ian', bloodGroup: 'AB-' },
    { name: 'Jessica', bloodGroup: 'O-' },
    { name: 'Kevin', bloodGroup: 'A-' }
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 8, 9, 10, 11];

// Not return new array or true or false
// If we iterate through numbers we cannot change the values.If object we can
// It will not return anything based on condition
// Ternary operator will not work if we try to mutate the original array
// Cannot break the loop
// The callback will take 3 arguments
donar.forEach((item, index) => { item.name });
numbers.forEach((item2, index2) => { item2 = index2 });


// Return new array
// Able to mutate the original values of an array
// Will return the filter data based on condition
// Empty loop will be the empty array
// Ternary operator will not work if we try to mutate the original array
// Cannot break the loop
// The callback will take 3 arguments
// without return it will be [],[]
const Users = donar.filter((item) => {
    if (item.bloodGroup.toLocaleLowerCase() === 'a+') { }
});
const userNumbers = numbers.filter((item, index) => { return "12" });


// Return new array
// Able to mutate the original values of an array
// Empty loop will be [undefined, undefined...]
// Ternary operator will not work if we try to mutate the original array
// Cannot break the loop
// The callback will take 3 arguments
// without return it will be undefined
const usersMap = donar.map((item, index, array) => { return item?.bloodGroup });
const usersNumber = numbers.map((item, index) => { return '12' });


// Return true or false
// Able to mutate the original values of an array
// Empty loop will be false
// Ternary operator will not work if we try to mutate the original array
// able to break by returning true
// The callback will take 3 arguments
const someValue = donar.some((item, index, array) => {
    if (index == 4) return true
    else false
})
const someValue2 = numbers.some((item) => { })


// Return true or false
// Able to mutate the original values of an array
// Empty loop will be false
// Ternary operator will not work if we try to mutate the original array
// able to break by returning true
// The callback will take 3 arguments
// it needs to pass all the items should pass the condition
const everValue = donar.every((item, index, array) => { });
const numberValue2 = numbers.every((item) => { });


// Return object
// Empty loop will be undefined
// Able to mutate the original values of an array of first or all
// Ternary operator will not work if we try to mutate the original array
// The callback will take 3 arguments
// able to break by returning item
const findValue = donar.find((item, index, array) => { })
const findValue2 = numbers.find((item) => { })


// Return index
// Empty loop will be undefined
// Able to mutate the original values of an array of first or all
// Ternary operator will not work if we try to mutate the original array
// The callback will take 3 arguments
// able to break by returning item
donar.forEach((item, index, array) => {
    let test = numbers.findIndex(numb => numb === index + 4)
    if (test >= 0) return item
})

const findIndex1 = numbers.filter((item) => {

});

// use this method to transfer them into different structure
const reducedArray = donar.reduce((acc, person) => {
    // it will return only one value
    // able to mutate the original object property values not make the object empty
    // will return only one value
    // Accept the callback function with three arguments accumulator,item,index,array
    // without return statement will not return undefined
    // ternary operator will not work if we want to mutate original Object properties
    if (!acc[person.bloodGroup]) {
        acc[person.bloodGroup] = []
    }
    acc[person.bloodGroup].push(person);
    return acc
}, []);


// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    // Check if the current value of i is 5
    if (i == 5) {
        // Do nothing if i is 5
    }
    // Check if the current value of i is 8
    else if (i == 8) {
        // Exit the loop if i is 8
        break;
    }
    // If neither 5 nor 8, execute this block
    else {
        // Print the value of i multiplied by 10
        // console.log(i * 10);
    }
}






































