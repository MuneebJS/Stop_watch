var milisec = 0;
var sec = 0;
var mins = 0;
var hours = 0;
var a;

function timer(){
    milisec++;
    if(milisec === 1000){
        sec++;
        milisec = 0;
        if(sec === 60) {
            mins++;
            sec = 0;
            if(mins === 60) {
                hours++;
                mins = 0;
                if(hours === 24){
                    hours = 0;
                }
            }
        }
    }
     document.getElementsByTagName("h2").innerHTML = hours + ":" + mins + ":" + sec + ":" + milisec++ ;
}

function start(){
    a = setInterval(timer, 1);
}

function stop(){
clearInterval(a);
}

function reset(){
    stop();
    milisec=sec=mins=hours=0;
document.getElementsByTagName("h2").innerHTML= "00" + ":" + "00" + ":" + "00";
}