///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with         prompt's and confirm's

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


function generatePassword(){
  var password = " ";
  var length = prompt("How many characters? Min 8, Max 128");
  if(length <8 || length >128) {
    generatePassword()
  }
  var uppercase = confirm("Include Upper case Letters?");
  var lowercase = confirm("Include Lower case Letters?");
  var numbers = confirm("Include Numbers?");
  var specialchar = confirm("Include Special Characters?");

  if(uppercase === true) {
    var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length) ]
    console.log(randomUppercase);
  }
  if (lowercase === true) {
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var randomLowercase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length) ]
    console.log(randomLowercase)
  }
  if (numbers === true ){
    var numberlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    var randomnumber = numberlist[Math.floor(Math.random() * numberlist.length)]
    console.log(randomnumber)
  } 
  if (specialchar === true){
    var specialcharList = ["!", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    var randomSpecialChart = specialcharList[Math.floor(Math.random() * specialcharList.length)]
    console.log(randomSpecialChart)
  }
  if(uppercase !== true && lowercase !== true && numbers !== true && specialchar !== true){
    var pickAletter = confirm("Throw me a bone, Do you want a password or what?");
    if(pickAletter === true  || pickAletter !== true){
      generatePassword() 
    }
  }
  for(var i = 0; i<=length; i++){
    password = password+randomUppercase+randomLowercase+randomnumber+randomSpecialChart
    console.log(passwordText)}
}


///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
