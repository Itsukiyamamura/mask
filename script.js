// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win > 640){
    $("#button").hide();
    $("#lists").show();
  }else{
    $("#button").show();
    $("#lists").hide();
  }
}

$( function(){

  // 初めてページを開いた時の状態チェック
  var win = $(window).width();
  ShowAndHide(win);

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    var win = $(window).width();
    ShowAndHide(win);
  });

  // MENUボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});

  // ページ移動時フェードイン、フェードアウト
  $(window).on('load', function(){
    $('body').removeClass('fadeout');
});

 $(function() {
   // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
   $('a:not([href^="#"]):not([target])').on('click', function(e){
     e.preventDefault(); // ナビゲートをキャンセル
     url = $(this).attr('href'); // 遷移先のURLを取得
     if (url !== '') {
       $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
       setTimeout(function(){
         window.location = url;  // 0.8秒後に取得したURLに遷移
       }, 800);
     }
     return false;
  });
});
