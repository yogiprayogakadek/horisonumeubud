// SLider
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

//   Navigation bar effect on scroll
window.addEventListener( "scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

// responsive navigation menu toggle 
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener('click', () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener('click', () =>{
    navigation.classList.remove("active");
});


// ACTIVITY SLIDER
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let slider = document.querySelector('.slider')

next.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
})
prev.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length - 1]);
})

// MENU LIST
$('body').on('click', '.list', function() {
  let listActive = $('body').find('.list-active').length;
  if($(this).find('.list-active').length == 0) {
    $('.list').removeClass('list-active');
    $(this).addClass('list-active')
  }
});