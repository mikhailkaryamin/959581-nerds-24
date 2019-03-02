var popup = document.querySelector('.modal-feedback');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');
var form = popup.querySelector("form");
var your_name = popup.querySelector("[name=your-name]");
var mail = popup.querySelector("[name=e-mail]");
var isStorageSupport = true;
var storage = "";
var text_letter = popup.querySelector("[name=text-letter]")

try {
  storage = localStorage.getItem("your_name");
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
  if (storage) {
    your_name.value = storage;
    mail.value = storage;
    text_letter.focus();
  } else {
    your_name.focus();
  }
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!your_name.value || !mail.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport)
      localStorage.setItem("your_name", your_name.value);
    localStorage.setItem("mail", mail.value);
  }
}
);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.remove("modal-error");
    }
  }
});