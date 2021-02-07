function gettime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

   

    var time = hour + ":" + minute + ":" + second; 
    document.getElementById("main").innerText = time;
    document.getElementById("main").textContent = time;
    setTimeout(gettime, 1000);
}
gettime()
