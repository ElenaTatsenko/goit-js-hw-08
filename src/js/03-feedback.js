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

//function populateTextarea() {
       
   
    // if (!localStorage.getItem(LOCALSTORAGE_KEY)) {
     //   return
  //  }
    
    //   const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
   //     form.elements.email.value = savedData.email;
   //     form.elements.message.value = savedData.message;
    
    
//}

// if (form.elements.email.value === "" && form.elements.message.value === "") {
      //  console.log('error')
     //   return
function populateTextarea(e) {
    const saveForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const saveFormPars = JSON.parse(saveForm);
    if (saveForm) {
        form.elements.email.value = saveFormPars.email || "";
        form.elements.message.value = saveFormPars.message || "";
     console.log(saveFormPars);
    };
};