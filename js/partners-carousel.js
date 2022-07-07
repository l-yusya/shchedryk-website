(function () {
  const slides = [
    `<div class="partners__carousel-item"><img src="./img/partners/cultural.png" alt="Логотип Міжнародного Інституту Культурної дипломатії"></div>`,
    `<div class="partners__carousel-item"><img src="./img/partners/DD_logo_typo200.png" alt="Логотип Доктор Друк"></div>`,
    `<div class="partners__carousel-item"><img src="./img/partners/infopulse.jpg" alt="Логотип Інфопульс"></div>`,
    `<div class="partners__carousel-item"><img src="./img/partners/katrya-kot.png" alt="Логотип Катрі Кот"></div>`,
    `<div class="partners__carousel-item"><img src="./img/partners/kpi.jpg" alt="Логотип КПІ"></div>`,
    `<div class="partners__carousel-item"><img src="./img/partners/tofi-kime.png" alt="Логотип Тофі Кіме"></div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".partners-carousel");
    slideContainer.innerHTML = slides[slideIdx];
    if (window.matchMedia("(min-width: 473px)").matches) {
      const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.matchMedia("(min-width: 761px)").matches) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
        if (window.matchMedia("(min-width: 991px)").matches) {
          const fourthSlideIdx =
            thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
          slideContainer.innerHTML += slides[fourthSlideIdx];
          if (window.matchMedia("(min-width: 1108px)").matches) {
            const fifthSlideIdx =
              fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
            slideContainer.innerHTML += slides[fifthSlideIdx];
          }
        }
      }
    }
  }

  function nextSlide() {
    slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
    showCurrentSlide();
  }
  function prevSlide() {
    slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
    showCurrentSlide();
  }

  showCurrentSlide();

  const nextButton = document.querySelector(".carousel-control-next");
  nextButton.addEventListener("click", nextSlide);
  const prevButton = document.querySelector(".carousel-control-prev");
  prevButton.addEventListener("click", prevSlide);

  window.addEventListener("resize", showCurrentSlide);
})();
