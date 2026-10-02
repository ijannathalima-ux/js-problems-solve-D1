function findSecondLargestUnique(numbers) {

  let unique = [];

  for (let i = 0; i < numbers.length; i++) {

    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }

  }


  if (unique.length < 2) {
    return null;
  }


  let largest = unique[0];

  for (let i = 1; i < unique.length; i++) {

    if (unique[i] > largest) {
      largest = unique[i];
    }

  }


  let secondLargest = null;

  for (let i = 0; i < unique.length; i++) {

    if (unique[i] !== largest) {

      if (secondLargest === null || unique[i] > secondLargest) {
        secondLargest = unique[i];
      }

    }

  }

  return secondLargest;
}

console.log(findSecondLargestUnique([10,5,20,5,15]))
console.log(findSecondLargestUnique([3,3,3]))