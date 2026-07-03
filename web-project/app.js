const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalClose = document.querySelector("[data-modal-close]");

if (modal && modalImage && modalTitle && modalClose) {
  const buttons = Array.from(document.querySelectorAll("[data-gallery-image]"));

  const closeModal = () => {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openModal = (button) => {
    modalImage.src = button.dataset.galleryImage;
    modalImage.alt = button.dataset.galleryTitle || "Visualization";
    modalTitle.textContent = button.dataset.galleryTitle || "Visualization";
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => openModal(button));
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}
