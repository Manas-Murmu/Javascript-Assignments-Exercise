//28. Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function display(n) {
  var arr = [2];
  for (var i = 3; i < n; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  console.log(arr); // use arr result on your own
}

display(100);
