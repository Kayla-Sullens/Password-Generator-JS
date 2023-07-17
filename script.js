// Assignment code 
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChaacters = ['~','!','@','#','$','%','&','*','+','?'];
var numericCharacters = [0,1,2,3,4,5,6,7,8,9];


function passwordOptions() {
    var length = parseInt(
        prompt('How many characters would you like your password to contain?'),
    );
    if (Number.isNaN(length)) {
        alert('Password length must be a number');
        return null;
    }
    if (length<8) {
        alert('Password must be at least 8 characters long');
        return null;
    }
    if (length>128) {
        alert('Password length cannot be longer than 128 characters');
        return null;
    }

    var includeLowerCaseCharacters = confirm(
        'Click OK to confirm including lower case characters'
    );
    var includeUpperCaseCharacters = confirm(
        'Click OK to confirm including upper case characters'
    );
    var includeNumericCharacters = confirm(
        'Click OK to confirm including numeric characters'
    );
    var includeSpecialCharacters = confirm(
        'Click OK to confirm including special characters'
    );
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);