function counter() {
  let countDownValue = document.getElementById("number").value;
  let countText = document.querySelector(".countshowdown");
  let counter = setInterval(() => {
    if (countDownValue >= 0) {
      countText.innerHTML = countDownValue;
      countDownValue--;
      console.log(countDownValue);
    } else {
      clearInterval(counter);
      countDownValue = 0;
    }
  }, 1000);
}

let btn = document.getElementById("submit");
btn.addEventListener("click", counter);
