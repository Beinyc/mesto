let editProfileButton = document.querySelector('.profile__button-edit');
let openPopup = document.querySelector('.popup__opened');
let closeElementPopup = document.querySelector ('.popup__close');
let popup = document.querySelector ('.popup');
let formElement = document.querySelector ('.popup__container');
let nameInput = document.querySelector ('.popup__name');
let jobInput = document.querySelector ('.popup__status');
let nameElement = document.querySelector ('.profile__name');
let jobElement = document.querySelector ('.profile__status');
let closeProfileButton = document.querySelector('.popup__close');
let closePopup = document.querySelector('.popup__opened');

editProfileButton.addEventListener('click', function(){
    openPopup.classList.remove('popup__opened');
});

closeProfileButton.addEventListener('click', function(){
    closePopup.classList.add ('popup__opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closePopup.classList.add ('popup__opened');
}

formElement.addEventListener('submit',handleFormSubmit);