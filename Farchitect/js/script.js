//------TOGLE-MENU---------

'use strict';

$(document).ready(function(){
  $('.toggle').on('click', function(){
    $('.toggle').toggleClass('show')
  });
});

$(document).ready(function(){
  $('.toggle').on('click', function(){
    $('.toggle-menu').toggleClass('slide');
  });
});

$(document).ready(function(){
  $('.close-menu').on('click', function(){
    $('.toggle-menu').removeClass('slide');
  });
});

$(document).ready(function(){
  $('.close-menu').on('click', function(){
    $('.toggle').removeClass('show');
  });
});
