const showInputError = (formElement, inputElement, errorMessage, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(setting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(setting.errorClass);
};

const hideInputError = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(setting.inputErrorClass);
  errorElement.classList.remove(setting.errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, setting) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, setting);
  } else {
    hideInputError(formElement, inputElement, setting);
  }
};

const setEventListeners = (formElement, setting) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
  const buttonElement = formElement.querySelector(setting.submitButtonSelector);
  toggleButtonStatus(inputList, buttonElement, setting);

  formElement.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButtonStatus(inputList, buttonElement, setting);
    }, 0);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      isValid(formElement, inputElement, setting);
      toggleButtonStatus(inputList, buttonElement, setting);
    });
  });
};

const enableValidation = (setting) => {
  const formList = Array.from(document.querySelectorAll(setting.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, setting);
  });
};

enableValidation({
  formSelector: "#form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
});

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonStatus(inputList, buttonElement, setting) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(setting.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(setting.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}
