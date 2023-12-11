const modal = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const modalCloseBtn = document.querySelector(".modal__close");

const showModalBtn = document.querySelector("#i-show-modal");

showModalBtn.onclick = (e) => {
      e.preventDefault();
      modalWindow.classList.toggle("modal__window--visible");
      modal.classList.toggle("modal--visible");
}
modalCloseBtn.onclick = (e) => {
      e.preventDefault();
      modalWindow.classList.toggle("modal__window--visible");
      modal.classList.toggle("modal--visible");
}


const form = document.querySelector("form");
// form.submit((e)=> {
//       e.preventDefault();
// })