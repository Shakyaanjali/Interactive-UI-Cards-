"use strict";
$(document).ready(function() {
    new Swiper(".swiper-container", {
        initialSlide: 1,
        spaceBetween: 100,
        speed: 600,
        loop: !1,
        effect: "coverflow",
        coverflow: {
            rotate: 0,
            stretch: 500,
            depth: 300,
            modifier: 1,
            slideShadows: !1
        },
        slidesPerView: 1,
        slideToClickedSlide: !0,
        pagination: ".swiper-pagination",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    })
}), $(document).ready(function() {
    var e = $(".share-block__share-icon"),
        i = "share-block__share-icon--is-active",
        s = ".share-block__facebook-icon",
        o = ".share-block__twitter-icon",
        t = "share-block__facebook-icon--is-visible",
        n = "share-block__twitter-icon--is-visible",
        c = $(".like-block__like-icon"),
        l = "like-block__like-icon--is-visible";
    e.click(function() {
        $(this).toggleClass(i), $(this).siblings(s).toggleClass(t), $(this).siblings(o).toggleClass(n)
    }), c.click(function() {
        $(this).toggleClass(l)
    })
}), $(document).ready(function() {
    var e = $(".menu__icon"),
        i = "open",
        s = $(".card__body"),
        o = "card__body--faded",
        t = "menu__item--is-visible";
    e.click(function() {
        $(this).toggleClass(i), s.toggleClass(o), $(this).siblings().each(function(e) {
            var i = this;
            setTimeout(function() {
                $(i).toggleClass(t)
            }, 75 * e)
        })
    })
});