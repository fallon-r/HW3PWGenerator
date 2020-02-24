// character types
var lChar = "abcdefghijklmnopqrstuvwxyz";
var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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


function criteria(l, characters) {
    var passwordResult = "";
    for (var i = 0; i < l; i++) {
        passwordResult += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    // check if there are numbers
    if (userPN.value > 0) {
        passwordResult += addCharFromArray(numChar).charAt(Math.floor(Math.random() * numChar.length)) * userPN.value;
    };
    if (userPS.value > 0) {
        passwordResult += addCharFromArray(spChar).charAt(Math.floor(Math.random() * spChar.length)) * userPS.value;
    };
    if (userPU.value > 0) {
        passwordResult += addCharFromArray(uChar).charAt(Math.floor(Math.random() * uChar.length)) * userPU.value;
    };
    return passwordResult;
}



function password(l, characters) {
    var pwd = "";
    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    };


    return pwd;
};

// Length checker.. If the length is too long or short, the generate button will be disabled. 

function checkLength() {
    if (userPL.value < 8) {
        generateBtn.disabled = true;
        document.querySelector("#generate").innerHTML = "Your Password is too short."
    }
    if (userPL.value > 128) {
        generateBtn.disabled = true;
        document.querySelector("#generate").innerHTML = "Your Password is too long."
    }
    if (userPL.value >= 8 && userPL.value <= 128) {
        generateBtn.disabled = false;
        document.querySelector("#generate").innerHTML = "Generate Password"
    }
};


// function buildPassword() {
//     // check for number and proper length of pass
//     if (userPL >= 8 && userPL <= 128) {
//         for (var i = 0; i < userPL; i++) {
//             // TO-DO: check for user password preference
//             addCharFromArray(lowerCaseArray);
//         }
//     } else {
//         alert("Your password is either too big or too small!")
//     }
//     return passwordResult;
// };

// utility function for getting characters from array

function addCharFromArray(arr) {
    passwordResult += getRandomFromArray(lowerCaseArray);
}

function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
};

// event listener main button

generateBtn.addEventListener("click", function() {
    var characters = lChar;

    // if (userPU.value > 0) {
    //     characters += uChar.charAt(Math.floor(Math.random() * uChar.length) * userPU.value);
    // };

    passwordText.value = password(userPL.value, characters);
});
document.getElementById("pwLength").addEventListener("blur", checkLength);