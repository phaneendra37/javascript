
document.addEventListener('input', (event) => {
    // Log the field that was changed
    console.log(event.target.value);

    if (!event.target.value) {
        event.target.style.border = "1px solid red";

    } else {
        event.target.style.border = "";
    }
})
const test = {
    name: "Phaneendra",
    age: 24,
    gender: 'male'
}

for (let item in test) {
    console.log(item, test[item]);
}

Object.keys(test).forEach((key) => {
    console.log(key, test[key])
})

Object.entries(test).forEach(([key, value]) => {
    console.log(key + ': ' + value);
});


let i = 1;
let changedValue = i++;
let preChangedValue = ++i;

// console.log(changedValue, i, preChangedValue);

// Object.freeze(test);
// console.log(Object.isFrozen(test));

// const tests = Object.assign({}, test);
// console.log(tests)

Object.seal(test);
console.log(test['dd'] = 'sss');
console.log(test);


function admin(userInput) {
    return function (target) {
        target.isAdmin = userInput;
    }
}

// Applying the admin function manually
const User = class { };
admin(false)(User);

console.log(User.isAdmin); // Output: true


const tests = [12, 12, 45, 45, 15, 15, 51, 7, 554, 52, 15, 9, 45, 45, 54, 54, 45, -10];
console.log(Math.max.apply(null, tests), Math.min.apply(null, tests));




let minNumber = 0;
tests.forEach((item, index) => {
    if (index == 0) minNumber = item
    else if (minNumber > item) minNumber = item
})

let maxNumber = 0;
tests.forEach((item, index) => {
    if (index == 0) maxNumber = item
    else if (maxNumber < item) maxNumber = item
});

console.log(maxNumber, minNumber);


const count = (numb) => {
    return numb.toLocaleString();
}


console.log(count(720000));


let h = 1;
const testArray = new Array(5).fill(h++);

console.table(test);
console.dir(test);


document.execCommand("copy")
window.addEventListener('beforeunload', () => {
    console.log('Clicked browser back button');
});


const observable = new Observable((observer) => {
    setTimeout(() => {
        observer.next("Message from a Observable!");
    }, 3000);
});

observable.subscribe((value) => console.log(value));