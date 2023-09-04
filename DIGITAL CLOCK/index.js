const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    /* change the hour and am p m  */
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h; /* timeinig is two digit display  */

  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  //ampmEl, (innerText = ampm);
  setTimeout(() => {
    /* second is change to second  */
    updateClock();
  }, 1000);
}

updateClock();
