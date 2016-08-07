(function(){

  'use strict';

  var vibrate200 = document.getElementById('js-vibrate-200'),
      vibrate200_200_200 = document.getElementById('js-vibrate-200-200-200'),
      vibrate3000 = document.getElementById('js-vibrate-3000'),
      vibrate0 = document.getElementById('js-vibrate-0');

  vibrate200.addEventListener('click', function() {
    navigator.vibrate(200);
  }, false);

  vibrate200_200_200.addEventListener('click', function() {
    navigator.vibrate([200, 200, 200]);
  }, false);

  vibrate3000.addEventListener('click', function() {
    navigator.vibrate(3000);
  }, false);

  vibrate0.addEventListener('click', function() {
    navigator.vibrate(0);
  }, false);

}());
