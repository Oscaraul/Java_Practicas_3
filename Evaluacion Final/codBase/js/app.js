var calculadora = {

pantalla: document.getElementById("display"),
punto: document.getElementById("punto"),
igual: document.getElementById("igual"),
cero: document.getElementById("0"),
signoMas: document.getElementById("mas"),

uno: document.getElementById("1"),



init: function () {
calculadora.pantalla.textContent = "0"

punto.addEventListener("click",function(){ alert("Presionando la tecla del punto") })

igual.addEventListener("click",function(){ alert("Presionando la tecla del igual") })

cero.addEventListener("click",function(){ alert("Presionando la tecla del cero") })

signoMas.addEventListener("click",function(){ alert("Presionando la tecla del mas") })

uno.addEventListener("click",function(){ alert("Presionando la tecla del uno") })

}

}

calculadora.init();
