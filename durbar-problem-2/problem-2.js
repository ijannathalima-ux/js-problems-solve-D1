function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even++;
        }
        else{
            odd++;
        }
    }
    return { even, odd };
}
console.log(countEvenOdd([1, 2, 3, 4, 5]))
console.log(countEvenOdd([10,20,30]))