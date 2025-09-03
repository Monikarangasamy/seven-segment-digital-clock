
function formatDate(d) {
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}


function changeTime() {
    let now = new Date();
    let hour = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');
    let ampm = now.getHours() >= 12 ? "PM" : "AM";


    document.getElementById("date").innerText = formatDate(now);
    document.getElementById("hour-1").setAttribute("class","num-"+hour[0]);
    document.getElementById("hour-2").setAttribute("class","num-"+hour[1]);
    document.getElementById("minute-1").setAttribute("class","num-"+minute[0]);
    document.getElementById("minute-2").setAttribute("class","num-"+minute[1]);
    document.getElementById("second-1").setAttribute("class","num-"+second[0]);
    document.getElementById("second-2").setAttribute("class","num-"+second[1]);


    document.getElementById("ampm").innerText = ampm;

    setTimeout(changeTime, 1000);
}
changeTime();

