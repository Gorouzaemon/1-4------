function pagetopanime(){
    var scroll=$(window).scrollTop();
    if(scroll>=200){
      $('#page-top').removeClass('rightmove');
      $('#page-top').addClass('leftmove');
    } else{
        if($('#page-top').hasClass('leftmove')){
            $('#page-top').removeClass('leftmove');
            $('#page-top').addClass('rightmove');
        };
    }
  }
  $(window).scroll(function(){
    pagetopanime();
  });
  $('#page-top').on('click',function(){
     $('html,body').animate({
        scrollTop:0
     },600 );
     return false;
  });