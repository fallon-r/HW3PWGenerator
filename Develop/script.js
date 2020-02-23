var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for loewrcase english chars
var letters = "abcdefghijklmnopqrstuvwxyz";
var special = ""
var lowerCaseArray = letters.split("");
// var upperCaseArray = letters.toUpperCase.split("");
// criteria entries
var numOfChars = document.getElementById("pwLength").value;
var numOfUpper = document.getElementById("pwUppercase").value;
var numOfNumbers = document.getElementById("pwNumber").value;
var numOfSpecial = document.getElementById("pwSpecial").value;

// event listeners 
document.getElementById('pwLength').addEventListener('input', function(x) {
    console.log(this.value);
});
document.getElementById('pwUppercase').addEventListener('input', function(x) {
    console.log(this.value);
});
document.getElementById('pwNumber').addEventListener('input', function(x) {
    console.log(this.value);
});
document.getElementById('pwSpecial').addEventListener('input', function(x) {
    console.log(this.value);
});

// generate password
function generatePassword() {
    getPrompts();
    var pass = buildPassword();
    return pass;
}


function buildPassword() {
    // check for number and proper length of pass
    if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
        for (var i = 0; i < numOfChars; i++) {
            // TO-DO: check for user password preference
            addCharFromArray(lowerCaseArray);
        }
    }
    return passwordResult;
}
// add char from array func
function addCharFromArray(arr) {
    // build pass
    passwordResult += getRandomFromArray(lowerCaseArray);
}
// utility func to get a random element from array
function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordResult = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);