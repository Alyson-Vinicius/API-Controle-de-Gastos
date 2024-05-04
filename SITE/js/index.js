function validateFields(){
	const emailvalid = isEmailValid();
	document.getElementById('forgot-password').disabled = !emailvalid;
	
	const Passwordvalid = isPasswordvalid();
	document.getElementById('login-button').disabled = !emailvalid || !Passwordvalid;
}

	function isEmailValid(){
		const email = document.getElementById("email").value;
		if (!email) {
			return false;
		}
		return validateEmail(email);
	}

	function isPasswordvalid(){
		const password = document.getElementById('password').value;
		if (!password){
			return false;
		}
		return true;
	}

	function validateEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}