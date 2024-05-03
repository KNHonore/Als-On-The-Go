//MENU MODAL//
const modal = document.querySelector(".menu");
const openModal = document.querySelector(".menu-btn");
const closeModal = document.querySelector(".close-btn");
const dialogElement = document.querySelector("dialog");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

dialogElement.addEventListener("click", (event) => {
  if (event.target == dialogElement) {
    modal.close();
  }
});
