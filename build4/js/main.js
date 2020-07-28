'use strict';

    var toggle = document.querySelector('.toggle');
    var logo = document.querySelector('.page-header__logo');
    var nav = document.querySelector('.main-nav');
    var header = document.querySelector('.page-header__wrapper');
    var body = document.querySelector('body')
    var links = document.querySelectorAll('.header-list__item')
    var anchors = document.querySelectorAll('a[href*="#"]');

    toggle.addEventListener('click', function () {
      if (toggle.classList.contains('toggle--closed')) {
        toggle.classList.remove('toggle--closed');
        toggle.classList.add('toggle--opened');
        logo.classList.remove('page-header__logo--closed');
        logo.classList.add('page-header__logo--opened');
        nav.classList.remove('main-nav--closed');
        header.classList.add('page-header__wrapper--opened');
        body.classList.add('hidden');
      } else {
        toggle.classList.add('toggle--closed');
        toggle.classList.remove('toggle--opened');
        logo.classList.add('page-header__logo--closed');
        logo.classList.remove('page-header__logo--opened');
        nav.classList.add('main-nav--closed');
        header.classList.remove('page-header__wrapper--opened');
        body.classList.remove('hidden');
      }

      for (let link of links) {
          link.addEventListener('click', function (event) {
          toggle.classList.add('toggle--closed');
          toggle.classList.remove('toggle--opened');
          logo.classList.add('page-header__logo--closed');
          logo.classList.remove('page-header__logo--opened');
          nav.classList.add('main-nav--closed');
          header.classList.remove('page-header__wrapper--opened');
          body.classList.remove('hidden');
        })
      }
    });

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        var blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      })
    }
