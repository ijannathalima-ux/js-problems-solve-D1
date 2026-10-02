// Problem-1: Durbar-Contest

function reverseEachWord(str) {
 return str
 .split(" ").map((word) => word.split("").reverse().join(""))
 .join(" ");
}
console.log(reverseEachWord("Hello World"))
console.log(reverseEachWord("JavaScript is fun"))