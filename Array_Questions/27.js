// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
console.log(`Min age is ${ages[0]} and Max age is ${ages[ages.length - 1]}`);

//Average age

let sum = 0;
ages.forEach((num) => {
  sum = sum + num;
});

console.log(`Average is ${sum / ages.length}`);

//Median Age

function Median(ages) {
  let middle = Math.floor(ages.length / 2);
  // ages = [...ages].sort((a, b) => a - b); //Doubt
  return ages.length % 2 !== 0
    ? ages[middle]
    : (ages[middle - 1] + ages[middle]) / 2;
}

let median = Median(ages);
console.log(median);

//Range of Age

let minAge = ages[0];
let maxAge = ages[ages.length - 1];

console.log(`Range of Age is ${maxAge - minAge}`);

//Compare the Values

let average = sum / ages.length;

let minVal = minAge - average;
let maxVal = maxAge - average;

console.log(Math.abs(minVal, maxVal));
