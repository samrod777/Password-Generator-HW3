///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//

function generatePassword(){
  var password = "";
  var length = prompt("How many characters? Min 8, Max 128");
  if(length <8 || length >128) {
    generatePassword()
  }
  var uppercase = confirm("Include Upper case Letters?");
  var lowercase = confirm("Include Lower case Letters?");
  var numbers = confirm("Include Numbers?");
  var specialchar = confirm("Include Special Characters?");
  var CombinedCharacters = []

  
  if(uppercase === true) {
    var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    CombinedCharacters = uppercaseLetters.slice(0);
  } else (uppercaseLetters = " ")

  if (lowercase === true) {
    var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    CombinedCharacters = CombinedCharacters.concat(lowercaseLetters);
  } else (lowercaseLetters = " ")

  if (numbers === true ){
    var numberlist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    CombinedCharacters = CombinedCharacters.concat(numberlist);
  } else(numberlist = " ") 

  if (specialchar === true){
    var specialcharList = ["!", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    CombinedCharacters = CombinedCharacters.concat(specialcharList);
  } else (specialcharList = " ")

  if(uppercase !== true && lowercase !== true && numbers !== true && specialchar !== true){
    var pickAletter = confirm("Throw me a bone, Do you want a password or what?");
    if(pickAletter === true  || pickAletter !== true){
      generatePassword() 
    }
  }

  for (var i = 0; i <= length - 1; i++) {
    password = password + CombinedCharacters[Math.floor(Math.random() * CombinedCharacters.length)]; 
  }
  return password

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
