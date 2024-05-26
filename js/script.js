const container = document.getElementById('container');
const registerBth = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBth.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const loginForm = document.querySelector('.form-container.sign-in form');
const emailInput = loginForm.querySelector('input[type="email"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const loginButton = loginForm.querySelector('button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  if (/@(gmail|mail)\.com$/.test(email)) {
    window.location.href = './index.html';
  } else {
    alert('Пожалуйста, используйте email, заканчивающийся на @gmail.com или @mail.com');
  }
});
