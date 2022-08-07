function watch() {
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
  paragraph.innerText = watch();
}, 1000);
