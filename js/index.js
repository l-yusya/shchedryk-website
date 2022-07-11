(function () {
  const scrollButton = document.getElementById("scrollBtn");

  window.onscroll = function () {
    scrollFunction();
    scrollFunctionMenu();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
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

  const stickyMenu = document.getElementById("sticky__menu");

  function scrollFunctionMenu() {
    if (
      document.body.scrollTop > 180 ||
      document.documentElement.scrollTop > 180
    ) {
      stickyMenu.style.display = "flex";
    } else {
      stickyMenu.style.display = "none";
    }
  }
})();
