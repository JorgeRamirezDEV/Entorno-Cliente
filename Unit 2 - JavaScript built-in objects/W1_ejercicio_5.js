

function reloj(){
    var fecha = new Date();
    document.relojForm.reloj.value = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
    setTimeout(reloj,1000);
}
reloj();