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
      name: 'Таунсвилл',
      link: 'https://images.unsplash.com/photo-1636155986820-f3e538e9bf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
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

  initialCards.forEach(function (element) {
    const cardElement = elementsTemplate.cloneNode(true);
  
    cardElement.querySelector('.elements__image').src = element.link;
    cardElement.querySelector('.elements__title').textContent = element.name;
    cardElement.querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like_active');
    })
    
  
    elementsList.append(cardElement);
  })

  //попап для добавления новой фотографии

let addMestoButton = document.querySelector('.profile__button');
let openPopupDuble = document.querySelector('.popupduble');
let closePopupDuble = document.querySelector ('.popupduble');
let formElementDuble = document.querySelector('form[name="form2"]');
let nameInputDuble = document.querySelector('input[name="form2__name"]');
let jobInputDuble = document.querySelector('input[name="form2__status"]');
let closeImageButton = document.querySelector('.popupduble__close');

addMestoButton.addEventListener('click', OpenForm2);

closeImageButton.addEventListener('click', closeForm2);

function OpenForm2(){
  openPopupDuble.classList.add('popupduble_opened');
}

function closeForm2(){
  closePopupDuble.classList.remove('popupduble_opened');
}

formElementDuble.addEventListener('submit',handleFormTwo);

function handleFormTwo (evt) {
  evt.preventDefault();
  const cardElement = elementsTemplate.cloneNode(true);
  cardElement.querySelector('.elements__image').src = jobInputDuble.value;
  cardElement.querySelector('.elements__title').textContent = nameInputDuble.value;
  

  elementsList.prepend(cardElement);

  closeForm2 ()
}
