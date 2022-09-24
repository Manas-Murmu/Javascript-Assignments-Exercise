function validation() {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;
  let text = document.getElementById("error");

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let regpassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
  if (username === "") {
    text.innerHTML = "User Name Cannot be Empty";
    return false;
  }
  if (email === "" || !regEmail.test(email)) {
    text.innerHTML = "Please Enter Correct Email Id";
    return false;
  }
  if (password === "" || !regpassword.test(password)) {
    text.innerHTML =
      "Password should be 8 Characters long and should contain at least one upper case,number and one lower case letter";
    return false;
  }
  if (confirmpassword === "" || !regpassword.test(password)) {
    text.innerHTML = "Confirm Password Cannot be Empty";
    return false;
  }
  if (password != confirmpassword) {
    text.innerHTML = "Password Donot Match";
    return false;
  }
  return true;
}

function handleClick() {
  let text = document.getElementById("error");
  if (validation()) {
    console.log("Success");
    text.style.color = "Green";
    text.innerHTML = "Registred Successfully";
  }
}
