let palabra = prompt("Palabra a analizar");

function palindromo(cad_arg){
    let cadena1 = new String();
    cadena1 = cad_arg;
    let cadena = "";
    for (let i=0; i<cadena1.lenght; i++){
        cadena += cadena1.charAt(i);
    } 
    if (cadena == cadena1){
        document.write(cadena1+" Es palíndromo");
    }else{
        document.write("No es palíndromo");
    }
}

palindromo(palabra);