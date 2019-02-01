function detailOn(key){
    $('#detail').fadeIn(200);
    //document.getElementById("detail").style.display = "block";
    $("#popupPanel" +" "+"#"+key).fadeIn(200);
}

function detailOff(){
    $('#detail').fadeOut(200);
    $('#popupPanel > *').css("display","none");
    //document.getElementById("detail").style.display = "none";
    // var child = document.getElementById("popupPanel").children;
    // for(i=0;i<=child.length;i++){
    //     child[i].style.display = "none"
    // }
}