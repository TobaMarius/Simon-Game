var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;

$(".color-btn").on("click", function (e) {
  if (level !== 0) {
    userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer();
    playSound(userChosenColour);
    animatePress(userChosenColour);
    setTimeout(function () {
      animatePress(userChosenColour);
    }, 100);
  }
});

$(document).on("keypress", function (e) {
  if ((e.key === "a")) {
    if (level === 0) {
      nextSequence();
      changeTitle(level);
      level++;
    }
  }
});

function checkAnswer() {
  let iterator = userClickedPattern.length - 1;
  if (userClickedPattern[iterator] === gamePattern[iterator]) {
    if (iterator === gamePattern.length - 1) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      userClickedPattern = [];
      leve++;
      changeTitle(level);
    } else {

      //level = 0;
    }
  } else {
    $("h1").text("Game Over press A to restart the game.");
    $("body").toggleClass("game-over");
    level = 0;
  }
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var randomChosenColour = buttonColors[randomNumber];

  animateSquare(randomChosenColour);
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
}

function animatePress(currentColour) {
  $("." + currentColour).toggleClass("pressed");
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animateSquare(color) {
  $("." + color)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

function changeTitle(level) {
  $("h1").text("Level " + level);
}
