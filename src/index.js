const express = require('express');
const proprietario = require('./controladores/proprietario');

const app = express();
app.use(express.json());

app.post('/proprietario', proprietario.criarProprietario);
app.get('/proprietario', proprietario.listarProprietario);
//na rota abaixo, depois dos dois pontos (:), é o que vai ser armazenado quando rodamos a requisição la no insomnia depois de proprietarios
app.get('/proprietario/:id', proprietario.listarProprietarioId);

app.listen(3000);