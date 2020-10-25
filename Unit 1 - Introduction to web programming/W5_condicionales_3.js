var edad=prompt("¿Cual es tu edad?");
var localidad= prompt("¿Donde naciste?");

if (Number(edad) == edad){
    if (edad > 25){
       if(localidad== "Madrid"){
            alert("Enhorabuena")
       }
       else{ alert("No has cumplido los requesitos")
    }     
}
    else{ alert("No has cumplido los requesitos")

}
}
