var slides = document.querySelectorAll('.slide');
let currentSlide = 1;
// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
    // xóa hết các btn đang được active
      [...active].forEach((activeSlide) => { 
        activeSlide.classList.remove('active');
      });


    // Thêm active vào btn và slide
    slides[i].classList.add('active'); 
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 2500);
  }
  repeater();
}
repeat();

$('.main-new-product-slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,    
});



$('.feedback-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});


