(function () {
  const slides = [
    `<div class="carousel__item">
        <img src="img/gallery/foto-01.jpg" 
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Німеччина, Бонн. Виступ на Міжнародному 
         музичному фестивалі «Бетховен фест». 2010 р.
         </p>     
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-02.jpg" 
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Німеччина, Бонн. Концертний зал Арітмеум. 
         Святковий концерт «Concerto discretto».  
         2007 р.
         </p>          
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-03.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         США, Чикаго. Концертне турне містами США. 1994 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-04.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Україна, Київ. Національна філармонія. Колонна зала 
         ім. Лисенко. Ювілейний концерт з нагоди 10-річчя хору. 
         1981 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-05.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Україна, Ворзель. Піонерський табір «Светлый луч». 
         Першій виїзд хору на літній відпочинок. 1972 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-06.jpg"
            alt=""
                class="gallery__img--main">
                        <p id="gallery__img--text-small" class="gallery__img--text">
         Німеччина, Кронберг. Berliner Platz. Виступ з 
         нагоди вшанування пам’яті М. Ростроповича 
         «Зустріч зі Славою». Урочиста промова Директора 
         Rostropovich cello foundation, Kronberg Academy 
         Раймунда Тренклєра. 2011 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-07.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Україна, Київ. Національна філармонія. 
         Колонна зала ім. Лисенко. Прем’єрне виконання 
         в Україні твору Г.Канчелі «Янголи печалі». 
         Відкрита репетиція. 2015 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-08.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Україна, Київ. Лютеранська церква св. Катерини. 
         Різдвяний концерт за участі молодшого складу хору. 
         2014 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-09.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Україна, Київ. Національна філармонія. Колонна зала 
         ім. Лисенко. Ювілейний концерт з нагоди 40-річчя хору. 
         2011 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-10.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Німеччина, Кронберг. Музична академія 
         ім. М. Ростроповича
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-11.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Німеччина, Кронберг. Johanniskirche Kronberg. 
         Концертний виступ на Міжнародному фестивалі 
         камерної музики «Kronberg academy Festival». 
         2013 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-12.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ватикан. Собор Святого Павла. Конкурсний виступ 
         на Міжнародному хоровому конкурсі «Musica Sacra a Roma». 
         2005 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-13.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Виступ хору Щедрик в церкві святого 
         Бартоломея у Гданську. 2017 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-14.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Німеччина, Берлін. Філармонія Берліну. 
         Камерна музична сцена. Концерт у підтримку 
         політичних в’язнів Росії «To Russia 
         with love». 2013 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-16.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Австрія, Локенхуаз. Lockenhaus Kirche. 
         Після виступу на Міжнародному музичному 
         фестивалі «Kammermusikfest Lockenhaus». 
         2008 р.
         </p> 
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
    thumbs[i].addEventListener("click", () => showSlide(i), scrollUp);
  }

  function scrollUp() {
    if (window.matchMedia("(min-width: 641px)").matches) {
      document.documentElement.scrollTop = 200;
    }
  }

  const miniPics = document.querySelectorAll(".minipic");
  for (let i = 0; i < miniPics.length; i++) {
    miniPics[i].addEventListener("click", scrollUp);
  }
})();
