var winSize = function(){
    var w=$(window).width();
    var h=$(window).height();

    $(".winsize").css({"display":"flex","align-items":"center","justify-content":"center","color":"white","font-size":"30px","background":"gray","height":"50vh","width":"50%","position":"absolute"}).html("<h3>Width: "+w+"<br>Height: "+h+"</h3>");
};
$(document).ready(winSize);
$(window).resize(winSize);
