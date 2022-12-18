import isEmail from 'validator/lib/isEmail';

const show_error_message = 'show-error-message';
const form = document.querySelector('form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  // console.log('Evento previnido');
  hideMessages(this);
  validateInputs(username, email, password, password2);
});

function validateInputs(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      errorMessage(input, 'Este campo não pode ficar em branco!');
  });

  validateEmail(email);
  validatePassword(password, password2);
}

function validateEmail(inputEmail: HTMLInputElement): void {
  if (!isEmail(inputEmail.value)) errorMessage(inputEmail, 'E-mail inválido!');
}

function validatePassword(
  inputPassWord: HTMLInputElement,
  inputPassWord2: HTMLInputElement,
): void {
  if (inputPassWord.value.length < 3 || inputPassWord.value.length > 50)
    errorMessage(inputPassWord, 'A senha precisa ter entre 3 a 50 caracteres!');

  if (inputPassWord.value !== inputPassWord2.value)
    errorMessage(inputPassWord2, 'As senhas precisam ser iguais!');
}

function hideMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + show_error_message)
    .forEach((element) => element.classList.remove(show_error_message));
}

function errorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLInputElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerHTML = msg;
  formFields.classList.add('show-error-message');
}
