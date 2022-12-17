//Write a program which tells the number of days in a month.

function getNumberOfDays(month, year) {
  return new Date(year, month, 0).getDate();
}

const days = getNumberOfDays(2, 2024);
console.log(days);
