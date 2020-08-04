'use strict';

var lastName = document.querySelector("[name=last-name]");
var firstName = document.querySelector("[name=first-name]");
var phone = document.querySelector("[name=phone]");
var email = document.querySelector("[name=email]");
var form = document.querySelector("form");
var popupSend = document.querySelector('.popup--send');
var popupButtons = document.querySelectorAll('.popup__button')

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  popupSend.classList.add('popup-show');
  form.reset();
});

for (let popupButton of popupButtons) {
  popupButton.addEventListener('click', function () {
    popupSend.classList.remove('popup-show')
    })
  }
