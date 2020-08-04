'use strict';

  var button = document.querySelector('.adress-block-button');
  var popup = document.querySelector('.popup');
  var closePopup = document.querySelector('.close');

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('popup-show')
  });

  closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup-show')
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  });
