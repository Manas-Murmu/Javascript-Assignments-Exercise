//Write a functions which checks if all items are unique in the array.

var arr = ["Manas", "Ranjan", "Murmu"];

function unique(array) {
  if (array.length !== new Set(array).size) {
    return false;
  }

  return true;
}

console.log(unique(arr));
