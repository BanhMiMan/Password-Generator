// Assignment Code Do Not Change
var generateBtn = document.querySelector("#generate");


// Writes password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = parseInt(prompt("Choose a password length between 8-128 characters"));
  // Checks if the user entered a valid number for password length ^^^ return if invalid
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return;
  } 


  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  // Check if the user selected at least one character type ^^^ return if invalid
  // In JavaScript exclamation points are the logical negation ooperator.
  // Meaning they return the opposite of a boolean value (!true = false)
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }


  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

  var passwordChars = "";

  // if statements for meeting criteria
  if (includeLowercase) {
    passwordChars += lowercaseChars;
  }

  if (includeUppercase) {
    passwordChars += uppercaseChars;
  }

  if (includeNumbers) {
    passwordChars += numberChars;
  }

  if (includeSpecial) {
    passwordChars += specialChars;
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

  passwordText.value = password;
}

// Add event listener to 'generate password' button
generateBtn.addEventListener("click", writePassword);
