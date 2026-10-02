function countNumberProperties(numbers) {

  let even = 0;

  let negative = 0;

  let odd = 0;

  let positive = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    }
    if (numbers[i] < 0) {
      negative++;
    }
    if (numbers[i] % 2 !== 0) {
      odd++;
    }
    if (numbers[i] > 0) {
      positive++;
    }
  }

  return {
    even: even,
    negative: negative,
    odd: odd,
    positive: positive
  }
}

console.log(countNumberProperties([-5,0,3,-4,1]))