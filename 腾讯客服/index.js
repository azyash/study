 $(document).ready(function() {
     $(window).scroll(function() {
         var scrolltop = $(window).scrollTop()
         if (scrolltop >= 300) {
             $('.header').animate({ height: '75px' }).stop(true)
             $('.header_logn').animate({ height: '75px' }).stop(true)
             $('.header_logn img').animate({ width: '230px' }).stop(true)
             $('.header').animate({ height: '50px' })
             $('.header_logn').animate({ height: '50px' })
             $('.header_logn .logoimg').animate({ width: '180px' })
             $('.searchHide').show();
         } else {
             $('.searchHide').hide();
             $('.header').animate({ height: '50px' }).stop(true)
             $('.header_logn').animate({ height: '50px' }).stop(true)
             $('.header_logn img').animate({ width: '180px' }).stop(true)
             $('.header').animate({ height: '75px' })
             $('.header_logn').animate({ height: '75px' })
             $('.header_logn .logoimg').animate({ width: '230px' })
         }
     });
 })

 //  $("div").scroll(function() {
 //     if ($(window).scrollTop() >= 300) {
 //         $('.header').animate({ height: '50px' })
 //         $('.header_logn').animate({ height: '50px' })
 //         $('.header_logn img').animate({ width: '180px' })
 //     } else {
 //         $('.header').animate({ height: '75px' })
 //         $('.header_logn').animate({ height: '75px' })
 //         $('.header_logn img').animate({ width: '230px' })
 //     }
 // });