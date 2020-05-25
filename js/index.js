const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

const alphaNumeric = /^[a-z0-9_]+$/i; // allow alpha numeric and underscores

/**
 * Password validation RegEx for JavaScript
 * 
 * Passwords must be 
 * - At least 8 characters long, max length anything
 * - Include at least 1 lowercase letter
 * - 1 capital letter
 * - 1 number
 * - 1 special character => !@#$%^&*
 *
 * @author Harish Chaudhari <harishchaudhari.com>
 * 
 */
const passwordReg = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;

function validateUsername(username) {
  if(!username) {
    usernameInput.classList.add("is-invalid");
    usernameError.innerHTML = "Username is required!";
    return false;
  } else if(!(username.length >=6 && username.length <=20)) {
    usernameInput.classList.add("is-invalid");
    usernameError.innerHTML = "Username must be between 6 and 20 characters";
    return false;
  } else if(!alphaNumeric.test(username)) {
    usernameInput.classList.add("is-invalid");
    usernameError.innerHTML = "Invalid username!";
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if(!password) {
    passwordInput.classList.add("is-invalid");
    passwordError.innerHTML = "Password is required!";
    return false;
  } else if(!(password.length >=6 && password.length <=20)) {
    passwordInput.classList.add("is-invalid");
    passwordError.innerHTML = "Password must be between 6 and 20 characters";
    return false;
  } else if(!passwordReg.test(password)) {
    passwordInput.classList.add("is-invalid");
    passwordError.innerHTML = "Password must contain lowercase, uppercase, number, and a special character";
    return false;
  } else {
    return true;
  }
}

function goLogin(event) {
  event.preventDefault();
  usernameError.innerHTML = "&nbsp;";
  passwordError.innerHTML = "&nbsp;";
  
  usernameInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-invalid");

  const username = usernameInput.value;
  const password = passwordInput.value;
  
  const isUsernameValid = validateUsername(username);
  const isPasswordValid = validatePassword(password);
  if(isUsernameValid && isPasswordValid) {
    window.location.href = "./members.html";
  }
}

function goFocus(event) {
  event.target.classList.remove("is-invalid");
  event.target.nextSibling.nextSibling.innerHTML = "&nbsp;";
}