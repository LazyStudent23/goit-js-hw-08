import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;

reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
  
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  
    if (email.value === '' || message.value === '') {
        return alert('Please fill in all the fields!');
  }
  console.log({ email: email.value, message: message.value });

    localStorage.removeItem(LOCAL_KEY);
    e.currentTarget.reset();
    dataForm = {};
}


// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const feedbackForm = document.querySelector('.feedback-form');

// // const formAllValues = {};
// let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
// const { email, message } = feedbackForm.elements;
// reloadPage();

// feedbackForm.addEventListener('input', throttle(onTextInput, 500));
// feedbackForm.addEventListener('submit', onFormSubmit);

// function onTextInput(event) {
//     formAllValues[event.target.name] = event.target.value;
//     const formAllValuesJSON = JSON.stringify(dataForm);
//     localStorage.setItem(STORAGE_KEY, formAllValuesJSON);
// }

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formElement = event.currentTarget.elements,
//         email = formElement.email.value,
//         message = formElement.message.value;
//     if (email === '' || message === '') {
//         alert('Увага! Всі поля мають бути заповнені!');
//     } else {
//         console.log(formAllValues);
//         event.currentTarget.reset();
//         localStorage.removeItem(STORAGE_KEY);
//     }
// }

// function reloadPage() {
//   if (dataForm) {
//     email.value = dataForm.email || '';
//     message.value = dataForm.message || '';
//   }
// }

// // function receivingLocalStorage() {
// //     const savedValue = localStorage.getItem(STORAGE_KEY);
// //     if (savedValue) {
// //         const parsedValue = JSON.parse(savedValue);
// //         if (parsedValue.email) {
// //             feedbackForm.elements.email.value = parsedValue.email;
// //         }
// //         if (parsedValue.message) {
// //             feedbackForm.elements.message.value = parsedValue.message;
// //         }
// //     }
// // }
// // receivingLocalStorage();