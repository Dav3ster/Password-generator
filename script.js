// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function getPasswordOptions() {
  // Variable to store length of password from user input
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return null;
  }

  // Variable to store boolean regarding the inclusion of special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store boolean regarding the inclusion of numeric characters
  var hasNumeric = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store boolean regarding the inclusion of lowercase characters
  var hasLowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store boolean regarding the inclusion of uppercase characters
  var hasUppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (hasSpecialCharacters === false && hasNumeric === false && hasUppercase === false && hasLowercase === false) {
      alert ("Please enter one of the options avaliable")
      return null
    }
    
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumeric: hasNumeric,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
  };
  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
  var endpassword = [];
  var possiblepassword = [];
  var guranteedcharcters = [];

  if (!options) {
  return null
  }

  if (options.hasSpecialCharacters) {
    possiblepassword = possiblepassword.concat(specialCharacters)
    guranteedcharcters.push(getRandom(specialCharacters))
  }

  if (options.hasNumeric) {
    possiblepassword = possiblepassword.concat(numericCharacters)
    guranteedcharcters.push(getRandom(numericCharacters))
  }

  if (options.hasLowercase) {
    possiblepassword = possiblepassword.concat(lowerCasedCharacters)
    guranteedcharcters.push(getRandom(lowerCasedCharacters))
  }

  if (options.hasUppercase) {
    possiblepassword = possiblepassword.concat(upperCasedCharacters)
    guranteedcharcters.push(getRandom(upperCasedCharacters))
  }

  for (var i=0; i<options.length; i++) {
    var possiblecharcter = getRandom(possiblepassword);
    console.log(possiblecharcter)
    endpassword.push(possiblecharcter)
  }

  for (var i=0; i<guranteedcharcters.length; i++) {
    endpassword[i] = guranteedcharcters[i];
  } console.log(endpassword[i])
  return endpassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
