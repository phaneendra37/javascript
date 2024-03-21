function addition(a) {
    return function addition(b) {
        return a + b
    }
}

let value2 = addition(12);
console.log(value2(46));