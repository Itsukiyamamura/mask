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

let mask = document.querySelector(".mask");
barba.init({
	transitions: [{
		async leave() {
			mask.classList.add('is-close');
			await new Promise((resolve) => {
				return setTimeout(resolve, 1000);
			});
		},
		afterEnter() {
			mask.classList.remove('is-close');
		}
	}]
});
