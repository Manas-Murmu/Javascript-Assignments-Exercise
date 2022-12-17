//10. Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

//Truthy values
if (5 > 3) {
  console.log("true");
}

if (5 === 5) {
  console.log("true");
}

var isLoggedIn = true;
if (isLoggedIn) {
  console.log("Yes");
}

//Falsy Values

var number = 0;

if (5 === "5") {
  console.log("true");
} else {
  console.log("fALSE");
}

var test = "";
