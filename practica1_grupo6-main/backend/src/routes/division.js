const { Router } = require('express');
const router = Router();

router.get("/division", (req, res) => {
    // obtengo los valores para la division
    const numero1 = req.query.numero1;
    const numero2 = req.query.numero2;

    // calculo de division
    const resultado = numero1 / numero2;

    // respuesta get
    res.send({
        division: resultado
    });
});

module.exports = router; 