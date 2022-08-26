let alarmTime = null;
let alarmTimeout = null;
const audio = new Audio('https://elements.envato.com/alarm-NBUK26X');
function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    session = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds + ' ' + session;
}

const paragraph = document.getElementById('watch');
paragraph.innerText = paragraph;
document.body.append(paragraph);

setInterval(function () {
  paragraph.innerText = getTime();
}, 1000);

function setAlarmTime(value) {
  alarmTime = value;
  console.log(alarmTime);
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert('Alarma este setata!');
    }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Alarma a fost dezactivata!');
  }
}
