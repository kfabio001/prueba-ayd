const { Router } = require('express');
const router = Router();

router.get("/potencia/:numero", (req, res) => {
    // obtengo el valor para capturar el parametro
    const numero = req.params.numero;

    // funcion que realiza la potencia
    function potenciaAlCubo(numero) {
        var auxiliar= numero*numero*numero;
        return "El resultado de la potencia al cubo es: "+ auxiliar;
    }

    // realiza el calculo
    const resultado = potenciaAlCubo(numero);

    // respuesta get
    res.send({
        potencia: resultado
    });
});

module.exports = router; 