
function temaAbeja(e){
    document.getElementById("body").style.backgroundColor = "lightyellow";
    document.getElementById("marco").style.backgroundColor = "yellow";
    document.getElementById("invisible").style.color = "black";
}

function temaModerno(e){
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("invisible").style.color = "transparent";
    document.getElementById("marco").style.backgroundColor = "white";
}

temaAbeja();
temaModerno();