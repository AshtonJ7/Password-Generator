// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generatePassword() {
// Arrays for for password criteria
    const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// Variables for password criterea
    var passwordLength = "0";
    var passwordUpper = false;
    var passwordLower = false;
    var passwordNumber = false;
    var passwordSpecial = false;
// Prompt to confirm how many characters the user would like in their password
    passwordLength = prompt("How many characters would you like your password to contain?");
    if (passwordLength < 8 || password > 128 ) {
        alert("Password must be between 8-128 characters, please try again")
        return;
    }


// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;
}

  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}
