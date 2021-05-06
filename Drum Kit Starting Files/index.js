buttons = document.querySelectorAll("button");
// let songs = ["crash.mp3","kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];
for(var i = 0; i < buttons.length; i ++){
  buttons[i].addEventListener("click", function(){
    this.style.color = "white";

  });
}

function playAudio(name){
  var audio = new Audio("sounds/"+name);
  audio.play();
}

function w(){

}
