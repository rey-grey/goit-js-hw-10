// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const button = document.querySelector('[type="submit"]');
const inputsRadio = document.querySelectorAll('[name="state"]');
const delay = document.querySelector('[name="delay"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayValue = Number(delay.value);
  const selectedState = document.querySelector('[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then((delay) => {
      // console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.success({
        title: 'Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      // console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
    
    
  