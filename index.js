const form = document.getElementById("form");
const username = document.getElementById("username");
const emailid = document.getElementById("emailid");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //GET VALUES FROM INPUT
  //to remove white spaces
  const usernameValue = username.value.trim();
  const emailidValue = emailid.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue ==='') {
    //show error
    //add error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    //add success class
    setSuccessFor(username);
  }
  if (emailidValue === '') {
    setErrorFor(emailid, 'Email cannot be blank');
  } else if (!isEmail(emailidValue)) {
    setErrorFor(emailid, 'Email id not valid');
  } else {
    setSuccessFor(emailid);
  }

  if (password1Value === '') {
    setErrorFor(password1, 'Password cannot be blank');
  } else {
    setSuccessFor(password1);
  }
  if (password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if (password1Value !== password2Value) {
    setErrorFor(password2, 'Password does not match');
  } else {
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const formMaking = input.parentElement; //form-making
  const small = formMaking.querySelector('small');
  //add error message inside small
  small.innerText = message;
  //add error class
  formMaking.className = 'form-making error';
}
function setSuccessFor(input) {
  const formMaking = input.parentElement; //form-making
  formMaking.className = 'form-making success';
}
function isEmail(emailid) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailid);
}
