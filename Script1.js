// JavaScript source code
function bigImg(img) {
    img.style.width = "250px"
}
function normalImg(img) {
    img.style.width = "200px"
}

function timerRefresh() {

    const dateEvent = "01/11/2023" /*MM/DD/YYYY */

    const daylbl = document.getElementById("days");
    const hourlbl = document.getElementById("hours");
    const minutelbl = document.getElementById("minutes");
    const secondlbl = document.getElementById("seconds");

    const eventDay = new Date(dateEvent);
    const currentDay = new Date();

    const secondsTotal = (eventDay - currentDay) / 1000;

    const days = Math.floor(secondsTotal / 60 / 60 / 24);
    const hours = Math.floor(secondsTotal / 60 / 60) % 24;
    const minutes = Math.floor(secondsTotal / 60) % 60;
    const seconds = Math.floor(secondsTotal) % 60;

    daylbl.innerText = formatCounter(days) + "D";
    hourlbl.innerText = formatCounter(hours) + "H";
    minutelbl.innerText = formatCounter(minutes) + "M";
    secondlbl.innerText = formatCounter(seconds) + "S";

}

function formatCounter(time) {
    return time < 10 ? `0${time}` : time;
}

timerRefresh();
setInterval(timerRefresh, 1000);
