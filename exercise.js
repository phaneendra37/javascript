const test = [
    {
        "name": 'Ravi',
        'salary': '1000'
    },
    {
        "name": 'Loki',
        'salary': '1000'
    },
    {
        "name": 'Adhi',
        'salary': '1000'
    },
    {
        "name": 'Sanjay',
        'salary': '1000'
    },
    {
        "name": 'Loki',
        'salary': '1000'
    },
    {
        "name": 'Ravi',
        'salary': '1000'
    },
    {
        "name": 'Sanjay',
        'salary': '1000'
    },
];

// remove the duplicate values from an array
var names = [];
const duplicateUsers = test.filter((item) => {
    if (!names.includes(item.name)) {
        names.push(item.name);
        return true
    }
})

const newUse = [];
test.forEach((item) => {
    let indexofUser = newUse.find(item1 => item1.name == item.name);
    if (!indexofUser) newUse.push(item)
});


// segregate the donar list based on groups
let donors = [
    { name: "VIRAT", age: 19, blood_group: "B+" },
    { name: "SACHIN", age: 20, blood_group: "AB+" },
    { name: "JOHN", age: 25, blood_group: "A+" },
    { name: "APPLE", age: 45, blood_group: "O+" },
    { name: "PETER", age: 48, blood_group: "AB-" },
    { name: "ROHIT", age: 56, blood_group: "AB+" },
];
let acceptors = [{ blood_group: ["b+", "ab+", "a+"] }];

const donarList = donors.filter((item) => {
    if (acceptors[0].blood_group.includes(item?.blood_group.toLocaleLowerCase())) return true
})

const list = [];
donors.forEach(blood => {
    let userBlood = blood.blood_group.toLocaleLowerCase();
    let acceptor = acceptors[0].blood_group;
    if (acceptor.includes(userBlood)) list.push(blood)
});




// add it in order and add missing numbers
const userTest = [-10, -2, 5, 2, 10, 3, -3, 6, 7];
const sortData = userTest.sort((a, b) => a - b);
const newArray = [];
userTest.forEach((item, index) => {
    let currentValue = userTest[index];
    let nextValue = userTest[index + 1]
    let diff = nextValue - currentValue;
    if (diff > 1) {
        for (let j = 0; j < diff; j++) {
            newArray.push(item + j)
        }
    }
    else newArray.push(item)
});

console.log(newArray);