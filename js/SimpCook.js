window.onscroll = function showheader(){
    
    var header = document.querySelector('.header');
    
    if(window.pageYOffset > 150){
        header.classList.add('header__fixed');
    }else{
        header.classList.remove('header__fixed');
    }
    
}

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    
    $("html, body").animate({
       scrollTop: elementOffset - 70
    }, 600);
});

$(document).ready(function(){
    $('.slider__intro').slick({
        arrows:false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: "ease",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        fade: true,
    });
})

$(document).ready(function(){
    $('.reviews').slick({
        arrows:false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        easing: "ease",
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        fade: true,
    });
})


// $(shef__more).click(function() {
//     $('.shef__hiden').css({
//         'display': 'flex'
//     });
// });

// food__recipe
var food__content = document.getElementById("food__recipe__box");
var food__button = document.getElementById("food__recipe");

food__button.onclick = function(){
    if (food__content.className == "open"){
        food__content.className = "food__recipe__box";
        food__button.innerHTML = "See more";
    } else {
        food__content.className = "open";
        food__button.innerHTML = "Hide";
    }
};

// shef__about
var shef__content = document.getElementById("shef__show")
var shef__button = document.getElementById("shef__more")

shef__button.onclick = function(){
    if (shef__content.className == "shef__hiden"){
        shef__content.className = "shef__show";
        shef__button.className = "shef__more"
    } else {
        shef__content.className = "shef__hiden";
        shef__button.className = "shef__more__open"
    }
};

// burger
(function ($){
    $(function(){
        $('.icon').on('click', function(){
            $(this).closest('.header__menu').toggleClass('header__menu-open');
        });
    });
})(jQuery);

