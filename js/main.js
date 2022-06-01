$(function menuBurger(){
  $('.menu-burger').click(function(){
    $('.menu-burger').toggleClass('active-burger');
      $('.menu-block').toggleClass('active');
      $('.main').slideToggle({
        start:function(){
          $(this).css('display','flex');        
        },  
      });
  });

});





$(function sliderMaster(){
    $('.masters-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        dots:true,
        prevArrow: '<a href="#" class="next"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L3 7L8 12" stroke="black" stroke-width="3"/></svg></a>',
        nextArrow: '<a href="#" class="prev"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 12L7 7L2 2" stroke="black" stroke-width="3"/></svg></a>',
        responsive: [
            {
              breakpoint: 1410,
              settings: {
                slidesToShow: 3,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 701,
              settings: {
                slidesToShow: 2,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
              }
            },
          ]
    });
});

