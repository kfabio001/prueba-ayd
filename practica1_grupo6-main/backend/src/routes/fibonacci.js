const { Router } = require('express');
const router = Router();

router.get("/primo/:numero", (req, res) => {
    // obtengo el valor para revisar si el numero es primo o no 
    const numero = req.params.numero;

    // funcion recursiva para obtener si es o no es primo
    function primo(numero) {
        var numeroPrimo = false
        for(i=2;i<numero;i++){
            if(numero%i==0){
                numeroPrimo = true
                break
            }
        }
        if(numeroPrimo){
            return "No es numero primo"
        }else{
            return "Si es numero primo"
        }
    }

    // calcular si es primo
    const resultado = primo(numero);

    // respuesta get
    res.send({
        primo: resultado
    });
});

router.get("/fibonacci", (req, res) => {
    // obtengo el valor para buscar el fibonacci
    const numero = req.query.numero;

    // funcion recursiva para obtener el fibonacci
    function fibonacci(numero) {
        if (numero < 2) {
            return numero;
        } else {
            return fibonacci(numero - 1) + fibonacci(numero - 2);
        }
    }

    // calculo de fibonacci
    const resultado = fibonacci(numero);

    // respuesta get
    res.send({
        fibonacci: resultado
    });
});

module.exports = router; 