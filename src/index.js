const express = require('express');
const proprietario = require('./controladores/proprietario');

const app = express();
app.use(express.json());

app.post('/proprietario', proprietario.criarProprietario);
app.get('/proprietario', proprietario.listarProprietario);

app.listen(3000);