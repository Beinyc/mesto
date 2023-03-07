const poupEditProfile = document.querySelector('.popup_type_profile');
const poupAddCard = document.querySelector('.popup_type_card');
const poupZoomImage = document.querySelector('.popup_type_image');

const closingButtons = document.querySelectorAll('.popup__close');
const editProfileButton = document.querySelector('.profile__redact');
const addMestoButton = document.querySelector('.profile__button');

const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector('.profile__status');

const elementsList = document.querySelector('.elements');
const elementsTemplate = document.querySelector(".elements__template").content;

const formElementProfile = document.forms["form1"];
const nameInput = document.querySelector('input[name="form1__name"]');
const jobInput = document.querySelector('input[name="form1__status"]');

const formElementCrad = document.forms["form2"];
const nameInputDuble = document.querySelector('input[name="form2__name"]');
const jobInputDuble = document.querySelector('input[name="form2__status"]');

const popupImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');
const popupButton = document.querySelector('.popup__button')

const allPopups = document.querySelectorAll('.popup');

const initialCards = [
  {
    name: 'Огненный водопад',
    link: 'https://images.unsplash.com/photo-1676912314401-6ffbc0dfda87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Закат на Саутбурн-Бич',
    link: 'https://images.unsplash.com/photo-1676210385742-323a1644ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
  },
  {
    name: 'Полумесяц',
    link: 'https://images.unsplash.com/photo-1675576185701-576b56aa57fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Туннель из дерева',
    link: 'https://images.unsplash.com/photo-1675407743943-ec967a92558f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Кот и солнечные ванны',
    link: 'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  }
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscPopup);

  resetFormErrors(formElementProfile, configValideite)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscPopup);
}

const closeEscPopup = (evt) => {
  if (evt.key === "Escape") {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

allPopups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

editProfileButton.addEventListener("click", openPopupProfile);
addMestoButton.addEventListener("click", () => openPopup(poupAddCard));

function openPopupProfile() {
  openPopup(poupEditProfile);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  closePopup(poupEditProfile);
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  addCardElemts(nameInputDuble.value, jobInputDuble.value);
  closePopup(poupAddCard);
  evt.target.reset();
}

formElementProfile.addEventListener("submit", handleFormSubmitProfile);
formElementCrad.addEventListener("submit", handleFormSubmitCard);

function createElement(name, link) {
  const elementCard = elementsTemplate.querySelector(".elements__card").cloneNode(true);

  const elementImage = elementCard.querySelector(".elements__image");
  elementImage.alt = name;
  elementImage.src = link;
  elementImage.addEventListener("click", function (evt) {
    openPopup(poupZoomImage);
    popupImage.alt = elementImage.alt;
    popupImage.src = elementImage.src;
    popupImageDescription.textContent = elementTitle.textContent;
  });

  const elementTitle = elementCard.querySelector(".elements__title");
  elementTitle.textContent = name;

  const elementLike = elementCard.querySelector(".elements__like");
  elementLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like_active");
  });

  const elementDelete = elementCard.querySelector(".elements__delete");
  elementDelete.addEventListener("click", function () {
    elementCard.remove();
  });

  return elementCard;
}

function addCardElemts(name, link) {
  const elementCard = createElement(name, link);
  elementsList.prepend(elementCard);
}

for (let i = 0; i < initialCards.length; i++) {
  addCardElemts(initialCards[i].name, initialCards[i].link);
}