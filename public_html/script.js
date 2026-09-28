//Creamos un Array, el cual almacenará todos los alumnos.
const alumno = [];

function calcularPromedio() {

    
    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value);
    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value);
    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value);
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value);

    // Validar que los datos estén completos
    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)) 
        {document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        return;}

    // Calcular promedio
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    let menssage = ""; // Variable que servira para almacenar los mensajes personalizados.
    
    //Mediante un if, comparamos los promedios para determinar el mensaje que colocarémos. 
    if ((promedio >= 9) && (promedio <= 10)) {
        menssage = "¡Excelénte!";
    } else if((promedio >= 8) && (promedio <= 9)){
        menssage = "Muy Bien!";
    } else if((promedio >= 7) && (promedio <= 7.9)){
        menssage = "Bien :)";
    } else if((promedio >= 6.5) && (promedio <= 6.9)){
        menssage = "Piensa combiarte a conta porfa :)";
    } else if((promedio >= 6) && (promedio <= 6.4)){
        menssage = "Date de baja";
    } else {
        menssage = "Vete a turismo... es lo mejor para todos...";
    }
    
    //Guardamos en el Array alumno, los datos registrdos.
    alumno.push([nombre, edad, promedio.toFixed(2), menssage]);
    
    //Guardamos en una variable (canva) el contenedor donde se renderizará los resultados almacenados en "alumno"
    let canva = document.getElementById("resultado");
    canva.innerHTML = ""; //Limpiamos el área de renderizado para imprimir los elementos guardados en "alumno", 
    //cada vez que agregamos uno nuevo.
    
    //Declaramos un For, que nos permitirá iterar en el Array eh imprimir los resultados en el HTML (canva)
    for(let i = 0; i < alumno.length; i++){
        document.getElementById("resultado").insertAdjacentHTML("beforeend",
            "<br><br>" + 
            "<strong>Alumno:</strong> " + alumno[i][0] +
            "<br><strong>Edad:</strong> " + alumno[i][1] +
            "<br><strong>Promedio:</strong> " + alumno[i][2] +
            "<br>" +
            alumno[i][3]) + 
            "<br><br>";
    }
}

//Creamos la función para limpiar los elementos del formulario.
function limpiarScreen(){
    //Obtenemos cada valor del elemnto del formulario y le pasamos una cadena vacía.
    document.getElementById("nombre").value = "";
    
    document.getElementById("edad").value = "";
    
    document.getElementById("calificacion1").value = "";

    document.getElementById("calificacion2").value = "";

    document.getElementById("calificacion3").value = "";
    
    document.getElementById("calificacion4").value = "";
}

//Creamos la función para validar solo carácteres alfanuméricos en el campo nombre.
function validar(e){
    // Obtenemos el Código de la tecla presionada en ASCII.
    let key = e.keyCode || e.which;
    // Obtenemos el caracter de la tecla presionada.
    let tecla = String.fromCharCode(key);
    // Declaramos los cácteres en un String, que serán permitidos en el campo.
    //En este caso, unicamente caráteres alfanuméricos.
    let letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúÁÉÍÓÚ";
    // Mediante un if y indexOf, validamos que el carácter presionado este dentro 
    // de nuestro String de carácteres posibles.
    if(letras.indexOf(tecla) === -1){
        return false;
    }
}

function soloEnteros(e){
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key);
    
    let num = "0123456789";
    
    if(num.indexOf(tecla) === -1){
        return false;
    }
}
