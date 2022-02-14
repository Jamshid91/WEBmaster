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
    setErrorFor(userName, "tomato", '3px solid tomato')
  } else {
    setSuccesFor(userName)
    userName.parentElement.children[3].classList.add('success')
  }

  if(userEmailValue === '') {
    setErrorFor(userEmail, "tomato", '3px solid tomato')
  }
  else if(!isEmail(userEmailValue)) {
    setErrorFor(userEmail, "tomato", '3px solid tomato')
  }
  else {
    setSuccesFor(userEmail)
    userEmail.parentElement.children[3].classList.add('success')
  }

  if(userPassValue === '' &&  userPassValue.length < 5) {
    setErrorFor(userPass, "tomato", '3px solid tomato')
  } else {
    setSuccesFor(userPass)
    userPass.parentElement.children[3].classList.add('success')
  }
  
  if(messageValue === '' && messageValue.length < 20) {
    setErrorFor(message, "tomato", '3px solid tomato')
  }
  else if(messageValue.length < 20) {
    setErrorFor(message, "tomato", '3px solid tomato')
  }
  else {
    setSuccesFor(message)
    message.parentElement.children[3].classList.add('success')
  }
}

function setErrorFor(input, iconColor, border) {
let icon = input.parentElement.children[2]

    input.classList.add('inputError');
    icon.style.color = iconColor
    input.style.borderBottom = border
}

function setSuccesFor(input) {
let errorIcon = input.parentElement.children[2]

    errorIcon.style.color = '#11a192'
    input.style.borderBottom = '3px solid #11a192'
    input.classList.remove('inputError');
    input.classList.add('inputSucces');

} 

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}