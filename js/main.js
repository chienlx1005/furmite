const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $(".icon-menu");
const closeBtn = $(".icon-close");
const modal = $(".modal-content");

const header = $(".header");

const app = {
  showModal: function () {
    menu.onclick = () => {
      modal.classList.add("modal-content-active");
      // menu.style.display = "none";
    };
    closeBtn.onclick = () => {
      modal.classList.remove("modal-content-active");
      // menu.style.display = "flex";
    };
  },

  start: function () {
    this.showModal();
    this.modalHide();
    this.showMenu();
  },
};
app.start();
