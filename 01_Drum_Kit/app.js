const keys = document.querySelectorAll('.key');

function playSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();

  key.classList.add('playing'); // add playing class
}

function removeTransition(ev) {
  if (ev.propertyName !== 'transform') return; // skip it if it's is not a transform

  this.classList.remove('playing');
}

function clickPlaySound(ev) {
  const key = ev.path[1];
  const audio = document.querySelector(
    `audio[data-key="${ev.path[1].dataset.key}"]`
  );

  key.classList.add('playing'); // add playing class

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();
}


keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
// transition end event
keys.forEach((key) => key.addEventListener('click', clickPlaySound));
window.addEventListener('keydown', playSound);
