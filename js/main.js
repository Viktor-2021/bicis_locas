function validateForm(){
	function alertar(mensaje, elem){
		var span = document.createElement('span');
		span.innerHTML=mensaje;
		elem.parentNode.appendChild(span);
	}
	var nombre= document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var email= document.getElementById("input-email");
	var pass = document.getElementById("input-password")
	
	if(nombre.value.length == 0){
		alertar('Debe escribir un nombre', nombre);
	}
	else if(!(/^([a-zA-Z])*$/.test(nombre.value))){
		alertar('Su nombre debe contener solo letras', nombre);
	}
	else if(nombre.value[0] != nombre.value[0].toUpperCase()){
		alertar('La primera letra debe ser mayuscula', nombre);
	}
	if(apellido.value.length == 0){
		alertar('Debe escribir un apellido', apellido);
	}
	else if(!(/^([a-zA-Z])*$/.test(apellido.value))){
		alertar('Su apellido debe contener solo letras', apellido);
	}
	else if(apellido.value[0] != apellido.value[0].toUpperCase()){
		alertar('La primera letra debe ser mayuscula', apellido);
	}
	if(email.value.length == 0){
		alertar('Debe escribir un correo electrónico', email);
	}
	if( !(/\S+@\S+\.\S+/.test(email.value)) ) {
		alertar("Escribir un correo electrónico valido", email);
	}
	if( pass.value == null || pass.value.length == 0) {
		alertar("La contraseña es obligatoria", pass);
	}
	if(pass.value.length < 6) {
		alertar("La contraseña debe tener al menos 6 caracteres", pass);
	}
	if(pass.value == "password" || pass.value =="123456" || pass.value =="0987654") {
		alertar("Escoge otra contraseña", pass);
	}
	var lista= document.getElementsByTagName("select")[0].value;
	if(lista==0){
		alert("Selecciona una Bici");
		return;
	}}