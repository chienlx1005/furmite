const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $(".icon-menu");
const closeBtn = $(".icon-close");
const modal = $(".modal-content");
const footerMenu = $(".head-control-footer");
const footerCopyRight = $(".footer-copyright");
const header = $(".header");

const app = {
  showModal: function () {
    menu.onclick = () => {
      modal.classList.add("modal-content-active");
      menu.style.display = "none";
    };
    closeBtn.onclick = () => {
      modal.classList.remove("modal-content-active");
      menu.style.display = "flex";
    };
  },
  modalHide: function () {
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1000) {
        //   console.log(">>check hide");
        $(".modal-content.modal-content-active").classList.remove(
          "modal-content-active"
        );
        menu.style.display = "flex";
      }
      if (this.window.scroll > 60) {
        header.classList.add("header-active");
      }
      if (this.window.screenTop === 0) {
        $(".header.header-active").classList.remove("header-active");
      }
      this.window.innerWidth <= 990
        ? ((footerMenu.style.display = "flex"),
          footerCopyRight.classList.add("footer-copyright-active"))
        : ((footerMenu.style.display = "none"),
          footerCopyRight.classList.remove("footer-copyright-active"));
    });
  },

  start: function () {
    this.showModal();
    this.modalHide();
  },
};
app.start();
