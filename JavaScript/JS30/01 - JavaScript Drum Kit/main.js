
function playSound({ keyCode }) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;  //stop the function
    audio.currentTime = 0;  //시작으로 되감기. play중에 다시 play하지 않는 것 방지.
    audio.play();
    key.classList.add('playing');
    setTimeout(() => {

    }, 0.07);
}

function removeTransition({propertyName}) {
    if (propertyName !== "transform") return;  //skip
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',  playSound);


/**
 * 1. key event
 * 2. 자연스러운 audio play
 * 3. transition end event
 */