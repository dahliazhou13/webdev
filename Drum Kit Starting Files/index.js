buttons = document.querySelectorAll("button");
// let songs = ["crash.mp3","kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    sound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

function playAudio(name) {
  var audio = new Audio("sounds/" + name);
  audio.play();
}

document.addEventListener("keydown", function(event) {

  sound(event.key);
  buttonAnimation(event.key);
});

function sound(name) {
  switch (name) {
    case "w":
      playAudio("crash.mp3");
      break;
    case "a":
      playAudio("kick-bass.mp3");
      break;
    case "s":
      playAudio("snare.mp3");
      break;
    case "d":
      playAudio("tom-1.mp3");
      break;
    case "j":
      playAudio("tom-2.mp3");
      break;
    case "k":
      playAudio("tom-3.mp3");
      break;
    case "l":
      playAudio("tom-4.mp3");
      break;
    default:
      playAudio("tom-4.mp3");
  }
}

function buttonAnimation(name) {
  var activeButton = document.querySelector("." + name);
  activeButton.classList.toggle("pressed");
  setTimeout(function() {activeButton.classList.toggle("pressed");}, 150);
}
