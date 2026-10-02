function missingNumber(nums) {

    const n = nums.length
    const espectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (const num of nums) {
        actualSum += num;
    }

    return espectedSum - actualSum;
}

const result = missingNumber([0,3,1])

console.log(result);
