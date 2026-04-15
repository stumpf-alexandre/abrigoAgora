const express = require('express');
const {criarBanco} = require('./database');

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});