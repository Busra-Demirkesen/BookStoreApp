var swiper = new Swiper(".heroSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,

    
  });



  

  var swiper2 = new Swiper(".heroSwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    //autoplay: {
      //delay: 2500,
     // disableOnInteraction: false,
   // },
    loop:true,

    
  });

  var swiper3 = new Swiper(".recommendSwiper", {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
     disableOnInteraction: false,
   },
    loop:true,

    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }

    
  });