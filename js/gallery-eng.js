(function () {
  const slides = [
    `<div class="carousel__item">
        <img src="img/gallery/foto-01.jpg" 
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Germany, Bonn. Performance at the International 
         Music Festival "Beethoven Fest". 2010
         </p>     
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-02.jpg" 
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Germany, Bonn. Arithmeum concert hall.
            Festive concert "Concerto discretto". 2007
         </p>          
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-03.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         USA, Chicago. Concert tour in the cities of the USA. 1994
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-04.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ukraine, Kyiv. National Philharmonic. Colonnade Hall named 
         after Lysenko. Jubilee concert on the occasion of the 
         choir's 10th anniversary. 1981
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-05.jpg" 
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ukraine, Vorzel. Pioneer camp "Svetlyi Luch".
          The first outing of the choir for summer vacation. 1972
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-06.jpg"
            alt=""
                class="gallery__img--main">
                        <p id="gallery__img--text-small" class="gallery__img--text">
         Germany, Kronberg. Berliner Platz. Speech from the
          commemoration of M. Rostropovich
          "Meeting with Glory". Ceremonial speech of the Director of
          Rostropovich cello foundation and Kronberg Academy
          Raimund Trenklier. 2011
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-07.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ukraine, Kyiv. National Philharmonic. Colonnade Hall named 
         after Lysenko. Premiere performance of G. Kancheli's work 
         "Angels of Sorrow" in Ukraine. Open rehearsal. 2015
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-08.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ukraine, Kyiv. Lutheran Church of St. Kateryna. 
         Christmas concert with the participation of the 
         junior choir. 2014
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-09.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Ukraine, Kyiv. National Philharmonic. 
         Colonnade Hall named after Lysenko. 
         Jubilee concert on the occasion of the 
         choir's 40th anniversary. 2011
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-10.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Germany, Kronberg. Music Academy named after M. Rostropovich
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-11.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Germany, Kronberg. Johanniskirche Kronberg. Concert 
         performance at the International Chamber Music 
         Festival "Kronberg Academy Festival". 2013
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-12.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Vatican. St. Paul's Cathedral. Competition performance 
         at the International Choir Competition 
         "Musica Sacra a Roma". 2005
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-13.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Performance of the Shchedryk Choir in the 
         Church of St. Bartholomew in Gdańsk. 2017
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-14.jpg"
            alt=""
                class="gallery__img--main">
                        <p class="gallery__img--text">
         Germany, Berlin. Berlin Philharmonic. Chamber music 
         hall. Concert in support of political prisoners of 
         Russia "To Russia with love". 2013
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-15.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Austria, Lockenhaus. Lockenhaus Kirche. 
         After the performance at the International 
         Music Festival "Kammermusikfest Lockenhaus". 2008
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-16.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Austria, Vienna.  The Golden Hall of the Musikverein.
         Competition performance at Summa Cum Laude International 
         Youth Music Festival. 
         2019
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-17.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Austria, Vienna. MuTh concert hall.
         SCL International 
         Youth Music Festival concert.
         2019
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-18.jpeg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Austria, Vienna. The Great Hall of the 
        Wiener Konzerthaus. The Winners 
        Gala-concert performance at SCL International 
         Youth Music Festival. 2019
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-19.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Italy, Florence. San Filippo Neri church. 
         Concert at Florence International Choir 
         & Orchestra Festival. 2018
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-20.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Italy, Florence. Badia Fiorentina. 
         Gala-concert performance at  
         Florence International Choir 
         & Orchestra Festival. 2018
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-21.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Austria, Klosterneuburg. Concert at
           Stift Klosterneuburg monastery. 
         2019
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-22.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Canada, Powell River. Receiving the Grand 
         Prix at the International Choir 
         Competition "Kathaumixw".
         1990
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-23.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Ukraine, Zaporizhzhia. Concert hall named after M. I. Glinka.
          Concert as part of the Ukrainian tour
          "Shchedryk Ukrainian musical seasons". 2006
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-24.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Ukraine, Kharkiv. Concert Hall of the Regional Philharmonic.
          Concert as part of the Ukrainian tour
         "Shchedryk Ukrainian musical seasons". 2007
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-25.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Ukraine, Lviv. House of organ and chamber music.
          Concert as part of the Ukrainian tour
         "Shchedryk Ukrainian musical seasons". 2006
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-26.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Ukraine, Kyiv. National Philharmonic. Column hall
          named after Lysenko. Jubilee concert on the occasion 
          of the choir's 35th anniversary. 2006
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-27.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Austria, Salzburg. The Great Hall of the University of Salzburg.
          Concert as part of the International Music and Culture Festival
          "Cantus MM". 2007
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-28.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Ukraine, Kyiv. Concert in the Church of St. Alexander. 
         2007
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-29.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
        Estonia, Lutike.
          Concert at Leigo Lake Music festival. 2015
         </p> 
    </div>`,
    `<div class="carousel__item">
        <img src="img/gallery/foto-30.jpg"
            alt=""
                class="gallery__img--main">
        <p class="gallery__img--text">
         Sweden, Stockholm. Eric Ericsonhallen Concert Hall.
          Concert as part of the First Ukrainian Music Festival
          in Sweden "Rethinking Europe: Ukraine". 2017 
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
