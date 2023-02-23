(function () {
  const slides = [
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-giya-kancheli.png"
              alt="Gia Kancheli" />
              <h3 class="testimonials__block--name">Gia Kancheli</h3>
              <p class="testimonials__block--title">composer</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                Children's choirs exist in many countries, but Shchedryk 
                is a special phenomenon because it is based on the unique 
                choral traditions established by Iryna Sablina and successfully 
                continued by her daughter Marianna Sablina. Thanks to them, 
                Shchedryk became a unique phenomenon.
              </p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
            </div>`,
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-gidon-kremer.png"
              alt="Gidon Kremer" />
              <h3 class="testimonials__block--name">Gidon Kremer</h3>
              <p class="testimonials__block--title">violinist, conductor</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                I can testify that Shchedryk is an outstanding choir that always 
                has incredible success with the public and connoisseurs. 
                This is a choral ensemble capable of "speaking" in angelic 
                children's voices about their country and testifying to the 
                historical musical traditions of their people on a global scale.
              </p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
            </div>`,
    // `<div class="testimonials__block carousel-item">
    //           <img class="testimonials__photo" src="img/testimonials/testimonial-sviatoslav-vakarchuk.png"
    //           alt="Svyatoslav Vakarchuk" />
    //           <h3 class="testimonials__block--name">Svyatoslav Vakarchuk</h3>
    //           <p class="testimonials__block--title">soloist of the band "Ocean Elsy"</p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //           <p class="testimonials__block--text">
    //             We must bow to these young children who carry our music, our culture abroad. 
    //             They do it qualitatively, beautifully and sincerely. Shchedryk is the pride of Ukraine.
    //           </p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //         </div>`,
    // `<div class="testimonials__block carousel-item">
    //           <img class="testimonials__photo" src="img/testimonials/testimonial-borys-tevlin.png"
    //           alt="Boris Tevlin" />
    //           <h3 class="testimonials__block--name">Boris Tevlin</h3>
    //           <p class="testimonials__block--title">хормейстер, професор</p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //           <p class="testimonials__block--text">
    //             The victory of the Kyiv children's choir "Shchedryk" in Rome 
    //             was an absolute victory of Ukrainian choral art in the world.
    //           </p>
    //           <div class="quotation-mark">
    //             <img src="img/quotes.png" alt="Лапки">
    //           </div>
    //         </div>`,
    `<div class="testimonials__block carousel-item">
              <img class="testimonials__photo" src="img/testimonials/testimonial-benedict-xvi.png"
              alt="Pope Benedict XVI" />
              <h3 class="testimonials__block--name" id="pope-name">Pope Benedict XVI</h3>
              <p class="testimonials__block--title" id="pope"> &nbsp;</p>
              <div class="quotation-mark">
                <img src="img/quotes.png" alt="Лапки">
              </div>
              <p class="testimonials__block--text">
                Thank you, Shchedryk, for being flawless in your singing!
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
