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


    let cartItems = (sessionStorage.getItem("cart")) ? JSON.parse(sessionStorage.getItem("cart")) : cartItems = [];
    if(cartItems == '') {
        $('.arrow-forward').remove();
    }
    if($('#cart-items')) {
        cartItems.forEach(function(item, i) {
        
            $('#cart-items').append(`<div class="cart-item i${i}" drinkname="${item}" itemid="${i}">`+
            `<img src="assets/img/cans/${item}.png" alt="${item}">`+
            `<img itemid="${i}" class="remove-item remove-mobile" drinkname="${item}" src="assets/img/red-cross.png" alt="remove item">`+
            '</div>' +
            `<img itemid="${i}" class="remove-item remove-desktop r${i}" drinkname="${item}" src="assets/img/red-cross.png" alt="remove item">`)
        });
    }

    $('.remove-item').click(function(){
        let cartItems = JSON.parse(sessionStorage.getItem("cart"));

        const itemid = $(this).attr('itemid');
        const item = $(`div[itemid='${itemid}'`);
        const name = $(this).attr('drinkname');

        const index = cartItems.indexOf(name);
        if (index > -1) {
            cartItems.splice(index, 1);
            let jsonFinal = JSON.stringify(cartItems);
            sessionStorage.setItem("cart", jsonFinal);
            console.log(cartItems);


            item.remove();
            $(this).remove();
            noti("successfully removed 1 item", 1)

        }

        if(cartItems == '') {
            $('.arrow-forward').remove();
        }
       
    });


});