const modal = document.querySelector('.modal-bg');

const callMeBtn = document.querySelector('#callMe');
const closeModalBtn = document.querySelector('.modal-close-btn');
callMeBtn.addEventListener("click", showHideModal)
// closeModalBtn.addEventListener("click", closeModal)

function showHideModal() {
  modal.classList.toggle('d-none')
}

