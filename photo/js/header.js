(window.onload = function() {
    $('#filter').fadeOut(3000);
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
        $('#filter').fadeIn(3000),
    ).done(function(){
        alert("this");
        document.location.href="//tt-sn.github.io/design.io/portofolio";
    });
  }