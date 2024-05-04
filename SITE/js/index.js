function validateFieldes(){
	const email = document.getElementById('forgot_password').disabled = !emailvalid;
	const password = document.getElementById('login_button').disabled = !emailvalid || !Passwordvalid;
}

	function isEmailValid(){
		const email = document.getElementById("email").volue;
		if (!email) {
			return false;
		}
		return validateEmail(email);
	}

	function isPasswordvalid(){
		const password = getElementById("password").volue;
		if (!password){
			return false;
		}
		return true;
	}


function validateEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
}