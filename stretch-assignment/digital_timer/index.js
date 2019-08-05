console.log('working');

let secondsTens = document.getElementById('secondTens');
let secondsOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');


secondsTens.innerText = '0';
secondsOnes.innerText = '0';
msHundreds.innerText = '0';

(function timer() {
  let miliSeconds = 0;
  var count = setInterval(() => {
    msTens.innerText = miliSeconds++;
    if (miliSeconds === 10) {
      msHundreds.innerText = 1;
      msTens.innerText = 0;
    } 
    if (miliSeconds === 10) clearInterval(count)
    // msHundreds.innerText = 1;
  }, 100);

  
})();