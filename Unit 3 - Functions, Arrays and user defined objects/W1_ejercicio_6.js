function potencia(base,exponente){
    if(exponente == 0){
        return 1; //Cualquier numero elevado a 0 siempre es 1
    }else{
        return base * potencia(base, exponente-1);
    }
}