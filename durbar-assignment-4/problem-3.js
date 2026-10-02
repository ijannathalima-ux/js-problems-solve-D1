function titleCaseSentence(str) {

  if (str.trim() === "") {
    return "";
  }

  let words = str.trim().split(/\s+/);

  let result = words.map(function (word) {

    return word[0].toUpperCase() + word.slice(1).toLowerCase();
    
  });

  return result.join(" ");

}

console.log(titleCaseSentence("hello world"));
console.log(titleCaseSentence("a short sentence"))