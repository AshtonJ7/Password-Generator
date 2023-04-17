// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

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
// window.confirm method used to display dialog message on whether or not to include lowercase, uppercase, numeric, and/or special characters
    passwordUpper = confirm("Click OK to if you would like to include lowercase characters");
    passwordLower = confirm("Click OK to if you would like to include uppercase characters");
    passwordNumber = confirm("Click OK to if you would like to include numeric characters");    
    passwordSpecial  = confirm("Click OK to if you would like to include special characters");

 // If user selects cancel on all options, This alert will come up telling user they must select atleast one option   
    if (passwordUpper === false && passwordLower === false && passwordNumber === false && passwordSpecial === false) {
        alert("You must choose at least one option");
    return;
    }
 
    // delcaring variable for an array combining numbers, uppercase, lowercase & special characters 
    var passwordCharacters = []
      
    if (passwordUpper) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

    if (passwordLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }
      
    if (passwordNumber) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }

    if (passwordSpecial) {
      passwordCharacters = passwordCharacters.concat(special)
    }

     // This string variable will be filled based on the for loop selecting random characters from the array
     //Math.random method used to generate random number. Math.floor to round to decimal
     var password = "";
      
     for (var i = 0; i < passwordLength; i++) {
       password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
       console.log(password)
     }
     return password;
}

// Write password to the #password input
     function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

    passwordText.value = password;
    }



