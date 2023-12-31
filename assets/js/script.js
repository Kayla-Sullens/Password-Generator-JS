// Assignment code 
var generateBtn = document.querySelector("#generate");

// Arrays of character types to be included in password.
var lowerCaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','Q','R','S','T','U','V','W','X','Y','Z'];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ['~','!','@','#','$','%','&','*','+','?'];


// Function to obtain user input to generate password.
function getPasswordOptions() {
    var length = parseInt(
        prompt('How many characters would you like your password to contain?'),
    );

    // Conditional statements to check if password meets length requirements, and prompts user if what they entered isn't a number or is too high/too low.
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

    // Variables to store which character types to be used in generating password.
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

    // Conditional statement to check if user doesn't include any of the character types.
    // Password generator will end if all evaluate to false.
    if (!includeLowerCaseCharacters && !includeUpperCaseCharacters && !includeNumericCharacters && !includeSpecialCharacters) {
        alert('Password must include at least one character type.');
        getPasswordOptions();
    }

    // Object to store user input for which character types to include in password.
    var passwordOptions = {
        length: length,
        includeLowerCaseCharacters: includeLowerCaseCharacters,
        includeUpperCaseCharacters: includeUpperCaseCharacters,
        includeNumericCharacters: includeNumericCharacters,
        includeSpecialCharacters: includeSpecialCharacters
    };

    return passwordOptions;
}

//Function to get a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

// Function to generate a password with given user input.
function generatePassword() {
    var options = getPasswordOptions();
    var currentArr = new Array();

    if (options.includeLowerCaseCharacters) {
        currentArr = currentArr.concat(lowerCaseCharacters)
    }
    if (options.includeUpperCaseCharacters) {
        currentArr = currentArr.concat(upperCaseCharacters)
    }
    if (options.includeNumericCharacters) {
        currentArr = currentArr.concat(numericCharacters)
    }
    if (options.includeSpecialCharacters) {
        currentArr = currentArr.concat(specialCharacters)
    }

    console.log(currentArr)
    // Generate a random string password from the new array.
    let pass = ""
    let i = 0
    while (i < options.length) {
        pass += getRandom(currentArr);
        i++
    }
    return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);