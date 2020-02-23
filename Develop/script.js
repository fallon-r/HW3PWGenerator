var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for loewrcase english chars
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");
var numOfChars;
// generate password
function generatePassword() {
    getPrompts();
    var pass = buildPassword();
    return pass;
}

function getPrompts() {
    // get prompts from user
    // length 8 -128
    numOfChars = prompt("how many charecters do you want?");
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