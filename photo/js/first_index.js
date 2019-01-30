(window.onload = function () {
    $.when(
        $('#filter').fadeOut(1500),

    ).done(function () {
        $('#li_1').animate({ 'top': "30px", 'left':'-40px'}, 200, function(){
            $('#li_2').animate({ 'top': '30px','left':'-40px' }, 200,function(){
                $('#li_3').animate({'top': "30px",'left':'-40px'}, 200,function(){
                    $('#li_4').animate({ 'top': '30px','left':'-40px' }, 200 ,function(){ 
                        $('#headBlock').animate({'top':'0px'}, 200,hrload()); //時間待機用
                    })
                })
            })
        })
})
});
function hrload(){
    $.when(
    $('#headBlock').animate({'top':'0px'}, 400)    
    ).done(function(){
        $.when(
            $('#hr_1,#hr_2,#hr_3').animate({'top':'-30px','left':'40px'}, 200),
            $('#headBlock').animate({'top':'0px'}, 800),        
        ).done(function () {
            $.when(
            $('#hr_1, #hr_2,#hr_3').animate({'top':'-50px','left':'50px'}, 200),
            $('#li_1, #li_2,#li_3,#li_4').animate({'top':'50px','left':'-50px'}, 200),
            $('#headBlock').animate({'top':'0px'}, 400),   
            ).done(function () {
                $('#hr_1, #hr_2,#hr_3').animate({'top':'0px','left':'0px'}, 200);
                $('#li_1, #li_2,#li_3,#li_4').animate({'top':'0px','left':'0px'}, 200 , borderMove());
            })
    })
    })
}

function borderMove(){
    var obj = $('#li_1').offset().top;
    $('#border').offset({'top':obj -"100px"});
    $.when(
        $('#headBlock').animate({'top':'0px'}, 200),
    ).done(function(){
        $('#border').animate({'width':'100%','left':'0px'},300,function(){
            $(".button.type0").css( {"font-family": "Major Mono Display, monospace"});
            $(".index hr").css({'background-color':'black'});
            $('#border').animate({'width':'0%','left':'0px'},300);               
        });
    })
}
