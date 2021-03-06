$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });

  // слайдер в секции Завершенные проекты
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
      
  next.css("left", prev.width() + bullets.width() + 40)
  bullets.css("left", prev.width() + 20)

  new WOW().init();
  
});