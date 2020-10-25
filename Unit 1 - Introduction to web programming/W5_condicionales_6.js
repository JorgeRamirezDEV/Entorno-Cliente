var edad= prompt("¿Cual es tu edad? ");
var localidad= prompt("¿Donde vives? ");


if(Number(edad)==edad){
    if(edad > 18 && edad <30){
        if(localidad=="Madrid"){
            document.write("Tienes derecho al carnet de empresarios emprendedores")
        }else{
            document.write("No tienes derecho al carnet") 
        }
    }else{
        document.write("No tienes derecho al carnet")
    }


}

