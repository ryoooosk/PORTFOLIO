//トグルアクション
'use strict';
$(document).ready(function(){
  $('.toggle').on('click', function(){
    $('.toggle').toggleClass('show');
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


//モーダルウィンドウ
'use strict';

$(document).ready(function(){
  $('.up').on('click', function(){

    $("body").append('<div id="bg">');
    $("body").append('<div id="photo">');

    $('#bg').hide();
    $('#photo').hide();

    $('#photo').html('<img>');
    $('#photo img').attr('src', $(this).attr('href'));

    $('#photo img').attr('width', '100%');
    $('#photo img').attr('alt', 'photo');
    $('#photo img').css('object-fit', 'cover');

    $('#bg').fadeIn();
    $('#photo').fadeIn();

    $('#bg').click(function(){
      $(this).fadeOut(function(){
        $(this).remove();
      });
      $('#photo').fadeOut(function(){
        $(this).remove();
      });
    });

    $('#photo').click(function(){
      $('#bg').fadeOut(function(){
        $(this).remove();
      });
      $(this).fadeOut(function(){
        $(this).remove();
      });
    });

    return false;
  });
});
