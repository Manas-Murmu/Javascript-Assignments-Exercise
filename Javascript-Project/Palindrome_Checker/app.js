function checkPalindrome() {
  let text = document.getElementById("Palindrom");
  let input = document.getElementById("inputvalue").value;
  let rev = input.toString().split("").reverse().join("");
  if (input == rev) {
    console.log("Palindrome");
    text.innerHTML = "It is Palindrome";
  } else {
    console.log("Not Palindrome");
    text.innerHTML = "Not Palindrome";
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", checkPalindrome);
