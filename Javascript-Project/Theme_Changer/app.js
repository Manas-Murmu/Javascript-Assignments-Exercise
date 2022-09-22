function themeChanger() {
  let val = document.body;
  val.classList.toggle("darkMode");
  var x = document.getElementById("button");
  if (x.innerHTML == "Dark Theme") {
    x.innerHTML = "Light Theme";
  } else {
    x.innerHTML = "Dark Theme";
  }
}

let btn = document.getElementById("button");
console.log(btn);

btn.addEventListener("click", themeChanger);
