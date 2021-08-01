function validateForm(){

    /*$(document).ready(function(){
        $('#name').click(function(){
            $('span').hide();
            )}*/
    
	/* primero obtengo el valor de los campos
	del formulario */ 
	
	var nombre=document.getElementById('name').value;
	var apellido=document.getElementById('lastname').value;
	var correo=document.getElementById('input-email').value;
	var contrasena=document.getElementById('input-password').value;
	var indice=document.getElementsByTagName('select').value;
	var twit=document.getElementById('input-social').value;
    
	
		
	if(nombre==="" || apellido ==="" || correo ==="" || contrasena ==="" || indice === 0 || twit==="" ){
		alert("todos los campos son obligatorios");
		return false;
		}
	else if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre)) ) {
        var span = document.createElement("span");
		var ref = document.getElementById("name");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("debe ingresar solo texto, inicial debe ser en mayuscula");
		span.appendChild(text);}       
        
               
	else if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido)) ) {
		var span = document.createElement("span");
		var ref = document.getElementById("lastname");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("debe ingresar solo texto, inicial debe ser en mayuscula");
		span.appendChild(text);
		}

	else if (!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo))) {
		var span = document.createElement("span");
		var ref = document.getElementById("input-email");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("Error: La dirección de correo no tiene el formato ");
		span.appendChild(text);
		}

	if (contrasena.length<=5) {var span = document.createElement("span");
        var span = document.createElement("span");
        var ref = document.getElementById("input-password");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("Contraseña debe tener al menos de 6 caracteres");
        span.appendChild(text);
        
        }
	else if (contrasena==="password" || contrasena==="123456" || contrasena==="098754") {
        var span = document.createElement("span");
        var ref = document.getElementById("input-password");
        var padre = ref.parentNode;
        padre.insertBefore(span, ref);
        var text = document.createTextNode("Por favor escriba otra contraseña");
        span.appendChild(text);
	}

   	document.getElementById('name').value="";
	document.getElementById('lastname').value="";
	document.getElementById('input-email').value="";
	document.getElementById('input-password').value="";
	document.getElementsByTagName('select').value=0;
	document.getElementById('input-social').value="";
	return true;
}