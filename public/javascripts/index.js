const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalClose = document.getElementById("close");
const user = $(".header__icon-user");
const modalOne = document.getElementById("modal-one");
const iconSearch = document.getElementById("icon-search");
const modalSearch = document.getElementById("modal-two");
const modalContainerSearch = $(".modal__second-container");
const headerElement = $$(".header__navbar-item-link");

user.onclick = () => {
  modalOne.classList.add("open");
};

modalClose.onclick = () => {
  modalOne.classList.remove("open");
};

iconSearch.onclick = () => {
  modalSearch.classList.add("open");
};

modalSearch.onclick = () => {
  modalSearch.classList.remove("open");
};

modalContainerSearch.onclick = (e) => {
  e.stopPropagation();
};
