let form = document.getElementById('form');
let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userPass = document.getElementById('userPass');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitForm')
let completedForm = document.querySelector('.completed-form')


submitBtn.addEventListener('click', () => {
  checkInputs()

  let successName = userName.parentElement.children[3].classList;
  let successEmail = userEmail.parentElement.children[3].classList;
  let successPass = userPass.parentElement.children[3].classList;
  let successMessage = message.parentElement.children[3].classList;

  if(successName == 'success' && successEmail == 'success' && successPass == 'success' && successMessage == 'success') {

    submitBtn.type = 'submit'
  }
});



function checkInputs() {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPassValue = userPass.value.trim();
  const messageValue = message.value.trim();


  if(userNameValue === '' || userNameValue.length <= 2) {
    setErrorFor(userName, "Введите ваше имя")
  } else {
    setSuccesFor(userName)
    userName.parentElement.children[3].classList.add('success')
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, "Введите ваш электронной почты")
  }
  else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, 'Некорректный эл. почта')
  }
  else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[3].classList.add('success')
  }

  if(userPassValue === '' || userPassValue.length < 4) {
    setErrorFor(userPass, "Введите ваше парол")
  } else {
    setSuccesFor(userPass)
    userPass.parentElement.children[3].classList.add('success')
  }
  
  if(messageValue === '') {
    setErrorFor(message, "Оставьте свой отзыв")
  }
  else if(messageValue.length < 20) {
    setErrorFor(message, "введите не менее 20 символов")
  }
  else {
    setSuccesFor(message)
    message.parentElement.children[3].classList.add('success')
  }
}

function setErrorFor(input, message) {
let small = input.parentElement.children[3]

    input.classList.add('inputError');

    small.innerText = message
}

function setSuccesFor(input) {
  
let checkIcon = input.parentElement.children[1]
let errorIcon = input.parentElement.children[2]
let small = input.parentElement.children[3]

    checkIcon.style.display = 'block'
    errorIcon.style.color = '#11a192'
    input.classList.remove('inputError');
    input.classList.add('inputSucces');

    small.innerText = ''

} 

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}