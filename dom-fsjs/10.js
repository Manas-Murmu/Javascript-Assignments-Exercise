//Target the button and change background colour on mouseover

let val = document.querySelector(".btn-cta-big .login-btn-text ");

val.addEventListener("mouseover", func);

function func() {
  val.setAttribute("style", "background-color:Red");
}
