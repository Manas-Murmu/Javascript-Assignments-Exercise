// ### Tasks

//      Target the search box and on hover change thebackground color to red.

let value = document.querySelector(".searchinput___19uW0");

value.addEventListener("mouseenter", func1);

function func1() {
  value.setAttribute("style", "background-color:Red;");
}
