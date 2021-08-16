/*  Essential Functions */
function getValue(selector) {
  let targetElement = document.getElementById(selector);
  let targetValue = targetElement.value;
  targetElement.value = "";
  return targetValue;
}

// Login Actions
const login = document.getElementById("login-btn");

login.addEventListener("click", function () {
  let emailValue = getValue("email-input");
  let passValue = getValue("password-input");

  if (emailValue == "joy@gmail.com" && passValue == "joy") {
    window.location.href = "bankinginfo.html";
  } else if (emailValue == "" && passValue == "") {
    alert(`Oops! you didn't put anything`);
  } else {
    alert(`Sorry! You are not a valid user.`);
  }
});
