function* fibonacci() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const series = fibonacci();

for (let index = 0; index < 100; index++) {
    series.return('hey');
    console.log(series.next().done);
    series.throw('hay')
}
