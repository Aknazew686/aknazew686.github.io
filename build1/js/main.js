'use strict';

var navMain = document.querySelector('.main-nav');
var toggle = document.querySelector('.toggle');
var pageHeaderWrapper = document.querySelector('.page-header__wrapper');
var blueLogo = document.querySelector('.page-header__logo-image-blue--mobile');
var whiteLogo = document.querySelector('.page-header__logo-image--mobile');
var body = document.querySelector('body');

toggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('toggle--closed')) {
    toggle.classList.remove('toggle--closed');
    toggle.classList.add('toggle--opened');
  } else {
    toggle.classList.add('toggle--closed');
    toggle.classList.remove('toggle--opened');
  }
});

toggle.addEventListener('click', function () {
  if (pageHeaderWrapper.classList.contains('page-header__wrapper--closed')) {
    pageHeaderWrapper.classList.remove('page-header__wrapper--closed');
    pageHeaderWrapper.classList.add('page-header__wrapper--opened');
  } else {
    pageHeaderWrapper.classList.add('page-header__wrapper--closed');
    pageHeaderWrapper.classList.remove('page-header__wrapper--opened');
  }
});

toggle.addEventListener('click', function () {
  if (blueLogo.classList.contains('page-header__logo-image-blue--mobile--hidden')) {
    blueLogo.classList.remove('page-header__logo-image-blue--mobile--hidden');
    blueLogo.classList.add('page-header__logo-image-blue--mobile--block');
  } else {
    blueLogo.classList.add('page-header__logo-image-blue--mobile--hidden');
    blueLogo.classList.remove('page-header__logo-image-blue--mobile--block');
  }
});

toggle.addEventListener('click', function () {
  if (whiteLogo.classList.contains('page-header__logo-image-blue--mobile--block')) {
    whiteLogo.classList.remove('page-header__logo-image-blue--mobile--block');
    whiteLogo.classList.add('page-header__logo-image-blue--mobile--hidden');
  } else {
    whiteLogo.classList.add('page-header__logo-image-blue--mobile--hidden');
    whiteLogo.classList.remove('page-header__logo-image-blue--mobile--block');
  }
});

toggle.addEventListener('click', function () {
  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
  } else {
    body.classList.add('hidden');
  }
});
