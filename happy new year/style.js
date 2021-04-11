const daysEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondEl = document.getElementById("sec");
const newYears = "1 Jan 2022";
function count()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate-currentDate)/1000 ;
    console.log(totalSeconds);
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const second = Math.floor(totalSeconds)%60;
    daysEl.innerHTML = days;
    hourEl.innerHTML = formatx(hours);
    minEl.innerHTML = formatx(mins);
    secondEl.innerHTML = formatx(second);
}
count();
setInterval(count,1000);
function formatx(time)
{
    return time < 10 ? (`0${time}`) : time;
}

