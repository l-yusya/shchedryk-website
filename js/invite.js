(function () {
  const dateField = document.querySelector("#date-field");
  const date = document.querySelector("#date");

  function dateFieldSwitch() {
    dateField.style.display = "none";
    date.style.display = "block";
  }

  dateField.addEventListener("focus", dateFieldSwitch);
})();
