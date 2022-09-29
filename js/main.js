$("#menuElem > li").on("click", function() {
    if($(this).hasClass("active")){
      $(this).removeClass("active");
    }else{
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });

//   chatbot

$(document).ready(function(){
    $(".chat_on").click(function(){
        $(".Layout").toggle();
        $(".chat_on").hide(300);
    });
    
       $(".chat_close_icon").click(function(){
        $(".Layout").hide();
           $(".chat_on").show(300);
    });
    
});