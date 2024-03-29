const formulario = document.getElementById('caja-registro');
const inputs = document.querySelectorAll('#caja-registro input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // 8 caracters, una letra mayuscula y minuscula.
	nombre_usuario: /^[a-zA-ZÀ-ÿ\s][a-zA-Z\d]{1,40}$/,
	direccion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios, pueden llevar acentos.
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellidos":
			if(expresiones.apellido.test(e.target.value)){
                document.getElementById("a-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("a-error").innerHTML = "Apellido no válido";
            }
		break;
		case "nombres":
			if(expresiones.nombre.test(e.target.value)){
                document.getElementById("n-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("n-error").innerHTML = "Nombre no válido";
            }
		break;
		case "contrasena":
			if(expresiones.password.test(e.target.value)){
                document.getElementById("p-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("p-error").innerHTML = "La contraseña debe incluir una letra mayúscula, minuscula y un numero";
            }
		break;
		case "contrasena2":
			validarPassword2();
		break;
		case "nombre_usuario":
			if(expresiones.nombre_usuario.test(e.target.value)){
                document.getElementById("c-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("c-error").innerHTML = "Usuario no válido";
            }
		break;
		case "rol":
			const rol = document.getElementById('rol').value;
			if(rol == 0 || rol == ""){
                document.getElementById("c-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("c-error").innerHTML = "Usuario no válido";
            }
		break;
		case "direccion":
			if(expresiones.direccion.test(e.target.value)){
                document.getElementById("d-error").innerHTML = "";
				document.getElementById("s-error").innerHTML = "";
            } else{
                document.getElementById("d-error").innerHTML = "Direccion no válido";
            }
		break;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('contrasena');
	const inputPassword2 = document.getElementById('contrasena2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById("p2-error").innerHTML = "Contraseñas no coinciden";
	} else {
		document.getElementById("p2-error").innerHTML = "";
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
