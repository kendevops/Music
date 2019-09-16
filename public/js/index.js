$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
});

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }