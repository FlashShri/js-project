const hr = document.getElementById("hours");
const mi = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const ap = document.getElementById("ampm");

function updateClock(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "" ;


    if( hours > 12) 
    {
        hours =  hours -12 ;
        ampm = "PM" ;
    }

    if( hours < 10){
        hours = "0" + hours;
    }else{
        hours = hours ;
    }

    if( minutes < 10){
        minutes = "0" + minutes;
    }else{
        minutes = minutes ;
    }

    if( seconds < 10){
        seconds = "0" + seconds;
    }else{
        seconds = seconds ;
    }


    hr.innerText = hours ;
    mi.innerText = minutes ;
    sec.innerText = seconds ;
    ap.innerText = ampm ;

   
}

var timer = setInterval(updateClock , 1000) ;