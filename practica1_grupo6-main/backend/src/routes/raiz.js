const { Router } = require('express');
const router = Router();

router.get("/raiz/:numero", (req, res) => {
    // obtengo los valores para la raiz
    const numero = req.params.numero;

    // calculo de raiz cubica
    const resultado = Math.cbrt(numero)

    // respuesta get
    res.send({
        raiz: resultado
    });
});

module.exports = router; 