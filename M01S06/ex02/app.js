const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';
let browser = '';
const welcomeMessage = document.createElement('h1');

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosing Chrome';
  browser = 'Chrome';
} else if (userAgentString.includes('Firefox')) {
  message = 'Navighezi folosind Firefox';
  browser = 'Firefox';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
document.body.append(welcomeMessage);

setTimeout(() => {
  const user = prompt(`${browser} vrea sa stie cum te cheama.`);
  welcomeMessage.innerText = `Salut ${user}`;

  setTimeout(() => {
    paragraphElement.remove();
  }, 3000);
}, 3000);
