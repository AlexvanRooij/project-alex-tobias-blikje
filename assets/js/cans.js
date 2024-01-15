const cans = [
        { "name":"hash", "desc": "Delicious energy drink that may cause death. The high value of hash will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/cannabis.png" },
        { "name":"lsd", "desc": "Delicious energy drink that may cause death. The high value of lsd will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/lsd.png" },
        { "name":"meth", "desc": "Delicious energy drink that may cause death. The high value of meth will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/meth.png" },
        { "name":"luc", "desc": "Delicious energy drink that may cause death. The high value of steroids will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/luc.png" },
        { "name":"sroom", "desc": "Delicious energy drink that may cause death. The high value of srooms will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/sroom.png" },
        { "name":"coke", "desc": "Delicious energy drink that may cause death. The high value of cocaine will ensure it's your last day. Please don't drink more than 1 can, as disposing of a body is not the most fun activity.", "url":"assets/img/cans/coke.png" }
      ];

$(document).ready(function(){
    function noti(text, type) {
      let color;
      switch(type) {
        case 1:
          color = "0E9860";
          break;
        case 2:
          color = "DB822B";
          break;
        case 3:
          color = "D03912";
          break;
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


    $('.item-next, .item-next-desktop').click(function(){
        
        let id = parseInt($('.item-next').attr('current-can')) + 1;
        if(id === 6) {
            id = 0;
        }
        $('.item-next').attr('current-can', id);

        $('.display-name').html(`${cans[id].name}`);
        $('.display-description').html(`${cans[id].desc}`);
        $('.item-display-can').attr('src', `${cans[id].url}`);
      });
    $('.item-prev, .item-prev-desktop').click(function(){
        let id = parseInt($('.item-next').attr('current-can')) - 1;
        if(id < 0) {
            id = 5;
        }
        $('.item-next').attr('current-can', id);

        $('.display-name').html(`${cans[id].name}`);
        $('.display-description').html(`${cans[id].desc}`);
        $('.item-display-can').attr('src', `${cans[id].url}`);
      });
    $('.item-buy, .item-buy-desktop').click(function(){

        cartItems = (sessionStorage.getItem("cart")) ? JSON.parse(sessionStorage.getItem("cart")) : cartItems = [];
        if(cartItems.length >= 4){
          noti('unsuccessfull, cart is full!', 3);
        } else {
            noti('successfully added to cart!', 1);
            cartItems.push(`${cans[parseInt($('.item-next').attr('current-can'))].name}`);
            sessionStorage.setItem("cart", JSON.stringify(cartItems));
            cartItems = JSON.parse(sessionStorage.getItem("cart"));
            console.log(cartItems);
        }
        
       
      });

 
    $('#hamburger').click(function(){
        $('#menu').toggleClass('hidden');
        $('main, footer').toggleClass('hidden');
    })
  });