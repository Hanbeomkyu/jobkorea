$(function(){
    var swiper = new Swiper(".mySwiper1", {
        direction: "vertical",
        autoplay: {
            delay: 2000,
          },
          slidesPerView:'auto',
          loop:true
      });

    $('.search10 .more').click(function(){
        $('.search10').toggleClass('on');
    });
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true
      });  
});