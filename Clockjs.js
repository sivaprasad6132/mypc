function led(w,time){
    if (time <= 9){
        time = "0" + time;
    }
    if (w==1 && time>12){
        return (time-12);
    } 
    return time;
}

//this is comment
//this is my local macine comment

function getTime(){

    var time = new Date();
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    document.getElementById("p1").innerHTML = led(1,hr)+":"+led(0,min)+":"+led(0,sec);
    
    
}

var se=setInterval(getTime,1000);
