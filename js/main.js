$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    arrows: false,  // デフォルトのナビゲーション矢印を非表示に
  });
});

$(document).ready(function() {
  $number =  
  $('.btn-left').on('click', function() {
    $('.slider').slick('slickPrev'); // 一つ前のスライドに移動
  })

  $('.btn-right').on('click', function() {
    $('.slider').slick('slickNext'); // 一つ次のスライドに移動
  })
})

