function gettime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if (hour < 10){
        hour = "0" + hour
    }
    
    if (minute < 10){
        minute = "0" + minute
    }

    if (second < 10){
        second = "0" + second
    }
    var time = hour + ":" + minute + ":" + second; 
    document.getElementById("main").innerText = time;
    document.getElementById("main").textContent = time;
    setTimeout(gettime, 1000);
}
gettime()
