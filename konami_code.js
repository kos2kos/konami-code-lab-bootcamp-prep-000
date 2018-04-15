const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0
const input = document.querySelector('keydown')
function onKeyDownHandler(e){
  const key = parseInt(input.detail || input.which)
   if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

  }

}
