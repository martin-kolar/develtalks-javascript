// https://medium.com/@trombino.marco/you-might-not-need-jquery-a-2018-performance-case-study-aa6531d0b0c3

import $ from 'jquery';

export default function() {
  // jquery
  const startTimeJquery = new Date();
  const elements = document.createDocumentFragment();
  for(let i = 0; i < 10000; i++) {
    $(elements).append($('<div />').addClass('test-div'));
  }
  $('#target-jquery').append(elements);

  const endTimeJquery = new Date();

  // vanilla js
  const startTimeVanilla = new Date();
  const c = document.createDocumentFragment();
  for(let i = 0; i < 10000; i++) {
     const e = document.createElement('div');
     e.className = 'test-div';
     c.appendChild(e);
  }
  document.getElementById('target-vanilla').appendChild(c);

  const endTimeVanilla = new Date();

  // log times
  console.log(`jquery: ${endTimeJquery - startTimeJquery}ms`, `vanill: ${endTimeVanilla - startTimeVanilla}ms`)
}
