$(function(){
    $('.slider').slick({
      autoplay:true, //自動かどうか。初期値false
      autoplaySpeed:3000,//切り替わる時間。
      infinite:true,
      speed:1000,//スライド自体の動くスピード。初期値300
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      arrows: true,//左右の矢印あり
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        //上記で左右の矢印を設定できた


        dots:true,
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効

     // フォーカス、マウスホバー？どっとナビゲーション？よくわかりません。

    });
    //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});
})