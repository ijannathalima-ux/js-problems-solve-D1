function checkMathOperationsForNine(a, b) {
  if(a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9){
    return "Nine";
  } else {
    return "Nein";
  }
}
console.log(checkMathOperationsForNine(5,4))
console.log(checkMathOperationsForNine(10,1))
console.log(checkMathOperationsForNine(5,3))