// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
// var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";
var spChar = "!@#$%^&*=-_";

// Input variables
var generateBtn = document.querySelector("#generate");
var userPL = document.getElementById('pwLength');
var userPU = document.getElementById("pwUppercase");
var userPN = document.getElementById("pwNumber");
var userPS = document.getElementById("pwSpecial");

// Output variable
var passwordText = document.querySelector("#password");
var passwordResult = "";

// Functions where the magic happens 


function criteria() {
    var passwordResult = "";


    // // check if ther are special characters
    // if (userPS.value > 0) {
    //     passwordResult += addCharFromArray(spChar)
    // };

    // // check if there are uppercase
    // if (userPU.value > 0) {
    //     passwordResult += addCharFromArray(lChar.toUpperCase())
    // };
    return passwordResult;
};

function generatePassword() {
    criteria();
    var pass = buildPassword();
    return pass;
};




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
        document.querySelector("#generate").innerHTML = "You have more uppercase lettinputers than characters!"
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
};


function buildPassword() {
    // check for number and proper length of pass
    if (userPL.value >= 8 && userPL.value <= 128) {
        for (var i = 0; i < userPL.value; i++) {
            addCharFromArray(lChar);
        }
    };
    if (userPN.value > 0 && userPN.value <= 128 && userPN.value <= userPL.value) {
        for (var i = 0; i < userPN.value; i++) {
            addCharFromArray(numChar);

        }
    };
    return passwordResult;
};

// utility function for getting characters from array

function addCharFromArray(arr) {
    passwordResult += getRandomFromArray(lChar);

    // passwordResult += getRandomFromArray(spChar);
    // passwordResult += getRandomFromArray(lChar.toUpperCase());

}

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
};

// event listener main button

generateBtn.addEventListener("click", function() {
    var password = generatePassword();
    // criteria(userPN.value, characters[numChar]);
    // criteria(userPS.value, spChar);
    // criteria(userPU.value, lChar.toUpperCase());
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordResult = "";
    alert("Your password is ready!")
});
document.getElementById("pwLength").addEventListener("input", checkLength);
document.getElementById("pwNumber").addEventListener("input", numberDiscrepancy);
document.getElementById("pwUppercase").addEventListener("input", numberDiscrepancy);
document.getElementById("pwSpecial").addEventListener("input", numberDiscrepancy);
// testing area

// function passwordtest(l, characters) {
//     var pwdtest = "";
//     for (var i = userPN.value; i < l; i++) {
//         pwdtest += characters.charAt(Math.floor(Math.random() * characters.length));
//     };
//     return pwdtest;
// };

// console.log(passwordtest(12, lChar.toUpperCase()))