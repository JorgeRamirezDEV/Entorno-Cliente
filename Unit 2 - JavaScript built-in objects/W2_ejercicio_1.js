
    document.write("Numero aleatorio entre 0 y 1 : "+getRandom()+"<br>");

    function getRandom() {
        return Math.random();
      }

    document.write("Numero aleatorio entre 100 y 200 : "+getRandomArbitrary(100,200)+"<br>")

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    
      var numMin = prompt("numero menor");
      var numMax = prompt("numero mayor");
      
      
    document.write("Numero aleatorio entre "+numMin+" y "+numMax+" : "+getRandomInt(numMin,numMax));