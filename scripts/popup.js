let openPopup = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".popup__close");

let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__user-name");
let professionInput = document.querySelector(".popup__user-description");

function popupOpen() {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  popup.classList.add("popup_opened");
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

function savePopup (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  popupClose();
}

openPopup.addEventListener("click", popupOpen);
closePopup.addEventListener("click", popupClose);
formElement.addEventListener("submit", savePopup);
