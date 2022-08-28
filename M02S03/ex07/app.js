const button = document.getElementsByClassName('btn')[0];
const onClick = () => {
  alert('Butonul a fost apasat');
};

window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width <= 650) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
});

o;
button.addEventListener('click', onClick);
window.addEventListener('resize', onResize);
