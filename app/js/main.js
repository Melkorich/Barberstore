$(function(){

  $('.deal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
  });

  $('.catalog-form__option').styler();

  $(".rating").rateYo({
    starWidth: "20px",
    spacing: "1px",
    // ratedFill: "#D79468",
    readOnly: true,
  });

  
 
});