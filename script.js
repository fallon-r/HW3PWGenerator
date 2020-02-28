// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
var lCharArray = lChar.split("");
var uCharArray = lChar.toUpperCase().split("");
var numChar = "1234567890";
var numCharArray = numChar.split("");
var spChar = "!@#$%^&*=-_";
var spCharArray = spChar.split("");
var char = [];

// Input variables
var generateBtn = document.querySelector("#generate");
var userPL = document.getElementById('pwLength');
var userPU = document.getElementById("pwUppercase");
var userPN = document.getElementById("pwNumber");
var userPS = document.getElementById("pwSpecial");

// Output variable
var passwordText = document.querySelector("#password");
var passwordResult = "";

function generatePassword() {
    var pass = buildPassword();
    return pass;
};

function buildPassword() {
    // Default for char Array
    char = char.concat(lCharArray);
    // base password maker
    for (var i = 0; i < userPL.value; i++) {
        addCharFromArray(char);
    };
    // addition of special char criterion
    return passwordResult;
};

// utility function for getting characters from array; shuffling other arrays into lChar

function addCharFromArray(arr) {

    passwordResult += getRandomFromArray(char);


};

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
};

// event listener main button

generateBtn.addEventListener("click", function() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordResult = "";
    if (userPN.checked == true) {
        console.log("something")
    };

    alert("Your password is ready!")
});
document.getElementById("pwLength").addEventListener("input", checkLength);
// document.getElementById("pwNumber").addEventListener("checked", function() {
//     char.concat(numCharArray);
// });



// Length checker.. If the length is too long or short, the generate button will be disabled. 

function checkLength() {
    if (userPL.value < 8) {
        generateBtn.disabled = true;
        userPN.disabled = true;
        userPU.disabled = true;
        userPS.disabled = true;
        document.querySelector("#generate").innerHTML = "Your Password is too short."
    }
    if (userPL.value > 128) {
        generateBtn.disabled = true;
        userPN.disabled = true;
        userPU.disabled = true;
        userPS.disabled = true;
        document.querySelector("#generate").innerHTML = "Your Password is too long."
    }
    if (userPL.value >= 8 && userPL.value <= 128) {
        generateBtn.disabled = false;
        userPN.disabled = false;
        userPU.disabled = false;
        userPS.disabled = false;
        document.querySelector("#generate").innerHTML = "Generate Password"
    }
};