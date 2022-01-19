$(function(){

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });

  $('.menu__link').on('click', function() {
    $('.menu__btn').removeClass('menu__btn--active');
    $('.menu__list').removeClass('menu__list--active');
  });

  $(window).scroll(function(){
    if ($(document).scrollTop() > 150) {
      $(".header__wrapper").addClass("header--scroll");
    } else {
      $(".header__wrapper").removeClass("header--scroll");
    }
  }); 

  new Swiper ('.swiper-big', {
    slidesPerView: 1,
    spaceBetween: 10, 

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    thumbs: {
      swiper: {
        el: '.swiper-thumbs',
        slidesPerView: 3,
      }
    },

    breakpoints: {
      320: {
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        loop: false,
        freeMode: false,
      },
      992: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        loop: true,
        freeMode: true,
      },
    },
  }); 
 
  new Swiper ('.swiper-thumbs', {
    slidesPerView: 3,
    spaceBetween: 10,
  });

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinity: true, 

    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.related-slider').slick({
    prevArrow: '<button type="button" class="arrow-left" class="slick-prev"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14.3334L1 7.66671L9 1.00004" stroke="#9A9A9A" stroke-width="1.22222" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="arrow-right" class="slick-next"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 7.66667L1 14.3333" stroke="#9A9A9A" stroke-width="1.22222" stroke-linejoin="round"/></svg></button>',
  });

  $('.catalog-form__option, .shop-content__select-style, .shop-one__input').styler();
 
  $(".rating").rateYo({
    starWidth: "20px",
    spacing: "1px",
    readOnly: true, 
  });

  $('.products-tabs__btn').on('click', function(e) {
    e.preventDefault();
    $('.products-tabs__btn').removeClass('products-tabs__btn--active');
    $(this).addClass('products-tabs__btn--active');
 
    $('.products-tabs__item').removeClass('products-tabs__item--active');
    $($(this).attr('href')).addClass('products-tabs__item--active');
  }) 

  $('.shop-one__tabs-btn').on('click', function(e) {
    e.preventDefault();
    $('.shop-one__tabs-btn').removeClass('shop-one__tabs-btn--active');
    $(this).addClass('shop-one__tabs-btn--active');
 
    $('.shop-one__tabs-item').removeClass('shop-one__tabs-item--active');
    $($(this).attr('href')).addClass('shop-one__tabs-item--active');
  }) 

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }, 
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.shop-content__filter-btn').on('click', function() {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function() {
    $('.product-article--list').css('display', 'block');
    $('.shop__filters, .filter').css('display', 'none');
    $('.product-article').css('display', 'none');
  });

  $('.button-grid').on('click', function() {
    $('.product-article').css('display', 'block');
    $('.shop__filters, .filter').css('display', 'block');
    $('.product-article--list').css('display', 'none');

    if($(window).width() < 1201) {
      $('.button-grid').on('click', function() {
        $('.shop__filters, .filter').css('display', 'none');
      });
    }
  }); 

  $('.shop__btn-hidden').on('click', function() {
    $('.filter').slideToggle();
  });
 
});



