var calculador = {
  punto: document.getElementById("punto"),
  igual: document.getElementById("igual"),
  mas: document.getElementById("mas"),
  menos: document.getElementById("menos"),
  por : document.getElementById("por"),
  division: document.getElementById("dividido"),

  cero: document.getElementById("0"),
  uno: document.getElementById("1"),
  dos: document.getElementById("2"),
  tres: document.getElementById("3"),
  cuatro: document.getElementById("4"),
  cinco: document.getElementById("5"),
  seis: document.getElementById("6"),
  siete: document.getElementById("7"),
  ocho: document.getElementById("8"),
  nueve: document.getElementById("9"),

  pantalla: document.getElementById("display"),

  valoralmacenado: 0,

  operacion:"",

  init: function () {
    this.cero.addEventListener("click", this.ceroEvent);
    this.uno.addEventListener("click", this.unoEvent);
    this.dos.addEventListener("click", this.dosEvent);
    this.tres.addEventListener("click", this.tresEvent);
    this.cuatro.addEventListener("click", this.cuatroEvent);
    this.cinco.addEventListener("click", this.cincoEvent);
    this.seis.addEventListener("click", this.seisEvent);
    this.siete.addEventListener("click", this.sieteEvent);
    this.ocho.addEventListener("click", this.ochoEvent);
    this.nueve.addEventListener("click", this.nueveEvent);

    this.punto.addEventListener("click", this.puntoevent);
    this.igual.addEventListener("click", this.igualEvent);

    calculador.pantalla.textContent = "0"
  },

  ceroEvent: function () {
  if (calculador.pantalla.textContent != "0")
    if (calculador.pantalla.textContent.length <= 7)
      calculador.pantalla.textContent += "0";
},

  unoEvent: function () {
  if (calculador.pantalla.textContent.length <= 7)
    if (calculador.pantalla.textContent == "0")
       calculador.pantalla.textContent = "1";
    else
    calculador.pantalla.textContent += "1";
},

  dosEvent: function () {
  if (calculador.pantalla.textContent.length <= 7)
    if (calculador.pantalla.textContent == "0")
      calculador.pantalla.textContent = "2";
    else
    calculador.pantalla.textContent += "2";

  },

  tresEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="3";
      }
      else {
        calculador.pantalla.textContent +="3";
      }
    }

  },

  cuatroEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="4";
      }
      else {
        calculador.pantalla.textContent +="4";
      }
    }

  },

  cincoEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="5";
      }
      else {
        calculador.pantalla.textContent +="5";
      }
    }

  },

  seisEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="6";
      }
      else {
        calculador.pantalla.textContent +="6";
      }
    }

  },

  sieteEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="7";
      }
      else {
        calculador.pantalla.textContent +="7";
      }
    }

  },

  ochoEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="8";
      }
      else {
        calculador.pantalla.textContent +="8";
      }
    }

  },

  nueveEvent: function () {
    if (calculador.pantalla.textContent.length<=7) {
      if (calculador.pantalla.textContent=="0") {
        calculador.pantalla.textContent="9";
      }
      else {
        calculador.pantalla.textContent +="9";
      }
    }

  },

  puntoevent: function () {
    if (calculador.pantalla.textContent.indexOf(".")  == -1)
      if (calculador.pantalla.textContent.length <= 7)
        if (calculador.pantalla.textContent == "0")
        calculador.pantalla.textContent = "0.";
    else
    calculador.pantalla.textContent += ".";

  },

}

calculador.init();





/*
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

digitos: function primero() {
  if (calculadora.pantalla.length <=8) {
    calculadora.pantalla=pantalla+calculadora.pantalla.value
  }

}




/*
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

*/




/*
calculadora.init();
*/
