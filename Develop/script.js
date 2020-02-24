// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";
var spChar = "!@#$%^&*=-_'";

// Input variables
var generateBtn = document.querySelector("#generate");
var userPL = document.getElementById('pwLength');
var userPU = document.getElementById("pwUppercase");
var userPN = document.getElementById("pwNumber");
var userPS = document.getElementById("pwSpecial");

// Output variable
var passwordText = document.querySelector("#password");

// Functions where the magic happens 


function password(l, characters) {
    var pwd = "";
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;
};

// event listeners

generateBtn.addEventListener("click", function() {
    var characters = lChar

    passwordText.value = password(userPL.value, characters);
})