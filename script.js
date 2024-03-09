'use strict';

const openModals = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//for each button that is pressed it will display the overalay.
openModals.forEach(openModals =>
  openModals.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);
//when a x button  and the overlay is pressed the modal will be gone
closeModal.addEventListener('click', () => {
  removeModel();
});
overlay.addEventListener('click', () => {
  removeModel();
});
function removeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
