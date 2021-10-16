$(function(){

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    infinity: true,
  });

  $('.catalog-form__option').styler();

  $(".rating").rateYo({
    starWidth: "20px",
    spacing: "1px",
    // ratedFill: "#D79468",
    readOnly: true,
  });

  $('.products-tabs__btn').on('click', function(e) {
    e.preventDefault();
    $('.products-tabs__btn').removeClass('products-tabs__btn--active');
    $(this).addClass('products-tabs__btn--active');

    $('.products-tabs__item').removeClass('products-tabs__item--active');
    $($(this).attr('href')).addClass('products-tabs__item--active');
  })

  
 
});