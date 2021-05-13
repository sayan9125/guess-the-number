'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct no👍';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secreatNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = ' no number!';
    displayMessage('no number!');
  }

  // when the wins
  else if (guess === secreatNum) {
    // document.querySelector('.message').textContent = 'correct number👍';
    displayMessage('correct number👍');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secreatNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is wrong
  else if (guess !== secreatNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secreatNum ? 'too high!📈' : 'too low!😒';

      displayMessage(guess > secreatNum ? 'too high!📈' : 'too low!😒');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You loo the game!';
      displayMessage('You loo the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //guess is too high
  // else if (guess > secreatNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You loo the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // guess is too low
  // else if (guess < secreatNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low!😒';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You loo the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreatNum = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
