function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErros();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePassworErro();
}

function login() {
	showLoading();
  firebase
    .auth()
    .signInWithEmailAndPassword(form.email().value, form.password().value)
    .then((Response) => {
		hideLoading();
      window.location.href = "pages/HOME/home.html";
    })
    .catch((error) => {
		hideLoading();
      alert(getErroMessage(error));
    });
}

function getErroMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "usuário não encontrado";
  }
  if (error.code == "auth/wrong-password") {
    return "Senha Invalida";
  }
  return error.message;
}

function register() {
  window.location.href = "pages/Registrar/register.html";
}

function recoverPassword() {
	showLoading();
	firebase.auth().sendPasswordResetEmail(form.email().value).then(() =>{
		hideLoading();
		alert("email enviado com sucesso");
	}).catch(error =>{
		hideLoading();
		alert(getErroMessage(error));
	})
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErros() {
  const email = form.email().value;
  emailRequeridErro().style.display = email ? "block" : "none";

  emailInvalidErro().style.display = validateEmail(email) ? "none" : "block";
}

function togglePassworErro() {
  const password = form.password().value;

  passwordRequeridErro().style.display = password ? "block" : "none";
}

function toggleButtonsDisable() {
  const emailvalid = isEmailValid();
  form.recoverPassword().disabled = !emailvalid;

  const Passwordvalid = isPasswordvalid();
  form.loginButton().disabled = !emailvalid || !Passwordvalid;
}

function isPasswordvalid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidErro: () => document.getElementById("email-invalid-erro"),
  emailRequeridErro: () => document.getElementById("email-requerid-erro"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  passwordRequeridErro: () => document.getElementById("password-requerid-erro"),
  recoverPassword: () => document.getElementById("forgot-password"),
};
