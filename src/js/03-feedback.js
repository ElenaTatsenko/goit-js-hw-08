const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(inputHandler, 500));
form.addEventListener("submit", submitHandler)

editeInput()

function inputHandler(e) {
    e.preventDefault();
    const {email, message} = e.currentTarget;
    const formData = { email: email.value, message: message.value };

    localStorege.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function submitHandler(e) {
    e.preventDefault();
    const {email, message  } = e.currentTarget;
    const formData = { email: email.value, message: message.value };
    console.log(formData);
    localStorege.removeItem(LOCALSTORAGE_KEY)
    form.reset();
}

function editeInput() {
    if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
        return
    }
    auditInput = Json.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    form.elements.email.value = auditInput.email;
    form.elements.message.value = auditInput.message;

}
