$(function(){

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinity: true,
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