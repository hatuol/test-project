//HEADER SLIDER//
var slideIndexHeader = 1;
showSlidesHeader(slideIndexHeader);

function plusSlidesHeader(h) {
    showSlidesHeader(slideIndexHeader += h);
}

function currentSlide(h) {
    showSlidesHeader(slideIndexHeader = h);
}

function showSlidesHeader(h) {
    var i;
    var header_slides = document.getElementsByClassName("slider-item");
    if (h > header_slides.length) { slideIndexHeader = 1 }
    if (h < 1) { slideIndexHeader = header_slides.length }
    for (i = 0; i < header_slides.length; i++) {
        header_slides[i].style.display = "none";
    }
    header_slides[slideIndexHeader - 1].style.display = "block";
}


//MAIN SLIDER//
var slideIndexMain = 1;
showSlidesMain(slideIndexMain);

function plusSlides(n) {
    showSlidesMain(slideIndexMain += n);
}

function currentSlide(n) {
    showSlidesMain(slideIndexMain = n);
}

function showSlidesMain(n) {
    var i;
    var main_slides = document.getElementsByClassName("slide");
    if (n > main_slides.length) { slideIndexMain = 1 }
    if (n < 1) { slideIndexMain = main_slides.length }
    for (i = 0; i < main_slides.length; i++) {
        main_slides[i].style.display = "none";
    }
    main_slides[slideIndexMain - 1].style.display = "block";
}

$('.reviews-container__carousel').slick({
    infinite: true,
    dots: true,
    appendArrows: $('.carousel-arrows'),
    prevArrow: '<a class="prev carousel-arrow"><img src="images/icons/chevron-left.svg" alt="left-icon"></a>',
    nextArrow: '<a class="next carousel-arrow"><img src="images/icons/chevron-right.svg" alt="left-icon"></a> ',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1027,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]
});

function phoneMask() {
    var num = $(this).val().replace(/\D/g, '');
    $(this).val('+' + num.substring(0, 3) + '(' + num.substring(3, 5) + ')' + num.substring(5, 8) + num.substring(8, 10) + num.substring(10, 12));
}
$('[type="tel"]').keyup(phoneMask);


$('.burger').click(function(){
    $('.burger').toggleClass('opened');
    $('.content').toggleClass('header__opened');
});