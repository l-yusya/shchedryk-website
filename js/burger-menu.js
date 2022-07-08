(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".navigation-wrapper");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
      }
    });
  });

  const iconBurgerSticky = document.querySelector(".navigation-burger-sticky");
  const navigationsBodySticky = document.querySelector(
    ".navigation-wrapper-sticky"
  );
  iconBurgerSticky.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurgerSticky.classList.toggle("active");
    navigationsBodySticky.classList.toggle("active");
  });

  const navLinksSticky = document.querySelectorAll(".navigation__link-sticky");
  navLinksSticky.forEach((navLinkSticky) => {
    navLinkSticky.addEventListener("click", (_) => {
      if (iconBurgerSticky.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurgerSticky.classList.remove("active");
        navigationsBodySticky.classList.remove("active");
      }
    });
  });
})();
