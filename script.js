const swiper = new Swiper('.swiper-container', {
    loop: true,             // Enable looping of slides
    autoplay: {
      delay: 2500,          // Time between slide transitions (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });