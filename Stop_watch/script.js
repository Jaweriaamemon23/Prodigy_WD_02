let interval;
let isRunning = false;
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let ampmElement = document.getElementById('ampm');
let hhElement = document.getElementById('hh');
let mmElement = document.getElementById('mm');
let ssElement = document.getElementById('ss');

function updateClock() {
    let currentDate = new Date();
    let h = currentDate.getHours();
    let m = currentDate.getMinutes();
    let s = currentDate.getSeconds();
    let am = h >= 12 ? "pm" : "am";

    if (h > 12) {
        h = h - 12; 
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hoursElement.innerHTML = h;
    minutesElement.innerHTML = m;
    secondsElement.innerHTML = s;
    ampmElement.innerHTML = am;

    hhElement.style.strokeDashoffset = 440 - (440 * h) / 12;
    mmElement.style.strokeDashoffset = 440 - (440 * m) / 60;
    ssElement.style.strokeDashoffset = 440 - (440 * s) / 60;
}

document.getElementById('startBtn').addEventListener('click', function () {
    if (!isRunning) {
        interval = setInterval(updateClock, 1000);
        isRunning = true;
    }
});

document.getElementById('stopBtn').addEventListener('click', function () {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
});


let lapList = document.getElementById('laps');
let displayContent = document.getElementById('displayContent');
let displayBtn = document.getElementById('displayBtn');

document.getElementById('lapBtn').addEventListener('click', function () {
    let lapTime = document.getElementById('hours').innerText + ':' +
                  document.getElementById('minutes').innerText + ':' +
                  document.getElementById('seconds').innerText;

    let lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
});

displayBtn.addEventListener('click', function () {
    displayContent.classList.toggle('hidden');
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(interval);
    isRunning = false;
    hoursElement.innerHTML = '00';
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    ampmElement.innerHTML = 'am';
    hhElement.style.strokeDashoffset = 440;
    mmElement.style.strokeDashoffset = 440;
    ssElement.style.strokeDashoffset = 440;
});

// Initial clock update
updateClock();
