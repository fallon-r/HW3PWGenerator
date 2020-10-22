// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
var uChar = lChar.toUpperCase();
var numChar = "1234567890";
var spChar = "!@#$%^&*=-_";

// GLOBAL CHARACTER SET 
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

// Main functions

function generator() {
    passwordResult = "";
    char = "";
    if (userPL.value >= 8 && userPL.value <= 128) {
        char += lChar;
    };
    if (userPU.checked) {
        char += (uChar);
    };
    if (userPN.checked) {
        char += numChar;
    };
    if (userPS.checked) {
        char += spChar;
    };
    for (var i = 0; i < userPL.value; i++) {
        passwordResult += char.charAt(
            Math.floor(Math.random() * char.length)
        );
    };
    return passwordResult;
}



// event listener main button

generateBtn.addEventListener("click", function() {
    var password = generator();
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordResult;
    passwordResult = "";

    alert("Your password is ready!")
});

document.getElementById("pwLength").addEventListener("input", checkLength);

// Length checker. If the length is too long or short, the generate button will be disabled. 

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