$(function(){

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinity: true,
  });

  $('.related-slider').slick({
    prevArrow: '<button type="button" class="arrow-left" class="slick-prev"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14.3334L1 7.66671L9 1.00004" stroke="#9A9A9A" stroke-width="1.22222" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button type="button" class="arrow-right" class="slick-next"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 7.66667L1 14.3333" stroke="#9A9A9A" stroke-width="1.22222" stroke-linejoin="round"/></svg></button>',

  });

  $('.catalog-form__option, .shop-content__select-style').styler();

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
  });


  
 
});