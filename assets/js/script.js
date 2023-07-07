const form = document.querySelector(".form");
const modal_overlay = document.querySelector(".modal__overlay");
const modal_success = document.querySelector(".modal-success").parentNode;

form.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    event.stopPropagation();

    const field = this.querySelectorAll(".form__field");
    const field_name = this.querySelector('[name="contact_name"]');
    const field_email = this.querySelector('[name="contact_email"]');
    const field_phone = this.querySelector('[name="contact_tel"]');
    const field_question = this.querySelector('[name="contact_question"]');
    const submit = this.querySelector('[type="submit"]');
    const field_error = this.querySelectorAll(".form__error");

    if (field_name && field_email && field_phone && field_question) {
      let name = field_name.value;
      let email = field_email.value;
      let tel = field_phone.value;
      let question = field_question.value;

      const data = {
        contact_user_name: name,
        contact_user_email: email,
        contact_user_tel: tel,
        contact_user_question: question,
      };

      if (
        name.length > 0 &&
        email.length > 0 &&
        tel.length > 0 &&
        question.length > 0
      ) {
        submit.disabled = false;
        //alert('DATA SEND')
        addUserQuestionToFirestore(data);
        modal_overlay.classList.remove("d-flex");
        modal_success.classList.add("d-flex");
        form.reset();
      } else {
        submit.disabled = true;
        field_error.forEach((i) => {
          i.classList.add("d-block");
          i.classList.remove("d-none");
        });
      }
      //getAuthData(login_email, login_password);
    }

    field.forEach((i) =>
      i.addEventListener("input", function (e) {
        const inputs = Array.from(field).every(
          (field) => field.value.trim() !== ""
        );
        console.log(inputs);
        if (inputs === true) {
          submit.disabled = false;
        }
        if (i.value.length > 0) {
          i.closest(".form__row")
            .querySelector(".form__error")
            .classList.add("d-none");
          i.closest(".form__row")
            .querySelector(".form__error")
            .classList.remove("d-block");
        }
      })
    );
  },
  false
);

const modal_toggle = document.querySelectorAll('[data-modal-toggle="modal"]');
const modal_close = document.querySelectorAll(".modal__close");
const modal = document.querySelector(".modal__overlay");

const modal_btn = document.querySelector(".modal__cta")

modal_toggle.forEach((i) => {
  i.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("d-flex");
    modal.classList.remove("d-none");
    modal_success.classList.remove("d-none");
  });
});

modal_close.forEach((i) =>
  i.addEventListener("click", function () {
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
    modal_success.classList.remove("d-flex");
    modal_success.classList.add("d-none");
    form.reset();
  })
);

modal_btn.addEventListener("click", function (e) {
  modal_success.classList.remove("d-flex");
  modal_success.classList.add("d-none");
})


modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("d-flex");
    modal.classList.add("d-none");
    form.reset();
  }
});

modal_success.addEventListener("click", function (e) {
  if (e.target === modal_success) {
    modal_success.classList.remove("d-flex");
    modal_success.classList.add("d-none");
    form.reset();
  }
});

//TABLE
function updateTableLayout() {
  const tables = document.querySelectorAll(".page__single table");

  tables.forEach((table) => {
    const tableWidth = table.offsetWidth;
    const containerWidth = table.parentElement.offsetWidth;

    if (tableWidth > containerWidth) {
      if (
        !table.parentElement.classList.contains(
          "table__wrapper",
          "table__wrapper--scroll"
        )
      ) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table__wrapper", "table__wrapper--scroll");
        table.parentElement.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    } else {
      const scrollWrapper = table.parentElement.querySelector(
        ".table__wrapper--scroll"
      );
      if (scrollWrapper) {
        scrollWrapper.parentElement.insertBefore(table, scrollWrapper);
        scrollWrapper.remove();
      }
    }
  });
}

// Initial table layout update
updateTableLayout();

// Update table layout on window resize
window.addEventListener("resize", updateTableLayout);
