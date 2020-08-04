'use strict';

  var button = document.querySelector('.adress-block-button');
  var popup = document.querySelector('.popup');
  var closePopup = document.querySelector('.close');
  var form = document.querySelector('form')
  var firstName = document.querySelector("[name=first-name]");


  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add('popup-show')
    firstName.focus();
  });

  closePopup.addEventListener("click", function () {
    popup.classList.remove('popup-show')
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  });

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popup.classList.remove('popup-show')
    form.reset();
  });
