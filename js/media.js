// const acc = document.querySelectorAll(".discography__acc-button");
// let i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
// const acc = document.getElementsByClassName("accordion");
// let i;

// function click_action() {
//   $(".panel").removeClass("show");
//   $(".accordion").removeClass("active");
//   this.classList.toggle("active");
//   this.nextElementSibling.classList.toggle("show");
// }

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", click_action);
// }

// const acc = document.getElementsByClassName("accordion");
// const panels = document.getElementsByClassName("panel");
// let i;
// let j;

// const handleAccordionClick = function () {
//   for (j = 0; j < panels.length; j++) {
//     if (this.classList.contains("active")) {
//       this.classList.remove("active");
//       this.nextElementSibling.classList.remove("show");
//     } else {
//       acc[j].classList.remove("active");
//       panels[j].classList.remove("show");

//       this.classList.add("active");
//       this.nextElementSibling.classList.add("show");
//     }
//   }
// };

// for (i = 0; i < acc.length; i++) {
//   acc[i].onclick = handleAccordionClick;
// }

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
