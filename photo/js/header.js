function cntBtn(){
    var cnt = document.getElementById("contact");
    alert("this");
    if(cnt.style.display=="block"){
        // noneで非表示
        $('#contact').hide("");
        let ht = $('#medium').height();
        ht -= 80;
        $('#medium').animate({'height':ht +"px"},"slow");
	}else{
        // blockで表示
        let ht = $('#medium').height();
        ht += 80;
        $('#medium').animate({'height':ht +"px"},"slow");
        $('#contact').show();
	}
}
