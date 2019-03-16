var preguntas = [
    ['¿Donde nació Yokoi Kenji?','Colombia'],
    ['Normalmente Yokoi Kenji es conocido por sus ....?','Conferencias'],
    ['¿Qué admira de la cultura Japonesa?', 'La disciplina'],
    ['Completa la siguiente frase: "La disciplina, tarde o temprano, vencerá la ....."','Inteligencia'],
    ['¿Con qué mito nacio traumatizado Kenji?','Los japoneses son inteligentes'],
    ['¿A dónde viajó cuando tenía 10 años?', 'Japon'],
	['¿Cúantos principios establecio Yokoi Kenji?', 'Diez'],
	['¿En qué año nació Yokoi Kenji?', '1979'],
	['¿Cuál es el nombre de su padre?', 'Yokoi Toru'],                                      // ...
	['¿De dónde era su madre?', 'Colombia']	
],
pregunta, respuesta,
formuladas = 0,
acertadas = 0;


hacerPregunta();

document.getElementById('boton').addEventListener('click', function(){
    var entrada = document.getElementById("dato").value;
    if (entrada == respuesta){
        acertadas++;
    }

    if(formuladas < 5){
        hacerPregunta();
    }else{
        mostrarResultado();
    }
});


function hacerPregunta(){
    var aux;

    aux = preguntas.splice(numAleat(0, preguntas.length-1),1);
    pregunta = aux[0][0];
    respuesta = aux[0][1];

    document.getElementById('preg').innerHTML = pregunta;
    document.getElementById('dato').value= '';
    formuladas++;
}

function mostrarResultado(){
    var resultado;      // para guardar el mensaje con el resultado
    switch(acertadas){
        case 0:
            resultado = 'No has acertado una sola pregunta, toca estudiar :-/';
            break;
        case 1:
            resultado = 'Bueno, al menos has acertado una pregunta :-)';
            break;
        case 2:
            resultado = 'Solo 2 preguntas acertadas de 5. Toca mejorar.';
            break;
        case 3:
            resultado = 'No está mal, 3/5 acertadas.';
            break;
        case 4:
            resultado = 'Muy bien, has acertado 4 preguntas :-)';
            break;
        case 5:
            resultado = '¡EXCELENTE, has acertado todas las preguntas! :-D';
            break;
    }

    document.getElementById('resolucion').innerHTML = resultado;
}


function numAleat(min, max){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}