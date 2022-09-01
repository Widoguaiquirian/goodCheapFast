'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

//CUANDO TIENES UN CHECKBOX Y QUIERES A;ADIR UN EVENTO, ES CHANGE NO CLICK
toggles.forEach(function (toggle) {
  toggle.addEventListener('change', function (e) {
    doTheTrick(e.target);
  });
});

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
