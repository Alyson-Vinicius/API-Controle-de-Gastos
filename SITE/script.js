function onChangeEmail() {
	toggleButtonsDisable();
	toggleEmailErros();
}

function onChangePassword() {
	toggleButtonsDisable();
	togglePassworErro();
}

function login(){
	window.location.href = "pages/HOME/home.html";
}

function register(){
window.location.href = "pages/Registrar/register.html";
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
	emailRequeridErro().style.display = email ? "none" : "Block";

	emailInvalidErro().style.display = validateEmail(email) ? "none" : "block";

}

function togglePassworErro() {
	const password = form.password().value;

	passwordRequeridErro().style.display = password ? "none" : "block";

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
	email: () => document.getElementById('email'),
	emailInvalidErro: () => document.getElementById('email-invalid-erro'),
	emailRequeridErro: () => document.getElementById('email-requerid-erro'),
	loginButton: () => document.getElementById('login-button'),
	password: () => document.getElementById('password'),
	passwordRequeridErro: () => document.getElementById('password-requerid-erro'),
	recoverPassword: () => document.getElementById('forgot-password'),
}