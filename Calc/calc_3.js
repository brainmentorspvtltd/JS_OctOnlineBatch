window.addEventListener("load", initEvent);

var f_num;
var s_num;

function initEvent() {
    f_num = document.querySelector("#f_num");
    s_num = document.querySelector("#s_num");
    var btns = document.querySelectorAll("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    var opr = event.srcElement.innerHTML;
    // console.log("Calc is called.");
    // console.log(event.srcElement.innerHTML);

    if (opr == '+') {
        var result = f_num.value + s_num.value;
    } else if (opr == '-') {
        var result = f_num.value - s_num.value;
    } else if (opr == '/') {
        var result = f_num.value / s_num.value;
    } else if (opr == '*') {
        var result = f_num.value * s_num.value;
    }

    // var result = f_num.value + opr + s_num.value;
    // console.log(result);

    document.querySelector("#res").innerHTML = result;
}