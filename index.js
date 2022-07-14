function playSound(key) {
  const SOUND_BINDINGS = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
  };
  let audio = new Audio(SOUND_BINDINGS[key]);
  audio.play();
}

for (let btn of document.querySelectorAll("button.drum")) {
  btn.addEventListener("click", function() {
    playSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  if ("asdwjkl".includes(currentKey)) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function() {
      activeButton.classList.toggle("pressed");
    }, 100);
  }
}
