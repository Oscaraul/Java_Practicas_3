var calculadora = (function (num1, num2) {
    function actualizarResultado(nuevoResultado) {
       console.log(nuevoResultado)
    }
    return {
        sumar: function () {
            var resultado = num1 + num2
            actualizarResultado(resultado)
        },
        restar: function () {
            var resultado = num1 - num2
            actualizarResultado(resultado)
        },
        multiplicar: function () {
            var resultado = num1 * num2
            actualizarResultado(resultado)
        },
        dividir: function () {
            var resultado = num1 / num2
            actualizarResultado(resultado)
        }
    }
})
