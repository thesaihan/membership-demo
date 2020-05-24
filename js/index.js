const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

function validateUsername(username) {
  if(!username) {
    usernameError.innerHTML = "Username is required!";
    return false;
  } else if(!(username.length >=6 && username.length <=20)) {
    usernameError.innerHTML = "Username must be between 6 and 20 characters";
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if(!password) {
    passwordError.innerHTML = "Password is required!";
    return false;
  } else if(!(password.length >=6 && password.length <=20)) {
    passwordError.innerHTML = "Password must be between 6 and 20 characters";
    return false;
  } else {
    return true;
  }
}

function goLogin(event) {
  event.preventDefault();
  usernameError.innerHTML = "&nbsp;";
  passwordError.innerHTML = "&nbsp;";
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  if(isUsernameValid && isPasswordValid) {
    window.location.href = "./members.html";
    // alert("Success");
  }
}

document.querySelector(".login-text").addEventListener("focus", (event) => {
  event.target.nextSibling.innerText = "";
});