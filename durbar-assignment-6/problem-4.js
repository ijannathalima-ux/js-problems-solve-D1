//Greatest Common Divisor

function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}
console.log(gcd(12,18))