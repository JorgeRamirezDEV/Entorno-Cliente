


/*function escribir(){
   console.log("entrada en función");

}

setTimeout(escribir,1000); 

// otra manera de hacerlo

setTimeout( function () {
    console.log("entra en funcion")
} , 4000);*/
var contador = 60;

function imprime(){
    console.log(contador);
    contador--;

    if (contador >0)
    setTimeout(imprime,1000);
}


    setTimeout(imprime,1000);


    // intento de algo que no funciona
    
/*for (let i = 0; i <61 ; i++){
    
   set.timeout(function(){
    console.log(a)
   },1000);
   
    i++;

}*/