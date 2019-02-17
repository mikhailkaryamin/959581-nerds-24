var popup = document.querySelector('.modal-feedback');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});
