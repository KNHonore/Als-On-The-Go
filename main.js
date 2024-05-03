//MENU MODAL//
const modal = document.querySelector(".menu");
const openModal = document.querySelector(".menu-btn");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

