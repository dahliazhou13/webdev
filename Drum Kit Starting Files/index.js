buttons = document.querySelectorAll("button");
// let songs = ["crash.mp3","kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {

    switch (this.innerHTML) {
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

  });
}

function playAudio(name) {
  var audio = new Audio("sounds/" + name);
  audio.play();
}
