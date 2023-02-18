let editProfileButton = document.querySelector('.profile__redact');
let openPopup = document.querySelector('.popup');
let closePopup = document.querySelector ('.popup');
let formElement = document.querySelector('form[name="form1"]');
let nameInput = document.querySelector('input[name="form1__name"]');
let jobInput = document.querySelector('input[name="form1__status"]');
let nameElement = document.querySelector(".profile__name");
let jobElement = document.querySelector('.profile__status');
let closeProfileButton = document.querySelector('.popup__close');

editProfileButton.addEventListener('click', OpenForm1);

closeProfileButton.addEventListener('click', closeForm1);

function OpenForm1(){
    openPopup.classList.add('popup_opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
}

function closeForm1(){
    closePopup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closeForm1();
}

formElement.addEventListener('submit',handleFormSubmit);

//Карточки с фотграфиямия и их код 
const elementsList = document.querySelector('.elements')
const elementsTemplate = document.querySelector('.elements__template').content;
  
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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

  initialCards.forEach(function (element) {
    const cardElement = elementsTemplate.cloneNode(true);
  
    cardElement.querySelector('.elements__image').src = element.link;
    cardElement.querySelector('.elements__title').textContent = element.name
  
    elementsList.append(cardElement);
  })