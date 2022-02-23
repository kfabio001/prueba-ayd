const { Router } = require('express');
const router = Router();

router.get("/multiplicacion", (req, res) => {
    // obtengo los valores para la multiplicacion
    const numero1 = req.query.numero1;
    const numero2 = req.query.numero2;

    // calculo de multiplicacion
    const resultado = numero1 * numero2;

    // respuesta get
    res.send({
        multiplicacion: resultado
    });
});

module.exports = router; 