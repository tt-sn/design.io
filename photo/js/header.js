(window.onload = function() {
    $('#filter').fadeOut(2000);
})();

function cntBtn(){
    var cnt = document.getElementById("contact");
    if(cnt.style.display=="block"){
        // noneで非表示
        $('#contact').hide("");
        let ht = $('#medium').height();
        ht -= 80;
        $('#medium').animate({'height':ht +"px"},"slow");
	}else{
        // blockで表示
        var ht = $('#medium').height();
        ht += 80;
        $('#medium').animate({'height':ht +"px"},"slow");
        $('#contact').show();
	}
}

function stdBtn(){
    $.when(
        $('#filter').fadeIn(2000),
    ).done(function(){
        document.location.href="https://tt-sn.github.io/design.io/portfolio";
    });
  }

  function abtBtn(){
    $.when(
        $('#filter').fadeIn(2000),
    ).done(function(){
        document.location.href="https://tt-sn.github.io/design.io/photo/about.html";
    });
  }