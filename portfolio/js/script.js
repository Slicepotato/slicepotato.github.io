$(document).ready(function(){
   $('.dialog-pop li').on('click', 'button', function(){
       $('body').append('<div id="dialog" />');
       var imgUrl = $(this).find('img').data('img');
       
       $('#dialog').dialog({
           modal: true,
           maxWidth: 600,
           width: 'auto',
           fluid: true,
           closeText: '',
           position: { my: "center top+50", at: "center top+50" },
           open: function(event, ui){
               $(this).append('<img src="' + imgUrl + '" />');
               $('.ui-button').addClass('fa fa-times-circle');
               
               $('.ui-widget-overlay').on('click', function(){
                   $('#dialog').dialog('close');
               });
           },
           close: function(event, ui){
               $(this).remove();
           }
       });
   });
   
   $(window).scroll(function(){
       console.log($(window).scrollTop());
       $(".heading").css("opacity", 1 - $(window).scrollTop() / 150);
       $(".nav-wrap div").css("opacity", 0 + $(window).scrollTop() / 150);
       $('#nav-toggle').next('nav').removeClass('open');
  });
  
  $('#nav-toggle').on('click', function(){
     $(this).next('nav').toggleClass('open'); 
  });
});