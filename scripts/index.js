let editProfileButton = document.querySelector('.profile__redact');
let openPopup = document.querySelector('.popup_opened');
let closeElementPopup = document.querySelector ('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('form[name="form1"]');
let nameInput = document.querySelector('input[name="form1__name"]');
let jobInput = document.querySelector('input[name="form1__status"]');
let nameElement = document.querySelector(".profile__name");
let jobElement = document.querySelector('.profile__status');
let closeProfileButton = document.querySelector('.popup__close');
let closePopup = document.querySelector('.popup_opened');

editProfileButton.addEventListener('click', function(){
    openPopup.classList.remove('popup_opened');
});

function closePopupButton (){
    closePopup.classList.add ('popup_opened');
}

closeProfileButton.addEventListener('click', function(){
    closePopup.classList.add ('popup_opened');
    nameInput.value = nameElement.textContent;
    jobInput.value = jobElement.textContent;
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value;
    closePopupButton();
}

formElement.addEventListener('submit',handleFormSubmit);