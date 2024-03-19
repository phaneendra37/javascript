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


const printSquare = (number = 10, symbol = "*") => {
    // Outer loop to iterate through each row
    for (let i = 0; i < number; i++) {
        // Initialize row with the symbol
        var row = symbol;

        // Inner loop to add symbols to the row
        for (let j = 0; j < number * 3 - 1; j++) {
            row += symbol;
        }

        // Loop to add spaces after the symbols
        for (let k = number; k <= number + i; k++) {
            row += " ";
        }

        // Print the row
        console.log(row);
    }
}


const printTheatreSeats = (row = 10, seatsPerRow = 5) => {
    const filledSeat = [
        { row: 1, seat: [1, 2, 3, 4, 5, 610] },
        { row: 2, seat: [1, 2, 5, 9, 10] },
        { row: 3, seat: [1, 6, 7, 8, 9, 10] },
        { row: 4, seat: [1, 4, 5, 6, 7, 8, 9, 10] },
        { row: 5, seat: [1, 2, 3, 8, 9, 10] },
        { row: 6, seat: [1, 2, 3, 9, 10] },
        { row: 7, seat: [1, 2, 3, , 9, 10] },
    ];
    // Loop through each row
    for (let i = 1; i <= row; i++) {
        var seats = ''; // Initialize an empty string to represent seats in a row

        // Loop through each seat in the row
        for (let j = 1; j <= seatsPerRow; j++) {
            let item = filledSeat.findIndex(item => item?.row == i && item.seat.includes(j));
            if (item >= 0) {
                seats += "X"
            } else {
                seats += "O";
            }
            // Check if the seat is at the center of the row
            if (Math.round(seatsPerRow / 2) === j) {
                seats += "  "; // Add two spaces to represent an empty space in the center
            }
        }

        // Add spaces to align the rows
        for (let k = i; k <= row; k++) {
            seats += ' '; // Add a space for each remaining row
        }

        // Print the seats in the row
        console.log(seats);
    }
}



// Define an array of testing values
const testingValues = [-3, -10, 0, 10];

// Function to remove duplicate values from an array
const removeDuplicateValues = (values) => {
    // Create a Set to store unique values
    const newArrayValues = new Set(values);
    // Convert the Set back to an array
    const results = [...newArrayValues];
    // Return the array with duplicate values removed
    return results;
};

// Function to sort an array of values in ascending order
const sortValues = (values) => {
    // Sort the array in ascending order
    const newValues = values.sort((a, b) => a - b);
    // Return the sorted array
    return newValues;
};

// Function to print a series of numbers based on input array
const printSeries = (values) => {
    // Check if input is an object
    if (typeof values !== "object") return;
    // Remove duplicate values and store them in a new array
    const newUniqueValues = removeDuplicateValues(values);
    // Sort the unique values in ascending order
    const sortUniqueValues = sortValues(newUniqueValues);
    // Array to store the series of numbers
    const series = [];
    // Loop through the sorted unique values
    for (let i = 0; i < sortUniqueValues.length; i++) {
        // Get the current number in the series
        let currentNumber = sortUniqueValues[i];
        // Get the next value in the series
        let nextValue = sortUniqueValues[i + 1];
        // Calculate the difference between current and next value
        let difference = nextValue - currentNumber;
        // If there's a gap in the series
        if (difference > 1) {
            // Fill the gap by adding numbers to the series
            for (let j = 0; j < difference; j++) {
                series.push(currentNumber + j);
            }
        }
        // If no gap, add the current number to the series
        else series.push(currentNumber);
    }
    // Log the complete series
    console.log(series);
    return series
}

// Call the printSeries function with testing values
printSeries(testingValues);
