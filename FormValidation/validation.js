window.addEventListener("load", initEvents);

var username;
var email;
var pwd;
var c_pwd;
var errors;

function initEvents() {
    username = document.querySelector("#name");
    email = document.querySelector("#email");
    pwd = document.querySelector("#pwd");
    c_pwd = document.querySelector("#c_pwd");

    errors = document.querySelectorAll(".err");

    username.addEventListener("blur", checkBlank);
    email.addEventListener("keyup", validateEmail);
    pwd.addEventListener("keyup", checkStrength);
}

function checkBlank() {
    var str = username.value;
    // if (!str) {
    //     errors[0].innerHTML = "Please fill this filed";
    // } else {
    //     errors[0].innerHTML = "";
    // }

    if (isEmpty(str)) {
        errors[0].innerHTML = "Please fill this filed";
    } else {
        errors[0].innerHTML = "";
    }
}

function isEmpty(str) {
    return (str == undefined || str == NaN || str == "" || str.length == 0) ? true : false;
}

function validateEmail() {
    var str = email.value;
    var pattern = /([a-z|0-9]\w+[@]\w+[.]\w{2,4})/;
    if (pattern.test(str)) {
        errors[1].innerHTML = "";
    } else {
        errors[1].innerHTML = "Invalid Id";
    }
}

function checkStrength() {
    var str = pwd.value;
    var progress = document.querySelector("#progress");
    if (str.length > 0 && str.length < 5) {
        errors[2].innerHTML = "Weak Password";
        progress.style.backgroundColor = 'red';
        progress.style.width = '60px';
    } else if (str.length >= 5 && str.length < 8) {
        errors[2].innerHTML = "Average Password";
        progress.style.backgroundColor = 'yellow';
        progress.style.width = '80px';
    } else if (str.length >= 8) {
        errors[2].innerHTML = "Strong Password";
        progress.style.backgroundColor = 'green';
        progress.style.width = '100px';
    } else {
        errors[2].innerHTML = "Please enter a password";
        progress.style.backgroundColor = 'none';
        progress.style.width = '0px';
    }
}