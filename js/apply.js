(function () {
  const dateField = document.querySelector("#date-field");
  const date = document.querySelector("#date");

  function dateFieldSwitch() {
    dateField.style.display = "none";
    date.style.display = "block";
  }

  dateField.addEventListener("focus", dateFieldSwitch);

  const form = document.getElementById("apply-form");
  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("apply-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Дякуємо за заявку, ми з вами зв'яжемося!";
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Вибачте, здається щось пішло не так під час відправлення заявки.";
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML =
          "Вибачте, здається щось пішло не так під час відправлення заявки.";
      });
  }
  form.addEventListener("submit", handleSubmit);
})();
