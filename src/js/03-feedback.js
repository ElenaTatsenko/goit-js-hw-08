import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = localStorage.getItem(LOCALSTORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) : {};

emailEl.addEventListener('input', throttle(onTextareaInput, 1000));
messageEl.addEventListener('input', throttle(onTextareaInput, 1000));
form.addEventListener('submit', onFormSubmit);


populateTextarea()


function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

   if (email === '' || message === '') {
     console.log('Error! Fill in the fields');
   } else {
     localStorage.removeItem(LOCALSTORAGE_KEY);
     console.log({ email, message });
   }
    e.currentTarget.reset();
}


function onTextareaInput(e) {
    e.preventDefault();
    
    const name = e.target.name;
    const value = e.target.value;
    
    formData[name] = value;

   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
 }

function populateTextarea(e) {
    if (formData.email) {
        emailEl.value = formData.email;
    }
    if (formData.message) {
        messageEl.value = formData.message;
    }
};
