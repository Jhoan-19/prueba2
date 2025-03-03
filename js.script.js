function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}

function textos(){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";
}

function verificar(){
    const numero=document.getElementById("numero").value;
    if (numero>10) {
        document.getElementById("resultado").innerHTML="es mayor";
    }
}

    var usuario={
        nombre:"daniel",
        edad:33,
        correo:"jhoan@gmail"
    }
    
function objeto(){
    document.getElementById("datos").innerHTML=`Nombre:${usuario.nombre} 
    Edad${usuario.edad}
    Correo${usuario.correo}`

}

function lista(){
    var notas=["miguel","daniel","santi","paula",usuario.nombre];
    for(var i=0; i<notas.length;i++){
        document.getElementById("lalista").innerHTML+=`<li> ${notas[i]}</li>`
    }
}