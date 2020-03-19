function start() {
    one();
    two();
    three();
    four();
    five();
    six();
}

function one() {
    console.log("One executed...");
}

function two() {
    console.log("Two executed...")
}

// function three() {
//     for (var i = 0; i < 100000; i++) {
//         for (var j = 0; j < 100000; j++) {
//             k = i + j;
//         }
//     }
//     console.log("Three executed...")
// }

function three() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState, this.status);
        if (this.readyState == 4 && this.status == 200) {
            for (var i = 0; i < 100000; i++) {
                for (var j = 0; j < 100000; j++) {
                    k = i + j;
                }
            }
            console.log("Three executed...")
        }
    }
    xhttp.open('get', '');
    xhttp.send();
}

function four() {
    console.log("Four executed...")
}

function five() {
    console.log("Five executed...")
}

function six() {
    console.log("Six executed...")
}

start()