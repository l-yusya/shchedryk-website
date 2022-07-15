(function () {
  $(".accordion").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().removeClass("show");
    } else {
      $(".accordion").removeClass("active");
      $(".panel").removeClass("show");

      $(this).addClass("active");
      $(this).next().addClass("show");
    }
  });
})();

// (function () {
//   const placeholder = document.querySelector(".video__placeholder--container");
//   const video = placeholder.nextElementSibling;

//   placeholder.addEventListener("click", switchToVideo);

//   function switchToVideo() {
//     placeholder.style.display = "none";
//     video.style.display = "block";
//   }
// })();

(function () {
  const arrPictures = document.querySelectorAll(
    ".video__placeholder--container"
  );
  const arrVideos = document.querySelectorAll(".video-insert");

  arrPictures.forEach(function (el, index) {
    el.addEventListener("click", () => switchToVideo(el, index));
  });

  function switchToVideo(el, index) {
    el.style.display = "none";
    arrVideos[index].style.display = "block";
  }
})();
