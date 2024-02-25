$(function(){
  $('.slider2').slick({
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    infinite:true,
    slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,
 responsive:[{
    breakpoint:769,
    settings:{
        slidesToShow: 2,//スライドを画面に2枚見せる
		slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
 },{
    breakpoint:426,
    settings:{
        slidesToShow: 1,//スライドを画面に1枚見せる
		slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
 }]
  });
});