const openModal = document.getElementById('openModalBtn');
const closeModal = document.getElementById('closeModalBtn');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
  //   modal.classList.remove('modal');
});
