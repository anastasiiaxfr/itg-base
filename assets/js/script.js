const recipientEmail = spEmailTarget;
const senderEmail = spEmail;
const subject = "Вопрос с ГЛАВНОГО сайта (itg-investments.com)";
const id = spId;
const secret = spSecret;
const tokenUrl = 'https://api.sendpulse.com/oauth/access_token';

const apiUrl = "https://api.sendpulse.com/smtp/emails";


function sendEmail(apiKey, emailData) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
}


function getKey(emailData) {
  const accessData = {
      "grant_type": "client_credentials",
      "client_id": id,
      "client_secret": secret
  };

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(accessData)
  };

  fetch('https://api.sendpulse.com/oauth/access_token', requestOptions)
      .then(response => response.json())
      .then(data => {

        sendEmail(data.access_token, emailData) 
        console.log(data.access_token)
      })
      .catch(error => console.error(error));
}

//FORM
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

        const req_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const req_tel =  /^[0-9]+$/;

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
                
                const message = `
                user_name: ${name}, <br>
                user_email: ${email}, <br>
                user_tel: ${tel}, <br>
                user_question: ${question}`;

                const emailData = {
                    "email": {
                      "html": message,
                      "text": message,
                      "subject": subject,
                      "from": {
                        "name": "ITG",
                        "email": senderEmail
                      },
                      "to": [
                        {
                          "name": "Recipient1 name",
                          "email": recipientEmail
                        }
                      ]
                    }
                };

                getKey(emailData);
            } else {
                submit.disabled = true;
                field_error.forEach((i) => {
                    i.classList.add("d-block");
                    i.classList.remove("d-none");
                });
            }
            //getAuthData(login_email, login_password);
        }

   
        function checkValidation(i){
            const inputs = Array.from(field).every(
                (field) => field.value.trim() !== ""
            );
            console.log(inputs);

            if (i.type === "tel") {
                if (req_tel.test(i.value)) {
                    //alert("Input contains only numbers");
                    i.closest(".form__row")
                        .querySelector(".form__error")
                        .classList.add("d-none");
                    i.style.border = "1px solid transparent";
                    
                } else {
                  
                    i.style.border = "1px solid #f22020";
                    i.value = '';
                    //alert("Input contains characters other than numbers");
                }
            } else
            if (i.type === "email") {
                if (req_email .test(i.value)) {
                    //alert("Input contains only numbers");
                    i.style.border = "1px solid transparent";
                    i.closest(".form__row")
                        .querySelector(".form__error")
                        .classList.add("d-none");
                } else {
                    i.style.border = "1px solid #f22020";
                    //alert("Input contains characters other than numbers");
                }
            } else {
                if (i.value.length > 0) {
                    i.closest(".form__row")
                        .querySelector(".form__error")
                        .classList.add("d-none");
                    i.closest(".form__row")
                        .querySelector(".form__error")
                        .classList.remove("d-block");
                }
            }

            if (inputs === true) {
                submit.disabled = false;
            }
            
        }

        field.forEach((i) =>
            i.addEventListener("change", function (e) {
                checkValidation(i);
            })
        );
        field.forEach((i) =>
            i.addEventListener("input", function (e) {
                checkValidation(i);
            })
        );
    },
    false
);

//MODAL
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

