const form = document.querySelector('.login-form');

function formSubmitEvent(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const userData = { email, password };

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  userData.email = email.trim();
  userData.password = password;
  // Навіщо очищати пароль користувача від пробілів по краях? Пробіли можуть бути частиною паролю.
  // Всеж, якщо це так необхідно → userData.password = password.trim();

  console.log(userData);
  form.reset();
}

form.addEventListener('submit', formSubmitEvent);

//#region Deco

const mainWrapper = document.createElement('main');
mainWrapper.classList.add('main');

form.parentNode.insertBefore(mainWrapper, form);
mainWrapper.append(form);

//#endregion
