// generates a random number between min and max

$(function() {
  function getRandNum() {
    document.getElementById('random-number').innerHTML = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100
  }

  document.getElementById('button').addEventListener('click', getRandNum); // gets random number on button click
});
