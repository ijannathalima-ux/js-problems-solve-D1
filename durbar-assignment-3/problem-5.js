function repeatedDigitSum(n) {

    while (n >= 10) {

        let sum = 0;

        let digits = n.toString();

        for (let digit of digits) {
            sum += Number(digit);
        }

        n = sum;
    }

    return n;
}
console.log(repeatedDigitSum(9875))
console.log(repeatedDigitSum(123))