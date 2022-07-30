import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");


const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 1000));


populateTextarea()

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();

    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function onTextareaInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    
}

function populateTextarea() {
    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    //if(form.elements.email.value === "null" && form.elements.message.value === "null") {
   // console.log('error')
  //  return
    if(savedData.email.value === "null" && savedData.message.value === "null") {
            console.log('error')
            return
    }
   // if (savedData.email.value && savedData.message.value) {
        form.elements.email.value = savedData.email;
        form.elements.message.value = savedData.message;
   // } else {
       // if(savedData.email.value === "null" && savedData.message.value === "null") {
        //    console.log('error')
          //  return
   // }//
}

    //const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    //if (savedData.email) {
    //   form.elements.email.value = savedData.email;
   // }
    //if (savedData.message) {
     //  form.elements.message.value = savedData.message;
    //}
    
//