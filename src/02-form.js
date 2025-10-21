'use strict';

const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const parsedJson = JSON.parse(localStorage.getItem(localStorageKey));

try {
  email.value = parsedJson.email ?? '';
  textarea.value = parsedJson.message ?? '';
} catch (error) {}

form.addEventListener('input', evt => {
  formData.email = email.value.trim();
  formData.message = textarea.value.trim();
  const json = JSON.stringify(formData);

  localStorage.setItem(localStorageKey, json);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (email.value && textarea.value) {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
