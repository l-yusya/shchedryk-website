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
         Київський камерний оркестр, 
         диригент - Роман Кофман, соліст - Ґідон Кремер.
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
         Київський камерний оркестр, диригент - Віталій Протасов.
         2011 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-10.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Німеччина, Кронберг. Музична академія 
         ім. М. Ростроповича. 2011 р.
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
         Камерний оркестр Kremerata Baltica, солісти - 
         Ґідон Кремер і Гедре Дірванаускайте, диригент - 
         Ніколоз Рачвелі. 2013 р.
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
         with love». Камерний оркестр Kremerata Baltica, 
         солісти - Ґідон Кремер і Гедре Дірванаускайте, 
         диригент - Ніколоз Рачвелі. 2013 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-15.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Австрія, Локенхуаз. Lockenhaus Kirche. 
         Після виступу на Міжнародному музичному 
         фестивалі «Kammermusikfest Lockenhaus»
         з засновником фестивалю Ґідоном Кремером. 
         2008 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-16.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Австрія, Відень. 
         Конкурсний виступ на Міжнародному молодіжному
         музичному фестивалі «Summa Cum Laude»
         у Золотій Залі Віденьскої філармонії «Musikverein». 
         2019 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-17.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Австрія, Відень. 
         Концерт в рамках Міжнародного молодіжного
         музичного фестивалю «Summa Cum Laude»
         у концертній залі «MuTh». 
         2019 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-18.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Австрія, Відень. 
         Виступ на Гала-концерті переможців 
         Міжнародного молодіжного
         музичного фестивалю «Summa Cum Laude»
         у Великій Залі «Wiener Konzerthaus». 
         2019 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-19.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Італія, Флоренція. Церква San Filippo Neri. 
         Виступ в рамках Міжнародного Флорентійського 
         Фестивалю Хорів та Оркестрів. 
         2018 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-20.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Італія, Флоренція. Абатство Badia Fiorentina. 
         Виступ на святковому гала-концерті 
         Міжнародного Флорентійського 
         Фестивалю Хорів та Оркестрів. 
         2018 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-21.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Австрія, Клостернойбург. Концерт у 
         монастирі Stift Klosterneuburg. 
         2019 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-22.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Канада, Павелл-Рівер.  
         Вручення ґран-прі на Міжнародному 
         хоровому конкурсі «Kathaumixw».
         1990 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-23.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Україна, Запоріжжя. Концертний зал іменi М.І.Глінки. 
         Концерт в рамках українського туру 
         «Українські музичні сезони
         хору Щедрик». 2006 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-24.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Україна, Харків. Концертний зал обласної філармонії. 
         Концерт в рамках українського туру 
         «Українські музичні сезони
         хору Щедрик». 2007 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-25.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Україна, Львів. Будинок органної та камерної музики. 
         Концерт в рамках українського туру 
         «Українські музичні сезони
         хору Щедрик». 2006 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-26.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Україна, Київ. Національна філармонія. Колонна зала 
         ім. Лисенко. Ювілейний концерт з нагоди 35-річчя хору. 2006 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-27.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Австрія, Зальцбург. Велика Зала Зальцбурзького Університету. 
         Концерт в рамках Міжнародного музичного та культурного фестивалю 
         «Cantus MM». 2007 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-28.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Україна, Київ. Концерт в костелі Святого Олександра. 
         2007 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-29.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Естонія, Лутіке.  
         Концерт в рамках фестивалю Leigo Lake Music. 2015 р.
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-30.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Швеція, Стокгольм. Концертна Зала Eric Ericsonhallen. 
         Концерт в рамках Першого Українського Музичного Фестивалю 
         в Швеції «Переосмислюючи Європу: Україна». 2017 р.
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
