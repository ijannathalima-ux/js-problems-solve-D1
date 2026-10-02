// function convertToCamelCase(sentence) {
//     let words = sentence.trim().split("  ");
//     for (let i = 0; i < words.length; i++) {
//         if (i === 0) {
//             words[i] = words[i].toLowerCase()
//         } else {
//             words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()

//         }
//     }
//     return words.join("");
// }

function convertToCamelCase(sentence) {
  let words = sentence.trim().split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] =
        words[i][0].toUpperCase() +
        words[i].slice(1).toLowerCase();
    }
  }

  return words.join("");
}
console.log(convertToCamelCase("HELLO WORLD JAVASCRIPT"))
console.log(convertToCamelCase("hello world"))
console.log(convertToCamelCase("java script is fun"))
console.log(convertToCamelCase(" java script is fun "))
console.log(convertToCamelCase(" hello   world    "))