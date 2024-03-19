
function* test(arg1 = 2, arg2 = 3) {
    yield 2
    yield 2;
    yield 2;
    yield 2;
}
const testGen = test();
const userData = testGen.next();
const userData1 = testGen.next().value;
const userData2 = testGen.next().done;
const userData3 = testGen.return('done');
const userData4 = testGen.throw('all done');
console.log(userData, userData1, userData2, userData3, userData4);