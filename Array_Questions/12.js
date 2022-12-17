// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date();
console.log(`Year is ${date.getFullYear()}`);
console.log(`Month is ${date.getMonth()}`);
console.log(`Date Today is ${date.getDate()}`);
console.log(`Day is ${date.getDay()}`);
console.log(`Hour is ${date.getHours()}`);
console.log(`Minutes Now is ${date.getMinutes()}`);

// Using Date objects
const start = Date.now();

const end = Date.now();
const elapsed = end - start / 1000; // elapsed time in seconds

console.log(elapsed);

const secondsSinceEpoch = Math.round(Date.now() / 1000);

console.log(secondsSinceEpoch);
