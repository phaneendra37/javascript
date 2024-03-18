const fibonacciSeries = (start = 1, end = 10) => {
    if (start < 1) return false; // Ensure start value is greater than 0

    let a = 0; // Initialize the first value of the series
    let b = start; // Initialize the second value of the series
    const result = [a, b]; // Array to store the Fibonacci series

    for (let i = start; i <= start + end - 3; i++) { // Loop to generate the series
        let c = a + b; // Calculate the next Fibonacci number
        result.push(c); // Add the calculated number to the result array
        a = b; // Update the first value for the next iteration
        b = c; // Update the second value for the next iteration
    }

    console.log(result); // Print the Fibonacci series to the console
    return result; // Return the Fibonacci series array
}

const printTriangle = (height = 10, symbol = '*') => {
    // Loop through each row of the triangle
    for (let i = 1; i <= height; i++) {
        let row = ''; // Initialize an empty string for the current row

        // Loop to print white spaces before printing symbols
        for (let j = 1; j <= height - i; j++) {
            row += ' '; // Add white space to the current row
        }

        // Loop to print symbols
        // The number of symbols to print in the current row is 2 * i - 1
        for (let s = 1; s <= 2 * i - 1; s++) {
            row += symbol; // Add the specified symbol to the current row
        }

        // Print the completed row
        console.log(row);
    }
}

// check weather the string is palindrome or not
const isPalindrome = (uString = "radar") => {

    // will split the string and reverse it
    const reverseValue = uString.split('').reverse().join('');

    // tally the reverseValue  and user given word
    if (reverseValue === uString) return true;

    // if not tally then return false
    else return false
};



const test = [12, 34, 6565, 88768, 6, 6546, 546546, 6546, 54656, 5443, 23, 23, 434, 23];

// check weather the number is even or not
const isEvenNumber = (num = 12) => {
    if (num % 2 === 0) return true
    else return false
}
// check the array of the even or odd values
const testing = test.map((item) => {

    // check weather the number is even or not
    let isEven = isEvenNumber(item);

    // if true means its even
    if (isEven) return "Even"

    // false means its Odd
    else return "Odd";
});
