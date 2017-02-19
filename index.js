'use strict';

function checkES6Supported() {
  try {
    eval('const foo = (x) => x + 1'); }
  catch (e) {
    return false;
  }

  return true;
}

function detectDNT() {
  const dnt = navigator.doNotTrack;
  return dnt === '1';
}

function loadImages() {
  document.getElementsByTagName('UL')[0].className = 'links-with-images';
  for (let el of document.getElementsByClassName('img-wrapper')) {
    el.className += ' allocate-image';
  }
  const images = [
    'https://ssl.gstatic.com/ui/v1/icons/mail/favicon.ico',
    'https://linkedin.com/favicon.ico',
    'https://github.com/favicon.ico',
    'https://twitter.com/favicon.ico',
    'http://blog.busrod.net/favicon.ico',
    'https://keybase.io/favicon.ico',
    'https://github.com/favicon.ico',
  ];
  for (let el of document.getElementsByClassName('img-wrapper allocate-image')) {
    const img = document.createElement('img');
    img.setAttribute('src', images.shift());
    el.appendChild(img);
  }
}

window.onload = function() {
  if (!checkES6Supported()) {
    return console.error('Not supported browser, sorry');
  }

  const isDNTEnabled = detectDNT();
  if (!isDNTEnabled) {
    loadImages();
  }
};

