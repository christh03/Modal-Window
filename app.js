'use strict';

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.display-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const claseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btncloseModal.addEventListener('click', claseModal);

overlay.addEventListener('click', claseModal);
