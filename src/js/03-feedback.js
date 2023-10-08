import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const formAllValues = {};

const feedbackForm = {
    form: document.querySelector('.feedback-form')
};
feedbackForm.form.addEventListener('input', throttle(onTextInput, 500));
feedbackForm.form.addEventListener('submit', onFormSubmit);

function onTextInput(event) {
    formAllValues[event.targer.name] = event.targer.value;
    const formAllValuesJSON = JSON.stringify(formAllValues);
    localStorage.setItem(STORAGE_KEY, formAllValuesJSON);
}

function onFormSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements,
        email = formElement.email.value,
        message = formElement.message.value;
    if (email === '' || message === '') {
        alert('Увага! Всі поля мають бути заповнені!');
    } else {
        console.log(formAllValues);
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }
}

function receivingLocalStorage() {
    const savedValue = localStorage.getItem(STORAGE_KEY);
    if (savedValue) {
        const parsedValue = JSON.parse(savedValue);
        if (parsedValue.email) {
            feedbackForm.form.elements.email.value = parsedValue.email;
        }
        if (parsedValue.message) {
            feedbackForm.form.elements.message.value = parsedValue.message;
        }
    }
}
receivingLocalStorage();