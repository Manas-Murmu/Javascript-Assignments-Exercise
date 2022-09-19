// ### Fetch all the product name and store in an array

let arr = [];

document.querySelectorAll(".as-imagegrid-item").forEach((e) => {
  let value = e.innerText;
  arr.push(value);
});

console.log(arr);
