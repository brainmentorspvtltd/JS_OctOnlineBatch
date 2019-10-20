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
    var expression = f_num.value + opr + s_num.value;
    var result = eval(expression);
    document.querySelector("#res").innerHTML = result;
}