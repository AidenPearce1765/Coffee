
let glass = document.querySelector('.sign #glass');
let seaBar = document.querySelector('#search-bar');
let textarea = document.querySelector('#textArea');

let open = null;

glass.addEventListener('click', () => {

    seaBar.classList.toggle('active');

});

var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    spaceBetween: 30,
});