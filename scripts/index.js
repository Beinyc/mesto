const poupEditProfile = document.querySelector('.popup_type_profile');
const poupAddCard = document.querySelector('.popup_type_card');
const poupZoomImage = document.querySelector('.popup_type_image');

const closeButton = document.querySelectorAll('.popup__close');
const editProfileButton = document.querySelector('.profile__redact');
const addMestoButton = document.querySelector('.profile__button');

const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector('.profile__status');

const elementsList = document.querySelector('.elements');

const formElementProfile = document.querySelector('form[name="form1"]');
const nameInput = document.querySelector('input[name="form1__name"]');
const jobInput = document.querySelector('input[name="form1__status"]');

const formElementCrad = document.querySelector('form[name="form2"]');
const nameInputDuble = document.querySelector('input[name="form2__name"]');
const jobInputDuble = document.querySelector('input[name="form2__status"]');

const popupImage = document.querySelector('.popup__image');
const popupImageDescription = document.querySelector('.popup__description');
  
const initialCards = [
    {
      name: 'Великолепный лес',
      link: 'https://images.unsplash.com/photo-1666096968009-f8b7bdd51ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Нью-Йорк, США',
      link: 'https://images.unsplash.com/photo-1675904626459-ae694b824ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  function openPopup(popup) {
    popup.classList.add("popup_opened");
  }

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
  }
  
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
    addCardElemts(nameInputDuble.value , jobInputDuble.value);
    closePopup(poupAddCard);
    evt.target.reset();
  }

  function createElementCrad(name, link) {
    const elementsTemplate = document.querySelector(".elements__template").content;
    const elementCard = elementsTemplate.querySelector(".elements__card").cloneNode(true);
  
    const elementImage = elementCard.querySelector(".elements__image");
    elementImage.alt = name; 
    elementImage.src = link || 'https://www.supermarket-santehniki.ru/upload/iblock/71f/qy7jgfaoee33m7clxxwnv3xfygdc2zaj/KEUCO-Stageline-32872970000-Tumba-pod-umyvalnik.jpg';
    elementImage.addEventListener("click", function (evt) {
      openPopup(poupZoomImage);
      popupImage.src = elementImage.src;
      popupImageDescription.textContent = elementTitle.textContent;
    });

    const elementTitle = elementCard.querySelector(".elements__title");
    elementTitle.textContent = name || 'Нет названия картинки';

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
  const elementCard = createElementCrad(name, link);
  elementsList.prepend(elementCard);
}

for (let i = 0; i < initialCards.length; i++) {
  addCardElemts(initialCards[i].name, initialCards[i].link);
}

  editProfileButton.addEventListener("click", openPopupProfile);

  addMestoButton.addEventListener("click", () => openPopup(poupAddCard));

  closeButton.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", () => closePopup(popup));
  });

  formElementProfile.addEventListener("submit", handleFormSubmitProfile);
  formElementCrad.addEventListener("submit", handleFormSubmitCard);