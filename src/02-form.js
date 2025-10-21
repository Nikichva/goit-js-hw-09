'use strict';

const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

try {
  const savedState = localStorage.getItem(localStorageKey);
  if (savedState) {
    const parsedJson = JSON.parse(savedState);
    email.value = parsedJson.email ?? '';
    textarea.value = parsedJson.message ?? '';
  }
} catch (error) {
  console.log(error.message);
}

form.addEventListener('input', evt => {
  formData.email = email.value.trim();
  formData.message = textarea.value.trim();
  const json = JSON.stringify(formData);

  localStorage.setItem(localStorageKey, json);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!email.value.trim() || !textarea.value.trim()) {
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  localStorage.removeItem(localStorageKey);
  form.reset();
});
