$(document).ready(function(){
    $('#copy_btn').on('click', function() {
        var target = null;
        var p = null;
        window.getSelection().removeAllRanges();
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            target = document.querySelector('#Output');
            target.contentEditable  = true;
            target.readOnly = false;
        } else {
            p = document.createElement('p');
            p.setAttribute('id', 'target')
            document.body.appendChild(p);
            p.innerHTML = $('#Output').val();
            target = document.querySelector('#target');
        }
        var range = document.createRange();
        range.selectNode(target);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            target.contentEditable  = false;
            target.readOnly = true;
        } else {
            document.body.removeChild(p);
        }
        window.getSelection().removeAllRanges();
    });
});

$(document).ready(function(){
  $('.modal').on('click',function(){
  
      //.modalについたhrefと同じidを持つ要素を探す
      var modalId = $(this).attr('href');
      var modalThis = $('body').find(modalId);
  
      //bodyの最下にwrapを作る
      $('body').append('<div id="modalWrap" />');
      var wrap = $('#modalWrap');
      wrap.fadeIn('200');
      modalThis.fadeIn('200');
  
      //モーダルの高さを取ってくる
      function mdlHeight(){
        var wh = $(window).innerHeight();
        var attH = modalThis.find('.modalInner').innerHeight();
          modalThis.css({
            height:attH
          });    
      }
      mdlHeight();
      $(window).on('resize',function(){
        mdlHeight();
      });
  
      function clickAction(){
        modalThis.fadeOut('200');
        wrap.fadeOut('200',function(){
          wrap.remove();
        });
      }

      //コピーボタン
      function copyBtn(){
        var Data = $("#Output").val(); //フォームからの入力を受け付ける
        $('body').append('<input type="text" id="copyInput" style="height:0" value = "'+Data+'" />');
        $("#copyInput").val(Data);

        $("#copyInput").select();

        document.execCommand('copy');
        $("#copyInput").remove();
        }

      copyBtn();

        //wrapクリックされたら
        wrap.on('click',function(){
        clickAction();
        return false;
        //2秒後に消える
        setTimeout(clickAction,1500);
        return false;
        });
  });
});

$(function() {
  winW = $(window).width();
    spped = 1000;
    $('hr').css({
        left: 0
    }).animate({
        left: 0,
        width: winW
    }, spped);
});

$(function(){
  $('body').hide().fadeIn(1000);
});