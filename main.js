import './style.scss';

let counter = 0;
function updateCounter(updaterFn) {
  counter = updaterFn(counter);
  document.getElementById('counter').innerHTML = counter;
}

document
  .getElementById('minus')
  .addEventListener('click', function() {
    updateCounter(counter => counter - 1);
  });

document
  .getElementById('plus')
  .addEventListener('click', function () {
    updateCounter(counter => counter + 1);
  });
