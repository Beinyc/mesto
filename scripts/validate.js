function showInputError(formElement, inputElement, errorMessage, parameters){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(parameters.inputErrorClass);
  errorElement.classList.add(parameters.errorClass);
  errorElement.textContent = errorMessage;
};

function hideInputError(formElement, inputElement, parameters){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(parameters.inputErrorClass);
  errorElement.classList.remove(parameters.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, parameters) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, parameters);
  } else {
    hideInputError(formElement, inputElement, parameters);
  }
};

function setEventListeners (formElement, parameters) {
  const formInput = Array.from(formElement.querySelectorAll(parameters.inputSelector));
  const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
  toggleButtonStatus(formInput, buttonElement, parameters);

  formElement.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButtonStatus(formInput, buttonElement, parameters);
    }, 0);
  });

  formInput.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, parameters);
      toggleButtonStatus(formInput, buttonElement, parameters);
    });
  });
};

function enableValidation(parameters){
  const formList = Array.from(document.querySelectorAll(parameters.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, parameters);
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
});

function hasInvalidInput(formInput) {
  return formInput.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonStatus(formInput, buttonElement, parameters) {
  if (hasInvalidInput(formInput)) {
    buttonElement.classList.add(parameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(parameters.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}