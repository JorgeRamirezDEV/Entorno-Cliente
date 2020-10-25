var numero = prompt("Introduce número: ");
var solucion = dividir2(numero);

    document.write("Tu numero " +numero+ " es " +solucion); 

function dividir2(numero){
    if(numero % 2 ==0) {
        return "par";
    }
    else{
        return "impar";
    }
}

