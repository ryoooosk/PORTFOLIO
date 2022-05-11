//トグルアクション
'use strict';
$(document).ready(function(){
  $('.nav-toggle').on('click', function(){
    $('.nav-toggle').toggleClass('show');
  });
});

$(document).ready(function(){
  $('.nav-toggle').on('click', function(){
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
