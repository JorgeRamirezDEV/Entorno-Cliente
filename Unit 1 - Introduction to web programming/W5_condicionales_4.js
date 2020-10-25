var numero= prompt("Dame un número: ");

if(Number(numero)==numero){
    if(numero > 100){
        document.write((numero)*85/100)
    }
    else{ alert("Su numero no supera el minimo para descuento")
    }
}