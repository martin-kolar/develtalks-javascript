import $ from 'jquery';

export default function() {
  let jElement1 = $('#element1');
  let jElement2 = $('.element');
  let jElement3 = $('#element3');
  let jElement5 = $('.element5');

  let element1 = document.querySelector('#element1');
  let element2 = document.querySelectorAll('.element');
  let element3 = document.getElementById('element3');
  let element4 = document.getElementsByClassName('element');
  let element5 = document.querySelector('#element5');
  let element6 = document.querySelectorAll('.egement');

  // pridani classy
  jElement1.addClass('test');
  element1.classList.add('test');

  // ma element classu
  if (jElement1.hasClass('test')) {
    console.log('jj jQuery');
  }

  if (element1.classList.contains('test')) {
    console.log('jj vanilla');
  }

  // posluchaci
  jElement2.click(function(event) {
    console.log('jQuery: click on element');
  });

  [...element2].forEach((element) => {
    element.addEventListener('click', function(event) {
      console.log('vanilla: click on element');
    });
  });

  // posluchac na neexistujicim elementu
  jElement5.click(function(event) {
    console.log('jQuery: click on element');
  });

  if (element5) {
    element5.addEventListener('click', function(event) {
      console.log('vanilla: click on element');
    });
  }

  [...element6].forEach((element) => {
    element.addEventListener('click', function(event) {
      console.log('vanilla: click on element');
    });
  });
}
