document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  //   console.log(email);
  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;
  if (email === "fahmidurrahamanshanto@gmail.com" && password === "secret") {
    location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
