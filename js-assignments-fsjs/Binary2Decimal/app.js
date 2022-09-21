let btn = document.querySelector(".row .btn");
console.log(btn);

btn.addEventListener("click", () => {
  let x = document.getElementById("binary").value;
  let val = parseInt(x, 2).toString(10);
  console.log(val);
  document.querySelector(".result").innerHTML = `Decimal Number : ${val}`;
});
