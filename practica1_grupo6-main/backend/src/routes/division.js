const { Router } = require('express');
const router = Router();

router.get("/division", (req, res) => {
    // obtengo los valores para la division
    const numero1 = req.query.numero1;
    const numero2 = req.query.numero2;


    // calculo de division
    var resultado;
    /* hotfix Validacion division entre 0*/
    if(numero2==0){
        resultado="Error no se puede divir entre 0";
    } else{
        resultado = numero1 / numero2;
    }
    // respuesta get
    res.send({
        division: resultado
    });
});

module.exports = router; 