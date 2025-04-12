let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let month = document.getElementById("monthly");
let currenttime = document.getElementsByClassName("current-time");
let prevtime = document.getElementsByClassName("prev-time");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
   
    daily.addEventListener("click", (e) => {
      for (i = 0; i < data.length; i++) {
        
        currenttime[i].innerHTML = data[i].timeframes.daily.current + "hour";
        prevtime[i].innerHTML = data[i].timeframes.daily.previous + "hour";
      }
    });
    month.addEventListener("click", (e) => {
      for (i = 0; i < data.length; i++) {
        currenttime[i].innerHTML = data[i].timeframes.monthly.current + "hour";
        prevtime[i].innerHTML = data[i].timeframes.monthly.previous + "hour";
      }
    });
    weekly.addEventListener("click", (e) => {
      for (i = 0; i < data.length; i++) {
        currenttime[i].innerHTML = data[i].timeframes.weekly.current + "hour";
        prevtime[i].innerHTML = data[i].timeframes.weekly.previous + "hour";
      }
    });
  });

console.log(currenttime);