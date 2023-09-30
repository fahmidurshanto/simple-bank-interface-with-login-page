const balanceTotalElement = document.getElementById("balance-total");
const balanceTotal = balanceTotalElement.innerText;
const balanceTotalNumber = parseInt(balanceTotal);

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;
  const depositAmountNumber = parseInt(depositAmount);

  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  const depositTotalNumber = parseInt(depositTotal);

  if (typeof depositAmount !== "number") {
    alert("Please enter a number");
    depositField.value = "";
    return;
  }

  depositTotalElement.innerText = depositAmountNumber + depositTotalNumber;

  balanceTotalElement.innerText = balanceTotalNumber + depositAmountNumber;
  depositField.value = "";
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = withdrawField.value;
  const withdrawAmountNumber = parseInt(withdrawAmount);

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalNumber = parseInt(withdrawTotal.innerText);
  if (balanceTotalNumber < withdrawAmountNumber) {
    alert("You don't have that much money in you account.");
    withdrawField.value = "";
    return;
  } else if (typeof withdrawAmount !== "number") {
    alert("Please enter a number");
    withdrawField.value = "";
    return;
  }
  withdrawTotal.innerText = withdrawAmountNumber + withdrawTotalNumber;

  balanceTotalElement.innerText = balanceTotalNumber - withdrawAmountNumber;
});
