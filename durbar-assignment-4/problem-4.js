function countWordFrequencies(sentence) {

  sentence = sentence.toLowerCase();

  sentence = sentence.replace(/[^a-z0-9\s]/g, "");

  let words = sentence.trim().split(/\s+/);

  let count = {};

  if (sentence.trim() === "") {
    return count;
  }

  for (let word of words) {

    if (count[word]) {
      count[word]++;
    } 
    else {
      count[word] = 1;
    }
  }

  return count;
}

console.log(countWordFrequencies("Hello world, hello!"))
console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."))