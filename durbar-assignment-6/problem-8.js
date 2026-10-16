//Calculate Days Between Dates

function daysBetweenDates(date1, date2) {

    let time1 = new Date(date1).getTime();

    let time2 = new Date(date2).getTime();

    let difference = Math.abs(time1 - time2);

    return difference / (1000 * 60 * 60 * 24);

}
console.log(daysBetweenDates("2020-01-15", "2020-01-20"))
console.log(daysBetweenDates("2020-01-15", "2019-12-31"))