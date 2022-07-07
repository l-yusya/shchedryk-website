(function () {
  //   const pageNav = document.getElementById("navigation");
  //   window.onscroll = function () {
  //     "use strict";
  //     if (
  //       document.body.scrollTop >= 200 ||
  //       document.documentElement.scrollTop >= 200
  //     ) {
  //       pageNav.classList.add("nav-colored");
  //       pageNav.classList.remove("nav-transparent");
  //     } else {
  //       pageNav.classList.add("nav-transparent");
  //       pageNav.classList.remove("nav-colored");
  //     }
  //   };

  const scrollButton = document.getElementById("scrollBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollButton.addEventListener("click", topFunction);
})();
