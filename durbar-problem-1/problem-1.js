function getMonthName(monthNumber) {
  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthName[monthNumber - 1];
}

console.log(getMonthName(3))