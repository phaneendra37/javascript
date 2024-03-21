var num = 50;
function logNumber() {
    var num = 100;
}
var num
logNumber();


// Closers

const test = (name) => {
    let test = 'Phaneendra';
    let greet = function (message) {
        console.log(`Hi ${test},${name} Here. ${message}`);
    }
    return greet;
}

const phane = test('Santhi');
phane("Good Night")