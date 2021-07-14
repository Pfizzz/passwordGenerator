// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//array of special characters
const specialChar = ["!@#$%^&*()_+-=[]{},./?"];
//array of numbers
const numberChar = ["0123456789"];
//array of lowercase letters 
const lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
//array of uppercase letters
const upperChar = ["ABCDEFGHIJKLMNOPQURSTUVWXYZ"];
//empty array of characters
var emptyChar = "";
// final password result:
var passFinal = "";
//textArea displays the password on screen
var textArea = document.getElementById("password");
//empty variables filled by functions
var specialConfirm = "";
var numberConfirm = "";
var lowerConfirm = "";
var upperConfirm = "";

// function to generate emptyChar array (must be above generatePassword function due to scope)
var generateBank = function () {
  passFinal = "";
  var specialConfirm = confirm("Would you like to include special characters?");
  var numberConfirm = confirm("Would you like to include numbers?");
  var lowerConfirm = confirm("Would you like to include lower-case letters?");
  var upperConfirm = confirm("Yould you like to include upper-case letters?");

  // if statement to add characters to empty array
  if (specialConfirm === true || numberConfirm === true || lowerConfirm === true || upperConfirm === true) {
    if (specialConfirm === true) {
      emptyChar = emptyChar.concat(specialChar);
    }
    if (numberConfirm === true) {
      emptyChar = emptyChar.concat(numberChar);
    }
    if (lowerConfirm === true) {
      emptyChar = emptyChar.concat(lowerChar);
    }
    if (upperConfirm === true) {
      emptyChar = emptyChar.concat(upperChar);
    }

  } else {
    alert("You need to choose characters for your password!");
    generateBank();
  }
}

// function to ask the user how many characters
var generatePassword = function () {
  let passLength = 0;
  while (passLength < 8 || passLength > 128) {
    //this stores the amount of characters user wants into passLength variable
    passLength = prompt("Select a password length between between 8 and 128.");
  }
  // this if statement checks if the user entered the correct value for the prompt.
  if (passLength >= 8 || passLength <= 128) {
    //then sends the user to create the password bank.
    generateBank();
    //add the for loop with iterator here
    for (var i = 0; i < passLength; i++) {
      passFinal += emptyChar[Math.floor(Math.random() * emptyChar.length)]
    };
    //returns the final password and sends it back to writePassword().
    return passFinal;
  } else {
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
