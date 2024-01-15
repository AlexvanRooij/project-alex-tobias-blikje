$(document).ready(function(){
    function noti(text, type) {
        let color;
        switch(type) {
          case 1:
            color = "0E9860";
          case 2:
            color = "DB822B";
          case 3:
            color = "D03912";
        }
  
        $( ".noti" ).remove();
        $('body').prepend(`<div style="background-color: #${color}" class="noti">`+
        `<p>${text}</p>`+
        '</div>');
        setTimeout(() => {
            $( ".noti" ).fadeOut( "slow", function() {
                $('.noti').remove();
              });
          }, 1000);
    }
});