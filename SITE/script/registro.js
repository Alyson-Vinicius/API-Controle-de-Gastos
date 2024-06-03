function onChangeEmail() {
  const email = form.email().value;
  form.emailRequeridErro().style.display = email ? "none" : "block";

  form.emailInvalidErro().style.display = validateEmail(email)
    ? "none"
    : "block";

  toggleButtonRegisterDisable();
}

function onChangePassword() {
  const password = form.password().value;
  form.passwordRequeridErro().style.display = password ? "none" : "block";

  form.passwordMinLengthRequeridErro().style.display =
    password.length >= 6 ? "none" : "block";

  validatePassworMatch();
  toggleButtonRegisterDisable();
}

function onChangeConfirmPassword() {
  validatePassworMatch();
  toggleButtonRegisterDisable();
}

function register() {
  showLoading();
  const email = form.email().value;
  const password = form.password().value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email , password)
    .then(() => {
      hideLoading();
      window.location.href = "pages/HOME/home.html";
    })
    .cath((error) => {
      hideLoading();
      alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
  return error.menssage;
}

function validatePassworMatch() {
  const password = form.password().value;
  const confirmPassword = form.confirmPassword().value;

  form.confirmPsswordDoesntMatchErro().style.display =
    password == confirmPassword ? "none" : "block";
}

function toggleButtonRegisterDisable() {
  form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
  const email = form.email().value;
  if (!email || !validateEmail(email)) {
    return false;
  }

  const password = form.password().value;
  if (!password || password.length < 6) {
    return false;
  }

  const confirmPassword = form.confirmPassword().value;
  if (password != confirmPassword) {
    return false;
  }

  return true;
}

const form = {
  confirmPassword: () => document.getElementById("confirmPassword"),
  confirmPsswordDoesntMatchErro: () =>
    document.getElementById("confirm-password-doesnt-match-erro"),
  email: () => document.getElementById("email"),
  emailInvalidErro: () => document.getElementById("email-invalid-erro"),
  emailRequeridErro: () => document.getElementById("email-requerid-erro"),
  password: () => document.getElementById("password"),
  passwordMinLengthRequeridErro: () =>
    document.getElementById("password-min-length-requerid-erro"),
  passwordRequeridErro: () => document.getElementById("password-requerid-erro"),
  registerButton: () => document.getElementById("register-button"),
};
