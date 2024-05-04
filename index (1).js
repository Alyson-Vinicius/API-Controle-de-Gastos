const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
	const form = document.getElementById('login_form')
	if(mode.classList.contains('fa-moon')){
		mode.classList.remove('fa-moon');
		mode.classList.add('fa-sun');

    form.classList.add('dark');
		return;
	}
	    mode.classList.add('fa-moon');
		mode.classList.remove('fa-sun');
		form.classList.remove('dark');

});

//  apartir daqui são os conteudos do video
//  tentar adapitar depois ou colocar no cod 
//  que é passado no video

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