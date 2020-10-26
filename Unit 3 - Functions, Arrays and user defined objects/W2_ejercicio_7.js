function todo0(array0){    //Covertir todas las variables del array0 a 0
    for(i = 0; i <= array0.length-1; i++){
        array0[i] = 0;
    }
    return array0;
}

function sumar1(array1){    //A todas las variables de nuestro array "array1" le suma el valor 1
    for(i = 0; i <= array1.length-1; i++){
        array1[i] = array1[i]+"1";
    }
    return array1;
}

function showArray(arrayesp){
    for(i = 0; i <= arrayesp.length-1; i++){
        document.write(" " + arrayesp[i]); //Aquí imprimimos el array "arrayesp" con 
    }                                       //espacios a ambos lados durante la longitud del aray
}
