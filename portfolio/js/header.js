(window.onload = function() {
    $('#filter').fadeOut(500);
})();

$(function () {
    setInterval('check()' , 500); //アニメーションを実行
});

function cntBtn(){
    var cnt = document.getElementById("contact");
    if(cnt.style.display=="block"){
        // noneで非表示
        $('#contact').hide("");
        let ht = $('#medium').height();
        ht -= 60;
        $('#medium').animate({'height':ht +"px"},"slow");
	}else{
        // blockで表示
        var ht = $('#medium').height();
        ht += 60;
        $('#medium').animate({'height':ht +"px"},"slow");
        $('#contact').show();
	}
}

  function pageBtn(val){
    $.when(
        $('#filter').fadeIn(500),
    ).done(function(){
        if(val == 1){
        document.location.href="https://tt-sn.github.io/design.io/portfolio/about.html";
        }
        else if(val == 2){
            document.location.href="https://tt-sn.github.io/design.io/portfolio/study.html";
        }
        else if(val == 3){
            document.location.href="https://tt-sn.github.io/design.io/portfolio/make.html";
        }
        else if(val == 4){
            document.location.href="https://tt-sn.github.io/design.io/portfolio/photo.html";
        }

        else if(val == "11"){
            document.location.href="https://play.google.com/store/apps/details?id=com.ttsn.MemoryCalculator&hl=ja"
        }
        else if(val == "10"){
            document.location.href="https://tt-sn.github.io/design.io/converter/"
        }
    });
  }


 function check(){
    if($('#li_01').css('display') == "none"  ){
        //作成するやつ呼び出し
        make("#li_01");
    }

    if($('#li_02').css('display') == "none" ){
        //作成するやつ呼び出し
        make("#li_02");

    }
    if($('#li_03').css('display') == "none" ){
        //作成するやつ呼び出し
        make("#li_03");

    }
    if($('#li_04').css('display') == "none" ){
        //作成するやつ呼び出し
        make("#li_04");

    }
    if($('#li_05').css('display') == "none" ){
        //作成するやつ呼び出し
        make("#li_05");
    }      
}

function make(id){

    var wid = window.innerWidth;
    var hgt = window.innerHeight;
    var time = "0";

    //-1~1で値を出す
    wid = Math.abs( Math.random() )* wid; 
    hgt = Math.abs( Math.random() ) * hgt; 
    time = Math.abs( Math.random()*(25-5)+5 ) * 100;

    size = Math.abs( Math.random()*(150-10)+10 ) + "px";

    $(id).css({'left': wid ,'top':hgt});
    $(id).css({'width': size ,'height': size});
    $.when(
        $(id).fadeIn(time) 
    ).done(function(){
        out(id);
    })
}

//fadeinで呼び出されるfadeout関数
function out(id){
    $.when(
    $(id).fadeOut(500)
    ).done(function(){
        $(id).css('display','none');
    })
}