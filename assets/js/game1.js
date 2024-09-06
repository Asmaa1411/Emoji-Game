const emojis = ["😂", "😂", "😆", "😆", "😈", "😈", "😉", "😉", "😊", "😊", "😋", "😋", "😍", "😍", "😎", "😎"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

var timeLeft = 60;
var timerInterval;
var audio = new Audio('../assets/audio/musicTimer.mp3');


function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;

    if (timeLeft <= 10) {
      document.getElementById('timer').style.color = 'red';
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 'Time\'s up!';
        gameOver();
      } else {
        if (timeLeft === 10) {
          audio.play();
        }
      }
    }
  }, 1000);
}

function gameOver() {
  // Disable further clicks on the cards
  let cards = document.querySelectorAll('.item');
  cards.forEach(card => {
    card.onclick = null;
  });

  // Display a game over message
  alert('Game Over! Your time is up.');
}

//  window.onload = () => {
//   gameAudio.play();
//  };

document.addEventListener('DOMContentLoaded', function() {
 // Code to be executed when the DOM is fully loaded
var gameAudio = new Audio('../assets/audio/musicGame.mp3');
gameAudio.play();
// You can place any code here that you want to run after the DOM is loaded.
 });





startTimer();

for (var i=0; i<emojis.length; i++){
  let box = document.createElement('div')
  box.className ='item';
  box.innerHTML = shuf_emojis[i]

  box.onclick = function(){
    this.classList.add('boxOpen')
    setTimeout(function(){
      if(document.querySelectorAll('.boxOpen').length > 1){
        if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
          document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

          if(document.querySelectorAll('.boxMatch').length == emojis.length){
            alert('win')
          }
        } else {
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen') 
        }
      }
    },800)
  }
  document.querySelector('.game').appendChild(box);
}
