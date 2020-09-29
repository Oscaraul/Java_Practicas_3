var calculadora = {

pantalla: document.getElementById("display"),
punto: document.getElementById("punto"),
igual: document.getElementById("igual"),
signoMas: document.getElementById("mas"),

on: document.getElementById("on"),

cero: document.getElementById("0"),
uno: document.getElementById("1"),
dos:document.getElementById("2"),
tres:document.getElementById("3"),
cuatro:document.getElementById("4"),
cinco:document.getElementById("5"),
seis:document.getElementById("6"),
siete:document.getElementById("7"),
ocho:document.getElementById("8"),
nueve:document.getElementById("9"),

init: function () {
calculadora.pantalla.textContent = "0"

this.on.addEventListener("click",function(){calculadora.pantalla.innerHTML = "0" })

this.cero.addEventListener("click",function(){
  if (calculadora.pantalla.innerHTML == " ") {
    calculadora.pantalla.innerHTML = "0"
    }else {
      calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "0";
    }

})

this.uno.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "1"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "1";
  }
})

this.dos.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "2"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "2";
  }
})

this.tres.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "3"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "3";
  }
})

this.cuatro.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "4"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "4";
  }
})

this.cinco.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "5"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "5";
  }
})

this.seis.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "6"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "6";
  }
})

this.siete.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "7"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "7";
  }
})

this.ocho.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "8"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "8";
  }
})

this.nueve.addEventListener("click",function(){

if (calculadora.pantalla.innerHTML == "0") {
  calculadora.pantalla.innerHTML = "9"
  }else {
    calculadora.pantalla.innerHTML =  calculadora.pantalla.innerHTML + "9";
  }
})

//Signos
this.signoMas.addEventListener("click",function(){ alert("Presionando la tecla del mas") })

this.punto.addEventListener("click",function(){ alert("Presionando la tecla del punto") })

this.igual.addEventListener("click",function(){ alert("Presionando la tecla del igual") })

}

}

calculadora.init();
