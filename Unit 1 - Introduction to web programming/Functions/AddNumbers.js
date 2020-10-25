function sumatotal(...param){

    var suma = 0;
    for(let i = 0; i <= arguments.length-1;i++){
        suma+=arguments[i];
    }
    document.write("<p>"+ suma +"</p>");
}

var params = [2,5,7];

sumatotal(...params);