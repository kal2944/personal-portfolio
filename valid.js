const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const message = document.querySelector('.error');

function checkEmail(input) {
  const lower = input.toLowerCase();

  if (input !== lower) {
    message.innerText = 'capital letters are not aloud in  email!';
    message.className = 'alert error';
    return false;
  }
  if (input === lower) {
    message.innerText = 'Thank you, for the message!';
    message.className = 'alert success';
    setTimeout(() => {
      form.submit();
    },
    5000);
  }
  return true;
}
form.addEventListener('submit', (event) => {
  if (checkEmail(email.value) === false) {
    event.preventDefault();
  } else {
    event.run();
  }
});
