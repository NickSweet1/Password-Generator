// Assignment Code
var generateBtn = document.querySelector("#generate");
var button = document.querySelector(".btn");
var textContainer = document.querySelector(".card");
var textContentHeader = document.querySelector("h1");
var textContentBody = document.querySelector("h2");

//assigns random lowercase, uppercase, numbers, and symbols
const random = {
  randomLower: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  },
  randomUpper: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },
  randomNumber: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },
  randomSymbol: function () {
    const symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

//start generate password function
function generatePassword() {

//Get length of password from user
let length = prompt("How long would you like your password? (Between 8 and 128 characters)")
//check parameters of length input
while ((+length < 8) || (+length > 128) || (isNaN(+length)) || +length == "") {
  length = prompt("Please select a number between 8 and 128");
}

//sets all values to a boolean value
let userLower = confirm("Would you like to use lowercase letters?");
let userUpper = confirm("Would you like to use uppercase letters?");
let userNumber = confirm("Would you like to use numbers?");
let userSymbol = confirm("Would you like to use special characters?");

//confirms that the user selected at least one option
while (userLower === false && userUpper === false && userNumber === false && userSymbol === false) {
  alert("Please select at least one of the following.");
  userLower = confirm("Would you like to use lowercase letters?");
  userUpper = confirm("Would you like to use uppercase letters?");
  userNumber = confirm("Would you like to use numbers?");
  userSymbol = confirm("Would you like to use special characters?");
}

let userChoices = [];
let password = "";
let booleanChoices = 0;

//itterates through the length of password given by user to select random variables and sets booleanChoice variable
if (userLower) {
  booleanChoices +=1; 
  for (i = 0; i < +length; i++) {
    userChoices += random.randomLower();
  } 
}
if (userUpper) {
  booleanChoices +=1; 
  for (i = 0; i < +length; i++) {
    userChoices += random.randomUpper();
  }
}
if (userNumber) {
  booleanChoices +=1; 
  for (i = 0; i < +length; i++) {
    userChoices += random.randomNumber();
  }
} 
if (userSymbol) {
  booleanChoices +=1; 
  for (i = 0; i < +length; i++) {
    userChoices += random.randomSymbol();
  }
} 

//itterates through the length of password to assign part of the user choices string 
for (i = 0; i < +length; i++) {
  password += userChoices[Math.floor(Math.random() * (+length * booleanChoices))]; //multiply length of password by the number of variabels that the user wants to use
}
console.log(userChoices);
return password;
}

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

