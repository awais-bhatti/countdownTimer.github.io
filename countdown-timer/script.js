const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minEL = document.getElementById("min");
const secEL = document.getElementById("sec");

const NewYears = "1 Jan 2023";

function countdown() {
  const currentDate = new Date();
  const NewYearsDate = new Date(NewYears);

  const totalseconds = (NewYearsDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const sec = Math.floor(totalseconds) % 60;

  dayEL.innerHTML = days;
  hourEL.innerHTML = formatTime(hours);
  minEL.innerHTML = formatTime(mins);
  secEL.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
