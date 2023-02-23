(function () {
  const slides = [
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-giya-kancheli.png"
              alt="Ґія Канчелі" />
              <h3 class="testimonials__block--name">Ґія Канчелі</h3>
              <p class="testimonials__block--title">композитор</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                Дитячі хори існують у багатьох країнах, але «Щедрик» — явище особливе через те,
                що ґрунтується на неповторних хорових традиціях, закладених Іриною Сабліною
                й успішно продовжених її дочкою Маріанною Сабліною. Завдяки їм «Щедрик»
                і став явищем унікальним.
              </p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
            </div>`,
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-gidon-kremer.png"
              alt="Ґідон Кремер" />
              <h3 class="testimonials__block--name">Ґідон Кремер</h3>
              <p class="testimonials__block--title">скрипаль, диригент</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                Можу засвідчити, що «Щедрик» — видатний колектив, що незмінно має неймовірний успіх у публіки та
                знавців.
                Це хоровий ансамбль, здатний у світовому масштабі «говорити» ангельськими дитячими голосами про свою
                країну та свідчити про історичні музичні традиції свого народу.
              </p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
            </div>`,
    // `<div class="testimonials__block carousel-item">
    //           <img class="testimonials__photo" src="img/testimonials/testimonial-sviatoslav-vakarchuk.png"
    //           alt="Святослав Вакарчук" />
    //           <h3 class="testimonials__block--name">Святослав Вакарчук</h3>
    //           <p class="testimonials__block--title">соліст гурту "Океан Ельзи"</p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //           <p class="testimonials__block--text">
    //             Треба вклонитися цим маленьким дітям, які несуть нашу музику, нашу культуру за кордон. Роблять це
    //             якісно,
    //             красиво та щиро.
    //             «Щедрик» — це гордість України.
    //           </p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //         </div>`,
    // `<div class="testimonials__block carousel-item">
    //           <img class="testimonials__photo" src="img/testimonials/testimonial-borys-tevlin.png"
    //           alt="Борис Тевлін" />
    //           <h3 class="testimonials__block--name">Борис Тевлін</h3>
    //           <p class="testimonials__block--title">хормейстер, професор</p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //           <p class="testimonials__block--text">
    //             Перемога київського дитячого хору «Щедрик» у Римі стала безумовною перемогою українського хорового
    //             мистецтва у світі.
    //           </p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //         </div>`,
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-benedict-xvi.png"
              alt="Папа Римський Бенедикт XVI" />
              <h3 class="testimonials__block--name" id="pope-name">Папа Римський Бенедикт XVI</h3>
              <p class="testimonials__block--title" id="pope"> &nbsp;</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                Дякую вам, щедрики, за те, що ви бездоганні у своєму співі!
              </p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
            </div>`,
  ];

  let slideIdx = 0;

  function showCurrentSlide() {
    const slideContainer = document.querySelector(".testimonials__container");
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

  const nextButton = document.querySelector(
    ".testimonials__slider_button-right"
  );
  nextButton.addEventListener("click", nextSlide);

  const prevButton = document.querySelector(
    ".testimonials__slider_button-left"
  );
  prevButton.addEventListener("click", prevSlide);

  const thumbnails = document.querySelectorAll(
    ".feedbacks-wrapper__slider-round"
  );
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
    thumbs[i].addEventListener("click", () => showSlide(i));
  }
})();
