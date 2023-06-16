const form = document.querySelector('.form');
const modal_overlay = document.querySelector('.modal__overlay');

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault()
        event.stopPropagation()

        const field = this.querySelectorAll('.form__field');
        const field_name = this.querySelector('[name="contact_name"]');
        const field_email = this.querySelector('[name="contact_email"]');
        const field_phone = this.querySelector('[name="contact_tel"]');
        const field_question = this.querySelector('[name="contact_question"]');
        const submit = this.querySelector('[type="submit"]');
        const field_error = this.querySelectorAll('.form__error');

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

            if (name.length > 0 && email.length > 0 && tel.length > 0 && question.length > 0) {
                submit.disabled = false;
                //alert('DATA SEND')
                addUserQuestionToFirestore(data);
                modal_overlay.classList.remove('d-flex');
                form.reset();
            } else {
                submit.disabled = true;
                field_error.forEach(i => {
                    i.classList.add('d-block');
                    i.classList.remove('d-none');
                });
            }
            //getAuthData(login_email, login_password);
        }

        field.forEach(i => i.addEventListener("input", function (e) {
            const inputs = Array.from(field).every(field => field.value.trim() !== '');
            console.log(inputs)
            if (inputs === true) {
                submit.disabled = false;
            }
            if (i.value.length > 0) {
                i.closest('.form__row').querySelector('.form__error').classList.add('d-none');
                i.closest('.form__row').querySelector('.form__error').classList.remove('d-block')
            }
        }))

    },
    false
);