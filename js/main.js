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

  $('.humburger').on('click', function() {
    $('.humburger-menu').css('transform', 'translate3d(0, 0, 0)')
    $('.humburger').hide(); // ハンバーガーボタンを隠す
    $('.humburger-tojiru').show(); // 閉じるボタンを表示

  })
  $('.humburger-tojiru').on('click', function() {
    $('.humburger-menu').css('transform', 'translate3d(100%, 0, 0)'); // メニューを隠す
    $('.humburger').show(); // ハンバーガーボタンを表示
    $('.humburger-tojiru').hide(); // 閉じるボタンを隠す
  })

  $('.humburger-menu nav ul li a').on('click', function() {
    // メニューを閉じる処理
    $('.humburger-menu').css('transform', 'translate3d(100%, 0, 0)'); // メニューを隠す
    $('.humburger').show(); // ハンバーガーボタンを表示
    $('.humburger-tojiru').hide(); // 閉じるボタンを隠す
  })
  
  $(document).ready(function() {
    // 背景動画のクリックイベントを無効にする
    $('#video').on('click', function(e) {
      e.preventDefault(); // デフォルトのクリック動作を防ぐ
    });
  });
})
