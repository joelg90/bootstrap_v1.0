const pregunta = ['¿Cuantos integran la banda?'];
const respuesta = ['4'];
const pista1 = ['Menos que 5 y mas que 1'];
const pista2 = ['Menos que 5 y mas 2'];

var intentos = 0;

hazPregunta();

function validacionResp(){
    
    let resp = document.getElementById('dato').value;
    if ( resp == respuesta){
        alert('ACERTASTE');
        window.location.reload();
    }
    else{
        if(intentos < 4){
            contIntentos(intentos);
            intentos ++;
        }
        else{
            contIntentos(intentos);
        }
        
    }
    document.getElementById('dato').value = ' ';
}

function contIntentos(intentos){
    switch (intentos){
        case 0:
            alert('Primer intento de 4');
            break;
        case 1: 
            alert('Segundo intento de 4');
            document.getElementById('p1').innerHTML = pista1;
            break;
        case 2:
            alert('Tercer intento de 4');
            document.getElementById('p2').innerHTML = pista2;
            break;
        case 3:
            alert('Cuarto intento de 4,te quedaste sin intentos');
            window.location.reload();
            break;

    }
}


function hazPregunta(){
    document.getElementById('preg').innerHTML = pregunta;                   
}