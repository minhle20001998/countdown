const countdown = document.querySelector(".countdown");

var deadline = new Date(2020, 8, 24, 12, 00, 00);
var timeReset = 1000;
const interval = setInterval(() => {
  const current = new Date();
  const diff = (deadline - current) / 1000;

  var days = Math.floor(diff / (60 * 60 * 24)) + "";

  var hours = (Math.floor(diff / (60 * 60)) % 24) + "";

  var minutes = (Math.floor(diff / 60) % 60) + "";

  var seconds = Math.floor(diff % 60) + "";

  countdown.innerHTML =
    '<div data-content="Days">' +
    (days.length == 1 ? "0" + days : days) +
    "</div>";
  countdown.innerHTML +=
    '<div data-content="Hours">' +
    (hours.length == 1 ? "0" + hours : hours) +
    "</div>";
  countdown.innerHTML +=
    '<div data-content="Minutes">' +
    (minutes.length == 1 ? "0" + minutes : minutes) +
    "</div>";
  countdown.innerHTML +=
    '<div data-content="Seconds">' +
    (seconds.length == 1 ? "0" + seconds : seconds) +
    "</div>";

  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h2>My birthday !!!</h2>";
  }

  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);
    var divs = document.querySelectorAll(".countdown div");
    divs.forEach((div) => {
      div.innerHTML = "00";
    });
  });

  document.querySelector(".reload").addEventListener("click", () => {
    location.reload();
  });
}, timeReset);
