$(window).on('load',function(){
  $('#splash-logo').delay(1200).fadeOut('slow');
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
})

});