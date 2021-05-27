let buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // $(randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  animatePress(randomChosenColour);
  level ++;
  $("h1").text("Level " + level);
}

$(".btn").click(function(e){
  userClickedPattern.push(e.target.id);
  playSound(e.target.id);
  animatePress(e.target.id);
  checkAnser(userClickedPattern.length-1);
});

$(document).keypress(function(){
  nextSequence();
});
function playSound(name){
  var audio = new Audio("sounds/" + name+".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).fadeOut(100).fadeIn(100);
  $("#"+currentColor).addClass("pressed");
  setTimeout(function() {
    $("#"+currentColor).removeClass("pressed");
  }, 100);
}

function checkAnser(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("success");
    if(userClickedPattern.length == level){
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
  }

}
