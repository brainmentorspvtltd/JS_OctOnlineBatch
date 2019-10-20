// it will load html first and then load JS
// window.addEventListener("load", function() {
//     // Event Binding
//     document.getElementById("btn").addEventListener("click", showName);
// })

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", showName);
}

function showName() {
    console.log("Show Function called");
    var username = document.getElementById("box_1");
    document.getElementById("result").innerHTML = username.value;
}