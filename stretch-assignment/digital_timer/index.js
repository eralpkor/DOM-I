console.log('working');

let secondsTens = document.getElementById('secondTens');
let secondsOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('meTens');


secondsTens.innerText = '0';
secondsOnes.innerText = '0';

(function timer() {
  let miliSeconds = 0;
  var count = setInterval(() => {
    msHundreds.innerText = miliSeconds++;

    if (miliSeconds === 10) clearInterval(count)
  }, 100);
})();