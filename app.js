var milisec = 0;
var sec = 0;
var mins = 0;
var hours = 0;
var a;

function timer() {
    document.getElementById("h2").innerHTML = mins + " : " + sec + " : " + milisec++ ;
    if (milisec == 100) {
        sec++;
        milisec = 0;

        if (sec == 10) {
            sec = 0;
            mins++;
        }
    }
}

function start() {
    a = setInterval(timer, 1);
}

function stop() {
    clearInterval(a);
}

function reset() {
    stop();
    milisec = sec = mins = hours = 0;
    document.getElementsByTagName("h2").innerHTML = "00" + ":" + "00" + ":" + "00";
}