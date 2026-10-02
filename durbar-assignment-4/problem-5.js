function truncateString(str, maxLength) {

  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    return "...";
  }

  let charactersToKeep = maxLength - 3;

  return str.slice(0, charactersToKeep) + "...";

}

console.log(truncateString("Hello world, this is a long string", 10))
console.log(truncateString("Short text", 15))