(window.onload = function() {
    $('#filter').fadeOut(1500);
})();

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
function abtBtn(){
    $.when(
        $('#filter').fadeIn(1500),
    ).done(function(){
        document.location.href="https://tt-sn.github.io/design.io/photo/about.html";
    });
  }

function stdBtn(){
    $.when(
        $('#filter').fadeIn(1000),
    ).done(function(){
        document.location.href="https://tt-sn.github.io/design.io/portfolio";
    });
  }

  function phtBtn(){
    $.when(
        $('#filter').fadeIn(1000),
    ).done(function(){
        document.location.href="https://tt-sn.github.io/design.io/photo/photo.html";
    });
  }
