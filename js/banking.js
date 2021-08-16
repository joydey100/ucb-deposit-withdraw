/* Necessary Functions */

// Get input Values Function

function getInputValues(selector) {
  let targetElement = document.getElementById(selector);
  let targetValue = parseFloat(targetElement.value);
  targetElement.value = "";
  return targetValue;
}

// Update values
function updateValue(prevElement, newValue) {
  let targetElement = document.getElementById(prevElement);
  let targetValue = parseFloat(targetElement.innerText);
  targetElement.innerText = targetValue + newValue;
}

// Balance Update
function balanceUpdate(newValue, isAdd) {
  let targetBal = document.getElementById(`total-balance`);
  let targetValue = parseFloat(targetBal.innerText);
  if (isAdd == true) {
    targetBal.innerText = targetValue + newValue;
  } else {
    targetBal.innerText = targetValue - newValue;
  }
}

// Take only Balance value
function balanceValue() {
  let targetBal = document.getElementById(`total-balance`);
  let targetValue = parseFloat(targetBal.innerText);
  return targetValue;
}

// Deposit Actions
document
  .getElementById(`deposit-submit`)
  .addEventListener(`click`, function () {
    let depoInput = getInputValues("deposit-input");
    console.log(typeof depoInput);
    if (isNaN(depoInput) || depoInput < 0) {
      alert(`Sorry! Your Input is Invalid`);
    } else {
      alert(`Are you sure to Deposit $${depoInput}`);
      updateValue(`total-deposit`, depoInput);
      balanceUpdate(depoInput, true);
    }
  });

//   Withdraw Action
document
  .getElementById(`withdraw-submit`)
  .addEventListener("click", function () {
    let withdrawInput = getInputValues("withdraw-input");

    if (isNaN(withdrawInput) || withdrawInput < 0) {
      alert(`Sorry! Your Input is Invalid`);
    } else {
      // if anyone withdraw more than balance, Error handle
      let balance = balanceValue();
      if (balance < withdrawInput) {
        alert(`Sorry! You Cann't withdraw more than $${balance}`);
      } else {
        alert(`Are you sure to withdraw $${withdrawInput}`);
        updateValue(`total-withdraw`, withdrawInput);
        balanceUpdate(withdrawInput, false);
      }
    }
  });
