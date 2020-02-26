// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
var lCharArray = lChar.split("");
var uCharArray = lChar.toUpperCase().split("");
// var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
// var rI = "";

// console.log(rI);
// Functions where the magic happens 




function generatePassword() {
    // criteria();
    var pass = buildPassword();
    return pass;
};


function buildPassword() {

    char = char.concat(lCharArray);
    // check for number and proper length of pass
    if (userPL.value >= 8 && userPL.value <= 128) {
        for (var i = 0; i < userPL.value; i++) {
            addCharFromArray(char);

        }
    };
    // other criteria
    if (userPU.value > 0) {
        for (var i = 0; i < userPU.value; i++) {

            char = char.concat(uCharArray);
        };
    };
    if (userPS.value > 0) {
        for (var i = 0; i < userPS.value; i++) {
            char = char.concat(spCharArray);
        }
    };
    if (userPN.value > 0) {
        for (var i = 0; i < userPN.value; i++) {
            char = char.concat(numCharArray)

        }
    };
    return passwordResult;
};

// utility function for getting characters from array; shuffling other arrays into lChar



function addCharFromArray(arr) {

    passwordResult += getRandomFromArray(char);


};

function addCharFromUArray(arr) {
    passwordResult += getRandomFromArray(uCharArray);
};

function addCharFromNArray(arr) {
    passwordResult += getRandomFromArray(numCharArray);
};

function addCharFromSArray(arr) {
    passwordResult += getRandomFromArray(spCharArray);

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
    // alert("Your password is ready!")
});
document.getElementById("pwLength").addEventListener("input", checkLength);
document.getElementById("pwLength").addEventListener("input", randI);
document.getElementById("pwNumber").addEventListener("input", numberDiscrepancy);
document.getElementById("pwUppercase").addEventListener("input", numberDiscrepancy);
document.getElementById("pwSpecial").addEventListener("input", numberDiscrepancy);


// Length checker.. If the length is too long or short, the generate button will be disabled. 

// function randI() {

//     var rI = Math.floor(Math.random() * passwordResult.length);
//     return rI;
// };

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

function numberDiscrepancy() {
    if (parseInt(userPN.value) > parseInt(userPL.value)) {
        generateBtn.disabled = true;
        userPU.disabled = true;
        userPS.disabled = true;
        document.querySelector("#generate").innerHTML = "You have more numbers than characters!"
    }
    if (parseInt(userPU.value) > parseInt(userPL.value)) {
        generateBtn.disabled = true;
        userPN.disabled = true;
        userPS.disabled = true;
        document.querySelector("#generate").innerHTML = "You have more uppercase letters than characters!"
    }
    if (parseInt(userPS.value) > parseInt(userPL.value)) {
        generateBtn.disabled = true;
        userPN.disabled = true;
        userPU.disabled = true;
        document.querySelector("#generate").innerHTML = "You have more special characters than characters!"
    }
    if (parseInt(userPL.value) >= parseInt(userPN.value) && parseInt(userPL.value) >= parseInt(userPU.value) && parseInt(userPL.value) >= parseInt(userPS.value)) {
        generateBtn.disabled = false;
        userPN.disabled = false;
        userPU.disabled = false;
        userPS.disabled = false;
        document.querySelector("#generate").innerHTML = "Generate Password"

    }
    if (parseInt(userPS.value) + parseInt(userPU.value) + parseInt(userPN.value) > 128 || parseInt(userPS.value) + parseInt(userPU.value) + parseInt(userPN.value) > userPL.value) {
        generateBtn.disabled = true;
        document.querySelector("#generate").innerHTML = "the sum of your criteria is >128 or the length"
    }
};