'use strict';

var toggle = document.querySelector('.toggle');
var nav = document.querySelector('.main-nav');
var header = document.querySelector('.page-header');
var pageMain = document.querySelector('.page-main__wrapper');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('toggle--closed')) {
    toggle.classList.remove('toggle--closed');
    toggle.classList.add('toggle--opened');
    header.classList.remove('page-header--closed');
    nav.classList.remove('main-nav--closed');
    pageMain.classList.remove('page-main__wrapper--closed')
  } else {
    toggle.classList.add('toggle--closed');
    toggle.classList.remove('toggle--opened');
    nav.classList.add('main-nav--closed');
    header.classList.add('page-header--closed');
    pageMain.classList.add('page-main__wrapper--closed')
  }
});
