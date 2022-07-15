(function () {
  const slides = [
    `<div class="carousel__item">
        <img src="img/gallery/foto-01.jpg" 
            alt=""
                class="gallery__img--main">
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-02.jpg" 
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-03.jpg" 
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-04.jpg" 
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-05.jpg" 
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-06.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-07.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-08.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-09.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-10.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-11.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-12.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-13.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-14.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-16.jpg"
            alt=""
                class="gallery__img--main">
                            </div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".gallery__images--main");
    slideContainer.innerHTML = slides[slideIdx];
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
    // slideContainer.style.transition = "left 2s";
  }

  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
    // slideContainer.style.transition = "right 2s";
  }

  showCurrentSlide();

  const nextButton = document.querySelector(".gallery__slider_button-right");
  nextButton.addEventListener("click", nextSlide);

  const prevButton = document.querySelector(".gallery__slider_button-left");
  prevButton.addEventListener("click", prevSlide);

  const thumbnails = document.querySelectorAll(".gallery__img");
  for (const thumbnail of thumbnails) {
    thumbnail.addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      thumbnail.classList.add("active");
    });
  }

  function showSlide(slideNum) {
    slideIdx = slideNum;
    showCurrentSlide();
  }

  const thumbs = document.querySelectorAll(".thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener("click", scrollUp, () => showSlide(i));
  }

  function scrollUp() {
    document.documentElement.scrollTop = 200;
  }
})();
