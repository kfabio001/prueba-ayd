const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/palindromo'));
app.use('/', require('./routes/fibonacci'));
app.use('/', require('./routes/multiplicacion'));
app.use('/', require('./routes/division'));
app.use('/', require('./routes/raiz'));
app.use('/', require('./routes/potencia'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});