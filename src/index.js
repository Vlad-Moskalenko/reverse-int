module.exports = function reverse (n) {
    return new Number(Math.abs(n).toString().split('').reverse().join(''));
}
