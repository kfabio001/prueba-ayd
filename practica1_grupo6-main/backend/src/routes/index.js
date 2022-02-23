const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    const data =[{
        name: 'Analisis y Diseño 1',
        website: 'Osman Alejandro Pérez López - 201801229 - Practica 1 - Grupo 6 '
    },
    {
        name: 'Analisis y Diseño 1',
        website: 'Aldair Estrada García - 201503855 - Practica 1 - Grupo 6 '
    },
    {
        name: 'Analisis y Diseño 1',
        website: 'Edwin Alfredo Lopez Gomez - 201314007 - Practica 1 - Grupo 6 '
    },
    {
        name: 'Analisis y Diseño 1',
        website: 'Kevin Nicolas Garcia Martinez - 201403793 - Practica 1 - Grupo 6 '
    },
    {
        name: 'Analisis y Diseño 1',
        website: 'Fabio Andre Sanchez Chavez - 201709075 - Practica 1 - Grupo 6 '
    },
    {
        name: 'Analisis y Diseño 1',
        website: 'Juan Antonio Pineda Espino - 201404405 - Practica 1 - Grupo 6 '
    }] ;
    res.json(data);
});  

module.exports = router;