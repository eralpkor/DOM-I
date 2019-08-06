// Way stretch challenge 
let secondsTens = document.getElementById('secondTens');
let secondsOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');


secondsTens.innerText = '0';
secondsOnes.innerText = '0';
msHundreds.innerText = '0';
msTens.innerText = '0';



(function timer() {
  let miliSeconds = 0;

  var count = setInterval(() => {
    miliSeconds += 10;
    if (miliSeconds === 10000) {
      timerReset(count);
    }
    updateTimer(miliSeconds)
  }, 10);

  function update(sec) {
    let number = +(sec) + 1;
    return number.toString();
  }

  function updateTimer(ms) {
    if (ms === 10000) {
      secondTens.innerText = "1";
      secondOnes.innerText = "0";
      msHundreds.innerText = "0";
      msTens.innerText = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.innerText = update(secondOnes.innerText);
      msHundreds.innerText = "0";
      msTens.innerText = "0";
    } else if (ms % 100 === 0) {
      msHundreds.innerText = update(msHundreds.innerText);
      msTens.innerText = "0";
    } else {
      msTens.innerText = update(msTens.innerText);
    }
  }

  function timerReset(interval) {
    clearInterval(interval);
    [...document.querySelectorAll('.digits')].forEach(function (el) {
      el.style.color = 'red';
    });
  }

})();


// EOF