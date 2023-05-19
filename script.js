function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const lengthMessage = document.getElementById("length");
  const uppercaseMessage = document.getElementById("uppercase");
  const numberMessage = document.getElementById("number");
  const matchMessage = document.getElementById("match");
  const btn = document.getElementById('botao')

  if (password.value.length >= 8) {
    lengthMessage.className = "valid";
  } else {
    lengthMessage.className = "invalid";
  }

  if (/[A-Z!$#%]/.test(password.value)) {
    uppercaseMessage.className = "valid";
  } else {
    uppercaseMessage.className = "invalid";
  }
  if (/\d/.test(password.value)) {
    numberMessage.className = "valid";
  } else {
    numberMessage.className = "invalid";
  }
  if (password.value === confirmPassword.value && confirmPassword.value !== "") {
    matchMessage.className = "valid";
  } else {
    matchMessage.className = "invalid";
  }
 
}