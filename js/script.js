// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
// 	interval: 2000,
// 	wrap: false
// })

window.addEventListener('resize', refreshOwl);

function refreshOwl() {
        let projectWidth = $(window).width();
        slidesPerPage = projectWidth/3;
        let options = $('.owl-carousel').data('owl.carousel').options;
        options.items = slidesPerPage;
        $('.owl-carousel').trigger('refresh.owl.carousel');
}