const { Router } = require('express');
const router = Router();

router.get('/palindromo',  (req, res ) => {
    // obtengo el valor para revisar si la palabra es palindromo o no
    const palabra = req.body.palabra;

    // funcion para obtener si es o no es palindromo
    function palindromo(str) {
        const strReversed = str.split("").reverse().join("");
        return strReversed === str ? "palíndromo valido" : "palíndromo invalido";
    }

    // calcular si es palindromo
    const resultado = palindromo(palabra);

    // respuesta get
    res.send({
        palindromo: resultado
    });
});

module.exports = router; 