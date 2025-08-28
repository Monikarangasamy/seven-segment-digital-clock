function changeTime() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("hour-1").setAttribute("class","num-"+hour[0]);
    document.getElementById("hour-2").setAttribute("class","num-"+hour[1]);
    document.getElementById("minute-1").setAttribute("class","num-"+minute[0]);
    document.getElementById("minute-2").setAttribute("class","num-"+minute[1]);
    document.getElementById("second-1").setAttribute("class","num-"+second[0]);
    document.getElementById("second-2").setAttribute("class","num-"+second[1]);

    setTimeout(changeTime, 1000);
}

changeTime();
